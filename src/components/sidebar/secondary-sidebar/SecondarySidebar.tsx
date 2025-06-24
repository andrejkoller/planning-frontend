import {
  CalendarDaysIcon,
  ClipboardListIcon,
  Users2Icon,
  BoxesIcon,
  FileTextIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "lucide-react";
import styles from "./SecondarySidebar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SecondarySidebarProps = {
  isOpen?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SecondarySidebar = ({
  isOpen,
  setOpen = () => {},
}: SecondarySidebarProps) => {
  const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--foreground)",
          backgroundColor: "var(--link-active-background)",
        }
      : {};

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <aside
      className={`${styles["secondary-sidebar"]} ${
        isOpen ? styles["open"] : ""
      }`}
    >
      {isOpen ? (
        <ChevronLeftIcon
          className={styles["toggle-icon"]}
          onClick={handleToggle}
        />
      ) : (
        <ChevronRightIcon
          className={styles["toggle-icon"]}
          onClick={handleToggle}
        />
      )}
      {isOpen && (
        <div className={styles["secondary-sidebar-container"]}>
          <div className={styles["secondary-sidebar-content"]}>
            <div className={styles["secondary-sidebar-body"]}>
              <nav className={styles["nav-section"]}>
                <ul className={styles["nav-list"]}>
                  <li className={styles["nav-item"]}>
                    <Link
                      href={"/calendar"}
                      style={getActiveStyle("/calendar")}
                    >
                      <CalendarDaysIcon className={styles["icon"]} />
                      <span className={styles["nav-text"]}>Calendar</span>
                    </Link>
                  </li>
                  <li className={styles["nav-item"]}>
                    <Link
                      href={"/service-plans"}
                      style={getActiveStyle("/service-plans")}
                    >
                      <ClipboardListIcon className={styles["icon"]} />
                      <span className={styles["nav-text"]}>Service Plans</span>
                    </Link>
                  </li>
                  <li className={styles["nav-item"]}>
                    <Link href={"/teams"} style={getActiveStyle("/teams")}>
                      <Users2Icon className={styles["icon"]} />
                      <span className={styles["nav-text"]}>Teams</span>
                    </Link>
                  </li>
                  <li className={styles["nav-item"]}>
                    <Link
                      href={"/resources"}
                      style={getActiveStyle("/resources")}
                    >
                      <BoxesIcon className={styles["icon"]} />
                      <span className={styles["nav-text"]}>Resources</span>
                    </Link>
                  </li>
                  <li className={styles["nav-item"]}>
                    <Link
                      href={"/documents"}
                      style={getActiveStyle("/documents")}
                    >
                      <FileTextIcon className={styles["icon"]} />
                      <span className={styles["nav-text"]}>Documents</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
