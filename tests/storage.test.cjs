const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function harness(options = {}) {
  const source = fs.readFileSync(process.env.MUNCHERS_SOURCE || path.join(__dirname, '..', 'src', 'app.js'), 'utf8');
  const nodes = new Map();
  const calls = { set: [], remove: [] };
  let stored = options.stored ?? null;
  const sandbox = {
    structuredClone,
    document: { querySelector(selector) {
      if (!nodes.has(selector)) nodes.set(selector, { textContent: '', value: '', hidden: true });
      return nodes.get(selector);
    } },
    localStorage: {
      getItem() { if (options.blockRead) throw new Error('storage blocked'); return stored; },
      setItem(key, value) { calls.set.push([key, value]); if (options.blockWrite) throw new Error('quota exceeded'); stored = value; },
      removeItem(key) { calls.remove.push(key); if (options.blockRemove) throw new Error('storage blocked'); stored = null; }
    },
    confirm: () => options.confirm !== false,
    console: { warn() {}, error() {} },
  };
  vm.createContext(sandbox);
  // Exercise the actual controller functions without bootstrapping the unrelated DOM game.
  vm.runInContext(source.replace(/^init\(\);$/m, '') + `
    resetRound = () => {};
    syncEditor = () => {};
    loadBundledLibrary = async () => structuredClone(DEFAULT_LIBRARY);
    globalThis.api = { loadLibrary, applyEditorJson, restoreLibrary, state, elements, DEFAULT_LIBRARY };
  `, sandbox);
  return { ...sandbox.api, calls, stored: () => stored };
}

test('blocked browser storage still loads usable bundled lessons', async () => {
  const h = harness({ blockRead: true });
  const library = await h.loadLibrary();
  assert.ok(library.lessons.length > 0);
  assert.match(h.elements.libraryStatus.textContent, /storage unavailable/i);
  assert.equal(h.calls.remove.length, 0);
});

test('malformed saved lessons are retained for download rather than deleted', async () => {
  const raw = '{broken saved owner work';
  const h = harness({ stored: raw });
  const library = await h.loadLibrary();
  assert.ok(library.lessons.length > 0);
  assert.equal(h.stored(), raw);
  assert.equal(h.state.savedLibraryRaw, raw);
  assert.equal(h.state.savedLibraryInvalid, true);
  assert.equal(h.elements.downloadSavedLibraryButton.hidden, false);
  assert.deepEqual(h.calls.remove, []);
  assert.deepEqual(h.calls.set, []);
});

test('loading valid saved lessons never rewrites them as a side effect', async () => {
  const fixture = harness().DEFAULT_LIBRARY;
  const saved = JSON.stringify(fixture);
  const h = harness({ stored: saved, blockWrite: true });
  const library = await h.loadLibrary();
  assert.ok(library.lessons.length > 0);
  assert.equal(h.stored(), saved);
  assert.deepEqual(h.calls.set, []);
  assert.deepEqual(h.calls.remove, []);
});

test('quota failure keeps both current in-memory library and unsaved editor text', () => {
  const h = harness({ blockWrite: true });
  const before = JSON.stringify(h.state.library);
  const edit = structuredClone(h.DEFAULT_LIBRARY);
  edit.lessons[0].title = 'Synthetic changed title';
  const raw = JSON.stringify(edit);
  h.elements.jsonEditor.value = raw;
  h.applyEditorJson();
  assert.equal(JSON.stringify(h.state.library), before);
  assert.equal(h.elements.jsonEditor.value, raw);
  assert.match(h.elements.editorStatus.textContent, /valid.*not saved/i);
});

test('successful Apply persists validated lessons before replacing the current library', () => {
  const h = harness();
  const edit = structuredClone(h.DEFAULT_LIBRARY);
  edit.lessons[0].title = 'Synthetic changed title';
  h.elements.jsonEditor.value = JSON.stringify(edit);
  h.applyEditorJson();
  assert.equal(h.state.library.lessons[0].title, 'Synthetic changed title');
  assert.equal(JSON.parse(h.stored()).lessons[0].title, 'Synthetic changed title');
});

test('restoring refuses to discard unreadable saved work without confirmation', async () => {
  const h = harness({ stored: '{broken', confirm: false });
  await h.loadLibrary();
  const before = JSON.stringify(h.state.library);
  await h.restoreLibrary();
  assert.equal(JSON.stringify(h.state.library), before);
  assert.equal(h.stored(), '{broken');
  assert.deepEqual(h.calls.remove, []);
});

test('blocked removal leaves current library and saved content intact', async () => {
  const h = harness({ stored: '{broken', blockRemove: true });
  await h.loadLibrary();
  const before = JSON.stringify(h.state.library);
  await h.restoreLibrary();
  assert.equal(JSON.stringify(h.state.library), before);
  assert.equal(h.stored(), '{broken');
  assert.match(h.elements.editorStatus.textContent, /not restored/i);
});
