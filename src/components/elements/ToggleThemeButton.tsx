import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useTheme } from "@contexts";

import styles from "./ToggleThemeButton.module.css";

export const ToggleThemeButton = ({ icon = true }: { icon?: boolean }) => {
  const { theme, toggleTheme } = useTheme();

  if (icon) {
    return (
      <div onClick={toggleTheme} className={styles.Toggle}>
        {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    );
  }

  return <button onClick={toggleTheme}>BUTTON</button>;
};
