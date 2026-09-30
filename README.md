# Counter App

A small Angular application that displays a numeric counter and lets the user:

- increment the value
- decrement the value
- reset the counter back to zero
- prevent the value from going below zero

The app is built with Angular 22 and uses a standalone component with Angular signals for state management.

## Features

- Clean, centered counter UI
- Large numeric display
- Buttons for decrement, reset, and increment
- Prevents negative values
- Responsive card layout

## Tech Stack

- Angular 22
- TypeScript
- Angular Signals
- CSS

## Prerequisites

Before running the app, install the project dependencies:

```bash
npm install
```

## Running the app

From the project root, start the development server:

```bash
npm start
```

If your PowerShell execution policy blocks `npm start`, run the local Angular CLI directly instead:

```bash
node .\node_modules\@angular\cli\bin\ng.js serve
```

Then open:

```text
http://localhost:4200/
```

## Building for production

```bash
node .\node_modules\@angular\cli\bin\ng.js build
```

This creates the production bundle in the `dist/` folder.

## Running tests

```bash
node .\node_modules\@angular\cli\bin\ng.js test --watch=false
```

## Project structure

```text
counter-app/
├── src/
│   ├── app/
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.spec.ts
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── node_modules/
```

## Notes

This app was created as a simple Angular counter demo and is a good starting point for learning Angular component state, signals, and event handling.
