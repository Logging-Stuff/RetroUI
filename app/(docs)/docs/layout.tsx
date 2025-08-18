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
    <div className="relative max-w-7xl mx-auto">
      <div className="max-lg:px-4">{children}</div>
    </div>
  );
}
