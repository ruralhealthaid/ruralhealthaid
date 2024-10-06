import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/home">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <Link to="/home">HOME</Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/programs">PROGRAMS</Link>
        <Link to="/contact-us">CONTACT US</Link>
      </nav>
      <Link to="/donate" className={styles.donate}>
        <button className="btn--main">DONATE</button>
      </Link>
    </header>
  );
};

export default Header;
