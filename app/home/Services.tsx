import React from "react";
import styles from "./Services.module.css";
import serviceImg from "../assets/services.png";

const Services = () => {
  return (
    <section className={styles.section}>
      <h3>PROGRAMS AND SERVICES</h3>
      <div className={styles.service1}>
        <img src={serviceImg} alt="a tailor" />
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
        <img src={serviceImg} alt="a tailor" />
      </div>
      <div className={styles["btn-more-wrapper"]}>
        <a href="/programs" className={styles["btn-more"]}>
          Read <span className={styles.more}>More</span>
        </a>
      </div>
    </section>
  );
};

export default Services;
