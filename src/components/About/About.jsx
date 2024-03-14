import React from "react";
import myImage from "../../assets/hero/img3.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container} id="About">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={myImage} alt="hero" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>저는 테스트테스트원입니다하나둘셋넷다섯여섯 일곱여덟</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>저는 테스트테스트원입니다하나둘셋넷다섯여섯 일곱여덟</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
