import React from "react";

type SidebarProps = {
  children: React.ReactNode;
};

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="flex">
      <div
        className="w-1/6 px-4 min-h-screen"
        style={{ borderRight: "1px solid #ccc" }}
      >
        <div className="sticky top-0">{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
