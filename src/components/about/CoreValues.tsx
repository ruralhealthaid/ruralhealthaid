import React from "react";
import styles from "./CoreValues.module.css";
import innocationIcon from "../assets/innovation-icon.png";
import compassionIcon from "../assets/compassion-icon.png";
import collaborationIcon from "../assets/collaboration-icon.png";
import empowermentIcon from "../assets/empowerment-icon.png";
import equityIcon from "../assets/equity-icon.png";

const CoreValues = () => {
  return (
    <section className={styles.wrapper}>
      <h3>Our Core Values</h3>
      <ul className={styles["core-values"]}>
        <li className={styles.value}>
          <img className={styles.icon} src={innocationIcon} alt="innovation" />
          <h4>Innovation</h4>
          <p className={styles.text}>
            We are committed to exploring innovative solutions and approaches to
            address the complex challenges facing maternal and family healthcare
            in rural areas.
          </p>
        </li>
        <li className={styles.value}>
          <img className={styles.icon} src={compassionIcon} alt="compassion" />
          <h4>Compassion</h4>
          <p className={styles.text}>
            We approach our work with empathy and understanding, recognizing the
            unique challenges faced by families in rural areas.
          </p>
        </li>
        <li className={styles.value}>
          <img className={styles.icon} src={equityIcon} alt="equity" />
          <h4>Equity</h4>
          <p className={styles.text}>
            We believe that access to healthcare is a fundamental human right,
            and we strive to reduce health disparities by serving marginalized
            communities.
          </p>
        </li>
        <li className={styles.value}>
          <img
            className={styles.icon}
            src={collaborationIcon}
            alt="collaboration"
          />
          <h4>Collaboration</h4>
          <p className={styles.text}>
            We maximise our reach and impact by collaborating with local
            communities, governments, healthcare professionals, and other
            stakeholders.
          </p>
        </li>
        <li className={styles.value}>
          <img
            className={styles.icon}
            src={empowermentIcon}
            alt="empowerment"
          />
          <h4>Empowerment</h4>
          <p className={styles.text}>
            We empower individuals especially mothers by providing them with the
            knowledge, tools, and resources to make informed decisions about
            their health.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default CoreValues;
