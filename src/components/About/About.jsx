import React from "react";
import myImage from "../../assets/hero/img3.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container} id="About">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img src={myImage} alt="hero" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>김연희 _ Frontend Developer</h3>
              <ul>
                <li>
                  안녕하세요. 알아가는 기쁨을 느끼는 프론트엔드 개발자
                  김연희입니다.
                </li>
                <li>생년월일: 2001.01.03</li>
                <li>SQL 개발자(SQLD)</li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>건국대학교 글로컬캠퍼스 2024 졸업</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <ul>
                <li>Microsoft Office Excel 2016 Expert</li>
                <li>6시그마 (bb)</li>
                <li>SQL 개발자(SQLD)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
