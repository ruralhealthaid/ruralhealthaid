import React from "react";
import styles from "./Beneficiaries.module.css";
import img1 from "../assets/bene1.png";
import img2 from "../assets/bene2.png";
import img3 from "../assets/bene3.png";

const Beneficiaries = () => {
  return (
    <div className={styles.wrapper}>
      <h3>TARGET BENEFICIARIES</h3>
      <ul className={styles.ul}>
        <li className={styles.benefit}>
          <img className={styles.img1} src={img1} alt="beneficiary" />
          <p>
            <strong>Pregnant women </strong>and <strong>mothers</strong> in
            rural communities
          </p>
        </li>
        <li className={styles.benefit}>
          <img className={styles.img1} src={img2} alt="beneficiary" />
          <p>
            <strong>Low-income families</strong> with limited access to
            healthcare
          </p>
        </li>
        <li className={styles.benefit}>
          <img className={styles.img3} src={img3} alt="beneficiary" />
          <p>
            <strong>Community health workers</strong> and{" "}
            <strong>local healthcare providers</strong>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Beneficiaries;
