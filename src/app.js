"use strict";

const STORAGE_KEY = "munchers-lab-library-v1";

const DEFAULT_LIBRARY = {
  schemaVersion: 1,
  lessons: [
    {
      id: "number-patterns",
      title: "Number Patterns",
      mode: "numbers",
      prompt: "Multiples of 6",
      targetDescription: "multiples of 6",
      grid: { rows: 5, cols: 5 },
      items: [
        { label: "6", correct: true, feedback: "6 is 6 x 1." },
        { label: "9", correct: false, feedback: "9 is not a multiple of 6." },
        { label: "12", correct: true, feedback: "12 is 6 x 2." },
        { label: "14", correct: false, feedback: "14 is between 12 and 18." },
        { label: "18", correct: true, feedback: "18 is 6 x 3." },
        { label: "21", correct: false, feedback: "21 is a multiple of 3, not 6." },
        { label: "24", correct: true, feedback: "24 is 6 x 4." },
        { label: "28", correct: false, feedback: "28 is not divisible by 6." },
        { label: "30", correct: true, feedback: "30 is 6 x 5." },
        { label: "32", correct: false, feedback: "32 is not divisible by 6." },
        { label: "36", correct: true, feedback: "36 is 6 x 6." },
        { label: "39", correct: false, feedback: "39 is not even." },
        { label: "42", correct: true, feedback: "42 is 6 x 7." },
        { label: "45", correct: false, feedback: "45 is not even." },
        { label: "48", correct: true, feedback: "48 is 6 x 8." },
        { label: "51", correct: false, feedback: "51 is not even." },
        { label: "54", correct: true, feedback: "54 is 6 x 9." },
        { label: "57", correct: false, feedback: "57 is not even." },
        { label: "60", correct: true, feedback: "60 is 6 x 10." },
        { label: "62", correct: false, feedback: "62 is not divisible by 6." },
        { label: "66", correct: true, feedback: "66 is 6 x 11." },
        { label: "70", correct: false, feedback: "70 is not divisible by 6." },
        { label: "72", correct: true, feedback: "72 is 6 x 12." },
        { label: "75", correct: false, feedback: "75 is not even." },
        { label: "78", correct: true, feedback: "78 is 6 x 13." }
      ],
      reflectionPrompts: [
        "Multiples of 6 are even.",
        "Every second multiple of 3 is also a multiple of 6.",
        "A number divisible by 6 must be divisible by 2 and 3."
      ]
    },
    {
      id: "word-evidence",
      title: "Evidence Words",
      mode: "words",
      prompt: "Words that signal evidence",
      targetDescription: "evidence signal words",
      grid: { rows: 5, cols: 5 },
      items: [
        { label: "because", correct: true, feedback: "Because can introduce support for a claim." },
        { label: "maybe", correct: false, feedback: "Maybe signals uncertainty, not evidence." },
        { label: "data", correct: true, feedback: "Data can support reasoning." },
        { label: "however", correct: false, feedback: "However signals contrast." },
        { label: "shown", correct: true, feedback: "Shown can point to demonstrated support." },
        { label: "therefore", correct: false, feedback: "Therefore usually signals a conclusion." },
        { label: "example", correct: true, feedback: "An example can support a claim." },
        { label: "unless", correct: false, feedback: "Unless marks a condition." },
        { label: "source", correct: true, feedback: "A source can provide evidence." },
        { label: "although", correct: false, feedback: "Although signals contrast." },
        { label: "proof", correct: true, feedback: "Proof directly names support." },
        { label: "opinion", correct: false, feedback: "An opinion may need evidence." },
        { label: "cited", correct: true, feedback: "Cited points to referenced support." },
        { label: "later", correct: false, feedback: "Later signals time." },
        { label: "record", correct: true, feedback: "A record can document evidence." },
        { label: "beside", correct: false, feedback: "Beside signals place." },
        { label: "finding", correct: true, feedback: "A finding can support a claim." },
        { label: "nearly", correct: false, feedback: "Nearly signals degree." },
        { label: "observed", correct: true, feedback: "Observed points to direct evidence." },
        { label: "instead", correct: false, feedback: "Instead signals replacement or contrast." },
        { label: "survey", correct: true, feedback: "A survey can provide evidence." },
        { label: "before", correct: false, feedback: "Before signals time." },
        { label: "reported", correct: true, feedback: "Reported can introduce sourced information." },
        { label: "often", correct: false, feedback: "Often signals frequency." },
        { label: "according", correct: true, feedback: "According to can introduce a source." }
      ],
      reflectionPrompts: [
        "Evidence words point toward support, sources, examples, or observations.",
        "Transition words may show contrast, time, or conclusions instead.",
        "A useful category has a clear rule and useful near-misses."
      ]
    },
    {
      id: "lunfardo-porteno-castellano",
      title: "Lunfardo Porteno",
      mode: "lunfardo",
      prompt: "Correct Lunfardo -> Castellano meanings",
      targetDescription: "correct Lunfardo-to-Castellano translations",
      grid: { rows: 5, cols: 5 },
      items: [
        { label: "laburo = trabajo", correct: true, feedback: "Laburo means trabajo." },
        { label: "bondi = colectivo", correct: true, feedback: "Bondi is a colloquial word for colectivo." },
        { label: "guita = dinero", correct: true, feedback: "Guita means dinero." },
        { label: "pibe = nino", correct: true, feedback: "Pibe means nino or joven." },
        { label: "mina = mujer", correct: true, feedback: "Mina can mean mujer." },
        { label: "laburo = descanso", correct: false, feedback: "Laburo is trabajo, not descanso." },
        { label: "morfi = comida", correct: true, feedback: "Morfi means comida." },
        { label: "bondi = zapato", correct: false, feedback: "Bondi is colectivo, not zapato." },
        { label: "fiaca = pereza", correct: true, feedback: "Fiaca means pereza or pocas ganas." },
        { label: "guita = lluvia", correct: false, feedback: "Guita is dinero, not lluvia." },
        { label: "quilombo = desorden", correct: true, feedback: "Quilombo can mean desorden or lio." },
        { label: "pibe = abuelo", correct: false, feedback: "Pibe is nino or joven, not abuelo." },
        { label: "chamuyo = mentira", correct: true, feedback: "Chamuyo can mean speech meant to persuade or mislead." },
        { label: "mina = mesa", correct: false, feedback: "Mina can mean mujer, not mesa." },
        { label: "facha = apariencia", correct: true, feedback: "Facha means appearance or look." },
        { label: "morfi = transporte", correct: false, feedback: "Morfi is comida, not transporte." },
        { label: "yuta = policia", correct: true, feedback: "Yuta is a colloquial word for policia." },
        { label: "fiaca = energia", correct: false, feedback: "Fiaca is pereza, not energia." },
        { label: "mango = peso", correct: true, feedback: "Mango can refer to a peso or money." },
        { label: "quilombo = silencio", correct: false, feedback: "Quilombo means mess or desorden, not silencio." },
        { label: "luca = mil pesos", correct: true, feedback: "Luca commonly means one thousand pesos." },
        { label: "chamuyo = factura", correct: false, feedback: "Chamuyo is talk or misleading speech, not a bill." },
        { label: "junar = mirar", correct: true, feedback: "Junar can mean mirar, notice, or know." },
        { label: "facha = direccion", correct: false, feedback: "Facha is appearance, not address." },
        { label: "garpar = pagar", correct: true, feedback: "Garpar means pagar." }
      ],
      reflectionPrompts: [
        "Lunfardo often appears inside ordinary Rioplatense Spanish sentences.",
        "Many useful pairs are about work, money, transit, food, and everyday social life.",
        "Read both sides of each pair: the wrong answers use real words with wrong meanings."
      ]
    }
  ]
};

const elements = {
  libraryStatus: document.querySelector("#libraryStatus"),
  playTab: document.querySelector("#playTab"),
  contentTab: document.querySelector("#contentTab"),
  playPanel: document.querySelector("#playPanel"),
  contentPanel: document.querySelector("#contentPanel"),
  lessonSelect: document.querySelector("#lessonSelect"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonPrompt: document.querySelector("#lessonPrompt"),
  scoreValue: document.querySelector("#scoreValue"),
  goalValue: document.querySelector("#goalValue"),
  moveValue: document.querySelector("#moveValue"),
  tryValue: document.querySelector("#tryValue"),
  munchButton: document.querySelector("#munchButton"),
  resetRoundButton: document.querySelector("#resetRoundButton"),
  gridBoard: document.querySelector("#gridBoard"),
  feedbackText: document.querySelector("#feedbackText"),
  feedbackBar: document.querySelector(".feedback-bar"),
  reflectionList: document.querySelector("#reflectionList"),
  lessonCount: document.querySelector("#lessonCount"),
  modeCount: document.querySelector("#modeCount"),
  gridSummary: document.querySelector("#gridSummary"),
  importFile: document.querySelector("#importFile"),
  validateButton: document.querySelector("#validateButton"),
  applyJsonButton: document.querySelector("#applyJsonButton"),
  downloadJsonButton: document.querySelector("#downloadJsonButton"),
  downloadSavedLibraryButton: document.querySelector("#downloadSavedLibraryButton"),
  resetLibraryButton: document.querySelector("#resetLibraryButton"),
  jsonEditor: document.querySelector("#jsonEditor"),
  editorStatus: document.querySelector("#editorStatus")
};

const state = {
  library: structuredClone(DEFAULT_LIBRARY),
  savedLibraryRaw: null,
  savedLibraryInvalid: false,
  selectedLessonId: DEFAULT_LIBRARY.lessons[0].id,
  roundLessonId: DEFAULT_LIBRARY.lessons[0].id,
  roundItems: [],
  playerIndex: 0,
  consumed: new Set(),
  misses: new Set(),
  moves: 0,
  tries: 0
};

init();

async function init() {
  bindEvents();
  state.library = await loadLibrary();
  state.selectedLessonId = state.library.lessons[0].id;
  syncEditor();
  resetRound();
}

function bindEvents() {
  elements.playTab.addEventListener("click", () => setMode("play"));
  elements.contentTab.addEventListener("click", () => setMode("content"));
  elements.lessonSelect.addEventListener("change", () => {
    state.selectedLessonId = elements.lessonSelect.value;
    resetRound();
  });
  elements.munchButton.addEventListener("click", munchCurrentCell);
  elements.resetRoundButton.addEventListener("click", resetRound);
  elements.validateButton.addEventListener("click", validateEditor);
  elements.applyJsonButton.addEventListener("click", applyEditorJson);
  elements.downloadJsonButton.addEventListener("click", downloadJson);
  elements.downloadSavedLibraryButton.addEventListener("click", downloadSavedLibrary);
  elements.resetLibraryButton.addEventListener("click", restoreLibrary);
  elements.importFile.addEventListener("change", importJson);

  document.addEventListener("keydown", (event) => {
    if (elements.contentPanel.hidden === false) return;
    if (isFormField(event.target)) return;

    const lesson = getCurrentLesson();
    if (!lesson) return;
    const cols = lesson.grid.cols;
    const rows = lesson.grid.rows;

    const moves = {
      ArrowUp: -cols,
      ArrowDown: cols,
      ArrowLeft: -1,
      ArrowRight: 1
    };

    if (event.key in moves) {
      event.preventDefault();
      movePlayer(moves[event.key], rows, cols, event.key);
    }

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      munchCurrentCell();
    }
  });
}

async function loadLibrary() {
  const bundled = await loadBundledLibrary();
  let stored;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn(error);
    elements.libraryStatus.textContent = "Storage unavailable; bundled library";
    elements.editorStatus.textContent = "Browser storage is unavailable. Download edits to keep them.";
    return bundled;
  }

  state.savedLibraryRaw = stored;
  state.savedLibraryInvalid = false;
  elements.downloadSavedLibraryButton.hidden = stored === null;
  if (stored !== null) {
    try {
      const validated = validateLibrary(JSON.parse(stored));
      const merged = mergeMissingLessons(validated, bundled);
      elements.libraryStatus.textContent = "Browser library";
      return merged;
    } catch (error) {
      console.warn(error);
      state.savedLibraryInvalid = true;
      elements.libraryStatus.textContent = "Saved library needs recovery; bundled lessons loaded";
      elements.editorStatus.textContent = "Saved content was kept. Download saved copy before replacing it.";
    }
  }
  return bundled;
}

async function loadBundledLibrary() {
  try {
    const manifest = await fetchJson("content/lessons/index.json");
    const lessonFiles = validateLessonManifest(manifest);
    const lessons = await Promise.all(
      lessonFiles.map((fileName) => fetchJson(`content/lessons/${encodeURIComponent(fileName)}`))
    );
    const validated = validateLibrary({
      schemaVersion: Number(manifest.schemaVersion || 1),
      lessons
    });
    elements.libraryStatus.textContent = "Bundled library";
    return validated;
  } catch (error) {
    console.warn(error);
  }

  try {
    const parsed = await fetchJson("content/lessons.json");
    const validated = validateLibrary(parsed);
    elements.libraryStatus.textContent = "Legacy library";
    return validated;
  } catch (error) {
    console.warn(error);
    elements.libraryStatus.textContent = "Fallback library";
    return structuredClone(DEFAULT_LIBRARY);
  }
}

async function fetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
  return response.json();
}

function validateLessonManifest(manifest) {
  if (!manifest || typeof manifest !== "object") {
    throw new Error("Lesson manifest must be a JSON object.");
  }

  if (!Array.isArray(manifest.lessons) || manifest.lessons.length === 0) {
    throw new Error("Lesson manifest must list at least one lesson file.");
  }

  return manifest.lessons.map((fileName, index) => {
    if (typeof fileName !== "string" || fileName.trim() === "") {
      throw new Error(`Lesson manifest item ${index + 1} must be a file name.`);
    }

    const normalized = fileName.trim();
    if (!/^[A-Za-z0-9._-]+\.json$/.test(normalized)) {
      throw new Error(`Lesson manifest file "${normalized}" must be a simple .json file name.`);
    }

    return normalized;
  });
}

function mergeMissingLessons(savedLibrary, bundledLibrary) {
  const savedIds = new Set(savedLibrary.lessons.map((lesson) => lesson.id));
  const missingLessons = bundledLibrary.lessons.filter((lesson) => !savedIds.has(lesson.id));
  if (missingLessons.length === 0) return savedLibrary;

  return {
    ...savedLibrary,
    lessons: [...savedLibrary.lessons, ...structuredClone(missingLessons)]
  };
}

function validateLibrary(library) {
  if (!library || typeof library !== "object") {
    throw new Error("Library must be a JSON object.");
  }

  if (!Array.isArray(library.lessons) || library.lessons.length === 0) {
    throw new Error("Library must include at least one lesson.");
  }

  const ids = new Set();
  const normalized = {
    schemaVersion: Number(library.schemaVersion || 1),
    lessons: library.lessons.map((lesson, lessonIndex) => validateLesson(lesson, lessonIndex, ids))
  };

  return normalized;
}

function validateLesson(lesson, lessonIndex, ids) {
  if (!lesson || typeof lesson !== "object") {
    throw new Error(`Lesson ${lessonIndex + 1} must be an object.`);
  }

  const id = requireText(lesson.id, `Lesson ${lessonIndex + 1} id`);
  if (ids.has(id)) {
    throw new Error(`Lesson id "${id}" is duplicated.`);
  }
  ids.add(id);

  const title = requireText(lesson.title, `Lesson ${id} title`);
  const mode = requireText(lesson.mode || "custom", `Lesson ${id} mode`);
  const prompt = requireText(lesson.prompt, `Lesson ${id} prompt`);
  const targetDescription = String(lesson.targetDescription || prompt);
  const grid = validateGrid(lesson.grid, id);
  const expectedCount = grid.rows * grid.cols;

  if (!Array.isArray(lesson.items) || lesson.items.length !== expectedCount) {
    throw new Error(`Lesson ${id} needs exactly ${expectedCount} items.`);
  }

  const items = lesson.items.map((item, itemIndex) => validateItem(item, id, itemIndex));
  const correctCount = items.filter((item) => item.correct).length;
  if (correctCount === 0) {
    throw new Error(`Lesson ${id} needs at least one correct item.`);
  }

  const reflectionPrompts = Array.isArray(lesson.reflectionPrompts)
    ? lesson.reflectionPrompts.map(String).filter(Boolean)
    : [];

  return {
    id,
    title,
    mode,
    prompt,
    targetDescription,
    grid,
    items,
    reflectionPrompts
  };
}

function validateGrid(grid, lessonId) {
  const rows = Number(grid && grid.rows);
  const cols = Number(grid && grid.cols);
  if (!Number.isInteger(rows) || rows < 3 || rows > 8) {
    throw new Error(`Lesson ${lessonId} grid.rows must be an integer from 3 to 8.`);
  }
  if (!Number.isInteger(cols) || cols < 3 || cols > 8) {
    throw new Error(`Lesson ${lessonId} grid.cols must be an integer from 3 to 8.`);
  }
  return { rows, cols };
}

function validateItem(item, lessonId, itemIndex) {
  if (!item || typeof item !== "object") {
    throw new Error(`Lesson ${lessonId} item ${itemIndex + 1} must be an object.`);
  }
  return {
    label: requireText(item.label, `Lesson ${lessonId} item ${itemIndex + 1} label`),
    correct: Boolean(item.correct),
    feedback: String(item.feedback || "")
  };
}

function requireText(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${label} is required.`);
  }
  return value.trim();
}

function renderAll() {
  renderLessonSelect();
  renderLibraryStats();
  renderLesson();
}

function renderLessonSelect() {
  elements.lessonSelect.innerHTML = "";
  state.library.lessons.forEach((lesson) => {
    const option = document.createElement("option");
    option.value = lesson.id;
    option.textContent = lesson.title;
    elements.lessonSelect.append(option);
  });
  elements.lessonSelect.value = state.selectedLessonId;
}

function renderLibraryStats() {
  const lessons = state.library.lessons;
  const modes = new Set(lessons.map((lesson) => lesson.mode));
  const grids = new Set(lessons.map((lesson) => `${lesson.grid.rows} x ${lesson.grid.cols}`));

  elements.lessonCount.textContent = String(lessons.length);
  elements.modeCount.textContent = String(modes.size);
  elements.gridSummary.textContent = Array.from(grids).join(", ");
}

function renderLesson() {
  const lesson = getCurrentLesson();
  if (!lesson) return;
  const items = getRoundItems(lesson);

  const goal = items.filter((item) => item.correct).length;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonPrompt.textContent = lesson.prompt;
  elements.scoreValue.textContent = String(state.consumed.size);
  elements.goalValue.textContent = String(goal);
  elements.moveValue.textContent = String(state.moves);
  elements.tryValue.textContent = String(state.tries);
  elements.gridBoard.style.setProperty("--cols", lesson.grid.cols);
  elements.gridBoard.innerHTML = "";

  items.forEach((item, index) => {
    const cell = document.createElement("button");
    cell.className = "cell-button";
    cell.type = "button";
    cell.dataset.index = String(index);
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", cellLabel(lesson, item, index));

    if (state.playerIndex === index) {
      cell.classList.add("is-player");
      const avatar = document.createElement("span");
      avatar.className = "muncher";
      avatar.setAttribute("aria-hidden", "true");
      cell.append(avatar);
    }
    if (state.consumed.has(index)) cell.classList.add("is-consumed");
    if (state.misses.has(index)) cell.classList.add("is-miss");

    const label = document.createElement("span");
    label.className = "cell-label";
    label.textContent = item.label;
    cell.append(label);

    cell.addEventListener("click", () => {
      state.playerIndex = index;
      state.moves += 1;
      renderLesson();
      focusCurrentCell();
    });

    elements.gridBoard.append(cell);
  });

  renderReflection(lesson);
}

function renderReflection(lesson) {
  elements.reflectionList.innerHTML = "";
  const prompts = lesson.reflectionPrompts.length
    ? lesson.reflectionPrompts
    : [`Target: ${lesson.targetDescription}`];

  prompts.forEach((prompt) => {
    const item = document.createElement("li");
    item.textContent = prompt;
    elements.reflectionList.append(item);
  });
}

function cellLabel(lesson, item, index) {
  const row = Math.floor(index / lesson.grid.cols) + 1;
  const col = (index % lesson.grid.cols) + 1;
  const parts = [`Row ${row}`, `Column ${col}`, item.label];
  if (state.playerIndex === index) parts.push("Muncher");
  if (state.consumed.has(index)) parts.push("Found");
  if (state.misses.has(index)) parts.push("Check");
  return parts.join(", ");
}

function movePlayer(delta, rows, cols, key) {
  const next = state.playerIndex + delta;
  const currentCol = state.playerIndex % cols;

  if (key === "ArrowLeft" && currentCol === 0) return;
  if (key === "ArrowRight" && currentCol === cols - 1) return;
  if (next < 0 || next >= rows * cols) return;

  state.playerIndex = next;
  state.moves += 1;
  renderLesson();
  focusCurrentCell();
}

function munchCurrentCell() {
  const lesson = getCurrentLesson();
  if (!lesson) return;

  const item = getRoundItems(lesson)[state.playerIndex];
  state.tries += 1;
  state.misses.delete(state.playerIndex);

  if (item.correct) {
    if (state.consumed.has(state.playerIndex)) {
      setFeedback(`${item.label} is already munched.`, "neutral");
    } else {
      state.consumed.add(state.playerIndex);
      setFeedback(item.feedback || `${item.label} matches ${lesson.targetDescription}.`, "good");
    }
  } else {
    state.misses.add(state.playerIndex);
    setFeedback(item.feedback || `${item.label} does not match ${lesson.targetDescription}.`, "check");
  }

  renderLesson();
  focusCurrentCell();
  maybeFinishRound(lesson);
}

function maybeFinishRound(lesson) {
  const goal = getRoundItems(lesson).filter((item) => item.correct).length;
  if (state.consumed.size === goal) {
    setFeedback(`Complete: ${lesson.title}.`, "done");
  }
}

function setFeedback(message, tone) {
  elements.feedbackText.textContent = message;
  elements.feedbackBar.classList.remove("good", "check", "done");
  if (tone === "good") elements.feedbackBar.classList.add("good");
  if (tone === "check") elements.feedbackBar.classList.add("check");
  if (tone === "done") elements.feedbackBar.classList.add("done");
}

function resetRound() {
  const lesson = getCurrentLesson();
  state.roundLessonId = lesson ? lesson.id : null;
  state.roundItems = lesson ? shuffleItems(lesson.items, state.roundItems) : [];
  state.playerIndex = 0;
  state.consumed = new Set();
  state.misses = new Set();
  state.moves = 0;
  state.tries = 0;
  renderAll();
  setFeedback("Ready.", "neutral");
  focusCurrentCell();
}

function focusCurrentCell() {
  const current = elements.gridBoard.querySelector(`[data-index="${state.playerIndex}"]`);
  if (current) current.focus();
}

function getCurrentLesson() {
  return state.library.lessons.find((lesson) => lesson.id === state.selectedLessonId) || state.library.lessons[0];
}

function getRoundItems(lesson) {
  if (state.roundLessonId !== lesson.id || state.roundItems.length !== lesson.items.length) {
    state.roundLessonId = lesson.id;
    state.roundItems = shuffleItems(lesson.items, state.roundItems);
  }
  return state.roundItems;
}

function shuffleItems(items, previousItems = []) {
  const shuffled = items.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return avoidRepeatedOrder(shuffled, [items, previousItems]);
}

function avoidRepeatedOrder(shuffled, avoidedOrders) {
  if (shuffled.length < 2) return shuffled;

  for (let index = 0; index < shuffled.length; index += 1) {
    const repeatsAvoidedOrder = avoidedOrders.some((items) => sameOrder(shuffled, items));
    if (!repeatsAvoidedOrder) return shuffled;

    const swapIndex = (index + 1) % shuffled.length;
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function sameOrder(left, right) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

function setMode(mode) {
  const playMode = mode === "play";
  elements.playPanel.hidden = !playMode;
  elements.contentPanel.hidden = playMode;
  elements.playTab.classList.toggle("is-active", playMode);
  elements.contentTab.classList.toggle("is-active", !playMode);
  elements.playTab.setAttribute("aria-selected", String(playMode));
  elements.contentTab.setAttribute("aria-selected", String(!playMode));

  if (playMode) {
    focusCurrentCell();
  } else {
    elements.jsonEditor.focus();
  }
}

function syncEditor() {
  elements.jsonEditor.value = JSON.stringify(state.library, null, 2);
  elements.jsonEditor.setSelectionRange(0, 0);
  elements.jsonEditor.scrollTop = 0;
}

function validateEditor() {
  try {
    const parsed = JSON.parse(elements.jsonEditor.value);
    const validated = validateLibrary(parsed);
    const itemCount = validated.lessons.reduce((total, lesson) => total + lesson.items.length, 0);
    elements.editorStatus.textContent = `Valid: ${validated.lessons.length} lessons, ${itemCount} cells.`;
  } catch (error) {
    elements.editorStatus.textContent = `Invalid: ${error.message}`;
  }
}

function applyEditorJson() {
  let validated;
  try {
    validated = validateLibrary(JSON.parse(elements.jsonEditor.value));
  } catch (error) {
    elements.editorStatus.textContent = `Invalid: ${error.message}`;
    return;
  }
  if (state.savedLibraryInvalid && !confirm("Replace the unreadable saved library? Download saved copy first if you need to recover it.")) {
    elements.editorStatus.textContent = "Not applied. Saved content was preserved.";
    return;
  }
  const raw = JSON.stringify(validated);
  try {
    localStorage.setItem(STORAGE_KEY, raw);
  } catch (error) {
    elements.editorStatus.textContent = "Valid, but not saved. Existing library is unchanged. Download edits to keep them.";
    return;
  }
  state.library = validated;
  state.selectedLessonId = validated.lessons[0].id;
  state.savedLibraryRaw = raw;
  state.savedLibraryInvalid = false;
  elements.downloadSavedLibraryButton.hidden = false;
  elements.libraryStatus.textContent = "Browser library";
  elements.editorStatus.textContent = "Applied and saved.";
  resetRound();
  syncEditor();
}

function downloadText(raw, filename) {
  const blob = new Blob([raw], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  try {
    link.click();
  } finally {
    link.remove();
    URL.revokeObjectURL(url);
  }
}

function downloadJson() {
  downloadText(elements.jsonEditor.value, "munchers-lessons.json");
  elements.editorStatus.textContent = "Download started.";
}

function downloadSavedLibrary() {
  if (state.savedLibraryRaw === null) return;
  downloadText(state.savedLibraryRaw, "munchers-saved-library-recovery.json");
  elements.editorStatus.textContent = "Saved copy download started. It contains the original stored text.";
}

async function restoreLibrary() {
  if (!confirm("Restore bundled lessons and remove the browser library? Download your current or saved copy first if you want to keep it.")) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    elements.editorStatus.textContent = "Not restored: browser storage could not be cleared. Existing library was kept.";
    return;
  }
  state.library = await loadBundledLibrary();
  state.selectedLessonId = state.library.lessons[0].id;
  state.savedLibraryRaw = null;
  state.savedLibraryInvalid = false;
  elements.downloadSavedLibraryButton.hidden = true;
  syncEditor();
  resetRound();
  elements.editorStatus.textContent = "Restored bundled lessons.";
}

function importJson(event) {
  const [file] = event.target.files;
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    elements.jsonEditor.value = String(reader.result || "");
    validateEditor();
  });
  reader.addEventListener("error", () => {
    elements.editorStatus.textContent = "Import failed.";
  });
  reader.readAsText(file);
  event.target.value = "";
}

function isFormField(target) {
  if (target.classList && target.classList.contains("cell-button")) return false;
  return ["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(target.tagName);
}
