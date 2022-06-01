import React from "react";
import styles from "./components-style/button.module.css";

export default function Button({ filter, setFilter }) {
  return (
    <p className={styles.buttonContainer}>
      <button
        className={styles.button}
        active={filter === "All"}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={styles.button}
        active={filter === "React"}
        onClick={() => setFilter("React")}
      >
        React
      </button>
      <button
        className={styles.button}
        active={filter === "CSS"}
        onClick={() => setFilter("CSS")}
      >
        CSS
      </button>
      <button
        className={styles.button}
        active={filter === "JavaScript"}
        onClick={() => setFilter("JavaScript")}
      >
        JavaScript
      </button>
      <button
        className={styles.button}
        active={filter === "SASS"}
        onClick={() => setFilter("SASS")}
      >
        SASS
      </button>
      <button
        className={styles.button}
        active={filter === "Mobile"}
        onClick={() => setFilter("Mobile")}
      >
        Mobile Versions
      </button>
    </p>
  );
}
