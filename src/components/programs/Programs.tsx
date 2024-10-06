import React from "react";
import styles from "./Programs.module.css";
import programsImg1 from "../assets/services.png";
import programsImg2 from "../assets/programs-2.png";
import programsImg3 from "../assets/programsImg3.png";
import programsImg4 from "../assets/programsImg4.png";

const Programs = () => {
  return (
    <section className={styles.section}>
      <h3>PROGRAMS AND SERVICES</h3>
      <div className={styles.service1}>
        <img src={programsImg1} alt="a tailor" />
        <div className={styles["service-desc"]}>
          <h2>Maternal Health Clinics</h2>
          <p>
            We operate mobile health clinics staffed by trained healthcare
            professionals to provide prenatal care, postnatal care, family
            planning services, and screenings for maternal health conditions in
            rural areas
          </p>
        </div>
      </div>
      <div className={styles.service2}>
        <div className={styles["service-desc"]}>
          <h2>Mobile Health Units</h2>
          <p>
            RHAI operates mobile health units equipped with medical
            professionals and essential equipment to reach remote communities
            and provide onsite healthcare service
          </p>
        </div>
        <img src={programsImg2} alt="a tailor" />
      </div>

      <div className={styles.service1}>
        <img src={programsImg3} alt="group presentation" />
        <div className={styles["service-desc"]}>
          <h2>Advocacy and Policy Engagement</h2>
          <p>
            RHAI advocates for policies and programs that prioritize maternal
            and family health in rural areas, working with policymakers and
            stakeholders to address systemic barriers to healthcare access.
          </p>
        </div>
      </div>
      <div className={styles.service2}>
        <div className={styles["service-desc"]}>
          <h2>Child Health and Nutritions</h2>
          <p>
            We offer nutrition education, immunizations, growth monitoring, and
            treatment for common childhood illnesses to promote the health and
            well-being of infants and young children.
          </p>
        </div>
        <img src={programsImg4} alt="a woman talking to people" />
      </div>
    </section>
  );
};

export default Programs;
