import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Button from "./Button/Button";
import styles from "./Todo.module.css";

function Todo({ filter, setFilter }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className={styles.todoCard}>
      <h2>My Notes</h2>

      <TodoInput task={task} setTask={setTask} addTask={addTask} />

      <div className={styles.filters}>
        <Button
          text="All"
          onClick={() => setFilter("all")}
          active={filter === "all"}
        />

        <Button
          text="Active"
          onClick={() => setFilter("active")}
          active={filter === "active"}
        />

        <Button
          text="Completed"
          onClick={() => setFilter("completed")}
          active={filter === "completed"}
        />
      </div>

      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} />
    </div>
  );
}

export default Todo;
