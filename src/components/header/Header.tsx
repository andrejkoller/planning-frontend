import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase, Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const pathname = usePathname();
  const pathnameTitles: Record<string, string> = {
    "/": "Welcome to your Planning Dashboard",
    "/calendar": "Church Calendar Overview",
    "/service-plans": "Plan and Coordinate Your Services",
    "/teams": "Manage Your Ministry Teams",
    "/resources": "Reserve and Manage Church Resources",
    "/documents": "Store and Share Important Files",
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
  };

  const handleToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <div className={styles["menu-section"]}>
            <div className={styles["profile-section"]}>
              <ButtonBase
                className={styles["profile-button"]}
                onClick={handleToggleMenu}
              >
                <div className={styles["profile"]}>
                  <h2 className={styles["profile-name"]}>A</h2>
                </div>
              </ButtonBase>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <Link href={"/profile"} className={styles["menu-link"]}>
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/settings"} className={styles["menu-link"]}>
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem href="/help">
                  <Link href={"/help"} className={styles["menu-link"]}>
                    Help
                    <ExternalLink className={styles["external-link-icon"]} />
                  </Link>
                </MenuItem>
                <Divider sx={{ my: 0.5, backgroundColor: "var(--border)" }} />
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
