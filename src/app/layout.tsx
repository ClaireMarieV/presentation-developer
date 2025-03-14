import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { themClass } from "@/ui/theme.css";
import "./layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qu'est-ce qu'une développeuse, qu'est-ce qu'un développeur ?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={themClass}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
