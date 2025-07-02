import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["planning-overview-section"]}>
      <div className={styles["planning-overview-container"]}>
        <div className={styles["planning-overview-content"]}>
          <div className={styles["planning-overview-header"]}></div>
          <div className={styles["planning-overview-body"]}>
            <div className={styles["planning-overview-list"]}>
              {/* Placeholder for planning overview list */}
              <p>No planning overview data available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
