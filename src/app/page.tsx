import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles["dashboard-section"]}>
      <div className={styles["dashboard-container"]}>
        <div className={styles["dashboard-content"]}></div>
      </div>
    </section>
  );
}
