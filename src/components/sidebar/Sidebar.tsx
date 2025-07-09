"use client";
import {
  FolderIcon,
  LayoutGridIcon,
  MessageCircleIcon,
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
                <Link href={"/messages"} style={getActiveStyle("/messages")}>
                  <Tooltip title="Messages" placement="right">
                    <MessageCircleIcon className={styles["icon"]} />
                  </Tooltip>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles["profile-section"]}>
            <Link href={"/profile"}>
              <div className={styles["profile"]}>
                <span className={styles["profile-initials"]}>A</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
