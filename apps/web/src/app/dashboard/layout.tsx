import { Navbar } from "@/components/Navbar";
import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <Navbar />
      <main className="relative isolate px-6 pt-14 container flex flex-col items-center gap-6">{children}</main>
    </div>
  );
}
