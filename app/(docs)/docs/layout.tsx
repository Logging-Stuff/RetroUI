import SideNav from "@/components/SideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started | RetroUI",
};

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <SideNav />
      </div>
      <div className="lg:ml-72 mt-20 px-4">{children}</div>
    </div>
  );
}