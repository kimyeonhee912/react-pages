import React from "react";
import styles from "./Experience.module.css";
import { SkillCard } from "./SkillCard";

export const Skils = ({ skillsData }) => {
  return (
    <div className={styles.content}>
      {skillsData.map((skill, index) => (
        <div key={index} className={styles.skills}>
          <SkillCard
            imgSrc={skill.imgSrc}
            altText={skill.altText}
            skillName={skill.skillName}
          />
        </div>
      ))}
    </div>
  );
};
