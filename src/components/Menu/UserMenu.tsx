"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/api/useLogout";
import useCheckAuth from "@/hooks/security/useCheckAuth";
import { removeLocal } from "@/utils/storageUtils";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { toast } from "../ui/use-toast";

function UserMenu() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { checking } = useCheckAuth();

  const onSuccessFunc = () => {
    toast({
      title: "Logged out",
    });
  };

  const onErrorFunc = (error: any) => {};
  const { mutate: logoutMutate } = useLogout(
    onSuccessFunc,
    onErrorFunc,
    queryClient
  );
  const handleLogout = () => {
    logoutMutate();
    removeLocal("user_info");
    router.push("/auth/login");
  };

  if (checking) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>
            <FaUser size={24} />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
        <DropdownMenuItem
          className="text-destructive cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
