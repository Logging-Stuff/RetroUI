import TopNav from "@/components/TopNav";
import "./global.css";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import { Metadata } from "next";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Retro Styled React UI Library | Retro UI",
  description:
    "RetroUI - Retro styled component library built with React and TailwindCSS for modern web apps.",
  openGraph: {
    images: "https://retroui.dev/banner.png",
    title: "Retro Styled React UI Library | Retro UI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="97dd6182-c656-4265-97e0-ee9613b88078"
        />
      </head>
      <body
        className={`${space.className} ${archivoBlack.variable} ${space.variable} ${spaceMono.variable}`}
      >
        <div className="relative z-40 pb-16">
          <TopNav />
        </div>
        {children}
      </body>
    </html>
  );
}
