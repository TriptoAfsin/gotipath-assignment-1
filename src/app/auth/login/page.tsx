import Logo from "@/components/common/Logo";
import LoginForm from "@/components/forms/LoginForm";
import ResponsiveFlex from "@/components/layout/ResponsiveFlex";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Login | Gotipath",
  description: "Login to Gotipath",
};

function LoginPage() {
  return (
    <ResponsiveFlex>
      <div className="p-6 grid grid-rows-[auto_1fr_auto] flex-1 min-h-screen">
        <Logo width={155} height={155} />
        <LoginForm />
      </div>
      <div className="min-w-[720px]">
        <Image
          src={"/images/account_bg.png"}
          alt="account background"
          className="h-screen object-cover w-full"
          width={1000}
          height={1000}
        />
      </div>
    </ResponsiveFlex>
  );
}

export default LoginPage;
