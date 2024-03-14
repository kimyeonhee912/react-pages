import React from "react";
import cssimg from "../../assets/tool/css.png";
import htmlimg from "../../assets/tool/html.png";
import reactimg from "../../assets/tool/react.png";
import pyimg from "../../assets/tool/python3.png";
import figmaimg from "../../assets/tool/figma.png";

import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={htmlimg} alt="html" />
            </div>
            <p>html</p>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={cssimg} alt="css" />
            </div>
            <p>CSS</p>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={reactimg} alt="react" />
            </div>
            <p>React</p>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={pyimg} alt="python3" />
            </div>
            <p>Python3</p>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={figmaimg} alt="figma" />
            </div>
            <p>figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};
