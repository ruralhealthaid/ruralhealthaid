import React, { FormEvent, useState } from "react";
import styles from "./Hero.module.css";
import contactImg from "../assets/contact-img.png";
import "react-international-phone/style.css";
import CustomPhoneInput from "../ui/CustomPhoneInput";
import { postContactUs } from "../../utils/http/http";
import { useMutation } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import { ContactUsType } from "../../types/types";

const Hero = () => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: postContactUs,
  });

  const [phone, setPhone] = useState<string | undefined>(undefined);
  const changePhoneInput = (phone: string) => {
    setPhone(phone);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    if (!phone) return;
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fd = Object.fromEntries(formData);
    const data = {
      ...fd,
      phoneNumber: phone,
    } as ContactUsType;
    mutate(data);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.desc}>
        <h1>Contact Us</h1>
        <p>
          Email, call or complete the form below to learn more about Rural
          HealthAid (RHAI) and support our work.
        </p>

        <a href="mailto:info@rhai.org">info@rhai.org</a>
        <a href="tel:+233530903678">(+233) (0) 53-090-3678</a>
        <img src={contactImg} alt="woman sitting with children" />
      </div>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        {isPending && (
          <div className="modal">
            <Spinner />
          </div>
        )}

        <>
          <header className={styles["form-header"]}>
            <h1>Get in Touch</h1>
            <p>You can reach anytime</p>
            {isSuccess && (
              <p className={styles.success}>
                Thank you for contacting us
                <br />
                Our team will reach out to you shortly
              </p>
            )}
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
            <button
              className={`btn--main ${styles["submit-btn"]}`}
              type="submit"
            >
              Submit
            </button>
            {isError && (
              <p className="error-block">
                Error sending message. please try again
              </p>
            )}
            <p className={styles.message}>
              You contacting us, gives us the chance to <strong>help</strong>{" "}
              the
              <strong> vulnerable</strong> in <strong>Ghana</strong>!!!
            </p>
          </div>
        </>
      </form>
    </div>
  );
};

export default Hero;
