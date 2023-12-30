import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { LogoSvg } from "./LogoSvg";

export const Logo = () => {
  return (
    <Link href={ROUTES.home}>
      <span className="sr-only">BetSync</span>
      <LogoSvg className="w-12 text-primary" />
    </Link>
  );
};
