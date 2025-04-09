import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import { Button, Text } from "@/components/ui";
import { navConfig } from "@/config/navigation";

export default function TopNav() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full border-b-2 border-black bg-white">
        <div className="w-full bg-black text-white">
          <div className="container max-w-6xl mx-auto px-4 py-2 flex justify-center space-x-4 items-center">
            <Text className="text-sm text-center">
              Ship faster with premium blocks and templates!
            </Text>
            <a href="https://dub.sh/retroui-pro" target="_blank">
              <Button
                size="sm"
                className="shadow-none font-sans font-bold px-2 py-1 w-24"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="container max-w-6xl px-4 lg:px-0 mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="shrink-0">
              <a
                href="/"
                className="text-black font-head text-2xl flex items-end"
              >
                <Image
                  src="/images/logo_full.png"
                  alt="retro ui logo"
                  className="mr-2"
                  height={30}
                  width={60}
                />
                RetroUI
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {navConfig.topNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:underline decoration-primary underline-offset-2 transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 lg:hidden">
              <Link
                href="https://github.com/Logging-Stuff/retroui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </Link>
              <HamburgerMenu />
            </div>

            <div className="hidden lg:flex items-center">
              <Link
                href="https://github.com/Logging-Stuff/retroui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm">
                  <GithubIcon size="14" className="mr-2" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
