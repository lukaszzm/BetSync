import { Navbar } from "@/components/Navbar";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen justify-start items-center gap-4">
      <Navbar />
      <main className="relative isolate px-6 pt-32 lg:pt-40 container max-w-5xl flex flex-col items-center gap-8 pb-12">{children}</main>
    </div>
  );
}
