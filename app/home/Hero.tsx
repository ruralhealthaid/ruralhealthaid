import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../assets/hero-img.png";
const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <img className={styles["hero-img"]} src={heroImage} alt="hero" />
      <div className={styles["linear-film"]}></div>

      <div className={styles["text-wrapper"]}>
        <h3>RURAL HEALTH AID</h3>
        <p className={styles.heading}>Building Resilient Communities</p>
        <p className={styles.text}>
          Providing comprehensive health aid services that empower families,
          promote preventive care, and foster community resilience.
        </p>

        <div className={styles["btn-wrapper"]}>
          <div className={styles["icon-wrapper"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <span>Read More</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
