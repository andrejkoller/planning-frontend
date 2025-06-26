"use client";
import {
  ClipboardListIcon,
  HelpCircleIcon,
  HomeIcon,
  MusicIcon,
  UserPlus2,
  Users2Icon,
} from "lucide-react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "#ffffff",
          backgroundColor: "var(--primary)",
        }
      : {};

  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <nav className={styles["nav-section"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link href={"/"} style={getActiveStyle("/")}>
                  <HomeIcon className={styles["icon"]} />
                </Link>
                <span className={styles["nav-item-label"]}>Home</span>
              </li>
              <li className={styles["nav-item"]}>
                <Link
                  href={"/service-plans"}
                  style={getActiveStyle("/service-plans")}
                >
                  <ClipboardListIcon className={styles["icon"]} />
                </Link>
                <span className={styles["nav-item-label"]}>Plans</span>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/teams"} style={getActiveStyle("/teams")}>
                  <Users2Icon className={styles["icon"]} />
                </Link>
                <span className={styles["nav-item-label"]}>Teams</span>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/music"} style={getActiveStyle("/music")}>
                  <MusicIcon className={styles["icon"]} />
                </Link>
                <span className={styles["nav-item-label"]}>Music</span>
              </li>
            </ul>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link href={"/invite"} style={getActiveStyle("/invite")}>
                  <UserPlus2 className={styles["icon"]} />
                </Link>
                <span className={styles["nav-item-label"]}>Invite</span>
              </li>
              <li className={styles["nav-item"]}>
                <Link href={"/help"} style={getActiveStyle("/help")}>
                  <HelpCircleIcon className={styles["icon"]} />
                </Link>
                <span className={styles["nav-item-label"]}>Help</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};
