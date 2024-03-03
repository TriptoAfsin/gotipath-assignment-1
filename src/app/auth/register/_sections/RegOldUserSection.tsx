import Link from "next/link";

function RegOldUserSection() {
  return (
    <div className="flex items-center justify-center ">
      <p className="text-sm font-medium text-center">
        Already a Gotipath member?{" "}
      </p>
      <Link href={"/auth/login"} className="ml-1 text-primary">
        Login
      </Link>
    </div>
  );
}

export default RegOldUserSection;
