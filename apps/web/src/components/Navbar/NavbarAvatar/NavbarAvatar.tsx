import { getUserInfo } from "@/actions/user/get-user-info";
import { SignOut } from "@/components/Auth/SignOut";
import { UserLimits } from "@/components/UserLimits";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@ui/components/popover";

export const NavbarAvatar = async () => {
  const user = await getUserInfo();

  const avatarFallback = user.name.charAt(0).toUpperCase();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="bg-purple-600">{avatarFallback}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-0 max-w-36 mr-6">
        <UserLimits currentLimit={user.limit} />
        <SignOut />
      </PopoverContent>
    </Popover>
  );
};
