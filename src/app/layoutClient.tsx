"use client";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Sidebar />
      <main>{children}</main>
    </ThemeProvider>
  );
}
