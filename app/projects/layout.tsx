import { getCanonicalUrl } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparshak Nag - Projects",
  description:
    "This is the project section of my portfolio website. Look at what I have worked on so far!",
  alternates: {
    canonical: `/projects`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
