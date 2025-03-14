import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  BookImage,
  ChevronLeft,
  ChevronRight,
  FileUser,
  FolderOpenDot,
  Home,
  Plus,
  Settings,
  SquareKanban
} from "lucide-react";
import { cn } from "@/utils/utils";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ThemeSwitch } from "@/components/provider/theme-switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

interface MainSideBarProps {
  isCollapsed: boolean;
  onCollapsedChange: Dispatch<SetStateAction<boolean>>;
}

const MainSideBar = ({ isCollapsed, onCollapsedChange }: MainSideBarProps) => {
  return (
    <aside
      className={cn(
        "group bg-background fixed top-14 left-0 h-[calc(100vh-3.5rem)] flex-col border-r transition-all duration-300",
        isCollapsed ? "w-20" : "w-[240px]"
      )}
    >
      <div className="flex h-full flex-col gap-4 p-4">
        <nav className="flex flex-1 flex-col gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                variant="default"
                className="text-md bg-primary flex flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold hover:bg-[var(--primary)]/80"
              >
                <Plus className="size-6 text-[var(--accent)] transition-all" />
                <span
                  className={cn(
                    "text-[var(--accent)] transition-all",
                    isCollapsed && "hidden"
                  )}
                >
                  Create New
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                variant="default"
                className="group text-md flex flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold hover:bg-[var(--muted-foreground)]/30"
              >
                <Home className="size-6" />
                <span className={cn("transition-all", isCollapsed && "hidden")}>
                  Home
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                variant="default"
                className="group text-md flex flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold hover:bg-[var(--muted-foreground)]/30"
              >
                <FolderOpenDot className="size-6" />

                <span className={cn("transition-all", isCollapsed && "hidden")}>
                  My Project
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>My Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                variant="default"
                className="group text-md flex flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold hover:bg-[var(--muted-foreground)]/30"
              >
                <BookImage className="size-6" />
                <span className={cn("transition-all", isCollapsed && "hidden")}>
                  Templates
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Templates</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                variant="default"
                className="group text-md flex flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold hover:bg-[var(--muted-foreground)]/30"
              >
                <SquareKanban className="size-6" />
                <span className={cn("transition-all", isCollapsed && "hidden")}>
                  Recruit Requests
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Recruit Requests</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                variant="default"
                className="group text-md flex flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold hover:bg-[var(--muted-foreground)]/30"
              >
                <FileUser className="size-6" />
                <span className={cn("transition-all", isCollapsed && "hidden")}>
                  Applicants
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Applicants</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator className="my-2" />

          <div className="mt-auto">
            <DropdownMenu>
              <TooltipProvider>
                <Tooltip>
                  <DropdownMenuTrigger
                    className="bg-[var(--background)] hover:bg-[var(--muted-foreground)]/30"
                    asChild
                  >
                    <TooltipTrigger
                      variant="default"
                      className="group text-md flex w-full flex-row items-center justify-start gap-4 rounded-md px-3 py-2 font-semibold"
                    >
                      <Settings className="size-6 text-[var(--foreground)]" />
                      <span
                        className={cn(
                          "text-[var(--foreground)] transition-all",
                          isCollapsed && "hidden"
                        )}
                      >
                        Settings
                      </span>
                    </TooltipTrigger>
                  </DropdownMenuTrigger>
                  <TooltipContent side="right">
                    <p>Settings</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenuContent
                side={isCollapsed ? "right" : "bottom"}
                className="w-56"
                align={isCollapsed ? "start" : "end"}
              >
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Dark Mode</span>
                    <ThemeSwitch />
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>Notification Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="bg-background absolute top-[50%] -right-4 z-10 h-8 w-8 translate-y-[-50%] rounded-full"
        onClick={() => onCollapsedChange(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <ChevronLeft className="h-5 w-5" />
        )}
      </Button>
    </aside>
  );
};

export default MainSideBar;
