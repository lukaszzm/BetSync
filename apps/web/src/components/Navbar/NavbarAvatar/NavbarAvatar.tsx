import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignOutButton } from "@/components/Auth/SignOutButton";
import { ROUTES } from "@/config/routes";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@ui/components/popover";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const NavbarAvatar = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(ROUTES.signIn);
  }

  const avatarFallback = session.user.name.charAt(0).toUpperCase();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="bg-purple-600">{avatarFallback}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto mr-6">
        <SignOutButton />
      </PopoverContent>
    </Popover>
  );
};
