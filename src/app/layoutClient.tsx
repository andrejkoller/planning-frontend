"use client";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { PrimarySidebar } from "@/components/sidebar/primary-sidebar/PrimarySidebar";
import { usePathname } from "next/navigation";
import { SecondarySidebar } from "@/components/sidebar/secondary-sidebar/SecondarySidebar";
import { useState } from "react";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pathnameList = [
    "/",
    "/calendar",
    "/service-plans",
    "/teams",
    "/resources",
    "/documents",
    "/profile",
  ];
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className={styles["layout"]}>
        <div className={styles["layout-container"]}>
          <PrimarySidebar />
          {pathnameList.includes(pathname) ? (
            <SecondarySidebar
              isOpen={secondarySidebarOpen}
              setOpen={setSecondarySidebarOpen}
            />
          ) : null}
          <div className={styles["layout-content"]}>
            <Header />
            <main className={styles["main-content"]}>{children}</main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
