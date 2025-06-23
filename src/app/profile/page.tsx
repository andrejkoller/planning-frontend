"use client";
import { Tab, Tabs } from "@mui/material";
import styles from "./page.module.css";
import { useState } from "react";
import { PencilIcon } from "lucide-react";

export default function Page() {
  const [tab, setTab] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <section className={styles["profile"]}>
      <div className={styles["profile-container"]}>
        <div className={styles["profile-content"]}>
          <div className={styles["profile-header"]}>
            <div className={styles["profile"]}>
              <h2
                className={styles["profile-image"]}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? (
                  <div className={styles["edit-image"]}>
                    <PencilIcon className={styles["edit-icon"]} />
                  </div>
                ) : (
                  <span>A</span>
                )}
              </h2>
              <h3 className={styles["profile-name"]}>Andrej Koller</h3>
            </div>
            <div className={styles["profile-tabs"]}>
              <Tabs
                value={tab}
                onChange={(_, newValue) => setTab(newValue)}
                className={styles["tabs"]}
              >
                <Tab label="Personal info" />
                <Tab label="Notifications" />
                <Tab label="Preferences" />
                <Tab label="Session history" />
              </Tabs>
            </div>
          </div>
          <div className={styles["profile-body"]}>
            {tab === 0 && <div>Personal Information</div>}
            {tab === 1 && <div>Notifications</div>}
            {tab === 2 && <div>Preferences</div>}
            {tab === 3 && <div>Session History</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
