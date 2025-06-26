import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["teams-section"]}>
      <div className={styles["teams-container"]}>
        <div className={styles["teams-content"]}>
          <div className={styles["teams-header"]}></div>
          <div className={styles["teams-body"]}>
            {/* Placeholder for teams list or management component */}
          </div>
        </div>
      </div>
    </section>
  );
}
