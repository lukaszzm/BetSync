import { SignOutButton } from "@/components/Auth/SignOutButton";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4">
      <h1>Dashboard</h1>
      <SignOutButton />
    </div>
  );
}
