import React from "react";
import styles from "./Experience.module.css";
import { Skils } from "./Skils";
import cssimg from "../../assets/tool/css.png";
import htmlimg from "../../assets/tool/html.png";
import reactimg from "../../assets/tool/react.png";
import nextimg from "../../assets/tool/nextjs.png";
import tailwindimg from "../../assets/tool/tailwind.png";
import javascriptimg from "../../assets/tool/JavaScript.png";
import pythonimg from "../../assets/tool/python.png";
import figmaimg from "../../assets/tool/figma.png";
import javaimg from "../../assets/tool/java.png";
import mysqlimg from "../../assets/tool/mysql.png";
import reactnativeimg from "../../assets/tool/reactnative.png";
import springimg from "../../assets/tool/springboot.png";
import typescriptimg from "../../assets/tool/typescript.png";

export const Experience = () => {
  const frontData = [
    { imgSrc: reactimg, altText: "react", skillName: "React.Js" },
    { imgSrc: nextimg, altText: "nextjs", skillName: "Next.Js" },
    { imgSrc: htmlimg, altText: "html", skillName: "HTML 5" },
    { imgSrc: javascriptimg, altText: "javascript", skillName: "JavaScript" },
    { imgSrc: cssimg, altText: "css", skillName: "CSS 3" },
    { imgSrc: tailwindimg, altText: "tailwind", skillName: "tailwindCSS" },
    { imgSrc: pythonimg, altText: "python", skillName: "python3" },
    { imgSrc: figmaimg, altText: "figma", skillName: "Figma" },
    { imgSrc: javaimg, altText: "java", skillName: "Java" },
    { imgSrc: mysqlimg, altText: "mysql", skillName: "mySQL" },
    {
      imgSrc: reactnativeimg,
      altText: "ReactNative",
      skillName: "ReactNative",
    },
    { imgSrc: springimg, altText: "springboot", skillName: "spring-boot" },
    { imgSrc: typescriptimg, altText: "typescript", skillName: "TypeScript" },
  ];

  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>experiences</h2>
      <div className={styles.contentContainer}>
        <Skils skillsData={frontData} />
      </div>
    </div>
  );
};
