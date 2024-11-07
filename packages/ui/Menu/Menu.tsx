"use client";

import { cn } from "@/lib/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React, { HTMLAttributes } from "react";

const Menu = DropdownMenu.Root;
const Trigger = DropdownMenu.Trigger;

interface IMenuContent extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Content = ({ className, ...props }: IMenuContent) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      side="bottom"
      align="start"
      className={cn(
        "bg-white border-2 border-black shadow-md absolute top-2 min-w-20",
        className
      )}
      {...props}
    />
  </DropdownMenu.Portal>
);

const MenuItem = (props: any) => (
  <DropdownMenu.Item
    className="p-2 hover:bg-primary-300 outline-none cursor-pointer "
    {...props}
  />
);

const MenuComponent = Object.assign(Menu, {
  Trigger,
  Content,
  Item: MenuItem,
});

export { MenuComponent as Menu };
