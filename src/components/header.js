import React from 'react'
import styles from './components-style/header.module.css'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <div className={styles.label5} href="index.html"></div>
          <div className={styles.label2} href="design.html"></div>
          <div className={styles.label3} href="music.html"></div>
          <div className={styles.label4} href="contact.html"></div>
        </ul>
      </nav>
    </header>
  )
}
