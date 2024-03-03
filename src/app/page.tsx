"use client";
import Logo from "@/components/common/Logo";
import SpinnerLoader from "@/components/loaders/SpinnerLoader";
import { getLocal } from "@/utils/storageUtils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (getLocal("user_info")?.access_token) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Logo />
      <div className="my-5">
        <SpinnerLoader size="md" variant="primary" />
      </div>
    </main>
  );
}
