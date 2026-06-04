import { useState } from "react";
import TaskItem from "./components/TaskItem";

const initialTasks = [
  { id: 1, text: "Buy groceries", done: false },
  { id: 2, text: "Walk the dog", done: true },
  { id: 3, text: "Finish React project", done: false },
  { id: 4, text: "Call the dentist", done: false },
  { id: 5, text: "Read 20 pages", done: true },
  { id: 6, text: "Clean the kitchen", done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  function toggleId(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  const visible = tasks.filter((t) => {
    if (filter === "Active") return !t.done;
    if (filter === "Completed") return t.done;
    return true;
  });

  const filters = ["All", "Active", "Completed"];

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <main className="app">
      <header className="app-header">
        <h1>My Tasks</h1>
        <p className="subtitle">
          {remaining} remaining — {tasks.length} total
        </p>
      </header>

      <div className="controls">
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="task-list">
        {visible.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleId} />
        ))}
      </section>
    </main>
  );
}

export default App;
