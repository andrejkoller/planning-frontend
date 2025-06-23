"use client";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className={styles["layout"]}>
        <div className={styles["layout-container"]}>
          <Header />
          <div className={styles["layout-content"]}>
            <Sidebar />
            <main className={styles["main-content"]}>{children}</main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
