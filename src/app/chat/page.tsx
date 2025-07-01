import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["chat-section"]}>
      <div className={styles["chat-container"]}>
        <div className={styles["chat-content"]}>
          <div className={styles["chat-header"]}></div>
          <div className={styles["chat-body"]}>
            {/* Placeholder for chat component */}
          </div>
        </div>
      </div>
    </section>
  );
}
