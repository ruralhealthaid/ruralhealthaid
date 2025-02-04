import styles from "./Hero.module.css";
import heroImg from "../assets/about-us-bg.png";
import Header from "../ui/Header";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <img
        src={heroImg}
        className={styles.bg}
        alt="people putting hands together"
      />
      <div className={styles["linear-box"]}></div>
      <div className={styles.heading}>
        <h1>About Us</h1>
      </div>
    </section>
  );
};

export default Hero;
