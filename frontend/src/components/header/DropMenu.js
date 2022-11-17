import React from "react";
import styles from "./Header.module.scss";

function DropMenu() {
  return (
    <div>
      <nav className={`${styles.menu_box_1} ${styles.con}`}>
        <ul className={styles.row}>
          <li className={styles.cell}>
            <p>BRAND</p>
            <ul>
              <li>
                <p>CONCEPT</p>
              </li>
              <li>
                <p>ABOUT</p>
              </li>
              <li>
                <p>ABOUT</p>
              </li>
            </ul>
          </li>
          <li className={styles.cell}>
            <p>VISUAL</p>
          </li>
          <li className={styles.cell}>
            <p>STYLE</p>
          </li>
          <li className={styles.cell}>
            <p>MEDIA</p>
          </li>
          <li className={styles.cell}>
            <p>NEWS</p>
          </li>
          <li className={styles.cell}>
            <p>STORE</p>
          </li>
          <li className={styles.cell}>
            <p>CUSTOMER</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DropMenu;
