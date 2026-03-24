import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { HorizontalLine, ToggleThemeButton } from "./elements";

import styles from "./Footer.module.css";

// Footer Elements Should be raised to first class citizens
const Footer = () => {
  return (
    <div>
      <HorizontalLine />
      <div id="footer" className={styles.Footer}>
        <a href="https://rexgreenway.github.io/">
          Website designed and maintained by Rex Greenway
        </a>
        <div className={styles.Links}>
          <a href="https://github.com/RexGreenway/">
            <GitHubIcon className={styles.Link} />
          </a>
          <a href="https://www.linkedin.com/in/rexgreenway/">
            <LinkedInIcon className={styles.Link} />
          </a>
          <a href="https://www.instagram.com/rexgreenway/">
            <InstagramIcon className={styles.Link} />
          </a>

          <ToggleThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
