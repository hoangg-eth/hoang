import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  title: string;
}

const Logo = ({ title }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center mr-10">
      <div className="flex items-center justify-center rounded-lg mr-2">
        <Image
          width={48}
          height={48}
          className="h-[48px] w-[48px]"
          src="/assets/images/logo.svg"
          alt="Logo"
        />
      </div>
      <span className="text-xl font-bold uppercase dark:text-white">
        {title}
      </span>
    </Link>
  );
};

export default Logo;
