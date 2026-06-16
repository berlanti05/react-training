import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((t, i) => (
        <TodoItem key={i} task={t} />
      ))}
    </ul>
  );
}

export default TodoList;
