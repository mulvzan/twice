# GEMINI.md - Project Overview

This file provides a comprehensive overview of the `twice` project, intended to be used as a context for AI-driven development.

## Project Overview

This is a modern web application built using the React framework with TypeScript. It leverages Vite for a fast development experience and build process. The project is structured with a clear separation of concerns, using popular libraries for routing, data fetching, and UI components.

### Core Technologies

*   **Framework**: [React](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **Data Fetching/State Management**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
*   **UI Toolkit**: [Ant Design](https://ant.design/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Linting**: [ESLint](https://eslint.org/)

### Architecture

The application's entry point is `src/main.tsx`. It sets up the following key providers:
1.  `QueryClientProvider`: For TanStack Query, managing server state and caching.
2.  `AuthProvider`: Wraps the application to provide authentication context.

The main routing is defined in `src/router.tsx`, which uses `React.lazy` for route-based code splitting to improve initial load times. The primary layout is managed by `src/App.tsx`, which includes a main content area and a persistent sidebar/header for navigation.

The codebase is organized into functional directories:
*   `src/components`: (Implicit) Reusable UI components (`Sidebar.tsx`, etc.).
*   `src/contexts`: For shared application state via React Context.
*   `src/hooks`: For custom React hooks, abstracting logic (e.g., `useApi.ts`).
*   `src/lib`: For core library initializations and API definitions (`api.ts`, `queryClient.ts`).
*   `src/pages`: (Implicit) Top-level route components (`Dashboard.tsx`, `Login.tsx`, `Todo.tsx`).
*   `src/utils`: For miscellaneous utility functions.

## Building and Running

The following scripts are defined in `package.json` and are essential for development and deployment.

### Development

To start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Building for Production

To type-check the code and create a production-ready build in the `dist/` directory:
```bash
npm run build
```

### Previewing the Production Build

To serve the production build locally for testing:
```bash
npm run preview
```

## Development Conventions

### Code Quality

*   **Linting**: Code is kept clean and consistent using ESLint. To run the linter across the entire project, use:
    ```bash
    npm run lint
    ```
*   **Type Checking**: As a TypeScript project, static type safety is enforced. To run the type-checker without compiling, use:
    ```bash
    npm run type-check
    ```

### Component Structure

Components are primarily written as functional components using React Hooks. Code splitting is implemented at the route level in `src/router.tsx` to ensure a smaller initial bundle size.

### State Management

*   **Server State**: TanStack Query is the preferred tool for managing asynchronous data from APIs, handling caching, refetching, and loading/error states.
*   **UI/Client State**: Local component state is managed with `useState` or `useReducer`. For global client state that needs to be shared across the application, React Context (e.g., `AuthContext`) is used.
