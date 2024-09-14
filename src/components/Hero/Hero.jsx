import React from "react";
import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";
import myImage from "../../assets/hero/img.png";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>YEONHEE KIM</h1>
        <p className={styles.description}>
          끊임없이 생각하는 Frontend Engineer 김연희입니다:)
        </p>
        <a href="mailto:yeonhui5938@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={myImage} alt="hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.BottomBlur} />
    </div>
  );
};
