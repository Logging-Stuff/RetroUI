import TopNav from "@/components/TopNav";
import "./global.css";
import { Archivo_Black, Share_Tech, Share_Tech_Mono } from "next/font/google";
import { Metadata } from "next";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Retro Styled Tailwind UI Library | Retro UI",
  description: "RetroUI - Retro styled TailwindCSS component library for modern web apps.",
  openGraph: {
    images: ['/banner.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${shareTech.className} ${archivoBlack.variable} ${shareTech.variable} ${shareTechMono.variable}`}
      >
        <div className="mb-8 relative z-10">
          <TopNav />
        </div>
        {children}
      </body>
    </html>
  );
}
