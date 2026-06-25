function TodoItem({ task, toggleComplete }) {
  return (
    <li>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
    </li>
  );
}

export default TodoItem;
