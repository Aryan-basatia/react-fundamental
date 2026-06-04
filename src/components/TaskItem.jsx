export default function TaskItem({ task, onToggle }) {
  return (
    <div className={`task-item ${task.done ? "done" : ""}`}>
      <label className="task-label">
        <input
          className="task-checkbox"
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>
    </div>
  );
}
