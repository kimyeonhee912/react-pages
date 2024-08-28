import React from "react";
import styles from "./ProjectsCard.module.css";

export const ProjectsCard = ({
  project: { title, description, des, work, image, skills, demo, source, size },
}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.cardText}>
        <div className={styles.cardTextContainer}>
          <h2>{title}</h2>
          <p className={styles.size}>{size}</p>
        </div>
        <div className={styles.textTitle}>
          <h3>{description}</h3>
        </div>
        <p className={styles.description}>{des}</p>

        <div className={styles.skillContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>

        {/* 버튼을 카드 텍스트 블록의 마지막에 위치 */}
        <div className={styles.buttonContainer}>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
