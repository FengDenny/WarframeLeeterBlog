import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleAction } from "../../../redux/slice/ThemeTogglerSlice";
export const useLightTheme = () => {
  // Sets Default Theme Based on Browser Preferences
  const initialTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const dispatch = useDispatch();

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "color-theme",
      theme ? "light" : "dark"
    );
    dispatch(toggleAction.isToggled(theme));
  }, [theme]);

  const toggleLightMode = () => {
    setTheme(!theme);
  };

  return { theme, toggleLightMode };
};
