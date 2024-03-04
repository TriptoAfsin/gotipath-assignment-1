import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import SidebarList from "@/components/layout/SidebarList";
import type { Metadata } from "next";
import DashboardMainSection from "./_sections/DashboardMainSection";
export const metadata: Metadata = {
  title: "Dashboard | Gotipath",
  description: "Dashboard for Gotipath Cloud Console",
};
function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex ">
        <Sidebar>
          <SidebarList />
        </Sidebar>
        <div className="w-2/4 flex content-center justify-center">
          <DashboardMainSection />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
