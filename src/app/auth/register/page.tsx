import Logo from "@/components/common/Logo";
import RegisterForm from "@/components/forms/RegisterForm";
import ResponsiveFlex from "@/components/layout/ResponsiveFlex";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Register | Gotipath",
  description: "Register to Gotipath",
};
function RegisterPage() {
  return (
    <ResponsiveFlex>
      <div className="p-6 grid grid-rows-[auto_1fr_auto] flex-1 min-h-screen">
        <Logo width={155} height={155} />
        <RegisterForm />
      </div>
      <div className="lg:min-w-[720px]">
        <Image
          src={"/assets/account_bg.png"}
          alt="account background"
          className="h-screen object-cover w-full"
          width={1000}
          height={1000}
        />
      </div>
    </ResponsiveFlex>
  );
}

export default RegisterPage;
