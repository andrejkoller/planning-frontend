import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles["home-section"]}>
      <div className={styles["home-container"]}>
        <div className={styles["home-content"]}>
          <div className={styles["home-body"]}>
            <div className={styles["overview"]}>
              <div className={styles["widget"]}>
                <div className={styles["widget-header"]}>
                  <Link href="/calendar" className={styles["widget-title"]}>
                    Users
                  </Link>
                </div>
                <div className={styles["widget-body"]}>
                  <p className={styles["widget-text"]}>
                    You have currently no users in your church management
                    system.
                  </p>
                </div>
              </div>
              <div className={styles["widget"]}>
                <div className={styles["widget-header"]}>
                  <Link href="/services" className={styles["widget-title"]}>
                    Upcoming Services
                  </Link>
                </div>
                <div className={styles["widget-body"]}>
                  <p className={styles["widget-text"]}>
                    You have currently no upcoming services.
                  </p>
                </div>
              </div>
              <div className={styles["widget"]}>
                <div className={styles["widget-header"]}>
                  <Link href="/documents" className={styles["widget-title"]}>
                    Documents
                  </Link>
                </div>
                <div className={styles["widget-body"]}>
                  <p className={styles["widget-text"]}>
                    You have currently no documents in your church management
                    system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
