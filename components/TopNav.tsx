import React from "react";
import Link from "next/link";
import { GitBranchIcon, GithubIcon } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import { Button } from "@/packages/ui";
import { navConfig } from "@/config/navigation";

export default function TopNav() {
  return (
    <nav className="fixed top-0 h-16 left-0 right-0 w-full border-b-2 border-black bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-black font-head text-2xl flex items-end"
            >
              <img
                src="/images/logo_full.png"
                alt="retro ui logo"
                className="w-16 mr-2"
              />
              RetroUI
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navConfig.topNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-primary-500 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            <Link
              href="https://github.com/ariflogs/retroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </Link>
            <HamburgerMenu />
          </div>
          <div className="hidden lg:flex items-center">
            <Link
              href="https://github.com/ariflogs/retroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center" variant="outline" size="sm">
                <GithubIcon size="16" className="mr-2" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
