# UnibankFront

A static front-end clone of the Unibank bank website homepage, built with plain HTML, CSS, and JavaScript. It includes an image/promo carousel with auto-slide, navigation arrows, dot indicators, and touch/swipe support, served locally via a small Node.js development server.

## Features

- Recreated Unibank homepage layout (HTML + CSS)
- Auto-sliding promo carousel with previous/next arrows and dot navigation
- Touch/swipe support for the carousel on mobile
- Simple Node.js static file server with automatic browser launch
- No framework or build step required

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js (local development server via `http` and `fs` modules)

## Requirements

- Node.js installed (https://nodejs.org) — required only to run the local server
- A modern web browser

## Installation and Run

git clone https://github.com/RenaMehdiyeva88/UnibankFront.git
cd UnibankFront

### Option 1: Using Node.js
node server.js

The website will automatically open in your browser at http://localhost:8080

### Option 2: Using VS Code
1. Press Ctrl+Shift+D (or Cmd+Shift+D on Mac) to open the Debug panel
2. Click "Start Debugging" to run the server and open the website

### Option 3: Open directly
You can also just open `unibank-home.html` directly in your browser (the carousel and other JS features will still work; only server-dependent behavior, if any, would be affected).

## Project Structure

UnibankFront/
├── unibank-home.html      # Main HTML file
├── unibank-main.css       # Stylesheet
├── unibank-app.js         # Carousel and other page interactions
├── server.js              # Local development server (serves files, opens browser)
├── .vscode/                # Editor launch/task configuration
└── README.md

## Author

RenaMehdiyeva88 (https://github.com/RenaMehdiyeva88)
