"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import { TooltipProvider } from "./ui/tooltip";

interface IAppProps {}

import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
  FolderArchive,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

// Debounced values
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

export const SideNavBar: React.FC<IAppProps> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <TooltipProvider>
      <div className="relative min-w-[80px] border-r px-10 pb-10 pt-24">
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Dashboard",
              href: "/",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Members",
              href: "/members",
              icon: UsersRound,
              variant: "ghost",
            },
            {
              title: "Projects",
              href: "/projects",
              icon: FolderArchive,
              variant: "ghost",
            },
            {
              title: "Settings",
              href: "/settings",
              icon: Settings,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </TooltipProvider>
  );
};
