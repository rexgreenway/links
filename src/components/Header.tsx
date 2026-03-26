import RexLogo from "../assets/rex-logo.svg?react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="header" className={styles.Header}>
      <RexLogo />
      <h1>Rex Greenway</h1>
    </header>
  );
};

export default Header;
