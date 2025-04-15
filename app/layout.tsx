import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FocusFlow",
  description: "Alcance foco total com o melhor app de produtividade.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "FocusFlow",
    description: "Alcance foco total com o melhor app de produtividade.",
    images: "/preview.png",
    url: "https://appfocusflow.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
