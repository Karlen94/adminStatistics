import React from "react";
import styles from "./navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div className={styles.navigationBlock}>
      <div className={styles.navLogo}>LEADS MANAGEMENT</div>
      <div className={styles.navMenu}>
        <div className={styles.navContainer}>
          <span>
            <FontAwesomeIcon  style={{ color:'#fff' }} icon={faBars} />
          </span>

          <div style={{ fontFamily: "Lato",color:'#fff' }}> Hello, Max !</div>
        </div>

        <span>
          <FontAwesomeIcon style={{ color:'#fff' }}  icon={faPowerOff} />
        </span>
      </div>
    </div>
  );
}
