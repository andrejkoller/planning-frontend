import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["settings-section"]}>
      <div className={styles["settings-container"]}>
        <div className={styles["settings-content"]}>
          <div className={styles["settings-header"]}></div>
          <div className={styles["settings-body"]}>
            {/* Placeholder for settings component */}
          </div>
        </div>
      </div>
    </section>
  );
}
