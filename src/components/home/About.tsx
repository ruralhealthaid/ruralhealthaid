import React from "react";
import styles from "./About.module.css";
import empCommIcon from "../assets/empowering-communities.png";

const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles["what-we-do"]}>
        <h3>WHAT WE DO</h3>
        <p className={`body ${styles.body}`}>
          Rural Health Aid (RHA) is a non-governmental organization (NGO)
          dedicated to improving maternal and family health outcomes in rural
          communities with low incomes and limited access to healthcare
          facilities. Founded in 2024, RHA provides comprehensive health aid
          services that empower families, promote preventive care, and foster
          community resilience regardless of their socio-economic status.
        </p>
        <div className={styles.links}>
          <a
            href="/about-us"
            className={`btn--main ${styles.btn} ${styles["read-more"]}`}
          >
            Read more
          </a>
          <a
            href="/partnership"
            className={`btn--outline ${styles.btn} ${styles.partner}`}
          >
            Partner
          </a>
        </div>
      </div>

      <ul className={styles.features}>
        <li>
          <img
            className={styles["feat-icon"]}
            src={empCommIcon}
            alt="children in a group"
          />
          <div className={styles["feat-text"]}>
            <h4>Empower Communities</h4>
            <p>
              Giving a voice to people living in rural communities by helping
              them to acquire basic resources to earn a living.
            </p>
          </div>
        </li>
        <li>
          <img
            className={styles["feat-icon"]}
            src={empCommIcon}
            alt="children in a group"
          />
          <div className={styles["feat-text"]}>
            <h4>Health Education</h4>
            <p>
              Most African women in Africa are educated on the dos and don’ts
              they have to adhere to when pregnant.
            </p>
          </div>
        </li>
        <li>
          <img
            className={styles["feat-icon"]}
            src={empCommIcon}
            alt="children in a group"
          />
          <div className={styles["feat-text"]}>
            <h4>Community Outreaches</h4>
            <p>
              We go on these outreaches to guide and implement programs in rural
              communites in Africa on child and nutrition.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
