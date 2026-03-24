import RexLogo from "../assets/rex-logo.svg?react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div id="header" className={styles.Header}>
      <div className={styles.Logo}>
        <RexLogo />
      </div>
      <h1>Rex Greenway</h1>
    </div>
  );
};

export default Header;
