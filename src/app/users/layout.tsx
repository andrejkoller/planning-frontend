"use client";
import styles from "./page.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles["users-layout"]}>
      <div className={styles["users-header"]}>
        <div className={styles["left-section"]}></div>
        <div className={styles["right-section"]}></div>
      </div>
      <div className="layout-body">{children}</div>
    </div>
  );
}
