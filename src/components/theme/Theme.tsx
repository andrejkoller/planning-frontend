import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext } from "react";
import styles from "./Theme.module.css";
import { styled, Switch, SwitchProps } from "@mui/material";
import { SunIcon, MoonIcon } from "lucide-react";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        border: 0,
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.grey[600]
          : theme.palette.grey[100],
      opacity: theme.palette.mode === "dark" ? 0.3 : 0.7,
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "dark" ? "#39393D" : "#E9E9EA",
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const Theme = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDarkTheme?.();
    } else {
      setLightTheme?.();
    }
  };

  return (
    <div className={styles["theme-container"]}>
      <div className={styles["theme-icon"]}>
        {theme === "light" ? (
          <SunIcon className={styles["theme-icon-sun"]} />
        ) : (
          <MoonIcon className={styles["theme-icon-moon"]} />
        )}
        <span className={styles["theme-text"]}>Dark Mode</span>
      </div>
      <IOSSwitch checked={theme === "dark"} onChange={handleThemeChange} />
    </div>
  );
};
