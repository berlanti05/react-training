import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <div className="card-top"></div>

      <h2>Counter</h2>

      <p className="count-number">{count}</p>

      <div className="buttons">
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
