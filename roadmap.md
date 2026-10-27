# Munchers Lab Roadmap

A dependency-free desktop web shell for configurable learning games inspired by classic number and word munching. Built as a local-first personal tool with zero build steps or external runtime dependencies.

---

## Completed

- [x] **Core Game Mechanics**
  - Grid navigation with arrow keys and WASD.
  - Cell munching via Spacebar or on-screen Munch button.
  - Instant pedagogical feedback per cell with reason notes.
  - Scoreboard tracking munched count, total goal targets, moves, and tries.
  - Round completion check and reflection prompts summary.
  - Pseudo-random cell shuffling on replay that prevents identical grid layouts across consecutive attempts.

- [x] **Modular Lesson Curriculum**
  - JSON lesson schema with configurable grid sizes ($3 \times 3$ up to $8 \times 8$).
  - Manifest loader (`content/lessons/index.json`) for multi-lesson modularity.
  - AI prompt template (`docs/system-prompt.md`) for structured lesson generation.
  - Bundled lesson library covering math, vocabulary, linguistics, game rules, and geography:
    - `number-patterns.json` (Multiples and primes)
    - `word-evidence.json` (Textual claim verification)
    - `lunfardo-porteno-castellano.json` (Argentine slang translations)
    - `mtg-mana-base-math.json` (Magic: The Gathering mana curves and land ratios)
    - `dnd-2024.json` (Dungeons & Dragons 2024 revised core rules)
    - `us-state-capitals.json` (Geography and state capitals)

- [x] **Content Editor & Management**
  - Integrated Content tab with live JSON textarea and schema statistics.
  - File import and export/download (`munchers-lessons.json`).
  - Client-side JSON schema validation with descriptive error reporting.

- [x] **Storage Resilience & Data Safety**
  - Local persistence via `localStorage` under `munchers-lab-library-v1`.
  - Non-destructive startup: corrupted or unparseable stored data is preserved in memory instead of wiped.
  - Dedicated **Download saved copy** action to recover unreadable stored lessons before replacing.
  - Quota and write protection: failed storage saves leave existing data intact and notify the player.
  - Confirmation guards before replacing unreadable data or restoring bundled defaults.
  - Clean URL object revocation and DOM disposal for all file downloads.
  - Automated Node.js unit and integration test suite (`tests/storage.test.cjs`).

---

## In Progress & Planned

### Phase 1: Audio & Tactile Feedback
- [ ] Synthesized sound effects via Web Audio API (munch chomp, success chime, buzzer for incorrect picks, victory fanfare).
- [ ] Audio toggle (mute/unmute) with persistent preference.
- [ ] Subtle screen shake or micro-animations on incorrect munches.

### Phase 2: Hazards & Pacing (Troggles)
- [ ] Optional wandering hazard monsters inspired by original Troggles.
- [ ] Configurable hazard behaviors (simple patroller, eater, helper).
- [ ] Optional round timer / blitz mode for timed practice.
- [ ] Life counter / attempt limits option per lesson.

### Phase 3: Authoring Experience
- [ ] Visual grid preview inside the Content tab editor before applying.
- [ ] In-editor lesson wizard for creating single lessons without raw JSON editing.
- [ ] Item balance checker (validates target percentage and distractor plausibility).

### Phase 4: Session Metrics & Accessibility
- [ ] Local session high scores and completion timestamps.
- [ ] Exportable round performance summary for study logs.
- [ ] Touch/swipe gesture support for mobile and tablet browsers.
- [ ] High-contrast and low-motion accessibility display modes.
