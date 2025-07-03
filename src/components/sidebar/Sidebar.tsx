"use client";
import {
  CalendarIcon,
  FolderIcon,
  LayoutGridIcon,
  SettingsIcon,
  Users2Icon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "@mui/material";

export const Sidebar = () => {
  const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--text-default)",
          backgroundColor: "var(--link-hover-bg)",
        }
      : {};

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <nav className={styles["nav-section"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link href={"/"} style={getActiveStyle("/")}>
                  <Tooltip title="Dashboard" placement="right">
                    <LayoutGridIcon className={styles["icon"]} />
                  </Tooltip>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/calendar"} style={getActiveStyle("/calendar")}>
                  <Tooltip title="Calendar" placement="right">
                    <CalendarIcon className={styles["icon"]} />
                  </Tooltip>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/services"} style={getActiveStyle("/services")}>
                  <Tooltip title="Services" placement="right">
                    <FolderIcon className={styles["icon"]} />
                  </Tooltip>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/users"} style={getActiveStyle("/users")}>
                  <Tooltip title="Users" placement="right">
                    <Users2Icon className={styles["icon"]} />
                  </Tooltip>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/settings"} style={getActiveStyle("/settings")}>
                  <Tooltip title="Settings" placement="right">
                    <SettingsIcon className={styles["icon"]} />
                  </Tooltip>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles["profile-section"]}>
            <Link href={"/profile"} className={styles["profile-link"]}>
              <div className={styles["profile"]}>
                <h2 className={styles["profile-logo"]}>A</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
