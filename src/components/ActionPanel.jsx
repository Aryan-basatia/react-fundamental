export default function ActionPanel({
  handleClick,
  field,
  handleChange,
  handleSubmit,
  tasks,
  deleteTask,
}) {
  return (
    <>
      <button onClick={() => handleClick("Like")}>Like</button>
      <button onClick={() => handleClick("Discard")}>Discard</button>
      <button onClick={() => handleClick("Report")}>Report</button>
      {tasks && tasks.length > 0 && (
        <ul className="task-list">
          {tasks.map((t) => (
            <li
              key={t.id}
              onDoubleClick={() => deleteTask(t.id)}
              className={t.done ? "done" : ""}
            >
              {t.text}
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={field}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Edit field"
      />
      <h2>{field}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
