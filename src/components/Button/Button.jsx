function Button({ text, onClick, active }) {
  return (
    <button onClick={onClick} className={`btn ${active ? "active" : ""}`}>
      {text}
    </button>
  );
}

export default Button;
