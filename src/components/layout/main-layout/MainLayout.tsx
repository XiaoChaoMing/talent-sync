import { ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/utils/utils";

import MainHeader from "./header/MainHeader";
import MainSideBar from "./sidebar/MainSideBar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      <MainHeader />
      <div className="flex">
        <MainSideBar
          isCollapsed={isCollapsed}
          onCollapsedChange={setIsCollapsed}
        />
        <div
          className={cn(
            "flex-1 transition-all duration-300",
            isCollapsed ? "ml-16" : "ml-[240px]"
          )}
        >
          <main className="w-full bg-transparent">{children}</main>
        </div>
      </div>
    </div>
  );
};
