import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext, useState } from "react";
import styles from "./Theme.module.css";
import { SunIcon, MoonIcon, ChevronRightIcon } from "lucide-react";
import { ButtonBase, Menu, MenuItem } from "@mui/material";

export const Theme = () => {
  const { setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleThemeChange = (theme: string) => {
    if (theme === "light") {
      setLightTheme?.();
    } else if (theme === "dark") {
      setDarkTheme?.();
    }
    handleMenuClose();
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div className={styles["theme-container"]}>
      <ButtonBase
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        className={styles["theme-button"]}
        onClick={handleMenuOpen}
      >
        <span className={styles["theme-text"]}>Change Theme</span>
        <ChevronRightIcon className={styles["theme-icon"]} />
      </ButtonBase>
      <Menu
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "var(--bg-menu)",
            color: "var(--text-default)",
            width: "12rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            padding: "4px",
          },
          "& .MuiMenu-list": {
            padding: "0",
          },
          "& .MuiMenuItem-root": {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
            padding: "12px 8px 12px 12px",
            "&:hover": {
              backgroundColor: "var(--bg-hover)",
            },
            "&.MuiList-root": {
              padding: "0.5rem 1rem",
            },
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        className={styles["theme-menu"]}
      >
        <MenuItem
          className={styles["theme-menu-item"]}
          onClick={() => handleThemeChange("light")}
        >
          <SunIcon className={styles["theme-icon"]} />
          <span className={styles["theme-label"]}>Light Theme</span>
        </MenuItem>
        <MenuItem
          className={styles["theme-menu-item"]}
          onClick={() => handleThemeChange("dark")}
        >
          <MoonIcon className={styles["theme-icon"]} />
          <span className={styles["theme-label"]}>Dark Theme</span>
        </MenuItem>
      </Menu>
    </div>
  );
};
