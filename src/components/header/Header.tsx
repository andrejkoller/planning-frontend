import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["logo-section"]}>
            <h1 className={styles["logo"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <span className={styles["logo-text"]}>Planning</span>
              </Link>
            </h1>
          </div>
          <div className={styles["profile-section"]}>
            <Link href={"/profile"}>
              <div className={styles["profile"]}>
                <h2 className={styles["profile-name"]}>A</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
