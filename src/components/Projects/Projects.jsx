import React, { useState } from "react";
import projects from "../../data/projects";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";
import ogaso from "../../assets/projectImg/ogaso.png";

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>major Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id}>
              <ProjectsCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
