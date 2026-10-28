# Task 28 — Flashcard App (Static Deck)

**Track:** Web Development, Level 1  
**Technologies:** HTML5, CSS3, JavaScript  
**Project:** Flashwise — Flashcard App

## Objective
Build a static flashcard deck with a fixed set of questions and answers. Cards flip on click, and users navigate with Previous and Next controls.

## Features
- 10 web-development flashcards stored as an array of JavaScript objects.
- CSS 3D flip animation triggered by clicking the card or Reveal answer button.
- Previous and Next navigation with disabled-state handling.
- Progress percentage, current card number, and remaining-card count.
- Reset button to return to the first card.
- Keyboard support: arrow keys navigate; Space flips the card when focus is outside a button or input.
- Responsive desktop, tablet, and mobile layout.
- Accessible button labels, pressed state, and progress-bar attributes.
- Reduced-motion preference support.

## Project structure
```text
Task_28_Flashcard_App/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally
1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Click the flashcard or **Reveal answer** to flip it.
4. Use **Previous** and **Next** to navigate.
5. Use **Reset** to start again.

No packages, build tools, or API keys are required.

## How it works
The questions and answers are stored in the `flashcards` array in `script.js`. The `currentIndex` variable tracks the active card. `renderCard()` updates the question, answer, card number, navigation buttons, and progress indicator. The CSS class `is-flipped` rotates the card's inner element by 180 degrees using `transform` and `backface-visibility`.

## Testing checklist
- [ ] All 10 flashcards display correctly.
- [ ] Clicking the card flips between question and answer.
- [ ] Reveal answer button flips the card and changes its label.
- [ ] Previous and Next navigate through the deck.
- [ ] Progress and remaining-card count update correctly.
- [ ] Reset returns to card 1.
- [ ] Layout remains usable on mobile screens.
- [ ] Keyboard navigation works.

## Deployment
This static website can be hosted with GitHub Pages:
1. Push the project files to a public GitHub repository.
2. Open **Settings → Pages**.
3. Choose the deployment branch and root folder.
4. Save and wait for GitHub Pages to publish the site.
5. Add the repository and live-page URLs to your submission.

## Outcome
The project demonstrates JavaScript state tracking, DOM updates, CSS 3D transforms, simple navigation, and responsive design.
