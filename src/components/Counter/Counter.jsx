import { useState } from "react";
import styles from "./Counter.module.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterCard}>
      <div className={styles.cardTop}></div>

      <h2>Counter</h2>

      <p className={styles.countNumber}>{count}</p>

      <div className={styles.buttons}>
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
