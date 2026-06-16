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

The Content tab validates, applies, imports, downloads, and restores the combined lesson library. Applied edits are stored in the browser.
