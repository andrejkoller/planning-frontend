import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["users-section"]}>
      <div className={styles["users-container"]}>
        <div className={styles["users-content"]}>
          <div className={styles["users-header"]}></div>
          <div className={styles["users-body"]}>
            {/* Placeholder for users list or management component */}
            <div className={styles["users-list"]}>
              <p>No users available. Please add users to manage your church.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
