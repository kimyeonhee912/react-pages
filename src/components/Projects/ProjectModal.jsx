import React from "react";
import styles from "./ProjectModal.module.css";
import ogasoArch from "../../assets/projectImg/5gasoArch.png";

export const ProjectModal = ({ project, onClose }) => {
  const projectImages = {
    "5gaso": ogasoArch, // JSON의 title에 맞춰 key 설정
    // 다른 프로젝트 이미지 추가
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <img
          src={projectImages[project.title]}
          alt={project.title}
          className={styles.projectImage}
        />
        <p>{project.description}</p>
        <p>{project.skills}</p>
        <p>{project.teamMembers}</p>
        <p>{project.results}</p>
        <p>{project.overview}</p>
        <p>{project.duration}</p>
      </div>
    </div>
  );
};
