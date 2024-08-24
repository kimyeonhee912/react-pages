import React from "react";
import styles from "./Experience.module.css";

export const SkillCard = ({ imgSrc, altText, skillName }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillImageContainer}>
        <img src={imgSrc} alt={altText} />
      </div>
      <p>{skillName}</p>
    </div>
  );
};
