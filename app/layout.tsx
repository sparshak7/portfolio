import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TransitionProvider from "@/components/TransitionProvider";
import { getCanonicalUrl } from "@/utils";

const dm_sans = DM_Sans({ subsets: ["latin"], variable:"--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalUrl()),
  title: "Sparshak Nag - Portfolio",
  description: "This is my portfolio website built using NextJS. I am Sparshak Nag, an ardent web developer and IT engineering student from India.",
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased",
          dm_sans.variable
        )}
      >
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
