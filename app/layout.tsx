import "./global.css"
import { Archivo_Black, Share_Tech, Share_Tech_Mono } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-head',
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-sans',
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${shareTech.className} ${archivoBlack.variable} ${shareTech.variable} ${shareTechMono.variable}`}>{children}</body>
    </html>
  )
}
