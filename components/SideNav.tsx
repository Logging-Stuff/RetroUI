import { navConfig } from "@/config/navigation";
import { H6 } from "@/packages/ui";
import Link from "next/link";

export default function SideNav() {
  return (
    <div
      className={`fixed top-16 left-0 border-r-2 border-black h-full transition-transform transform md:translate-x-0 w-64 bg-white z-50`}
    >
      <nav className="flex flex-col items-start p-6 space-y-4">
        {navConfig.sideNavItems.map((item) => (
          <div key={item.title}>
            <H6>{item.title}</H6>
            <div className="flex flex-col space-y-2">
              {item.children.map((child) => (
                <Link key={child.title} href={child.href}>
                  {child.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
