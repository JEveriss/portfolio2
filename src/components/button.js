import React from "react";
import styles from "./components-style/button.module.css"

export default function Button({ filter, setFilter }) {
  return (
    <div className={styles.buttonContainer}>
      <button active={filter === "All"} onClick={() => setFilter("All")}>
        All
      </button>
      <button active={filter === "React"} onClick={() => setFilter("React")}>
        React
      </button>
      <button active={filter === "CSS"} onClick={() => setFilter("CSS")}>
        CSS
      </button>
      <button
        active={filter === "JavaScript"}
        onClick={() => setFilter("JavaScript")}
      >
        JavaScript
      </button>
      <button active={filter === "SASS"} onClick={() => setFilter("SASS")}>
        SASS
      </button>
      <button active={filter === "Mobile"} onClick={() => setFilter("Mobile")}>
        Mobile Versions
      </button>
    </div>
  );
}
