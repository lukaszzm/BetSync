import { RoutePaths } from "@/config/routes";
import { Button } from "@ui/components/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PropsWithChildren } from "react";

export default function BetsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Button asChild variant="ghost" size="icon" className="mr-auto">
        <Link href={RoutePaths.dashboard} aria-label="Back to dashboard">
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </Button>
      {children}
    </>
  );
}
