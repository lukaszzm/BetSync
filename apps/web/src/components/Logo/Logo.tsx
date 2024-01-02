import Link from "next/link";
import { LogoSvg } from "@ui/components/logo-svg";

interface LogoProps {
  href: string;
}

export const Logo = ({ href }: LogoProps) => {
  return (
    <Link href={href}>
      <span className="sr-only">BetSync</span>
      <LogoSvg className="w-12 text-primary" />
    </Link>
  );
};
