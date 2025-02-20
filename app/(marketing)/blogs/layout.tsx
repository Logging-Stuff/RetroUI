import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RetroUI Blogs",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-6xl mx-auto pt-12 px-4 lg:px-0">{children}</div>;
}
