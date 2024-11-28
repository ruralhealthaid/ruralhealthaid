import React, { Fragment } from "react";
import styles from "./Team.module.css";
import salisuImg from "../assets/team/Salisu Nuhu.jpeg";
import maryImg from "../assets/team/Ruth Amoah.jpeg";
import ruthImg from "../assets/team/Ndabire Mary-Queen.jpeg";
import asaanaImg from "../assets/team/Asaana Muniratu.jpeg";

const Team = () => {
  return (
    <Fragment>
      <hr className={styles.hr} />
      <section className={styles.wrapper}>
        <h1>OUR TEAM</h1>
        <ul className={styles["team-members"]}>
          <li className={styles["team-member"]}>
            <img src={asaanaImg} className={styles.img} alt="team member 2" />
            <div className={styles.text}>
              <p className={styles.name}>Asaana Muniratu</p>
              <p className={styles.designation}>Program director</p>
            </div>
          </li>
          <li className={styles["team-member"]}>
            <img src={salisuImg} className={styles.img} alt="team member 1" />
            <div className={styles.text}>
              <p className={styles.name}>Salisu Nuhu</p>
              <p className={styles.designation}>Finance manager</p>
            </div>
          </li>

          <li className={styles["team-member"]}>
            <img src={ruthImg} className={styles.img} alt="team member 3" />
            <div className={styles.text}>
              <p className={styles.name}>Ruth Amoah</p>
              <p className={styles.designation}>Health care coordinator</p>
            </div>
          </li>
          <li className={styles["team-member"]}>
            <img src={maryImg} className={styles.img} alt="team member 3" />
            <div className={styles.text}>
              <p className={styles.name}>Ndabire Mary-Queen</p>
              <p className={styles.designation}>Designation</p>
            </div>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Team;
