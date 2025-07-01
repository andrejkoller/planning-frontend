import { ButtonBase } from "@mui/material";
import styles from "./AppSwitcher.module.css";
import { AppWindowIcon } from "lucide-react";

export const AppSwitcher = () => {
  return (
    <ButtonBase
      className={styles["app-switcher"]}
      onClick={() => {
        // Logic to toggle app switcher visibility can be added here
      }}
    >
      <AppWindowIcon className={styles["app-switcher-icon"]} />
    </ButtonBase>
  );
};
