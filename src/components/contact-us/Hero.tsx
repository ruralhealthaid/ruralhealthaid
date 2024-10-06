import React, { useState } from "react";
import styles from "./Hero.module.css";
import contactImg from "../assets/contact-img.png";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import CustomPhoneInput from "../ui/CustomPhoneInput";

const Hero = () => {
    const [phone, setPhone] = useState<string | undefined>(undefined);
    const changePhoneInput = (phone: string) => {
      setPhone(phone);
    };
  return (
    <div className={styles.wrapper}>
      <div className={styles.desc}>
        <h1>Contact Us</h1>
        <p>
          Email, call or complete the form to learn more about Rural Health Aid
          Initiative (RHAI) and support our work.
        </p>

        <a href="mailto:info@rhai.org">info@rhai.org</a>
        <a href="tel:+233530903678">(+233) (0) 53-090-3678</a>
        <img src={contactImg} alt="woman sitting with children" />
      </div>
      <form className={styles.form}>
        <header className={styles["form-header"]}>
          <h1>Get in Touch</h1>
          <p>You can reach anytime</p>
        </header>
        <div className={styles.inputs}>
          <div className={styles.names}>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              required
            />
          </div>
          <div className={styles.email}>
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <input type="email" name="email" placeholder="email" required />
          </div>
          <CustomPhoneInput
            className={styles["phone-class"]}
            inputClassName={styles["phone-input"]}
            value={phone}
            onSetPhone={changePhoneInput}
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Send us your message"
            required
          />
          <button className={`btn--main ${styles["submit-btn"]}`} type="submit">
            Submit
          </button>
          <p className={styles.message}>
            You contacting us, you give us the chance to <strong>help</strong>{" "}
            the
            <strong> vulnerable</strong> in <strong>Ghana</strong>!!!
          </p>
        </div>
      </form>
    </div>
  );
};

export default Hero;
