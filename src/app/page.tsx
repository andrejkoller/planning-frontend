import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles["home-section"]}>
      <div className={styles["home-container"]}>
        <div className={styles["home-content"]}>
          <div className={styles["home-header"]}></div>
          <div className={styles["home-body"]}>
            <div className={styles["home-features"]}>
              {/* Placeholder for features or quick links */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
