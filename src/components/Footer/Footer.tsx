import React from "react";
import nextLogo from "../../assets/images/nextLogo.png";
import facebookLogo from "../../assets/icons/facebook.png";
import instagramLogo from "../../assets/icons/instagram.png";
import twitterLogo from "../../assets/icons/twitter.png";
import linkedinLogo from "../../assets/icons/linkedin.png";
import youtubeLogo from "../../assets/icons/youtube.png";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={nextLogo} alt="Next Movies" />
      <span className={`${styles.text} ${styles.contactUs}`}>Contact us</span>
      <div className={`${styles.support} ${styles.text}`}>
        <a href="mailto:support@nextmovies.com">support@nextmovies.com</a>
        <span>Mon - Fri | 6:00am - 5:00 pm PT</span>
      </div>
      <div className={styles.logos}>
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebookLogo} alt="facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagramLogo} alt="instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src={twitterLogo} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <img src={linkedinLogo} alt="linkedin" />
        </a>
        <a
          className={styles.logo}
          href="https://www.youtube.com"
          target="_blank"
        >
          <img src={youtubeLogo} alt="youtube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
