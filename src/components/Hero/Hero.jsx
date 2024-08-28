import React from "react";
import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";
import myImage from "../../assets/hero/img.png";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, welcome to my Portfolio :)</h1>
        <p className={styles.description}>
          I’m Yeonhee Kim, a Front-end Engineer
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
