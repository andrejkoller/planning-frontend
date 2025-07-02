import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["chat-section"]}>
      <div className={styles["chat-container"]}>
        <div className={styles["chat-content"]}>
          <div className={styles["chat-header"]}></div>
          <div className={styles["chat-body"]}>
            {/* Placeholder for chat component */}
            <div className={styles["chat-placeholder"]}>
              <p>Chat functionality is under development. Stay tuned!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
