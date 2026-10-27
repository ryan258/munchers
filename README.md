# Munchers Lab

A dependency-free desktop web shell for configurable learning games inspired by classic number and word munching.

## Run

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Content

Bundled lessons live in `content/lessons/`.

Add one JSON file per lesson, then list that file in `content/lessons/index.json`.

Use `docs/system-prompt.md` when asking an AI assistant to generate a lesson file for a new topic.

Example:

```json
{
  "schemaVersion": 1,
  "lessons": [
    "number-patterns.json",
    "word-evidence.json",
    "lunfardo-porteno-castellano.json"
  ]
}
```

Each lesson file defines:

- `id`, `title`, `mode`, and `prompt`
- `grid.rows` and `grid.cols`, from 3 to 8
- one `items` entry per grid cell
- `items[].label`, `items[].correct`, and optional `items[].feedback`
- optional `reflectionPrompts`

The Content tab validates, applies, imports, downloads, recovers, and restores the combined lesson library:

- **Browser persistence**: Applied edits are safely stored in browser `localStorage`.
- **Fault tolerance**: If browser storage is disabled, quota-blocked, or corrupt, Munchers Lab preserves your current state and alerts you rather than dropping data.
- **Data recovery**: If saved storage ever contains malformed JSON, the raw text is preserved and a "Download saved copy" button appears so you can recover your work before replacing it.
- **Safety checks**: Restoring bundled lessons or replacing unreadable saved work requires confirmation to prevent accidental loss.

See [`docs/storage.md`](docs/storage.md) for details on the storage contract and failure-handling model.

## Testing

Deterministic unit and integration tests run with the built-in Node.js test runner:

```sh
node --test tests/storage.test.cjs
```

## Documentation & Roadmap

- [`docs/system-prompt.md`](docs/system-prompt.md): Prompt template for generating compliant lesson JSON with an LLM.
- [`docs/storage.md`](docs/storage.md): Browser storage persistence, error recovery, and quota handling.
- [`roadmap.md`](roadmap.md): Current capabilities and planned enhancements.
