import {
  Terminal,
  CameraRoll,
  GitHub,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

import { Pill, Section } from "./elements";

import styles from "./Links.module.css";

const SoftwareLink = () => {
  return (
    <Pill href="https://rexgreenway.me">
      <Terminal />
      <h2>Software</h2>
    </Pill>
  );
};

const PhotographyLink = () => {
  return (
    <Pill href="https://rexgreenway.me/#/portfolio">
      <CameraRoll />
      <h2>Photography</h2>
    </Pill>
  );
};

export const Links = () => {
  return (
    <Section id="links" className={styles.Links}>
      <SoftwareLink />
      <PhotographyLink />
    </Section>
  );
};

export const QuickLinks = () => {
  return (
    <Section id="quick-links" className={styles.QuickLinks}>
      <a href="https://github.com/RexGreenway/">
        <GitHub className={styles.Link} />
      </a>
      <a href="https://www.linkedin.com/in/rexgreenway/">
        <LinkedIn className={styles.Link} />
      </a>
      <a href="https://www.instagram.com/rexgreenway/">
        <Instagram className={styles.Link} />
      </a>
    </Section>
  );
};
