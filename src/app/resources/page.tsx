import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["resources-section"]}>
      <div className={styles["resources-container"]}>
        <div className={styles["resources-content"]}>
          <div className={styles["resources-header"]}></div>
          <div className={styles["resources-body"]}>
            {/* Placeholder for resources list or management component */}
            <p>No resources available. Please add resources to get started.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
