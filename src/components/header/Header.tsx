"use client";
import styles from "./Header.module.css";
import { ButtonBase, Divider, Menu, MenuItem } from "@mui/material";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  InfoIcon,
  LanguagesIcon,
  MenuIcon,
  MessageSquareIcon,
  SettingsIcon,
} from "lucide-react";
import { useState } from "react";
import { Theme } from "../theme/Theme";

type HeaderProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

export const Header = ({ isOpen, onToggle: toggleSidebar }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                  onClick={() => {}}
                >
                  <ArrowLeftIcon className={styles["navigation-icon"]} />
                </ButtonBase>
                <ButtonBase
                  className={styles["navigation-button"]}
                  onClick={() => {}}
                >
                  <ArrowRightIcon className={styles["navigation-icon"]} />
                </ButtonBase>
              </div>
            </div>
          </div>
          <div className={styles["right-section"]}>
            <div className={styles["chat-section"]}>
              <ButtonBase className={styles["chat-button"]}>
                <MessageSquareIcon className={styles["chat-icon"]} />
              </ButtonBase>
            </div>
            <div className={styles["notifications-section"]}>
              <ButtonBase className={styles["notifications-button"]}>
                <BellIcon className={styles["bell-icon"]} />
              </ButtonBase>
            </div>
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
                    left: "auto !important",
                    right: "0 !important",
                    borderRadius: "16px !important",
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
                <Divider
                  sx={{
                    "&.MuiDivider-root": {
                      borderColor: "var(--border-default) !important",
                    },
                  }}
                  className={styles["profile-menu-divider"]}
                />
                <MenuItem className={styles["profile-menu-item"]}>
                  <SettingsIcon className={styles["profile-menu-icon"]} />
                  Account Settings
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <LanguagesIcon className={styles["profile-menu-icon"]} />
                  Language
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <Theme />
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <InfoIcon className={styles["profile-menu-icon"]} />
                  About
                </MenuItem>
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "var(--alert-error-bg) !important",
                    },
                  }}
                  className={styles["profile-menu-item"]}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
