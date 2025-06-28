"use client";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  MenuIcon,
  MusicIcon,
  SettingsIcon,
  Users2Icon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonBase } from "@mui/material";

type SidebarProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

export const Sidebar = ({
  isOpen: sidebarOpen = true,
  onToggle: toggleSidebar,
}: SidebarProps) => {
  const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--hover-text)",
          backgroundColor: "var(--color-menu-link-hover)",
        }
      : {};

  return (
    <div
      className={styles["sidebar"]}
      style={{
        width: sidebarOpen ? "280px" : "0px",
        minWidth: sidebarOpen ? "280px" : "0px",
        overflow: sidebarOpen ? "visible" : "hidden",
        transition: "width 0.2s ease, min-width 0.2s ease, overflow 0.2s ease",
        padding: sidebarOpen ? "0 12px" : "0px",
      }}
    >
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["logo-section"]}>
            <div className={styles["logo"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <h1>Planning</h1>
              </Link>
            </div>
            <div className={styles["menu-toggle"]}>
              <ButtonBase
                className={styles["menu-button"]}
                onClick={toggleSidebar}
              >
                <MenuIcon className={styles["menu-icon"]} />
              </ButtonBase>
            </div>
          </div>
          <nav className={styles["nav-section"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link href={"/"} style={getActiveStyle("/")}>
                  <HomeIcon className={styles["icon"]} />
                  <span className={styles["nav-item-label"]}>Overview</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/calendar"} style={getActiveStyle("/calendar")}>
                  <CalendarIcon className={styles["icon"]} />
                  <span className={styles["nav-item-label"]}>Calendar</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/services"} style={getActiveStyle("/services")}>
                  <FolderIcon className={styles["icon"]} />
                  <span className={styles["nav-item-label"]}>Services</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/users"} style={getActiveStyle("/users")}>
                  <Users2Icon className={styles["icon"]} />
                  <span className={styles["nav-item-label"]}>Users</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/music"} style={getActiveStyle("/music")}>
                  <MusicIcon className={styles["icon"]} />
                  <span className={styles["nav-item-label"]}>Music</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/settings"} style={getActiveStyle("/settings")}>
                  <SettingsIcon className={styles["icon"]} />
                  <span className={styles["nav-item-label"]}>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
