"use client";
import {
  BookOpen,
  HomeIcon,
  MessageCircleIcon,
  MusicIcon,
  SidebarClose,
  SidebarOpen,
  UsersIcon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const isActive = (path: string) => {
    return pathname === path
      ? {
          color: "var(--foreground)",
          backgroundColor: "var(--link-active-background)",
        }
      : {};
  };

  return sidebarOpen ? (
    <aside className={styles["sidebar-expanded"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["sidebar-control"]} onClick={toggleSidebar}>
            <Tooltip title="Close Sidebar" placement="top">
              <span className={styles["toggle-button"]}>
                <SidebarClose className={styles["toggle-icon"]} />
                <span>Menu</span>
              </span>
            </Tooltip>
          </div>
          <nav className={styles["nav-section"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link href={"/"} style={isActive("/")}>
                  <HomeIcon className={styles["icon"]} />
                  <span className={styles["home-text"]}>Overview</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/services"} style={isActive("/services")}>
                  <BookOpen className={styles["icon"]} />
                  <span className={styles["services-text"]}>Services</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/messages"} style={isActive("/messages")}>
                  <MessageCircleIcon className={styles["icon"]} />
                  <span className={styles["messages-text"]}>Messages</span>
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <a href={"/music"} style={isActive("/music")}>
                  <MusicIcon className={styles["icon"]} />
                  <span className={styles["music-text"]}>Music</span>
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a href={"/users"} style={isActive("/users")}>
                  <UsersIcon className={styles["icon"]} />
                  <span className={styles["users-text"]}>Users</span>
                </a>
              </li>
            </ul>
          </nav>
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
                  <Link href={"/"} style={isActive("/")}>
                    <HomeIcon className={styles["icon"]} />
                  </Link>
                </Tooltip>
              </li>
              <li className={styles["nav-item"]}>
                <Tooltip title="Services" placement="right">
                  <Link href={"/services"} style={isActive("/services")}>
                    <BookOpen className={styles["icon"]} />
                  </Link>
                </Tooltip>
              </li>
              <li className={styles["nav-item"]}>
                <Tooltip title="Messages" placement="right">
                  <Link href={"/messages"} style={isActive("/messages")}>
                    <MessageCircleIcon className={styles["icon"]} />
                  </Link>
                </Tooltip>
              </li>
              <li className={styles["nav-item"]}>
                <Tooltip title="Music" placement="right">
                  <a href={"/music"} style={isActive("/music")}>
                    <MusicIcon className={styles["icon"]} />
                  </a>
                </Tooltip>
              </li>
              <li className={styles["nav-item"]}>
                <Tooltip title="Users" placement="right">
                  <a href={"/users"} style={isActive("/users")}>
                    <UsersIcon className={styles["icon"]} />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};
