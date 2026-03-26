import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import styles from "./Links.module.css";

const Links = () => {
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

export default Links;
