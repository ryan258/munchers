# Storage & Data Recovery

Munchers Lab is designed as a dependency-free, zero-backend personal tool. Player customizations, imported lesson libraries, and manual JSON edits persist across sessions using browser `localStorage` under the key `munchers-lab-library-v1`.

Because browser storage can fail or encounter unexpected corruption, the application follows strict data preservation principles.

## Core Storage Guarantees

1. **No Silent Data Loss on Corruption**
   - If `localStorage` contains unreadable, invalid, or truncated JSON, the application never deletes or clears it on startup.
   - The raw stored content is captured in `state.savedLibraryRaw` and flagged as `state.savedLibraryInvalid`.
   - The user is notified in the UI (`Saved library needs recovery; bundled lessons loaded`), and bundled lessons are loaded safely as a fallback.
   - A dedicated **Download saved copy** button (`#downloadSavedLibraryButton`) appears in the Content toolbar, allowing the user to export their exact stored raw string as `munchers-saved-library-recovery.json`.

2. **No Side-Effect Rewrites**
   - Loading valid saved lessons from `localStorage` does not re-save them back to `localStorage` during initial load.
   - Missing bundled lessons are merged into memory cleanly without triggering unwanted disk writes.

3. **Quota & Write Failure Resilience**
   - When applying JSON edits via **Apply**:
     - The editor content is parsed and validated against the schema before attempting persistence.
     - If the previously stored library was corrupted, the user must explicitly confirm before replacing it with new content.
     - `localStorage.setItem` runs in a guarded `try...catch` block. If storage write fails (e.g. `QuotaExceededError` or blocked storage permissions), the existing in-memory library and unsaved editor content are left completely intact.
     - An informative error message prompts the user to download their edits as a file instead.

4. **Guarded Restoration & Deletion**
   - The **Restore** action prompts for confirmation before discarding browser-saved lessons.
   - If `localStorage.removeItem` fails (e.g. blocked permissions in restricted contexts), the application alerts the user and preserves the current in-memory library.

5. **Safe Download Cleanup**
   - File downloads use object URLs created from in-memory blobs.
   - Revocation and temporary DOM link elements are cleanly disposed of in a `finally` block to prevent DOM pollution and memory leaks.

## Automated Verification

The storage controller logic is verified using Node's built-in test runner against the live `src/app.js` file:

```sh
node --test tests/storage.test.cjs
```

The test harness evaluates seven critical failure modes without requiring a browser or headless browser:
- Storage blocked on read (sandbox/privacy restrictions).
- Malformed stored data preservation and recovery download activation.
- Side-effect-free loading of valid libraries.
- Quota exceeded handling during Apply.
- Persistent state updates upon successful Apply.
- Refusal to clear corrupted storage without explicit user confirmation.
- Blocked storage removal error handling.
