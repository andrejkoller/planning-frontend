import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { ButtonBase, Menu, MenuItem } from "@mui/material";
import { ChevronRightIcon, MoonIcon, SunIcon } from "lucide-react";
import { useContext, useState } from "react";
import styles from "./Theme.module.css";

export const Theme = () => {
  const { setLightTheme, setDarkTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles["theme-container"]}>
      <ButtonBase onClick={handleToggleMenu} className={styles["theme-button"]}>
        <span>Change Theme</span>
        <ChevronRightIcon className={styles["chevron-icon"]} />
      </ButtonBase>
      <Menu
        className={styles["theme-menu"]}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            setLightTheme?.();
            handleClose();
          }}
        >
          <SunIcon className={styles["theme-icon"]} />
          <span className={styles["theme-text"]}>Light Theme</span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDarkTheme?.();
            handleClose();
          }}
        >
          <MoonIcon className={styles["theme-icon"]} />
          <span className={styles["theme-text"]}>Dark Theme</span>
        </MenuItem>
      </Menu>
    </div>
  );
};
