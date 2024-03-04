import Logo from "@/components/common/Logo";
import TitleIcon from "@/components/common/TitleIcon";
import LoginForm from "@/components/forms/LoginForm";
import Divider from "@/components/layout/Divider";
import ResponsiveFlex from "@/components/layout/ResponsiveFlex";
import type { Metadata } from "next";
import Image from "next/image";
import LoginFooterSection from "./_sections/LoginFooterSection";
import LoginNewUserSection from "./_sections/LoginNewUserSection";
import LoginTitleSection from "./_sections/LoginTitleSection";
export const metadata: Metadata = {
  title: "Login | Gotipath",
  description: "Login to Gotipath",
};

function LoginPage() {
  return (
    <ResponsiveFlex>
      <div className="p-6 grid grid-rows-[auto_1fr_auto] flex-1 min-h-screen">
        <Logo width={155} height={155} />
        <div className="flex items-center justify-center">
          <section className="w-full md:w-4/6 md:max-w-[400px]">
            <TitleIcon />
            <LoginTitleSection />
            <LoginForm />
            <Divider text="or" />
            <LoginFooterSection />
          </section>
        </div>
        <LoginNewUserSection />
      </div>
      <div className="lg:min-w-[720px]">
        <Image
          src={"/assets/account_bg.png"}
          alt="account background"
          className="hidden lg:block h-screen object-cover w-full"
          width={1000}
          height={1000}
        />
      </div>
    </ResponsiveFlex>
  );
}

export default LoginPage;
