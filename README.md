# TempoSW Sticky Note Application

## Architcture Overview

The TempoSW Sticky Note application is a single-page application built with React and TypeScript, using Vite as the build and development tool. The project follows a component-based structure where the UI is split into small, reusable React components such as sticky notes, lists, and input elements. TypeScript is used across the codebase to improve code reliability and maintainability through static typing.

Application state is managed using React’s Context API, which provides a centralized way to share note data and actions across components without excessive prop drilling. This keeps the state logic organized and easy to reason about. A mock API layer is used to simulate asynchronous data fetching and persistence, keeping data-related logic separate from the UI.

Overall, the architecture focuses on simplicity and separation of concerns, making the codebase easy to understand, maintain, and scale. The structure also allows the mock API to be replaced with a real backend in the future with minimal changes.

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Running the App

1. Clone the repository:
   ```bash
   git clone https://github.com/Ehsan86Re/tempoSW-sticky-note.git

2. Navigate to the project directory:
   ```bash
   cd tempoSW-sticky-note

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

5. Open your browser and visit:
   http://localhost:8000

