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
          {menuOpen ? <BiX /> : <BiMenu />} {/*순서 바꿈. */}
        </div>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#github">Github</a>
          </li>
          <li>
            <a href="#notion">Notion</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
