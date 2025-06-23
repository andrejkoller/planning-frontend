"use client";
import {
  BookOpen,
  HelpCircleIcon,
  HomeIcon,
  MessageCircleIcon,
  MusicIcon,
  UsersIcon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? {
          color: "var(--foreground)",
          backgroundColor: "var(--link-active-background)",
        }
      : {};
  };

  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["logo-section"]}>
            <h1 className={styles["logo"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <span className={styles["logo-text"]}>P</span>
              </Link>
            </h1>
          </div>
          <nav className={styles["nav-section"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Tooltip title="Overview" placement="right">
                  <Link href={"/overview"} style={isActive("/")}>
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
          <div className={styles["help-section"]}>
            <Tooltip title="Help" placement="right">
              <a href={"/help"}>
                <HelpCircleIcon className={styles["help-icon"]} />
              </a>
            </Tooltip>
          </div>
          <div className={styles["profile-section"]}>
            <div className={styles["profile"]}>
              <h2 className={styles["profile-name"]}>A</h2>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
