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
                  <p className={styles["widget-title"]}>Users</p>
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
                  <p className={styles["widget-title"]}>Upcoming Services</p>
                </div>
                <div className={styles["widget-body"]}>
                  <p className={styles["widget-text"]}>
                    You have currently no upcoming services.
                  </p>
                </div>
              </div>
              <div className={styles["widget"]}>
                <div className={styles["widget-header"]}>
                  <p className={styles["widget-title"]}>Announcements</p>
                </div>
                <div className={styles["widget-body"]}>
                  <p className={styles["widget-text"]}>
                    You have currently no announcements.
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
