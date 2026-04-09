import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Jorge — Software Developer",
  description:
    "Portfolio moderno com 3D e animações — projetos, stack e trajetória na 42.",
  metadataBase: new URL("https://lleodev.github.io"),
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: "Leonardo Jorge — Software Developer",
    description:
      "Portfolio moderno com 3D e animações — projetos, stack e trajetória na 42.",
    type: "website",
    url: "https://lleodev.github.io",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
