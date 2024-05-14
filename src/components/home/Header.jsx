import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo-cropped.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/home">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
      <nav className={styles.nav}>
        <a href="/home">HOME</a>
        <a href="/about-us">ABOUT US</a>
        <a href="/projects">OUR PROJECTS</a>
        <a href="/join-us">JOIN US</a>
        <a href="/contact-us">CONTACT US</a>
      </nav>

      <button className="btn">DONATE</button>
    </header>
  );
};

export default Header;
