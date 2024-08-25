import React from "react";
import styles from "./Experience.module.css";
import { Skils } from "./Skils";
import cssimg from "../../assets/tool/css.png";
import htmlimg from "../../assets/tool/html.png";
import reactimg from "../../assets/tool/react.png";
import pyimg from "../../assets/tool/python3.png";
import figmaimg from "../../assets/tool/figma.png";

export const Experience = () => {
  const frontData = [
    { imgSrc: htmlimg, altText: "html", skillName: "HTML" },
    { imgSrc: cssimg, altText: "css", skillName: "CSS" },
    { imgSrc: reactimg, altText: "react", skillName: "React" },
    { imgSrc: pyimg, altText: "python3", skillName: "Python3" },
    { imgSrc: figmaimg, altText: "figma", skillName: "Figma" },
  ];

  const backData = [
    { imgSrc: htmlimg, altText: "html", skillName: "HTML" },
    { imgSrc: cssimg, altText: "css", skillName: "CSS" },
    { imgSrc: reactimg, altText: "react", skillName: "React" },
    { imgSrc: pyimg, altText: "python3", skillName: "Python3" },
    { imgSrc: figmaimg, altText: "figma", skillName: "Figma" },
  ];

  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.contentContainer}>
        <p className={styles.contentTitle}>frontend</p>
        <Skils skillsData={frontData} />
        {/* <p className={styles.contentTitle}>backend</p>
        <Skils skillsData={backData} />
        <p className={styles.contentTitle}>mobile App</p>
        <Skils skillsData={backData} />
        <p className={styles.contentTitle}>deployment</p>
        <Skils skillsData={backData} />
        <p className={styles.contentTitle}>version control</p>
        <Skils skillsData={backData} />
        <p className={styles.contentTitle}>communication</p>
        <Skils skillsData={backData} /> */}
      </div>
    </div>
  );
};
