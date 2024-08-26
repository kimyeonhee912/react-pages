import React, { useState } from "react";
import projects from "../../data/projects.json";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleCardClick = (projectId) => {
    setSelectedProjectId((prevSelectedProjectId) =>
      prevSelectedProjectId === projectId ? null : projectId
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>major Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          const isSelected = selectedProjectId === id;

          return (
            <div key={id}>
              <ProjectsCard
                project={project}
                onClick={() => handleCardClick(id)}
                isSelected={isSelected}
              />
            </div>
          );
        })}
      </div>
      {selectedProjectId !== null && (
        <div className={styles.dropdown}>
          <h3>{projects[selectedProjectId].title}</h3>
          <p>{projects[selectedProjectId].description}</p>
          <p>{projects[selectedProjectId].skills}</p>
          <p>{projects[selectedProjectId].teamMembers}</p>
          <p>{projects[selectedProjectId].results}</p>
          <p>{projects[selectedProjectId].overview}</p>
          <p>{projects[selectedProjectId].duration}</p>
        </div>
      )}
    </div>
  );
};
