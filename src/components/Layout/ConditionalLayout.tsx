"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Add paths where you DON'T want the Sidebar/Navbar (e.g., login, signup)
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Wrapper */}
      <div className="flex flex-col flex-1 min-w-0 bg-white">
        {/* Top Navbar */}
        <Navbar />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}