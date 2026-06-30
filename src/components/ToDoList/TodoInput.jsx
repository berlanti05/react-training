import styles from "./ToDo.module.css";
function TodoInput({ task, setTask, addTask }) {
  return (
    <div className={styles.todoInput}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write a task..."
      />

      <button className={styles.btn} onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
