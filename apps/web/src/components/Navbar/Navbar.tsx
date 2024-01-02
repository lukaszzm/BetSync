import { Logo } from "@/components/Logo";
import { NavbarAvatar } from "@/components/Navbar/NavbarAvatar";
import { ROUTES } from "@/config/routes";
import { AvatarSkeleton } from "@ui/components/skeletons/avatar-skeleton";
import { Suspense } from "react";

export const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Logo href={ROUTES.dashboard} />
        <Suspense fallback={<AvatarSkeleton />}>
          <NavbarAvatar />
        </Suspense>
      </nav>
    </header>
  );
};
