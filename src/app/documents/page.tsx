import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["resources-section"]}>
      <div className={styles["resources-container"]}>
        <div className={styles["resources-content"]}>
          <div className={styles["resources-header"]}></div>
          <div className={styles["resources-body"]}>
            <div className={styles["resources-list"]}>
              {/* Placeholder for resources list */}
              <p>No resources available at the moment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
