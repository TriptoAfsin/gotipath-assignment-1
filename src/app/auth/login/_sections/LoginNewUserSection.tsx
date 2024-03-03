import Link from "next/link";

function LoginNewUserSection() {
  return (
    <div className="flex items-center justify-center ">
      <p className="text-sm font-medium text-center">New to Gotipath? </p>
      <Link href={"/auth/register"} className="ml-1 text-primary">
        Create Account
      </Link>
    </div>
  );
}

export default LoginNewUserSection;
