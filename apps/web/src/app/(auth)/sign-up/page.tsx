import { AuthSeparator } from "@/components/Auth/AuthSeparator";
import { SignUpForm } from "@/components/Auth/SignUpForm";
import { RoutePaths } from "@/config/routes";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <SignUpForm />
      <AuthSeparator />
      <p>
        Already have an account?{" "}
        <Link href={RoutePaths.signIn} className="font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
