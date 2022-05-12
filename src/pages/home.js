import React from 'react'
import Scroller from '../components/scroller'
import pic from '../images/profile.jpg'
import styles from './home.module.css'

export default function Home() {
  return (
    <div>
        <h1>Jacques Everiss</h1>
        <img className={styles.me} src={pic} alt="Jacques Everiss"></img>
        <Scroller/>
    </div>
  )
}
