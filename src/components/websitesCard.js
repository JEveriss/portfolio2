import React from "react";
import styles from "./components-style/websitesCard.module.css";

export default function WebsiteCard({ projects }) {
  return (
    <div className={styles.websiteCard}>
      {projects.map((item) =>
        item.filtered === true ? (
          <div key={item.key}>
            <h3>{item.title}</h3>
            <img
              src={item.image}
              alt={item.title}
              className={styles.websiteImage}
            ></img>
            <p>{item.text}</p>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
