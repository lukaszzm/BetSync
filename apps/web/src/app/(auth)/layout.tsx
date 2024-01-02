import { LogoSvg } from "@ui/components/logo-svg";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { authOptions } from "@/config/auth";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES.dashboard);
  }

  return (
    <div className="flex min-h-screen justify-center items-start sm:items-center py-8">
      <main className="w-full sm:max-w-lg  sm:border border-border p-7 rounded-md shadow-sm text-center space-y-6">
        <div className="flex flex-col items-center text-primary text-3xl font-bold">
          <LogoSvg className="w-20" />
          <h1>BetSync</h1>
        </div>
        {children}
      </main>
    </div>
  );
}
