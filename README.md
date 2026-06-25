A React training project covering core React concepts through a practical student management application.

---

## Overview

Student Dashboard is a web app that lets users register students, search and filter them by GPA, and view each student's details on a dedicated page. Data is automatically persisted in `localStorage` so it survives page refreshes.

---

## Features

- **Student Registration** — Add students (name, email, major, GPA) with form validation
- **Search by Name** — Real-time filtering as you type
- **GPA Filter** — Show only students above a minimum GPA
- **Student Details Page** — Individual profile page via dynamic routing
- **Delete Records** — Remove a student with a confirmation prompt
- **Auto Save** — Data stored in `localStorage` and persists after closing the browser

---

## Project Structure

```
src/
├── components/
│   ├── Button/          # Reusable button component
│   ├── Counter/         # Simple counter (useState demo)
│   ├── Navbar/          # Navigation bar with React Router Links
│   ├── PreviewCard/     # Student data preview card
│   ├── ProfileCard/     # Full student profile card
│   ├── RandomUser/      # Fetches a random user from API (useEffect demo)
│   ├── StudentForm/     # Student registration form
│   ├── StudentList/     # Students table with actions
│   ├── Toast/           # Temporary notification component
│   └── ToDoList/        # To-do list with filters (All / Active / Completed)
├── context/
│   └── StudentContext.jsx   # Context API for global student state
├── pages/
│   ├── Home/            # Landing page
│   ├── About/           # About page
│   ├── StudentDashboard/    # Main student management page
│   └── StudentDetails/  # Individual student details page
└── main.jsx             # App entry point
```

---

## Tech Stack

| Technology               | Usage                         |
| ------------------------ | ----------------------------- |
| React 19                 | UI library                    |
| React Router v7          | Client-side routing           |
| Context API              | Global state management       |
| CSS Modules              | Scoped component styling      |
| localStorage             | Browser-side data persistence |
| Vite                     | Dev server and build tool     |
| Vitest + Testing Library | Unit testing                  |

---

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Open in your browser
http://localhost:5173
```

### Available Scripts

```bash
npm run build    # Build for production
npm run preview  # Preview the production build
npm run test     # Run tests
npm run lint     # Lint the codebase
```

---

## Tests

Unit tests are included for key components:

```
src/components/Counter/Counter.test.jsx
src/components/ToDoList/ToDo.test.jsx
src/pages/StudentDashboard/StudentDashboard.test.jsx
```

Run all tests with:

```bash
npm run test
```

---

## Concepts Covered

This project is designed to practice:

- `useState` — Local state management
- `useEffect` — Side effects and API data fetching
- `useContext` — Consuming shared context
- **Context API** — Sharing state across components
- **React Router** — Page navigation and dynamic routes
- **Controlled Components** — Form inputs and validation
- **CSS Modules** — Isolated per-component styling
- **Lifting State Up** — Moving state to parent components
- **Component Composition** — Breaking UI into small, reusable pieces
