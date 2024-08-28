import React from "react";
import myImage from "../../assets/hero/img3.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container} id="About">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={myImage} alt="hero" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <h3 className={styles.itemTitle}>김연희 _ Front-end Engineer</h3>
            <p className={styles.itemDescription}>
              끊임없이 생각하는 프론트엔드 개발자 김연희입니다.
            </p>
          </li>
          <li className={styles.aboutItem}>
            <h3 className={styles.itemTitle}>Education</h3>
            <p className={styles.itemDescription}>
              건국대학교 글로컬캠퍼스 졸업 (2024)
            </p>
          </li>
          <li className={styles.aboutItem}>
            <h3 className={styles.itemTitle}>Certifications</h3>
            <ul className={styles.certificationsList}>
              <li>Microsoft Office Excel 2016 Expert</li>
              <li>6시그마 (bb)</li>
              <li>SQL 개발자(SQLD)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
