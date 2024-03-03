import React from "react";

type LabelProps = {
  children: React.ReactNode;
};

function Label({ children }: LabelProps) {
  return (
    <label className="text-sm font-medium text-text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </label>
  );
}

export default Label;
