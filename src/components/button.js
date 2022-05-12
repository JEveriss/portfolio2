import React from "react";
import styles from "./components-style/button.module.css";


function Button({ button, filter }) {
  return (
    <div className={styles.buttonContainer}>
      {button.map((category) => {
        return (
          <button type="button" onClick={() => filter(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Button;

