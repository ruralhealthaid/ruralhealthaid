import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contacts}>
        <p className={styles["header--loc"]}>Our Location</p>
        <h1 className={styles["main-header"]}>Connect with Us</h1>
        <h4>Headquarters</h4>
        <p className={styles.location}>
          Rural Health Aid (RHA)
          <br /> BLK 8E, SSNIT Flats,
          <br />
          Tamale,
          <br /> Northern Region,
          <br /> Ghana,
          <br /> West Africa.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
