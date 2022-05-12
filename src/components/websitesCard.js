import React from "react";
import styles from "./components-style/websitesCard.module.css";

export function Websites({websiteCard}) {
  return (
    <section>
      {websiteCard.map((website) => (
        <div id={website.id}>
          <h1>{website.title}</h1>
          <img src={website.image} alt={website.title} className={styles.websiteImage}></img>
          <p>{website.text}</p>
        </div>
      ))}
    </section>
  );
}
