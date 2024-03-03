import Image from "next/image";

type ImageIconProps = {
  width?: number;
  height?: number;
  className?: React.HTMLAttributes<HTMLImageElement>["className"];
  src: string;
};

function ImageIcon({
  width = 18,
  height = 18,
  className = "",
  src = "/assets/icons/cdn.svg",
}: ImageIconProps) {
  return (
    <Image
      src={src}
      alt="logo"
      width={width}
      height={height}
      className={className}
    />
  );
}

export default ImageIcon;
