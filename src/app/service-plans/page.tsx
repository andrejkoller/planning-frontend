import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["service-plans-section"]}>
      <div className={styles["service-plans-container"]}>
        <div className={styles["service-plans-content"]}>
          <div className={styles["service-plans-header"]}></div>
          <div className={styles["service-plans-body"]}>
            <div className={styles["service-plans-list"]}>
              {/* Placeholder for service plans list */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
