import React, { useState } from "react";
import projects from "../../data/projects.json";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./Projects.module.css";
import ogaso from "../../assets/projectImg/ogaso.png";

export const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleCardClick = (projectId) => {
    setSelectedProjectId((prevSelectedProjectId) =>
      prevSelectedProjectId === projectId ? null : projectId
    );
  };

  //대표이미지
  const projectImages = {
    "5gaso": ogaso,
  };

  //내가 만든 이미지들
  const addImgs = {};

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
          <h3 className="text-2xl font-bold mb-1">
            {projects[selectedProjectId].title}
          </h3>

          <div style={{ display: "flex", gap: "20px" }}>
            {/* 이미지 섹션 */}
            <div style={{ flex: "6" }}>
              <img
                src={projectImages[projects[selectedProjectId].title]}
                alt={projects[selectedProjectId].title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
            </div>

            {/* 텍스트 내용 섹션 */}
            <div style={{ flex: "4" }}>
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                {projects[selectedProjectId].duration}
              </p>

              <p style={{ marginBottom: "20px" }}>
                <strong>Description:</strong>{" "}
                {projects[selectedProjectId].description}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  Keywords:
                </h4>
                {projects[selectedProjectId].keyword.map((keyword, index) => (
                  <span
                    key={index}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#e0f7fa",
                      display: "inline-block",
                      fontWeight: "bold",
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  Technologies Used:
                </h4>
                {projects[selectedProjectId].skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#f5f5f5",
                      display: "inline-block",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p style={{ marginBottom: "20px" }}>
                <strong>Team Members:</strong>{" "}
                {projects[selectedProjectId].teamMembers}
              </p>

              <p style={{ marginBottom: "20px" }}>
                <strong>Results:</strong>{" "}
                {projects[selectedProjectId].results.join(", ")}
              </p>

              <p style={{ marginBottom: "20px" }}>
                <strong>Overview:</strong>{" "}
                {projects[selectedProjectId].overview.join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
