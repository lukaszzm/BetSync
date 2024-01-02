import { Logo } from "@/components/Logo";
import { authOptions } from "@/config/auth";
import { ROUTES } from "@/config/routes";
import { Button } from "@ui/components/button";
import { MoveRight } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES.dashboard);
  }

  return (
    <div className="min-h-screen bg-gradient-radial">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <Logo href={ROUTES.home} />
          <Button asChild size="lg">
            <Link href={ROUTES.signIn}> Login</Link>
          </Button>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/75 pb-4 ">
              Elevate your betting game with BetSync
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Take charge of your finances with intuitive tools. Set limits, track expenses, and bet responsibly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="font-semibold">
                <Link href={ROUTES.signUp}>Get Started</Link>
              </Button>
              <Button variant="link" size="lg" className="items-center gap-4 text-foreground">
                Learn More
                <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
