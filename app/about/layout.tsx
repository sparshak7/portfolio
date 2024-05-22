import { getCanonicalUrl } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparshak Nag - About",
  description:
    "This is the about section of my portfolio website. Learn more about me and my academics!",
  alternates: {
    canonical: `/about`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
