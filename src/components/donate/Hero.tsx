import React from "react";
import styles from "./Hero.module.css";
import childrenImg from "../assets/donate-children-img.png";
import heroImg from "../assets/donate-hero-img.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <img src={heroImg} className={styles["hero-img"]} alt="hands power" />
      <div className={styles["linear-film"]}></div>
      <div className={styles["content"]}>
        <div className={styles["text-wrapper"]}>
          <h1 className={styles["blue-heading"]}>Make a big Difference by</h1>
          <h1 className={styles["primary-heading"]}>Small Effort</h1>

          <p className={styles.text}>
            We are very much gratefull to you for donation. Your little effort
            help us to better the health of children and pregnant women.
          </p>

          <a href="/donate/#donate-form" className={styles["donate-btn"]}>
            <button className={`btn--main ${styles.btn}`}>
              <span>DONATE</span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9956 11.586C21.8356 7.77799 26.1056 6.66599 30.0336 7.73599C34.2736 8.88999 38.0016 12.532 39.2396 17.604C39.3036 17.864 39.3589 18.124 39.4056 18.384C37.6185 17.7472 35.6746 17.6981 33.8576 18.244C31.2836 16.34 28.0956 16.02 25.2616 17.064C21.7116 18.374 18.9396 21.696 18.2976 25.876C17.4776 31.228 20.7376 36.036 25.3476 40.124L26.1236 40.796C25.4976 40.84 24.8616 40.742 24.2536 40.612C23.9412 40.5448 23.6304 40.4701 23.3216 40.388L22.2476 40.088C12.6996 37.402 6.30762 33.2 4.47362 26.92C3.00962 21.908 4.41762 16.89 7.51362 13.77C10.3816 10.88 14.6336 9.70799 18.9956 11.586ZM22.2516 26.482C23.1076 20.898 29.5656 18.146 32.8816 22.938C32.9134 22.9825 32.9614 23.0128 33.0154 23.0221C33.0693 23.0315 33.1247 23.0192 33.1696 22.988C37.9236 19.62 43.0496 24.414 41.9436 29.954C41.3036 33.1673 38.3236 35.834 33.0036 37.954L32.1336 38.294L31.6076 38.51C31.1536 38.688 30.6736 38.83 30.2396 38.754C29.8076 38.678 29.4056 38.378 29.0396 38.058L28.4196 37.498C23.7929 33.5167 21.7369 29.8447 22.2516 26.482Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </div>
        <img src={childrenImg} className={styles["img"]} alt="children" />
      </div>
    </div>
  );
};

export default Hero;
