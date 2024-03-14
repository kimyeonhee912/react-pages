import React from "react";
import styles from "./Contact.module.css";
import { BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Please feel free to contact me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <CgMail />
          <a href="mailto:yeonhui5938@gmail.com">yeonhui5938@gmail.com</a>
        </li>
        <li className={styles.link}>
          <BsLinkedin />
          <a href="https://www.linkedin.com/in/yeonhee01/">
            linkedin.com/yeonhee01
          </a>
        </li>
        <li className={styles.link}>
          <AiFillGithub />
          <a href="https://github.com/gongjuyeonhee">github</a>
        </li>
      </ul>
    </footer>
  );
};
