import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
