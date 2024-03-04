import React from "react";

type SidebarProps = {
  children: React.ReactNode;
};

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="hidden lg:flex w-1/4">
      <div className="w-100 px-4 min-h-screen border-r border-border-default">
        <div className="sticky top-0">{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
