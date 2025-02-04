import styles from "./Footer.module.css";
import logoImg from "../assets/logo.png";
import facebookLogo from "../assets/prime_facebook.png";
import xLogo from "../assets/prime_twitter.png";
import instagramLogo from "../assets/dashicons_instagram.png";
import linkedLogo from "../assets/mage_linkedin.png";
import youtubeLogo from "../assets/logos_youtube.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles["logo-socials"]}>
          <img
            className={styles["logo-img"]}
            src={logoImg}
            alt="Rural Health Aid"
          />
          <hr className={styles.hr} />
          <div className={styles.socials}>
            <img className={styles.social} src={facebookLogo} alt="facebook" />
            <img className={styles.social} src={xLogo} alt="X" />
            <Link
              to={
                "https://www.instagram.com/ruralhealthaid?igsh=Zmdhcm53dDBiN2N6"
              }
              target="_blanc"
            >
              <img
                className={styles.social}
                src={instagramLogo}
                alt="instagram"
              />
            </Link>
            <img className={styles.social} src={linkedLogo} alt="LinkedIn" />
            <Link
              to={"https://youtube.com/@ruralhealthaid?si=XoKbU8Tk0jrVfstI"}
              target="_blanc"
            >
              <img className={styles.social} src={youtubeLogo} alt="youtube" />
            </Link>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link to="/home">HOME</Link>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/programs">PROGRAMS</Link>
          <Link to="/contact-us">CONTACT US</Link>
          <Link to="/donate" className={styles.donate}>
            PARTNERSHIP
          </Link>
        </nav>
      </div>
      <hr />
      <div className={styles.copyright}>
        <p>&copy; 2024 Rural Health Aid, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
