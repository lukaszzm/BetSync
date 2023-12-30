import { AuthSeparator } from "@/components/Auth/AuthSeparator";
import { SignInForm } from "@/components/Auth/SignInForm";
import { ROUTES } from "@/config/routes";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <SignInForm />
      <AuthSeparator />
      <p>
        Don't have an account?{" "}
        <Link href={ROUTES.signUp} className="font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
