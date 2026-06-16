import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="todo-card">
      <h2>My Notes</h2>

      <TodoInput task={task} setTask={setTask} addTask={addTask} />

      <TodoList tasks={tasks} />
    </div>
  );
}

export default Todo;
