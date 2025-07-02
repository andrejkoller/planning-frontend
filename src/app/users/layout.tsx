"use client";
import { ButtonBase } from "@mui/material";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--text-default)",
          backgroundColor: "var(--link-hover-bg)",
        }
      : {};

  return (
    <div className={styles["users-layout"]}>
      <div className={styles["users-header"]}>
        <div className={styles["left-section"]}>
          <div className={styles["add-user-section"]}>
            <ButtonBase className={styles["add-user-button"]}>
              <PlusIcon className={styles["add-user-icon"]} />
              <span className={styles["add-user-text"]}>User</span>
            </ButtonBase>
          </div>
        </div>
        <div className={styles["middle-section"]}>
          <ul className={styles["users-tabs"]}>
            <li
              className={styles["users-tab"]}
              style={getActiveStyle("/users")}
            >
              <Link href={"/users"}>Users</Link>
            </li>
            <li
              className={styles["users-tab"]}
              style={getActiveStyle("/users/chat")}
            >
              <Link href={"/users/chat"}>Chat</Link>
            </li>
          </ul>
        </div>
        <div className={styles["right-section"]}></div>
      </div>
      <div className="layout-body">{children}</div>
    </div>
  );
}
