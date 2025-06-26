import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["music-section"]}>
      <div className={styles["music-container"]}>
        <div className={styles["music-content"]}>
          <div className={styles["music-header"]}></div>
          <div className={styles["music-body"]}>
            {/* Placeholder for music component */}
          </div>
        </div>
      </div>
    </section>
  );
}
