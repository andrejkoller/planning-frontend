import { ButtonBase } from "@mui/material";
import styles from "./AppSwitcher.module.css";
import { LayoutGridIcon } from "lucide-react";

export const AppSwitcher = () => {
  return (
    <ButtonBase className={styles["app-switcher"]}>
      <LayoutGridIcon className={styles["app-switcher-icon"]} />
    </ButtonBase>
  );
};
