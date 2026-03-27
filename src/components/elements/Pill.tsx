import type { ReactNode } from "react";

import styles from "./Pill.module.css";

export const Pill = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) => {
  return href ? (
    <a href={href} className={styles.Pill}>
      {children}
    </a>
  ) : (
    <div className={styles.Pill}>{children}</div>
  );
};
