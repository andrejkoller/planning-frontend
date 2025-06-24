import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["notifications-section"]}>
      <div className={styles["notifications-container"]}>
        <div className={styles["notifications-content"]}>
          <div className={styles["notifications-header"]}></div>
          <div className={styles["notifications-body"]}>
            <div className={styles["notifications-list"]}>
              {/* Placeholder for notifications list */}
              <p>No notifications available at the moment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
