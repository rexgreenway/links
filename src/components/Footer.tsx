import { Line, ToggleThemeButton } from "./elements";

import styles from "./Footer.module.css";

// Footer Elements Should be raised to first class citizens
// Add titles to these links!!
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ToggleThemeButton />
      <Line />
      <a href="https://rexgreenway.me/" className={styles.Credits}>
        Designed and maintained by Rex Greenway
      </a>
    </footer>
  );
};

export default Footer;
