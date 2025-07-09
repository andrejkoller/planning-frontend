"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { ButtonBase, Divider, Tab, Tabs, Tooltip } from "@mui/material";
import { ChevronUpIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles["services-layout"]}>
      <div className={styles["services-header"]}>
        <div className={styles["service-tabs"]}>
          <Tabs
            sx={{
              "& .MuiTab-root": {
                color: "var(--text-inactive)",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
              },
              "& .Mui-selected": {
                color: "var(--text-active) !important",
                fontWeight: 500,
              },
            }}
            value={pathname}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab
              label="Services"
              value="/services"
              component={Link}
              href="/services"
            />
            <Divider
              sx={{
                margin: "0.85rem 0",
                backgroundColor: "var(--border-default)",
              }}
              orientation="vertical"
              flexItem
            />
            <Tab
              label="Planning Overview"
              value="/services/planning-overview"
              component={Link}
              href="/services/planning-overview"
            />
            <Divider
              sx={{
                margin: "0.85rem 0",
                backgroundColor: "var(--border-default)",
              }}
              orientation="vertical"
              flexItem
            />
            <Tab
              label="Calendar"
              value="/services/calendar"
              component={Link}
              href="/services/calendar"
            />
          </Tabs>
        </div>
        <div className={styles["service-header-actions"]}>
          <ButtonBase
            sx={{
              width: "2.375rem",
              height: "2.375rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "1px solid var(--border-default)",
              "&:hover": {
                backgroundColor: "var(--bg-hover)",
              },
            }}
            className={styles["expand-button"]}
          >
            <Tooltip title="Expand/Collapse" placement="bottom">
              <ChevronUpIcon className={styles["expand-icon"]} />
            </Tooltip>
          </ButtonBase>
        </div>
      </div>
      <div className="layout-body">{children}</div>
    </div>
  );
}
