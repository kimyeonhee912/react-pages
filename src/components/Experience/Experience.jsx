import React from "react";
import styles from "./Experience.module.css";
import { Skils } from "./Skils";
import cssimg from "../../assets/tool/css.png";
import htmlimg from "../../assets/tool/html.png";
import reactimg from "../../assets/tool/react.png";
import nextimg from "../../assets/tool/nextjs.png";
import tailwindimg from "../../assets/tool/tailwind.png";
import javascriptimg from "../../assets/tool/JavaScript.png";

export const Experience = () => {
  const frontData = [
    { imgSrc: reactimg, altText: "react", skillName: "ReactJS" },
    { imgSrc: nextimg, altText: "nextjs", skillName: "NextJS" },
    { imgSrc: htmlimg, altText: "html", skillName: "HTML" },
    { imgSrc: javascriptimg, altText: "javascript", skillName: "JavaScript" },
    { imgSrc: cssimg, altText: "css", skillName: "CSS" },
    { imgSrc: tailwindimg, altText: "tailwind", skillName: "tailwindCSS" },
  ];

  // const backData = [
  //   { imgSrc: htmlimg, altText: "html", skillName: "HTML" },
  //   { imgSrc: cssimg, altText: "css", skillName: "CSS" },
  //   { imgSrc: reactimg, altText: "react", skillName: "React" },
  //   { imgSrc: pyimg, altText: "python3", skillName: "Python3" },
  //   { imgSrc: figmaimg, altText: "figma", skillName: "Figma" },
  // ];

  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>main Skills</h2>
      <div className={styles.contentContainer}>
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
