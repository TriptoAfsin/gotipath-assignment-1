import React from "react";

type ResponsiveFlexProps = {
  children: React.ReactNode;
};

function ResponsiveFlex({ children }: ResponsiveFlexProps) {
  return <section className="flex flex-col lg:flex-row">{children}</section>;
}

export default ResponsiveFlex;
