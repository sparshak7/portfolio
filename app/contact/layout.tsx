import { getCanonicalUrl } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparshak Nag - Contact",
  description:
    "This is the contact section of my portfolio website. If you are impressed by my work so far, consider me for your next project and feel free to contact me!",
  alternates: {
    canonical: `/contact`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
