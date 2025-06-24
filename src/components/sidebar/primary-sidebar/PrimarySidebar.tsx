"use client";
import { BellIcon, Grip, LayoutDashboardIcon } from "lucide-react";
import styles from "./PrimarySidebar.module.css";
import { ButtonBase, Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const PrimarySidebar = () => {
  const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--foreground)",
          backgroundColor: "var(--link-active-background)",
        }
      : {};

  return (
    <aside className={styles["primary-sidebar"]}>
      <div className={styles["primary-sidebar-container"]}>
        <div className={styles["primary-sidebar-content"]}>
          <div className={styles["primary-sidebar-header"]}>
            <div className={styles["logo-section"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <span className={styles["logo-text"]}>P</span>
              </Link>
            </div>
          </div>
          <div className={styles["primary-sidebar-body"]}>
            <nav className={styles["nav-section"]}>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Overview" placement="right">
                    <Link href={"/"} style={getActiveStyle("/")}>
                      <LayoutDashboardIcon className={styles["icon"]} />
                    </Link>
                  </Tooltip>
                </li>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Notifications" placement="right">
                    <Link
                      href={"/notifications"}
                      style={getActiveStyle("/notifications")}
                    >
                      <BellIcon className={styles["icon"]} />
                    </Link>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles["primary-sidebar-footer"]}>
            <div className={styles["apps-section"]}>
              <ButtonBase className={styles["apps-button"]}>
                <span className={styles["icon"]}>
                  <Grip />
                </span>
              </ButtonBase>
            </div>
            <div className={styles["profile-section"]}>
              <Link href={"/profile"} className={styles["profile-button"]}>
                <div className={styles["profile"]}>
                  <h2 className={styles["profile-name"]}>A</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
