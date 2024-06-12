import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/banner.webp";
const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <img className={styles["hero-img"]} src={heroImage} alt="hero" />

      <div className={styles.text}>
        <h4>RURAL HEALTH INITIATIVE</h4>
        <p>
          Providing comprehensive health aid services that empower families,
          promote preventive care, and foster community resilience.
        </p>

        <button className={`btn--body ${styles.btn}`}>Read more...</button>
      </div>
    </section>
  );
};

export default Hero;
