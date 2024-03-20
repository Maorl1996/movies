import React from "react";
import nextMovies from "../../assets/images/nextMovies.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={nextMovies} alt="Next Movies" />
    </header>
  );
};

export default Header;
