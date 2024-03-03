import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: React.HTMLAttributes<HTMLImageElement>["className"];
};

function Logo({ width = 170, height = 170, className = "" }: LogoProps) {
  return (
    <Image
      src={"/images/logo.svg"}
      alt="logo"
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Logo;
