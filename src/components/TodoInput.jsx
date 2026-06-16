function TodoInput({ task, setTask, addTask }) {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write a task..."
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;
