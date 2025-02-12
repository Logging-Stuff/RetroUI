import TopNav from "@/components/TopNav";
import "./global.css";
import { Archivo_Black, Share_Tech, Share_Tech_Mono } from "next/font/google";
import { Metadata } from "next";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
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
    images: "/banner.png",
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
        className={`${shareTech.className} ${archivoBlack.variable} ${shareTech.variable} ${shareTechMono.variable}`}
      >
        <div className="relative z-40 pb-16">
          <TopNav />
        </div>
        {children}
      </body>
    </html>
  );
}
