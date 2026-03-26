import styles from "./Line.module.css";

/**
 * A thin straight line element used as a visual separator between items in a flex container.
 *
 * @returns {JSX.Element} A span element styled as a horizontal or vertical line divider.
 */
export const Line = () => {
  return <span className={styles.Line} />;
};
