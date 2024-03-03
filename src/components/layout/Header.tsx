import Logo from "@/components/common/Logo";
import Link from "next/link";
import UserMenu from "../Menu/UserMenu";

function Header() {
  return (
    <div className="px-5 py-5 h-[var(--header-height)] flex items-center border-b border-border-default">
      <Link href="/">
        <Logo height={140} width={140} />
      </Link>
      <div className="ml-auto">
        <UserMenu />
      </div>
    </div>
  );
}

export default Header;
