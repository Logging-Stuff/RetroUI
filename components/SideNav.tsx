"use client";

import { navConfig } from "@/config/navigation";
import { Badge, Text } from "@/components/retroui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div
      className={`lg:fixed top-0 bottom-0 border-r-2 h-screen overflow-y-scroll transition-transform transform md:translate-x-0 w-60 bg-background flex flex-col justify-start md:justify-start py-14 md:py-8`}
      // className={`border-r-2 h-screen overflow-y-scroll w-60 bg-background flex flex-col justify-start py-8`}
    >
      <nav className="flex flex-col items-start max-lg:px-6 lg:pr-6 lg:pt-26 space-y-4" aria-label="Main navigation">
        {navConfig.sideNavItems.map((item) => (
          <div key={item.title} className="w-full">
            <Text as="h6">{item.title}</Text>
            <div className="flex flex-col w-full">
              {item.children.map((child) => (
                <Link
                  key={child.title}
                  href={child.href}
                  className={`px-2 py-1 w-full border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors ${
                    pathname === child.href && "bg-primary text-primary-foreground"
                  }`}
                >
                  {child.title}
                  {child.tag && (
                    <Badge size="sm" className="ml-2">
                      {child.tag}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
