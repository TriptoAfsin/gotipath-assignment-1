import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import SidebarList from "@/components/layout/SidebarList";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Gotipath",
  description: "Dashboard for Gotipath Cloud Console",
};
function DashboardPage() {
  return (
    <>
      <Header />
      <Sidebar>
        <SidebarList />
      </Sidebar>
    </>
  );
}

export default DashboardPage;
