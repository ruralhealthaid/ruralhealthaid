import React from "react";
import styles from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <section className={styles.section}>
      <h3>Get Involved</h3>
      <p className={styles["sec-desc"]}>
        Join us in our mission to make a difference in the lives of rural
        families. You can support RHAI by:
      </p>
      <div className={styles["ul-btn"]}>
        <ul className={styles.ul}>
          <li>Volunteering your time and skills</li>
          <li>Making a donation to fund our programs and services</li>
          <li>Partnering with us to expand our reach and impact</li>
        </ul>
        <button className={`btn--outline ${styles.btn}`}>Join Us</button>
      </div>
      <hr className={styles.hr} />
    </section>
  );
};

export default JoinUs;
