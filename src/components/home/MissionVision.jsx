import React from "react";
import styles from "./MissionVision.module.css";
import missionImg from "../../assets/mission-image.webp";
import visionImg from "../../assets/vision-image.webp";

const MissionVision = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mission}>
        <div className={styles["img-wrapper"]}>
          <img className={styles.img} src={missionImg} alt="mission" />
          <div className={styles["mission-img-overlay"]}>MISSION</div>
        </div>
        <div className={styles["mission-text-wrapper"]}>
          <p> Make a donation to fund our programs and services</p>
        </div>
      </div>
      <div className={styles.vision}>
        <div className={styles["img-wrapper"]}>
          <img className={styles.img} src={visionImg} alt="vision" />
          <div className={styles["vision-img-overlay"]}>VISION</div>
        </div>
        <div className={styles["vision-text-wrapper"]}>
          <p>Partner with us to expand our reach and impact</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
