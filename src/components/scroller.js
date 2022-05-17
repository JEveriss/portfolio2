import React from 'react'
import styles from './components-style/scroller.module.css'

export default function Scroller() {
  return (
    <h2 className={styles.scrollerH2}>
      <div className={styles.container}>
        <span className={styles.iAmScroller}>I am</span>
        <div className={styles.scroller}>
          <span>
            a developer<br />
            a problem solver<br />
            an optimist<br />
            a musician<br />
            a team player<br />
            a conversationalist<br />
            an optimist<br />
            a guitarist<br />
            always trying my best<br />
            a drummer
          </span>
        </div>
      </div>
    </h2>
  )
}
