import React, { useState } from "react";
import projects from "../../data/projects.json";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectsCard
              key={id}
              project={project}
              onClick={() => handleCardClick(project)}
            />
          );
        })}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};
