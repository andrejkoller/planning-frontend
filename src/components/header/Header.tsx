"use client";
import styles from "./Header.module.css";
import { ButtonBase, Divider, Menu, MenuItem } from "@mui/material";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InfoIcon,
  LanguagesIcon,
  MenuIcon,
  SettingsIcon,
} from "lucide-react";
import { useNavigationHistory } from "@/hooks/UseNavigationHistory";
import { useState } from "react";
import { Theme } from "@/components/theme/Theme";

type HeaderProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

export const Header = ({ isOpen, onToggle: toggleSidebar }: HeaderProps) => {
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

  const handleMenuToggle = () => {
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["left-section"]}>
            {!isOpen && (
              <div className={styles["menu-toggle"]}>
                <ButtonBase
                  className={styles["menu-button"]}
                  onClick={handleMenuToggle}
                >
                  <MenuIcon className={styles["menu-icon"]} />
                </ButtonBase>
              </div>
            )}
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
            <div className={styles["profile-section"]}>
              <ButtonBase
                className={styles["profile-button"]}
                onClick={handleClick}
              >
                <div className={styles["profile"]}>
                  <h2 className={styles["profile-logo"]}>AK</h2>
                </div>
              </ButtonBase>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    top: "64px !important",
                    borderRadius: "10px !important",
                    padding: "8px !important",
                    width: "260px !important",
                    color: "var(--text-default) !important",
                    backgroundColor: "var(--bg-menu) !important",
                  },
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px !important",
                    padding: "0 !important",
                  },
                }}
                className={styles["profile-menu"]}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <div className={styles["profile-menu-header"]}>
                  <div className={styles["profile-menu-avatar"]}>
                    <h2 className={styles["profile-menu-logo"]}>AK</h2>
                  </div>
                  <span className={styles["profile-menu-name"]}>
                    Andrej Koller
                  </span>
                </div>
                <Divider className={styles["profile-menu-divider"]} />
                <MenuItem className={styles["profile-menu-item"]}>
                  <SettingsIcon className={styles["profile-menu-icon"]} />
                  <span className={styles["profile-menu-text"]}>
                    Account Settings
                  </span>
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <LanguagesIcon className={styles["profile-menu-icon"]} />
                  <span className={styles["profile-menu-text"]}>Language</span>
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <Theme />
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <InfoIcon className={styles["profile-menu-icon"]} />
                  <span className={styles["profile-menu-text"]}>About</span>
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <span className={styles["profile-menu-text"]}>Logout</span>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
