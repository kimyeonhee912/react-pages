import React from "react";
import styles from "./ProjectsCard.module.css";

export const ProjectsCard = ({
  project: { title, description, skills, demo, source },
  onClick,
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.more}>자세히</div>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Scource
        </a>
      </div>
    </div>
  );
};
