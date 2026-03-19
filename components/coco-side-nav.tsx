"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  Home,
  FolderOpen,
  Library,
  Clock,
  User,
} from "lucide-react";
import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

interface CocoSideNavProps {
  className?: string;
  onLogoClick?: () => void;
}

export function CocoSideNav({ className, onLogoClick }: CocoSideNavProps) {
  const topNavItems: NavItem[] = [
    { icon: <Home className="size-5" />, label: "Home", href: "#" },
    { icon: <FolderOpen className="size-5" />, label: "Projects", href: "#" },
    { icon: <Library className="size-5" />, label: "Library", href: "#" },
    { icon: <Clock className="size-5" />, label: "History", href: "#" },
  ];

  const bottomNavItems: NavItem[] = [
    { icon: <User className="size-5" />, label: "Profile", href: "#" },
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <aside
        className={cn(
          "flex h-screen w-14 flex-col items-center border-r border-[#e5e5e5] bg-[#fafafa] py-4",
          className
        )}
      >
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className="mb-4 cursor-pointer rounded-full transition-opacity hover:opacity-80"
          aria-label="Reset prototype"
        >
          <Logo icon />
        </button>

        {/* Top Navigation */}
        <nav className="flex flex-1 flex-col items-center gap-1">
          {topNavItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md text-[#404040] transition-colors hover:bg-[#e5e5e5]",
                    item.active && "bg-[#1d4b34] text-white hover:bg-[#123021]"
                  )}
                >
                  {item.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>

        {/* Bottom Navigation */}
        <nav className="flex flex-col items-center gap-1">
          {bottomNavItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md text-[#404040] transition-colors hover:bg-[#e5e5e5]",
                    item.active && "bg-[#1d4b34] text-white hover:bg-[#123021]"
                  )}
                >
                  {item.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
}
