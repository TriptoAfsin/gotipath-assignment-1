"use client";

import SpinnerLoader from "@/components/loaders/SpinnerLoader";
import useCheckAuth from "@/hooks/security/useCheckAuth";

function DashboardMainSection() {
  const { checking } = useCheckAuth();
  return (
    <>
      {checking ? (
        <div className="py-10">
          <SpinnerLoader size="md" variant="primary" />
        </div>
      ) : (
        <h2 className="text-2xl font-semibold py-10">
          Welcome to your dashboard 😁
        </h2>
      )}
    </>
  );
}

export default DashboardMainSection;
