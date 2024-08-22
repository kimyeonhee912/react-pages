import React, { useState } from "react";

import styles from "./Navbar.module.css";
//import { getImageUrl } from "../../utils";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <BiX /> : <BiMenu />}
        </div>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="https://github.com/gongjuyeonhee">Github</a>
          </li>
          <li>
            <a href="https://bit.ly/3TEn49P">Notion</a>
          </li>
          <li>
            <a href="https://bit.ly/4378cDX">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
