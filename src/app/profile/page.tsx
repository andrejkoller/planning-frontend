"use client";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["profile"]}>
      <div className={styles["profile-container"]}>
        <div className={styles["profile-content"]}>
          <div className={styles["profile-header"]}></div>
          <div className={styles["profile-body"]}></div>
        </div>
      </div>
    </section>
  );
}
