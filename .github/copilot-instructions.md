# Copilot Instructions for Angular Counter App

This is a modern Angular counter application using the latest stack (Angular 18+) with standalone components.

## Project Overview

- **Type**: Angular Web Application
- **Stack**: Angular 18+, TypeScript 5.5, RxJS 7.8
- **Architecture**: Standalone Components (modern approach)
- **State Management**: Angular Signals (new reactive API)

## Key Architectural Decisions

1. **Standalone Components**: No NgModules required - simpler, more modular approach
2. **Angular Signals**: New reactive primitives for state management instead of BehaviorSubject
3. **Inline Styles**: Component-scoped styling for better encapsulation
4. **Bootstrap with `bootstrapApplication`**: Modern standalone app bootstrap

## Important Files

- `src/main.ts` - Application entry point
- `src/app/app.component.ts` - Root component
- `src/app/counter.component.ts` - Counter logic and UI
- `angular.json` - Angular CLI configuration
- `tsconfig.json` - TypeScript configuration

## Development Workflow

1. Run `npm install` to install dependencies
2. Run `npm start` to serve the app
3. Open `http://localhost:4200` in browser
4. Changes auto-reload via Angular CLI dev server

## Testing

- Unit tests with Jasmine/Karma
- Run with: `npm test`

## Building for Production

- Run: `npm run build`
- Output: `dist/` folder with optimized code
