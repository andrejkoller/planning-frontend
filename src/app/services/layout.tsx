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
    <div className={styles["services-layout"]}>
      <div className={styles["services-header"]}>
        <div className={styles["left-section"]}>
          <div className={styles["add-service-section"]}>
            <ButtonBase className={styles["add-service-button"]}>
              <PlusIcon className={styles["add-service-icon"]} />
              <span className={styles["add-service-text"]}>Service</span>
            </ButtonBase>
          </div>
        </div>
        <div className={styles["middle-section"]}>
          <ul className={styles["services-tabs"]}>
            <li
              className={styles["services-tab"]}
              style={getActiveStyle("/services")}
            >
              <Link href={"/services"}>Services</Link>
            </li>
            <li
              className={styles["services-tab"]}
              style={getActiveStyle("/services/planning-overview")}
            >
              <Link href={"/services/planning-overview"}>
                Planning Overview
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["right-section"]}></div>
      </div>
      <div className="layout-body">{children}</div>
    </div>
  );
}
