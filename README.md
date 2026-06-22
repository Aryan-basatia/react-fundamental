# 📚 React Fundamentals - My Learning Journey

Welcome to my React learning lab! This repository is my personal playground where I practice, experiment, and master React concepts step by step. It's not a single polished project—it's a collection of mini projects and components that demonstrate my understanding of React fundamentals.

---

## 🎯 About This Repo

This is my **React Learning Log & Progress Tracker**. As I work through React tutorials, courses, and documentation, I create small components and mini projects to solidify my understanding. Each project focuses on specific React concepts and builds upon previous learnings.

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
- **useEffect Hook** - Managing side effects and cleanup in functional components

---

## 🎨 Mini Projects & Exercises

| Project                          | Description                                                                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Task List App**                | A to-do list application with task filtering (All, Active, Completed) — demonstrates state management, list rendering with keys, and filtering logic         |
| **Counter Component**            | A simple counter with increment, decrement, and reset buttons — demonstrates basic state management and event handlers                                       |
| **Action Panel**                 | Control panel with action buttons (Like, Discard, Report) and a controlled text input — demonstrates prop drilling, controlled inputs, and form handling    |
| **Toggle Text Component**        | Toggle between displaying "Hello" and "Goodbye" text with a button — demonstrates conditional rendering with useState and ternary operators                 |
| **User Card Component**          | Display user information (name, role) with a badge button — demonstrates props and default props (role defaults to "Guest")                                  |
| **Login Status Component**       | Show different content based on login state; displays "Welcome Back!" when logged in or "LogIn" button when logged out — demonstrates conditional rendering |
| **User Form Component**          | Toggle and update a user object (name & email) via a button — demonstrates object state updates and immutability with spread operator                       |
| **Player Score Game**            | Two-player scoring system with winner announcement when score exceeds 5 — demonstrates state updates, conditional rendering, and logical AND operator      |
| **Greeting Component**           | First React component marking the start of the learning journey — demonstrates basic JSX and component structure                                            |
| **Profile Component**            | Display user profile data with dynamic date using `toLocaleDateString()` — demonstrates data binding, props, and JavaScript date methods                    |
| **Notification Badge Component** | Show notification count conditionally; returns null when count is 0 — demonstrates conditional rendering and null returns for hiding components             |
| **Window Width Component**       | Display current window width and update on resize using `useEffect` — demonstrates useEffect hook, event listeners, and cleanup functions                  |
| **Live Clock Component**         | Display live updating time that refreshes every second — demonstrates `useEffect` with `setInterval` and proper cleanup with `clearInterval`              |
| **User Directory**               | Fetch and display a list of users from a JSON API with loading/error states and refresh functionality — demonstrates API integration with `fetch`, async/await, and error handling |
| **Username Registration**        | Form input validation component that validates username length (4-20 characters) with real-time feedback — demonstrates form validation, state management, and input handling |
| **Task Item Component**          | Individual task item with checkbox toggle and removal — demonstrates component composition and prop handling within the task list system                     |
| **Card Component**               | Reusable wrapper component with flexible styling via className prop — demonstrates component composition and prop customization                            |
| **Badge Component**              | Colored badge display with dynamic color classes (green, red, yellow, blue) — demonstrates component composition and conditional styling with prop-based customization |
| **Button Component**             | Reusable button with variant (primary, secondary, danger) and size (sm, md, lg) options — demonstrates component customization through props and CSS classes |
| **Modal Component**              | Toggle-able modal dialog that displays content with a title and close button — demonstrates conditional rendering based on isOpen state and callback props |
| **Navbar Component**             | Navigation bar with React Router links to Home, Projects, and Contact pages — demonstrates routing and navigation between pages                           |
| **Home Component**               | Landing page placeholder — demonstrates basic route page structure                                                                                          |
| **Contact Component**            | Contact page placeholder — demonstrates basic route page structure                                                                                         |
| **Project List Component**       | List of projects with links to individual project details using React Router — demonstrates dynamic routing and nested routes                             |
| **Project Detail Component**     | Display individual project information using URL parameters via `useParams()` — demonstrates route parameters and dynamic content based on URL            |
| **Page Layout Component**        | Wrapper layout component that displays "My App" header and renders children — demonstrates layout composition and children prop pattern                   |
| **Split Layout Component**       | Two-column layout component with left and right sections — demonstrates flex layout and flexible component composition with custom props                 |
| **Registration Form Component**  | Complex multi-field form with validation for name, email, and password — demonstrates controlled form inputs, validation logic, and form submission       |

---

## 📁 Folder Structure

```
react-fundamental/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images & static assets (vite.svg, react.svg, hero.png)
│   ├── components/           # All my React components
│   │   ├── Counter.jsx       # Counter with increment/decrement/reset
│   │   ├── ToggleText.jsx    # Toggle text visibility between "Hello" and "Goodbye"
│   │   ├── UserCard.jsx      # Display user info with props & default values
│   │   ├── LoginStatus.jsx   # Conditional login/logout UI
│   │   ├── UserForm.jsx      # Form state management with object updates
│   │   ├── PLayerScore.jsx   # Two-player score tracker with winner detection
│   │   ├── Greeting.jsx      # First component - journey start message
│   │   ├── Profile.jsx       # User profile display with dynamic date
│   │   ├── TaskItem.jsx      # Individual task item with checkbox toggle
│   │   ├── ActionPanel.jsx   # Control panel with buttons, text input, and task list
│   │   ├── NotificationBadge.jsx  # Conditional notification count display
│   │   ├── WindowWidth.jsx   # Display and track window width with resize listener
│   │   ├── LiveClock.jsx     # Live updating clock showing current time
│   │   ├── UserDirectory.jsx # Fetch and display users from API with error handling
│   │   ├── UsernameRegistration.jsx # Form validation for username (4-20 chars)
│   │   ├── Badge.jsx         # Reusable badge with color variants (green, red, yellow, blue)
│   │   ├── Button.jsx        # Reusable button with variant and size options
│   │   ├── Card.jsx          # Reusable card wrapper with flexible styling
│   │   ├── Modal.jsx         # Toggle-able modal dialog component
│   │   ├── Navbar.jsx        # Navigation bar with React Router links
│   │   ├── Home.jsx          # Home page route component
│   │   ├── Contact.jsx       # Contact page route component
│   │   ├── Project.jsx       # Project list with routing links
│   │   ├── ProjectDetail.jsx # Individual project detail with useParams
│   │   ├── PageLayout.jsx    # Page wrapper with header
│   │   ├── SplitLayout.jsx   # Two-column layout component
│   │   └── RegistrationForm.jsx # Complex form with validation
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React app entry point
│   └── index.css            # Global styles & theme
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint rules
```

### What Each Section Covers:

- **`components/`** - My collection of React components, each practicing a specific concept
- **`src/App.jsx`** - Main application with routing setup and component imports
- **`index.css`** - Global styling

---

## ✅ Topics Completed

Here's a checklist of React concepts I've mastered (marked complete only if actual code exists):

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
- [x] Form Input Handling (see `src/components/ActionPanel.jsx`, `src/components/UsernameRegistration.jsx`)
- [x] Form Validation (see `src/components/UsernameRegistration.jsx`, `src/components/RegistrationForm.jsx`)
- [x] Object State Management (see `src/components/UserForm.jsx`)
- [x] Component Reusability
- [x] List Rendering & Keys (see `src/components/ActionPanel.jsx` / `src/components/TaskItem.jsx`)
- [x] Filtering & Search (see Task List App - commented in `src/App.jsx`)
- [x] useEffect Hook & Side Effects (see `src/components/WindowWidth.jsx`, `src/components/LiveClock.jsx`)
- [x] Interval & Cleanup (see `src/components/LiveClock.jsx`)
- [x] API Integration & Fetch (see `src/components/UserDirectory.jsx`)
- [x] Async/Await Operations (see `src/components/UserDirectory.jsx`)
- [x] Error Handling in Components (see `src/components/UserDirectory.jsx`)
- [x] Loading States (see `src/components/UserDirectory.jsx`)
- [x] React Router Basics (see `src/components/Navbar.jsx`, `src/components/Project.jsx`)
- [x] Route Parameters with useParams (see `src/components/ProjectDetail.jsx`)
- [x] Layout Components & Children Prop (see `src/components/PageLayout.jsx`, `src/components/Card.jsx`)
- [x] Styled Components & Custom Styling (see `src/components/Badge.jsx`, `src/components/Button.jsx`)

### Still Exploring 🔜

- [ ] useContext & Context API
- [ ] useReducer Hook
- [ ] Custom Hooks
- [ ] Advanced Routing Patterns
- [ ] Performance Optimization (React.memo, useMemo, useCallback)
- [ ] Testing Components
- [ ] Advanced State Management (Redux)
- [ ] Error Boundaries

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
   - Open `src/App.jsx` to see which component is currently being demonstrated
   - You can import and render different components to explore them
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
| **React Router** | ^6.x - Client-side routing for single-page apps |

### Build Tools & Dev Dependencies

| Tool                            | Purpose                                          |
| ------------------------------- | ------------------------------------------------ |
| **Vite**                        | ^8.0.12 - Lightning-fast build tool & dev server |
| **@vitejs/plugin-react**        | ^6.0.1 - Vite plugin for React with fast refresh |
| **ESLint**                      | ^10.3.0 - Code quality & style checking          |
| **eslint-plugin-react-hooks**   | ^7.1.1 - Rules for React Hooks                   |
| **eslint-plugin-react-refresh** | ^0.5.2 - Fast refresh compatibility              |

### Styling

- **CSS** - Custom CSS with responsive design
- **No external CSS libraries** - Pure vanilla CSS for maximum learning

### Language Composition

- **JavaScript** - 98.1%
- **HTML** - 1.6%
- **CSS** - 0.3%

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
2. ✅ Dive into hooks ecosystem (useState, useEffect)
3. ✅ Explore API integration and error handling
4. ✅ Learn React Router and navigation
5. ⏳ Explore Context API and useReducer
6. ⏳ Build a real-world project with routing
7. ⏳ Learn state management and testing

---

## 💡 Tips for Using This Repo

- **Start with simple components** like `Greeting.jsx` and `Counter.jsx`
- **Explore the Task List App** in `src/App.jsx` (currently commented out) to see how components work together
- **Read the code comments** - I often note what concept each component demonstrates
- **Experiment!** Try modifying components, adding new features, or combining them
- **Follow the progression** - Components get progressively more complex

---

## 📝 Notes to Self

This repo is a learning space by design. The component files represent exercises I've completed and can revisit anytime. Don't be afraid to experiment, break things, and rebuild them differently. That's how real learning happens!

---

## 🎓 Let's Connect

If you're also learning React and want to discuss concepts or share projects, feel free to reach out! Happy coding! 🚀

aryanbasatia24@gmail.com

---

**Last Updated:** June 2026  
**Current Focus:** React Fundamentals, API Integration, Side Effects with useEffect, and React Router basics
