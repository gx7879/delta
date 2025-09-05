// import titleStyleSvg from "/images/svg/title-style.svg";
import Image from "next/image";

interface TitleStyleProps {
  className?: string;
}

export default function TitleStyle({ className }: TitleStyleProps) {
  return (
    <Image
      src="/images/svg/title-style.svg"
      width={80}
      height={5}
      alt="title-style"
      className={className}
    />
  );
}
