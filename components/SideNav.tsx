import { navConfig } from "@/config/navigation";
import { Badge, Text } from "@/components/ui";
import Link from "next/link";

export default function SideNav() {
  return (
    <div
      className={`fixed right-auto border-r-2 border-black h-full overflow-y-scroll transition-transform transform md:translate-x-0 w-64 bg-white flex flex-col justify-center md:justify-start py-14 md:py-8`}
    >
      <nav className="flex flex-col items-start px-6 lg:pl-0 pb-26 space-y-4">
        {navConfig.sideNavItems.map((item) => (
          <div key={item.title}>
            <Text as="h6">{item.title}</Text>
            <div className="flex flex-col space-y-2">
              {item.children.map((child) => (
                <Link key={child.title} href={child.href}>
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
