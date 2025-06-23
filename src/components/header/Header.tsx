import Link from "next/link";
import styles from "./Header.module.css";
import { ButtonBase, Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
          <div className={styles["logo-section"]}>
            <h1 className={styles["logo"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <span className={styles["logo-text"]}>Planning</span>
              </Link>
            </h1>
          </div>
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
    </header>
  );
};
