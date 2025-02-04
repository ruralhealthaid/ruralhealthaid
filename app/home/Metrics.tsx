import React from "react";
import styles from "./Metrics.module.css";

const Metrics = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <span className={styles.metric}>1+</span>
          <span className={styles.desc}>Years of Success</span>
        </li>
        <li>
          <span className={styles.metric}>12+</span>
          <span className={styles.desc}>Communities Reached</span>
        </li>
        <li>
          <span className={styles.metric}>9+</span>
          <span className={styles.desc}>Goals Implemented</span>
        </li>
      </ul>
    </div>
  );
};

export default Metrics;
