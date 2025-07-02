"use client";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles["services-section"]}>
      <div className={styles["services-container"]}>
        <div className={styles["services-content"]}>
          <div className={styles["services-body"]}>
            <div className={styles["services-list"]}>
              {/* Placeholder for service list */}
              <p>
                No services available. Please add services to manage your
                church.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
