"use client";
import styles from "./Header.module.css";
import { ButtonBase, Menu, MenuItem } from "@mui/material";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
  ExternalLinkIcon,
  UserPlus2Icon,
} from "lucide-react";
import { useNavigationHistory } from "@/hooks/UseNavigationHistory";
import { useState } from "react";
import { Theme } from "../theme/Theme";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { canGoBack, canGoForward, goBack, goForward } = useNavigationHistory();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (direction: "left" | "right") => {
    if (direction === "left" && canGoBack) {
      goBack();
    } else if (direction === "right" && canGoForward) {
      goForward();
    }
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["left-section"]}>
            <div className={styles["navigation-section"]}>
              <div className={styles["navigation-buttons"]}>
                <ButtonBase
                  className={styles["navigation-button"]}
                  onClick={() => handleNavigation("left")}
                  disabled={!canGoBack}
                  sx={{
                    opacity: canGoBack ? 1 : 0.5,
                    pointerEvents: canGoBack ? "auto" : "none",
                  }}
                >
                  <ChevronLeftIcon className={styles["navigation-icon"]} />
                </ButtonBase>
                <ButtonBase
                  className={styles["navigation-button"]}
                  onClick={() => handleNavigation("right")}
                  disabled={!canGoForward}
                  sx={{
                    opacity: canGoForward ? 1 : 0.5,
                    pointerEvents: canGoForward ? "auto" : "none",
                  }}
                >
                  <ChevronRightIcon className={styles["navigation-icon"]} />
                </ButtonBase>
              </div>
            </div>
          </div>
          <div className={styles["right-section"]}>
            <div className={styles["invite-section"]}>
              <ButtonBase className={styles["invite-button"]}>
                <UserPlus2Icon className={styles["invite-icon"]} />
                <span className={styles["invite-text"]}>Invite / 1</span>
              </ButtonBase>
            </div>
            <div className={styles["options-section"]}>
              <ButtonBase
                className={styles["options-button"]}
                onClick={handleClick}
              >
                <EllipsisIcon className={styles["options-icon"]} />
              </ButtonBase>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    top: "64px !important",
                    left: "auto !important",
                    right: "0 !important",
                    borderRadius: "8px !important",
                    padding: "4px !important",
                    minWidth: "196px !important",
                    color: "var(--text-default) !important",
                    backgroundColor: "var(--bg-main) !important",
                  },
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px !important",
                    padding: "0 !important",
                  },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem className={styles["menu-item"]}>
                  <span className={styles["menu-text"]}>Profile</span>
                </MenuItem>
                <MenuItem className={styles["menu-item"]}>
                  <span className={styles["menu-text"]}>Support</span>
                  <ExternalLinkIcon className={styles["menu-icon"]} />
                </MenuItem>
                <MenuItem className={styles["menu-item"]}>
                  <Theme />
                </MenuItem>
                <MenuItem className={styles["menu-item"]}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
