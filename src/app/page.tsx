import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["home-container"]}>
        <div className={styles["home-content"]}></div>
      </div>
    </div>
  );
}
