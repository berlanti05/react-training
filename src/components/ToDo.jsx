import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

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
    <div className="todo-card">
      <h2>My Notes</h2>

      <TodoInput task={task} setTask={setTask} addTask={addTask} />

      <div className="filters">
        <button className="filter-btn" onClick={() => setFilter("all")}>
          All
        </button>

        <button className="filter-btn" onClick={() => setFilter("active")}>
          Active
        </button>

        <button className="filter-btn" onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>

      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} />
    </div>
  );
}

export default Todo;
