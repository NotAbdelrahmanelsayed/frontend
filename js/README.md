# JavaScript study directory

This folder is organized for following the Elzero JavaScript playlist (PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv). Lessons are grouped in numbered directories so you can grow the notes as you progress without the files becoming messy.

## Layout

- `lessons/` — lesson-by-lesson experiments and notes.
  - Use `NN-topic-name` (two-digit number + short slug) to keep them in playlist order.
  - Inside each lesson folder keep:
    - `index.html` — the minimal page that loads the lesson script(s).
    - `lesson.js` (or a few focused files like `console.js`) — the code you write while watching the video.
    - `notes.md` (optional) — quick reminders or links that help you later.
- `assignments/` — homework grouped by the range that the instructor uses (e.g., `01-09`). Keep file names short but descriptive, such as `ass-02-dom-classlist.js`.

## Naming tips

- Prefer folders over long file names. The folder number + slug is the “lesson name”; inside the folder, stick to `index.html` and short script names.
- Keep script tags relative to the folder so moving a lesson does not break other pages.
- If a lesson needs multiple scripts, prefix them with a number to show order (e.g., `01-console.js`, `02-template-literals.js`).

## Adding a new lesson

1. Create a folder like `lessons/04-strings-and-templates/`.
2. Add `index.html` that links to your script(s) in the same folder.
3. Write your code in `lesson.js` (or split files as needed) and keep comments that remind you what the video covered.
4. Drop any screenshots or extra notes next to the lesson so everything stays together.

Following this pattern keeps the directory tidy while matching the playlist sequence, so you can quickly find examples later.
