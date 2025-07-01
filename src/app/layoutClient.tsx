"use client";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { AppSwitcher } from "@/components/app-switcher/AppSwitcher";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const toggleSidebar = () => {
    const newValue = !sidebarOpen;
    setSidebarOpen(newValue);
    if (isClient) {
      localStorage.setItem("sidebarOpen", String(newValue));
    }
  };

  useEffect(() => {
    setIsClient(true);
    const storedSidebarOpen = localStorage.getItem("sidebarOpen");
    if (storedSidebarOpen !== null) {
      setSidebarOpen(storedSidebarOpen === "true");
    }
  }, []);

  return (
    <ThemeProvider>
      <div className={styles["layout"]}>
        <div className={styles["layout-container"]}>
          <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
          <div className={styles["layout-content"]}>
            <Header isOpen={sidebarOpen} onToggle={toggleSidebar} />
            <main className={styles["main-content"]}>{children}</main>
          </div>
        </div>
      </div>
      <AppSwitcher />
    </ThemeProvider>
  );
}
