import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./components/app-sidebar";

interface AdminLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full grid grid-cols-[100px_1fr] h-full">
        <SidebarTrigger size={"icon"}/>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default AdminLayout;
