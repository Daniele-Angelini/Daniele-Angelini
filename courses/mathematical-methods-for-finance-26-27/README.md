# Mathematical Methods for Finance — compact course page

This revision reduces vertical scrolling and makes the page easier to use on smartphones.

## Files

- `index.html`
- `course-2026-27-additions.css`
- `course-calendar.js`
- `course-page.js`

## Main structural changes

1. The long sidebar and the long sequence of visible sections have been removed.
2. The page opens with four compact dashboard cards and a horizontally scrollable shortcut bar.
3. All detailed content is grouped into five major native HTML `<details>` accordions:
   - How the course works
   - Programme and learning outcomes
   - Calendar and lecture diary
   - Teaching materials
   - Assessment, feedback and support
4. Each major accordion contains smaller nested accordions.
5. On screens below 760 px, opening a major panel automatically closes the other major panels.
6. The interactive calendar is loaded only when its accordion is opened.
7. On phones the calendar opens in list view rather than month view.
8. The next lesson, upcoming lessons and the complete lesson plan are generated from one shared lesson dataset.

## Installation

Copy all four web files into the existing course folder. Keep the existing relative paths to `../../style.css`, `../../script.js` and the rest of the website.

FullCalendar is loaded from the pinned CDN URL already included in `index.html`.
