import { useTheme } from "@contexts";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>BUTTON</button>;
};
