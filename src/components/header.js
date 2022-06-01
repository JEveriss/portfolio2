import React from "react";
import styles from "./components-style/header.module.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <div className={styles.label5} href="index.html"></div>
        </Link>

        <Link to="design" spy={true} smooth={true}>
          <div className={styles.label2} href="design.html"></div>
        </Link>

        <Link to="music" spy={true} smooth={true}>
          <div className={styles.label3} href="music.html"></div>
        </Link>
        
        <Link to="contact" spy={true} smooth={true}>
          <div className={styles.label4} href="contact.html"></div>
        </Link>
      </nav>
    </header>
  );
}
