import React from "react";
import styles from "./components-style/websiteCard.module.css";

export default function WebsiteCard({ projects }) {
  return (
    <div className={styles.websiteCardContainer}>
      {projects.map((item) =>
        item.filtered === true ? (
          <div className={styles.websiteCard} key={item.key}>
            <h3>{item.title}</h3>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className={styles.websiteImage}
              ></img>
            </a>
            <p>{item.text}</p>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
