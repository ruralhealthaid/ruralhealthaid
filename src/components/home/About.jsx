import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/about-image.jpeg";

const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <h3>ABOUT US</h3>
        <p>
          Rural Health Aid Initiative (RHAI) is a non-governmental organization
          (NGO) dedicated to improving maternal and family health outcomes in
          rural communities with low incomes and limited access to healthcare
          facilities. Founded in 2024, RHAI provides comprehensive health aid
          services that empower families, promote preventive care, and foster
          community resilience regardless of their socio-economic status.
        </p>
        <button className={`btn--body ${styles.btn}`}>Read more...</button>
      </div>
      <img className={styles["about-img"]} src={aboutImage} alt="hero" />
    </section>
  );
};

export default About;
