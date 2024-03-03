import Image from "next/image";

type TitleIconProps = {
  width?: number;
  height?: number;
  className?: React.HTMLAttributes<HTMLImageElement>["className"];
};

function TitleIcon({
  width = 50,
  height = 50,
  className = "",
}: TitleIconProps) {
  return (
    <Image
      src={"/assets/icons/titleIcon.png"}
      alt="logo"
      width={width}
      height={height}
      className={className}
    />
  );
}

export default TitleIcon;
