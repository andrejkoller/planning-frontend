import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const pathnameTitles: Record<string, string> = {
    "/": "Planning Dashboard",
    "/calendar": "Church Calendar Overview",
    "/service-plans": "Plan and Coordinate Your Services",
    "/teams": "Manage Your Ministry Teams",
    "/resources": "Reserve and Manage Church Resources",
    "/documents": "Store and Share Important Files",
    "/profile": "Your Profile",
    "/notifications": "Notifications",
  };
  const pathNameTexts: Record<string, string> = {
    "/": "Here you’ll find an overview of upcoming events, active teams, and recent changes across your church's planning activities.",
    "/calendar":
      "View all scheduled services, team meetings, and community events in a clear and accessible calendar format.",
    "/service-plans":
      "Assign roles, manage responsibilities, and organize each element of your church service efficiently and clearly.",
    "/teams":
      "Create and maintain your church's teams, assign members, and monitor participation across all ministries.",
    "/resources":
      "Keep track of equipment, rooms, and other materials needed for services and events – all in one place.",
    "/documents":
      "Upload, organize, and access documents such as sermon notes, worship plans, and event guidelines.",
    "/profile": "Manage your personal information and preferences.",
    "/notifications":
      "Stay updated with the latest announcements, reminders, and alerts related to your church's planning activities.",
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["title-section"]}>
            <h1 className={styles["title"]}>
              <span className={styles["title-text"]}>
                {pathnameTitles[pathname] || "Planning"}
              </span>
            </h1>
            <p className={styles["subtitle"]}>
              {pathNameTexts[pathname] ||
                "Manage your church's planning activities with ease."}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
