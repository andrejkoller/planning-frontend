"use client";
import {
  BoxesIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ClipboardListIcon,
  FileTextIcon,
  Grip,
  LayoutDashboardIcon,
  Users2Icon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import { ButtonBase, Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "#ffffff",
          backgroundColor: "var(--link-active-background)",
        }
      : {};

  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["sidebar-header"]}>
            <div className={styles["logo-section"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <span className={styles["logo-text"]}>P</span>
              </Link>
            </div>
          </div>
          <div className={styles["sidebar-body"]}>
            <nav className={styles["nav-section"]}>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Overview" placement="right">
                    <Link href={"/"} style={getActiveStyle("/")}>
                      <LayoutDashboardIcon className={styles["icon"]} />
                      {isActive("/") && (
                        <ChevronLeftIcon className={styles["chevron-icon"]} />
                      )}
                    </Link>
                  </Tooltip>
                </li>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Service Plans" placement="right">
                    <Link
                      href={"/service-plans"}
                      style={getActiveStyle("/service-plans")}
                    >
                      <ClipboardListIcon className={styles["icon"]} />
                      {isActive("/service-plans") && (
                        <ChevronLeftIcon className={styles["chevron-icon"]} />
                      )}
                    </Link>
                  </Tooltip>
                </li>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Calendar" placement="right">
                    <Link
                      href={"/calendar"}
                      style={getActiveStyle("/calendar")}
                    >
                      <CalendarDaysIcon className={styles["icon"]} />
                      {isActive("/calendar") && (
                        <ChevronLeftIcon className={styles["chevron-icon"]} />
                      )}
                    </Link>
                  </Tooltip>
                </li>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Teams" placement="right">
                    <Link href={"/teams"} style={getActiveStyle("/teams")}>
                      <Users2Icon className={styles["icon"]} />
                      {isActive("/teams") && (
                        <ChevronLeftIcon className={styles["chevron-icon"]} />
                      )}
                    </Link>
                  </Tooltip>
                </li>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Resources" placement="right">
                    <Link
                      href={"/resources"}
                      style={getActiveStyle("/resources")}
                    >
                      <BoxesIcon className={styles["icon"]} />
                      {isActive("/resources") && (
                        <ChevronLeftIcon className={styles["chevron-icon"]} />
                      )}
                    </Link>
                  </Tooltip>
                </li>
                <li className={styles["nav-item"]}>
                  <Tooltip title="Documents" placement="right">
                    <Link
                      href={"/documents"}
                      style={getActiveStyle("/documents")}
                    >
                      <FileTextIcon className={styles["icon"]} />
                      {isActive("/documents") && (
                        <ChevronLeftIcon className={styles["chevron-icon"]} />
                      )}
                    </Link>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles["sidebar-footer"]}>
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
