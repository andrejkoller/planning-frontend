import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { ChevronRightIcon, MoonIcon, SunIcon } from "lucide-react";
import { useContext, useState } from "react";
import styles from "./Theme.module.css";
import { ButtonBase, Menu, MenuItem } from "@mui/material";

export const Theme = () => {
  const { setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (selectedTheme: "light" | "dark") => {
    if (selectedTheme === "light") {
      setLightTheme?.();
    } else {
      setDarkTheme?.();
    }
  };

  return (
    <div className={styles["theme-container"]}>
      <ButtonBase
        className={styles["theme-button"]}
        onClick={handleClick}
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <span className={styles["theme-label"]}>Change Theme</span>
        <ChevronRightIcon className={styles["theme-chevron"]} />
      </ButtonBase>
      <Menu
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "8px !important",
            padding: "4px !important",
            minWidth: "196px !important",
            color: "var(--text-default) !important",
            backgroundColor: "var(--bg-main) !important",
            transform: "translate(-190px, -44px) !important",
          },
          "& .MuiList-root": {
            display: "flex",
            flexDirection: "column",
            gap: "4px !important",
            padding: "0 !important",
          },
        }}
        className={styles["theme-menu"]}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleThemeChange("light")}
          className={styles["theme-item"]}
        >
          <SunIcon className={styles["theme-icon"]} />
          <span>Light</span>
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange("dark")}
          className={styles["theme-item"]}
        >
          <MoonIcon className={styles["theme-icon"]} />
          <span>Dark</span>
        </MenuItem>{" "}
      </Menu>
    </div>
  );
};
