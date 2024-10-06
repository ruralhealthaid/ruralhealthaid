import React, { useState } from "react";
import styles from "./DonateForm.module.css";
import CustomPhoneInput from "../ui/CustomPhoneInput";

const DonateForm = () => {
  const [phone, setPhone] = useState<string | undefined>(undefined);

  return (
    <section id="donate-form" className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          <span className={styles["violet-text"]}>Be A </span>
          <span>Donor</span>
        </h2>
        <div className={styles.underline}></div>
      </header>
      <form id="donate-form" className={styles.form}>
        <div className={styles["col--2"]}>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              required
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              required
            />
          </div>
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email" required />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="phone">Phone Number</label>

          <CustomPhoneInput
            // className={styles["phone-class"]}
            inputClassName={styles["phone-input"]}
            value={phone}
            onSetPhone={(phone) => setPhone(phone)}
          />
        </div>

        <div className={styles["input-wrapper"]}>
          <label htmlFor="amount">Donation Amount</label>
          <input type="number" name="amount" placeholder="amount" required />
        </div>
        <div className={styles["checkbox-wrapper"]}>
          <input type="checkbox" name="anonymous" />
          <label htmlFor="anonymous">I would like to donate anonymously.</label>
        </div>
        <button type="submit" className={styles["btn--submit"]}>
          Donate
        </button>
        <p className={styles["thank-you"]}>
          We are very much grateful to you for your Donation
        </p>
      </form>
    </section>
  );
};

export default DonateForm;
