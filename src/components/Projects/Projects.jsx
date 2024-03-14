import React from "react";
import projects from "../../data/projects.json";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectsCard key={id} project={project} />;
        })}
      </div>
    </div>
  );
};
