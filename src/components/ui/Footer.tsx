import React, { FormEvent } from "react";
import styles from "./Footer.module.css";
import logoImg from "../assets/logo.png";
import facebookLogo from "../assets/prime_facebook.png";
import xLogo from "../assets/prime_twitter.png";
import instagramLogo from "../assets/dashicons_instagram.png";
import linkedLogo from "../assets/mage_linkedin.png";
import youtubeLogo from "../assets/logos_youtube.png";

const Footer = () => {
  const sendEmailHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <footer className={styles.footer}>
      <ul className={styles["main-ul"]}>
        <li className={`${styles["logo-column"]} ${styles.column}`}>
          <div className={styles["logo-wrapper"]}>
            <img className={styles.logo} src={logoImg} alt="Rural HealthAid" />
            <hr className={styles.hr} />
            <div className={styles.socials}>
              <img
                className={styles.social}
                src={facebookLogo}
                alt="facebook"
              />
              <img className={styles.social} src={xLogo} alt="X" />
              <img
                className={styles.social}
                src={instagramLogo}
                alt="instagram"
              />
              <img className={styles.social} src={linkedLogo} alt="LinkedIn" />
              <img className={styles.social} src={youtubeLogo} alt="youtube" />
            </div>
          </div>
          <ul className={styles["contact-ul"]}>
            <h5>Connect with us</h5>
            <li className={styles["contact-li"]}>
              <span className={styles["contact-header"]}>Email: </span>
              <span className={styles["contact-body"]}>
                ruralhealthaid8@gmail.com
              </span>
            </li>
            <li className={styles["contact-li"]}>
              <span className={styles["contact-header"]}>Website: </span>
              <span className={styles["contact-body"]}>
                www.ruralhealthaid.org
              </span>
            </li>
            <li className={styles["contact-li"]}>
              <div>
                <span className={styles["contact-header"]}>Phone: </span>
                <span className={styles["contact-body"]}>0302123456</span>
              </div>

              <div>
                <span className={styles["contact-header"]}>Mobile: </span>
                <span className={styles["contact-body"]}>0248432154</span>
              </div>
            </li>
            <li className={styles["contact-li"]}>
              <span className={styles["contact-header"]}>Address: </span>
              <span className={styles["contact-body"]}>
                BLK 8E, SSNIT Flats, Tamale, Northern Region, Ghana.
              </span>
            </li>
          </ul>
        </li>
        <li className={styles.column}>
          <ul className={styles["column-ul"]}>
            <h5>About Us</h5>
            <li className={styles["site-link"]}>
              <a href="/about/#mission">Mission</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/about/#vision">Vision</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/about/#core-values">Core Values</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/programs">Programs</a>
            </li>

            <li className={styles["site-link"]}>
              <a href="/about/team"> Team </a>
            </li>
          </ul>
        </li>

        <li className={styles.column}>
          <ul className={styles["column-ul"]}>
            <h5>Programs</h5>

            <li className={styles["site-link"]}>
              <a href="/programs">Maternal Health Clinics</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/programs">Health Education Workshops</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/programs">Mobile Health Units</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/programs">Community Outreach</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/programs">Advocacy and Policy Engagement</a>
            </li>
            <li className={styles["site-link"]}>
              <a href="/programs">Child Health and Nutrition</a>
            </li>
          </ul>
        </li>

        <li className={styles.column}>
          <form onSubmit={sendEmailHandler} className={styles.form}>
            <h5>Connect us urgently for us to talk</h5>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        </li>
      </ul>
      <hr />
      <div className={styles.copyright}>
        <p>&copy; 2024 Rural HealthAid, All Rights Reserved</p>
        <p>
          Developer:{" "}
          <a href="https://marieloumar-website.vercel.app/">
            Louis Marie Atoluko Ayariga
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
