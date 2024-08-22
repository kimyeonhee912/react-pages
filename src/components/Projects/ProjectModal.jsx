import React from "react";
import styles from "./ProjectModal.module.css";

export const ProjectModal = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};
