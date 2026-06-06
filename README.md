# 📚 React Fundamentals - My Learning Journey

Welcome to my React learning lab! This repository is my personal playground where I practice, experiment, and master React concepts step by step. It's not a single polished project—it's a collection of mini projects and exercises that demonstrate my understanding of React fundamentals.

---

## 🎯 About This Repo

This is my **React Learning Log & Progress Tracker**. As I work through React tutorials, courses, and documentation, I create small components and mini projects to solidify my understanding. Each project focuses on a specific React concept, from basic component rendering to state management and event handling.

---

## 🚀 What I Learned

Here's everything I've practiced and implemented while working through this repo:

### Core React Concepts

- **JSX** - JavaScript XML syntax for writing HTML-like code in JavaScript
- **Functional Components** - Building reusable components using JavaScript functions
- **Component Composition** - Breaking UIs into smaller, manageable components
- **Props** - Passing data from parent to child components
- **Props with Default Values** - Using default props when values aren't provided
- **State Management with Hooks** - Using `useState` to manage component state
- **State Immutability & Updates** - Properly updating state without mutations
- **Event Handling** - Responding to user interactions (onClick, onChange, etc.)
- **Conditional Rendering** - Displaying different content based on conditions (ternary operators, logical AND)
- **Rendering Lists & Keys** - Iterating through data and rendering multiple elements with proper key usage
- **Form Handling** - Capturing and updating user input from forms
- **Component Lifecycle** - Understanding when components render and re-render
- **React Strict Mode** - Development-only checks using `StrictMode` to surface potential issues

---

## 🎨 Mini Projects & Exercises

| Project                          | Description                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Task List App**                | A to-do list focused on rendering tasks from state, toggling task completion, and deleting tasks (double-click) — demonstrates state management and list rendering with keys |
| **Counter Component**            | A simple counter with increment, decrement, and reset functionality—demonstrates basic state management and event handlers                                                   |
| **Action Panel**                 | Control panel with action buttons and a controlled text input that submits to `App.jsx` — demonstrates prop drilling, controlled inputs, and form submit handling            |
| **Toggle Text Component**        | Toggle between displaying "Hello" and "Goodbye" text with a button—demonstrates conditional rendering with useState                                                          |
| **User Card Component**          | Display user information (name, role) with a badge button—demonstrates props and default props usage                                                                         |
| **Login Status Component**       | Show different content based on login state; demonstrates conditional rendering with ternary operators                                                                       |
| **User Form Component**          | Toggle and update a `user` object (name & email) via a button — demonstrates object state updates and immutability                                                           |
| **Player Score Game**            | Two-player scoring system with winner announcement when score > 5—demonstrates state updates and conditional rendering                                                       |
| **Greeting Component**           | My first React component documenting the start of my learning journey—demonstrates basic JSX and component structure                                                         |
| **Profile Component**            | Display user profile with dynamic date; shows data binding and component props                                                                                               |
| **Notification Badge Component** | Show a notification count conditionally; returns null when count is 0—demonstrates conditional rendering and null returns                                                    |

---

## 📁 Folder Structure

```
react-fundamental/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images & static assets (vite.svg, react.svg, hero.png)
│   ├── components/           # All my React components
│   │   ├── Counter.jsx       # Counter with increment/decrement/reset
│   │   ├── ToggleText.jsx    # Toggle text visibility
│   │   ├── UserCard.jsx      # Display user info with props & defaults
│   │   ├── LoginStatus.jsx   # Conditional login/logout UI
│   │   ├── UserForm.jsx      # Form state management
│   │   ├── PLayerScore.jsx   # Two-player score tracker
│   │   ├── Greeting.jsx      # First component - journey start
│   │   ├── Profile.jsx       # User profile display
│   │   ├── TaskItem.jsx      # Individual task item with checkbox
│   │   ├── ActionPanel.jsx    # Control panel with action buttons and a controlled form
│   │   └── NotificationBadge.jsx  # Conditional notification display
│   ├── App.jsx              # Task list application with filtering
│   ├── main.jsx             # React app entry point
│   └── index.css            # Global styles & theme
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint rules
```

### What Each Section Covers:

- **`components/`** - My collection of React components, each practicing a specific concept
- **`src/App.jsx`** - Task list application demonstrating state management, list rendering, and event handling
- **`index.css`** - Styling with CSS variables, responsive design, and dark mode support

---

## ✅ Topics Completed

Here's a checklist of React concepts I've mastered:

- [x] JSX Syntax & Rendering
- [x] Functional Components
- [x] Component Composition
- [x] Props & Prop Passing
- [x] Default Props (see `src/components/UserCard.jsx`)
- [x] useState Hook
- [x] State Updates & Immutability
- [x] Event Handling (onClick, onChange)
- [x] Conditional Rendering (ternary & logical AND)
- [x] Dynamic Content Rendering (see `src/components/Profile.jsx`)
- [x] Form Input Handling (see `src/components/ActionPanel.jsx`)
- [x] Object State Management (see `src/components/UserForm.jsx`)
- [x] Component Reusability
- [x] List Rendering & Keys (see `src/components/ActionPanel.jsx` / `src/components/TaskItem.jsx`)
- [ ] Filtering & Search (not implemented in active App)

### Still Exploring 🔜

- [ ] useEffect Hook & Side Effects
- [ ] useContext & Context API
- [ ] useReducer Hook
- [ ] Custom Hooks
- [ ] React Router
- [ ] API Integration & Fetch
- [ ] Error Boundaries
- [ ] Performance Optimization
- [ ] Testing Components
- [ ] Advanced State Management (Redux)

---

## 🏃 How to Run Any Project

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aryan-basatia/react-fundamental.git
   cd react-fundamental
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173` (or the next available port)

4. **To view a specific exercise**
   - Open `src/App.jsx` (or specific component files)
   - The current main app shows the Task List application
   - The browser will hot-reload automatically when you make changes

### Build for Production

```bash
npm run build
```

### Run Linter

```bash
npm run lint
```

---

## 🛠 Tools & Tech Used

### Core Technologies

| Tool          | Purpose                                           |
| ------------- | ------------------------------------------------- |
| **React**     | ^19.2.6 - The JavaScript library for building UIs |
| **React DOM** | ^19.2.6 - React rendering library for the web     |

### Build Tools & Dev Dependencies

| Tool                            | Purpose                                          |
| ------------------------------- | ------------------------------------------------ |
| **Vite**                        | ^8.0.12 - Lightning-fast build tool & dev server |
| **@vitejs/plugin-react**        | ^6.0.1 - Vite plugin for React with fast refresh |
| **ESLint**                      | ^10.3.0 - Code quality & style checking          |
| **eslint-plugin-react-hooks**   | ^7.1.1 - Rules for React Hooks                   |
| **eslint-plugin-react-refresh** | ^0.5.2 - Fast refresh compatibility              |

### Styling

- **CSS** (42.4% of repo) - Custom CSS with CSS variables, responsive design, and dark mode
- **No external CSS libraries** - Pure vanilla CSS for maximum learning

### Language Composition

- **JavaScript** - 54.1%
- **CSS** - 42.4%
- **HTML** - 3.5%

- **JavaScript** - 56.6%
- **CSS** - 41.1%
- **HTML** - 2.3%

---

## 📈 Progress & Goals

This is an **actively maintained learning repository**. I update it regularly as I:

- ✨ Learn new React concepts
- 🔧 Build more complex components
- 🎯 Practice best practices and patterns
- 📊 Refactor and improve existing code
- 🚀 Challenge myself with advanced features

### My Learning Path

1. ✅ Master fundamentals (components, props, state, hooks)
2. ⏳ Dive into hooks ecosystem (useEffect, useContext, useReducer)
3. ⏳ Build a real-world project with routing
4. ⏳ Explore state management solutions
5. ⏳ Learn testing and performance optimization

---

## 💡 Tips for Using This Repo

- **Start with simple components** like `Greeting.jsx` and `Counter.jsx`
- **Explore the Task List App** in `App.jsx` to see how components work together
- **Read the code comments** - I often note what concept each component demonstrates
- **Experiment!** Try modifying components, adding new features, or combining them
- **Follow the progression** - Components get progressively more complex

---

## 📝 Notes to Self

This repo is messy by design—it's a learning space, not production code. The component files represent exercises I've completed and can revisit anytime. Don't be afraid to experiment, break things, and try new approaches. That's how you truly learn!

---

## 🎓 Let's Connect

If you're also learning React and want to discuss concepts or share projects, feel free to reach out! Happy coding! 🚀

aryanbasatia24@gmail.com

---

**Last Updated:** June 2026  
**Current Focus:** React Fundamentals & State Management
