import React, { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>major Projects</h2>
      <div>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.projectCard}>
              <ProjectsCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
