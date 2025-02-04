import styles from "./JoinUs.module.css";
import img from "../assets/about-pg-join-us.png";

const JoinUs = () => {
  return (
    <section className={styles.wrapper}>
      <img src={img} className={styles.img} alt="women sitting together" />
      <div className={styles.linear}></div>
      <div className={styles.text}>
        <span>JOIN US</span>
        <span> @ </span>
        <span>RHA</span>
      </div>
    </section>
  );
};

export default JoinUs;
