import Link from "next/link";

function PrivacyLegalSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center ">
      <p className="text-sm font-medium text-center">
        By continuing, you agree to the{" "}
      </p>
      <Link
        href={"https://www.gotipath.com/legal"}
        className="mx-1 text-primary font-semibold"
        target="_blank"
      >
        Legal Agreement
      </Link>
      <p className="mx-1">and the</p>
      <Link
        href={"https://www.gotipath.com/privacy-policy"}
        className="ml-1 text-primary font-semibold"
        target="_blank"
      >
        Privacy Policy
      </Link>
    </div>
  );
}

export default PrivacyLegalSection;
