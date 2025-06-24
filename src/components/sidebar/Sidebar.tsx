"use client";
import {
  BoxesIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ClipboardListIcon,
  FileTextIcon,
  Grip,
  LayoutDashboardIcon,
  SidebarClose,
  SidebarOpen,
  Users2Icon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import { ButtonBase, Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type sidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: sidebarProps) => {
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const isActive = (path: string) => pathname === path;
  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--foreground)",
          backgroundColor: "var(--link-active-background)",
        }
      : {};

  return sidebarOpen ? (
    <aside className={styles["sidebar-expanded"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["sidebar-control"]} onClick={toggleSidebar}>
            <Tooltip title="Close Sidebar" placement="right">
              <span className={styles["toggle-button"]}>
                <SidebarClose className={styles["toggle-icon"]} />
                <span>Menu</span>
              </span>
            </Tooltip>
          </div>
          <nav className={styles["nav-section"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link href={"/"} style={getActiveStyle("/")}>
                  <LayoutDashboardIcon className={styles["icon"]} />
                  <span className={styles["home-text"]}>Overview</span>
                  {isActive("/") && (
                    <ChevronLeftIcon className={styles["chevron-icon"]} />
                  )}
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/calendar"} style={getActiveStyle("/calendar")}>
                  <CalendarDaysIcon className={styles["icon"]} />
                  <span className={styles["home-text"]}>Calendar</span>
                  {isActive("/calendar") && (
                    <ChevronLeftIcon className={styles["chevron-icon"]} />
                  )}
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link
                  href={"/service-plans"}
                  style={getActiveStyle("/service-plans")}
                >
                  <ClipboardListIcon className={styles["icon"]} />
                  <span className={styles["services-text"]}>Schedule</span>
                  {isActive("/service-plans") && (
                    <ChevronLeftIcon className={styles["chevron-icon"]} />
                  )}
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/teams"} style={getActiveStyle("/teams")}>
                  <Users2Icon className={styles["icon"]} />
                  <span className={styles["messages-text"]}>Teams</span>
                  {isActive("/teams") && (
                    <ChevronLeftIcon className={styles["chevron-icon"]} />
                  )}
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <a href={"/resources"} style={getActiveStyle("/resources")}>
                  <BoxesIcon className={styles["icon"]} />
                  <span className={styles["resources-text"]}>Resources</span>
                  {isActive("/resources") && (
                    <ChevronLeftIcon className={styles["chevron-icon"]} />
                  )}
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a href={"/documents"} style={getActiveStyle("/documents")}>
                  <FileTextIcon className={styles["icon"]} />
                  <span className={styles["users-text"]}>Files & Notes</span>
                  {isActive("/documents") && (
                    <ChevronLeftIcon className={styles["chevron-icon"]} />
                  )}
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles["apps-section"]}>
            <ButtonBase className={styles["apps-button"]}>
              <Grip className={styles["icon"]} />
              <span className={styles["apps-text"]}>Other Apps</span>
            </ButtonBase>
          </div>
        </div>
      </div>
    </aside>
  ) : (
    <aside className={styles["sidebar-collapsed"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["sidebar-control"]}>
            <Tooltip title="Open Sidebar" placement="right">
              <SidebarOpen
                className={styles["toggle-icon"]}
                onClick={toggleSidebar}
              />
            </Tooltip>
          </div>
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
                <Tooltip title="Calendar" placement="right">
                  <Link href={"/calendar"} style={getActiveStyle("/calendar")}>
                    <CalendarDaysIcon className={styles["icon"]} />
                    {isActive("/calendar") && (
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
                <Tooltip title="Files & Notes" placement="right">
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
          <div className={styles["apps-section"]}>
            <Tooltip title="Other Apps" placement="right">
              <ButtonBase className={styles["apps-button"]}>
                <span className={styles["icon"]}>
                  <Grip />
                </span>
              </ButtonBase>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
