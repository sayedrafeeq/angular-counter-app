# Angular Counter App

A modern Angular 18+ counter application built with standalone components and the latest Angular stack.

## Features

- ✨ Increment counter
- ✨ Decrement counter
- ✨ Reset counter to zero
- ✨ Modern Angular 18+ with standalone components
- ✨ Reactive signals for state management
- ✨ Beautiful gradient UI with smooth animations

## Technology Stack

- **Angular**: 18.0.0
- **TypeScript**: 5.5.0
- **Node.js**: 18+ recommended

## Prerequisites

- Node.js 18.x or higher
- npm 10.x or higher

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   └── counter.component.ts       # Counter component with logic
├── main.ts                        # Application bootstrap
├── index.html                     # HTML entry point
└── styles.scss                    # Global styles
```

## Key Features

### Reactive State with Signals
The counter uses Angular's new `signal()` API for reactive state management:
- `count = signal(0)` - Initialize counter at 0
- `count()` - Get current value
- `count.update()` - Update value reactively
- `count.set()` - Set value directly

### Standalone Components
- No need for `NgModule`
- Simpler mental model
- Direct component composition
- Better tree-shaking

## License

MIT
