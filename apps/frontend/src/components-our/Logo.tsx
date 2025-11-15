import Image from "next/image";
import Link from "next/link";

export default function Logo({ isFooter, className, isAuth }: { isFooter?: boolean, className?: string, isAuth?: boolean }) {
  return (
    <Link href={isAuth ? "/dashboard" : "/"}>
      <div className="w-[120px] md:w-[140px]">
        <Image
          src="/logo.svg"
          alt="logo"
          height={180}
          width={180}
          className={`w-full h-auto ${className} ${isFooter && "brightness-0"}`}
        />
      </div>
    </Link>
  );
}
