import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import styles from "./QuickLinks.module.css";

const QuickLinks = () => {
  return (
    <section className={styles.Links}>
      <a href="https://github.com/RexGreenway/">
        <GitHubIcon className={styles.Link} />
      </a>
      <a href="https://www.linkedin.com/in/rexgreenway/">
        <LinkedInIcon className={styles.Link} />
      </a>
      <a href="https://www.instagram.com/rexgreenway/">
        <InstagramIcon className={styles.Link} />
      </a>
    </section>
  );
};

export default QuickLinks;
