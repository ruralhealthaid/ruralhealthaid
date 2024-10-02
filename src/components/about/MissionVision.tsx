import React from "react";
import styles from "./MissionVision.module.css";

const MissionVision = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mission}>
        <h3>Our Mission</h3>
        <p>
          We are committed to providing comprehensive health aid services that
          empower families, promote preventive care, and foster community
          resilience.
        </p>
      </div>
      <div className={styles.vision}>
        <h3>Our Vision</h3>
        <p>
          To create a world where every rural family has equal access to
          maternal and family health services, resulting in healthier mothers,
          children, and communities.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
