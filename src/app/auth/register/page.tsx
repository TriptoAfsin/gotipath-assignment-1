import Logo from "@/components/common/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ImageIcon from "@/components/Icons/ImageIcon";
import Label from "@/components/Typography/Label";
import TitleIcon from "@/components/common/TitleIcon";
import CorporateRegForm from "@/components/forms/CorporateRegForm";
import PersonalRegForm from "@/components/forms/PersonalRegForm";
import Divider from "@/components/layout/Divider";
import ResponsiveFlex from "@/components/layout/ResponsiveFlex";
import type { Metadata } from "next";
import Image from "next/image";
import RegFooterSection from "./_sections/RegFooterSection";
import RegOldUserSection from "./_sections/RegOldUserSection";
import RegTitleSection from "./_sections/RegTitleSection";
export const metadata: Metadata = {
  title: "Register | Gotipath",
  description: "Register to Gotipath",
};
function RegisterPage() {
  return (
    <ResponsiveFlex>
      <div className="p-6 grid grid-rows-[auto_1fr_auto] flex-1 min-h-screen">
        <Logo width={155} height={155} />
        <div className="flex items-center justify-center">
          <section className="w-full md:w-4/6 md:max-w-[400px]">
            <TitleIcon />
            <RegTitleSection />
            <Label>Select Account Type</Label>
            <Tabs defaultValue="personal" className="w-full md:w-[400px]">
              <TabsList className="w-full">
                <TabsTrigger value="personal" className="w-full">
                  <ImageIcon
                    src="/assets/icons/personal.svg"
                    className="mx-2"
                  />
                  Personal
                </TabsTrigger>
                <TabsTrigger value="corporate" className="w-full">
                  <ImageIcon
                    src="/assets/icons/corporate.svg"
                    className="mx-2"
                  />
                  Corporate
                </TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <PersonalRegForm />
                <Divider text="or" />
                <RegFooterSection />
              </TabsContent>
              <TabsContent value="corporate">
                <CorporateRegForm />
              </TabsContent>
            </Tabs>
          </section>
        </div>
        <RegOldUserSection />
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
