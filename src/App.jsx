/* import { useState } from "react";
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
} */
/* import { useEffect, useState } from "react";
import WindowWidth from "./components/WindowWidth";
import LiveClock from "./components/LiveClock"; */

/* import { useState } from "react";
import ActionPanel from "./components/ActionPanel";

const initialTasks = [
  { id: 1, text: "Buy groceries", done: false },
  { id: 2, text: "Walk the dog", done: true },
  { id: 3, text: "Finish React project", done: false },
  { id: 4, text: "Call the dentist", done: false },
  { id: 5, text: "Read 20 pages", done: true },
  { id: 6, text: "Clean the kitchen", done: false },
  ];
  
  function App() {
    const [field, setField] = useState("Update it");
    const [tasks, setTasks] = useState(initialTasks);
    
    function handleChange(event) {
      setField(event);
      }
      function handleSubmit(event) {
        event.preventDefault();
        }
        
        function handleClick(actionName) {
          console.log(actionName);
          }
          
          function deleteTask(id) {
            setTasks((prev) => prev.filter((t) => t.id !== id));
            }
            
            return (
              <ActionPanel
              handleClick={handleClick}
              field={field}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              tasks={tasks}
              deleteTask={deleteTask}
              />
              );
              } */

/* function App() {
              
             const [count, setCount] = useState(0);
             
             function handleIncrement() {
              setCount((prev) => prev + 1);
              }
              
              useEffect(() => {console.log(count)},[count])
              
              return (
                <>
                <WindowWidth />
                <LiveClock />
                <h3>{count}</h3>
                <button onClick={handleIncrement}>Increment</button>
                </>
                );
                } */
/* import Card from "./components/Card";
               import PageLayout from "./components/PageLayout";
               import Modal from "./components/Modal";
               import { useState } from "react";
               import SplitLayout from "./components/SplitLayout";
               
               function App() {
                const [isOpen,setIsOpen] = useState(true)
                return (
                  <div>
                  <PageLayout>
                  <Card>
                  <h2>How to Learn Web Development in 2026</h2>
                  <p>
                  <strong>By Aryan</strong> | June 15, 2026
                  </p>
                  <p>
                  Web development continues to evolve with AI tools, modern
                  frameworks, and cloud technologies. Here's how beginners can get
                  started...
                  </p>
                  <a href="#">Read More</a>
                  </Card>
                  <Card>
                  <div>
                  <h2>Aryan</h2>
                  <p>Frontend Developer</p>
                  <p>Email: aryan@example.com</p>
                  <button>Follow</button>
                  </div>
                  </Card>
                  <Card>
                  <div>
                  <h2>Pro Plan</h2>
                  <h3>₹999/month</h3>
                  
                  <ul>
                  <li>Unlimited Projects</li>
                  <li>Priority Support</li>
                  <li>Advanced Analytics</li>
                  </ul>
                  
                  <button>Choose Plan</button>
                  </div>
                  </Card>
                  </PageLayout>
                  <Modal isOpen={isOpen} onClose={() => setIsOpen(false) } title="Welcome">This is a Modal</Modal>
                  <button onClick={() => setIsOpen(true)}>open model</button>
                  <SplitLayout left={<div>left side context</div>} right={<div>Right side context</div>}/>
                  </div>
                  );
                  } */
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
