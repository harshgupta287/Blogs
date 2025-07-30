import { AppSidebar } from "@/components/AppSidebar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SidebarProvider>
        <Topbar />
      <AppSidebar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
