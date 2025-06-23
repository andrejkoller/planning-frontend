"use client";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import styles from "./page.module.css";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Sidebar />
      <main className={styles["main"]}>{children}</main>
    </ThemeProvider>
  );
}
