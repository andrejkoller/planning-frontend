import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["messages-section"]}>
      <div className={styles["messages-container"]}>
        <div className={styles["messages-content"]}></div>
      </div>
    </section>
  );
}
