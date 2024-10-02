import React, { Fragment } from "react";
import styles from "./Team.module.css";
import teamMember1 from "../assets/team-member-1.png";
import teamMember2 from "../assets/team-member-2.png";
import teamMember3 from "../assets/team-member-3.png";

const Team = () => {
  return (
    <Fragment>
      <hr className={styles.hr} />
      <section className={styles.wrapper}>
        <h1>OUR TEAM</h1>
        <ul className={styles["team-members"]}>
          <li className={styles["team-member"]}>
            <img src={teamMember1} className={styles.img} alt="team member 1" />
            <div className={styles.text}>
              <p className={styles.name}>John Doe</p>
              <p className={styles.designation}>Designation</p>
            </div>
          </li>
          <li className={styles["team-member"]}>
            <img src={teamMember2} className={styles.img} alt="team member 1" />
            <div className={styles.text}>
              <p className={styles.name}>John Doe</p>
              <p className={styles.designation}>Designation</p>
            </div>
          </li>
          <li className={styles["team-member"]}>
            <img src={teamMember3} className={styles.img} alt="team member 1" />
            <div className={styles.text}>
              <p className={styles.name}>John Doe</p>
              <p className={styles.designation}>Designation</p>
            </div>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Team;
