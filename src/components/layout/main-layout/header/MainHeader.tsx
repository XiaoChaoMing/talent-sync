import { Button } from "@/components/ui/button";

import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
const MainHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="flex h-14 items-center justify-between px-5">
        <div className="flex cursor-pointer items-center gap-3 rounded-md px-3 transition-all duration-300 hover:bg-[var(--secondary)]">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <span className="text-xl font-bold">TalentSync</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-400">
              <span className="text-xs text-white">1</span>
            </div>
            <Mail />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="h-10 w-10 cursor-pointer rounded-full bg-transparent">
              <Avatar className="size-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
