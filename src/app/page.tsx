"use client";
import SpinnerLoader from "@/components/loaders/SpinnerLoader";
import { getLocal } from "@/utils/storageUtils";
import Image from "next/image";
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
      <Image src={"/images/logo.svg"} alt="logo" width={170} height={170} />
      <div className="my-5">
        <SpinnerLoader size="md" variant="primary" />
      </div>
    </main>
  );
}
