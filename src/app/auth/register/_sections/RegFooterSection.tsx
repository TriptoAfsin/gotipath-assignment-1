import Image from "next/image";

function RegFooterSection() {
  return (
    <>
      <p className="text-center font-medium my-4">Login with</p>
      <div className="flex space-x-4 justify-center my-4">
        <button className="border border-border-default p-2.5 rounded shadow-sm hover:bg-bg-fill transition">
          <Image
            src={"/assets/icons/github.svg"}
            width={20}
            height={20}
            alt="github login"
          />
        </button>
        <button className="border border-border-default p-2.5 rounded shadow-sm hover:bg-bg-fill transition">
          <Image
            src={"/assets/icons/google.svg"}
            width={20}
            height={20}
            alt="google login"
          />
        </button>
        <button className="border border-border-default p-2.5 rounded shadow-sm hover:bg-bg-fill transition">
          <Image
            src={"/assets/icons/jira.svg"}
            width={20}
            height={20}
            alt="google login"
          />
        </button>
        <button className="border border-border-default p-2.5 rounded shadow-sm hover:bg-bg-fill transition">
          <Image
            src={"/assets/icons/circle.svg"}
            width={20}
            height={20}
            alt="google login"
          />
        </button>
      </div>
    </>
  );
}

export default RegFooterSection;
