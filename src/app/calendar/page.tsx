import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["calendar-section"]}>
      <div className={styles["calendar-container"]}>
        <div className={styles["calendar-content"]}>
          <div className={styles["calendar-header"]}></div>
          <div className={styles["calendar-body"]}>
            {/* Placeholder for calendar component */}
          </div>
        </div>
      </div>
    </section>
  );
}
