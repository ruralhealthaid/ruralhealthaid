import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";
// import { Modal } from "@material-ui/core";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  return (
    <>
      {showMobileNav && (
        <Modal onClose={() => setShowMobileNav(false)}>
          <nav className={styles["mobile-view"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles["close-btn"]}
              onClick={() => setShowMobileNav(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <Link to="/home">HOME</Link>
            <Link to="/about-us">ABOUT US</Link>
            <Link to="/programs">PROGRAMS</Link>
            <Link to="/contact-us">CONTACT US</Link>
            <Link to="/partnership" className={styles.donate}>
              PARTNERSHIP
            </Link>
          </nav>
        </Modal>
      )}

      <header className={styles.header}>
        <Link to="/home">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <nav className={styles.nav}>
          <Link to="/home">HOME</Link>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/programs">PROGRAMS</Link>
          <Link to="/contact-us">CONTACT US</Link>
          <Link to="/partnership " className={styles.donate}>
            PARTNERSHIP
          </Link>
        </nav>

        {!showMobileNav && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.bars}
            onClick={() => setShowMobileNav(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </header>
    </>
  );
};

export default Header;
