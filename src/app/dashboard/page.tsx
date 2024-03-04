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
      <div className="flex ">
        <Sidebar>
          <SidebarList />
        </Sidebar>
        <div className="w-2/4 flex content-center justify-center">
          <h2 className="text-2xl font-semibold py-10">
            Welcome to your dashboard 😁
          </h2>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
