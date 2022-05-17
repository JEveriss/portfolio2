import React from "react";
import Scroller from "../components/scroller";
import pic from "../images/profile.jpg";
import styles from "./home.module.css";



export default function Home() {

  return (
    <div className={styles.homeGridParent}>
      <h1 className={styles.homeH1}>
        <div className={styles.homeGrid1}>
          <div className={styles.firstName}>
            <div className={styles.colourOne}>J</div>
            <div className={styles.colourTwo}>a</div>
            <div className={styles.colourThree}>c</div>
            <div className={styles.colourFour}>q</div>
            <div className={styles.colourThree}>u</div>
            <div className={styles.colourTwo}>e</div>
            <div className={styles.colourOne}>s</div>
          </div>

          <div className={styles.lastName}>
            <div className={styles.colourFour}>E</div>
            <div className={styles.colourThree}>v</div>
            <div className={styles.colourTwo}>e</div>
            <div className={styles.colourOne}>r</div>
            <div className={styles.colourTwo}>i</div>
            <div className={styles.colourThree}>s</div>
            <div className={styles.colourFour}>s</div>
          </div>

        </div>
      </h1>
      <div className={styles.homeGrid2}>
        <img className={styles.me} src={pic} alt="Jacques Everiss"></img>
      </div>
      <div className={styles.homeGrid3}>
      <Scroller />
      </div>
    </div>
  );
}
