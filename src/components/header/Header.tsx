import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const pathnameTitleMap: Record<string, string> = {
    "/": "Home",
    "/service-plans": "Service Plans",
    "/teams": "Teams",
    "/music": "Music",
    "/invite": "Invite Members",
    "/profile": "Your Profile",
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["title-section"]}>
            <h1 className={styles["title-text"]}>
              {pathnameTitleMap[pathname] || "Planning"}
            </h1>
          </div>
          <div className={styles["profile-section"]}>
            <Link href={"/profile"} className={styles["profile-button"]}>
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
