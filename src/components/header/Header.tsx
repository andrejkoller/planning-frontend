"use client";
import { ButtonBase, Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import styles from "./Header.module.css";
import { EllipsisIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Theme } from "../theme/Theme";
import Link from "next/link";

type PageInfo = {
  title: string;
  subtitle?: string;
};

export const Header = () => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const pageMapping: Record<string, PageInfo> = {
    "/": {
      title: "Dashboard",
      subtitle: "Overview of your church activities",
    },
    "/services": {
      title: "Church Event Planning",
      subtitle: "Manage your services",
    },
    "/services/planning-overview": {
      title: "Planning Overview",
      subtitle: "Overview of all planning activities",
    },
    "/services/calendar": {
      title: "Calendar",
      subtitle: "View and manage your calendar",
    },
    "/users": {
      title: "Users",
      subtitle: "Manage your church members",
    },
    "/settings": {
      title: "Settings",
      subtitle: "Configure your church application",
    },
    "/messages": {
      title: "Messages",
      subtitle: "Communicate with your church members",
    },
  };

  const currentPage = pageMapping[pathname] || {
    title: "Planning",
    subtitle: "Church planning application",
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["left-section"]}>
            <div className={styles["page-title"]}>
              <h1 className={styles["title"]}>{currentPage.title}</h1>
            </div>
          </div>
          <div className={styles["right-section"]}>
            <div className={styles["options"]}>
              <ButtonBase
                className={styles["option-button"]}
                onClick={handleMenuOpen}
              >
                <Tooltip title="More options" placement="bottom">
                  <EllipsisIcon className={styles["option-icon"]} />
                </Tooltip>
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
                    justifyContent: "space-between",
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
                className={styles["options-menu"]}
              >
                <MenuItem onClick={() => {}}>
                  <Link
                    href={"/settings"}
                    className={styles["menu-item-label"]}
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => {}}>
                  <Link href={"/help"} className={styles["menu-item-label"]}>
                    Help
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => {}}>
                  <Theme />
                </MenuItem>
                <Divider
                  sx={{
                    "&.MuiDivider-root": {
                      margin: "0",
                      backgroundColor: "var(--border-default)",
                    },
                  }}
                />
                <MenuItem onClick={() => {}}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
