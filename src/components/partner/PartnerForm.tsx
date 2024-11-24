import { FormEvent } from "react";
import styles from "./PartnerForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { postPartnerRequest } from "../../utils/http/http";
import { PartnerRequestType } from "../../types/types";
import Spinner from "../ui/Spinner";

const DonateForm = () => {
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: postPartnerRequest,
  });

  isError && console.log("Error: ", error);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fd = Object.fromEntries(formData);
    const data = {
      ...fd,
    } as PartnerRequestType;
    mutate(data);
  };

  return (
    <section id="donate-form" className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          <span className={styles["violet-text"]}>Be A </span>
          <span>Partner</span>
        </h2>
        <div className={styles.underline}></div>
      </header>
      <form
        id="donate-form"
        className={styles.form}
        onSubmit={formSubmitHandler}
      >
        {isSuccess && (
          <p className={styles.success}>
            Thank you for contacting us
            <br />
            Our team will reach out to you shortly
          </p>
        )}
        {isError && (
          <p className="error-block">Error sending message. please try again</p>
        )}
        {isPending && (
          <div className="modal">
            <Spinner />
          </div>
        )}
        <>
          <div className={styles["col--2"]}>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="firstName">Name of Company</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
              />
            </div>
            <div className={styles["input-wrapper"]}>
              <label htmlFor="lastName">Name of contact person</label>
              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person's Name"
                required
              />
            </div>
          </div>
          <div className={styles["input-wrapper"]}>
            <label htmlFor="email">Contact Person's Email</label>
            <input
              type="email"
              name="contactEmail"
              placeholder="Contact Person's Email"
              required
            />
          </div>

          <div className={styles["input-wrapper"]}>
            <label htmlFor="amount">Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="message"
              required
            />
          </div>

          <button type="submit" className={styles["btn--submit"]}>
            Send Message
          </button>
          <p className={styles["thank-you"]}>
            We are very much grateful to you for your Donation
          </p>
        </>
      </form>
    </section>
  );
};

export default DonateForm;
