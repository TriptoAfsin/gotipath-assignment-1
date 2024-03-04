import ForgotPassForm from "@/components/forms/ForgotPassForm";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reset Password | Gotipath",
};

function ResetPassword() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header showAccountMenu={false} />
      <div className="h-full grid place-content-center w-4/6 max-w-[400px] mx-auto">
        <div className="w-full">
          <h1 className="text-3xl font-semibold mb-3">Reset your password</h1>
          <p className="mb-5">
            Enter your registered email address to change your Gotipath account
            password
          </p>
          <ForgotPassForm />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
