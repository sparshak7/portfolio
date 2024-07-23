"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Great_Vibes } from "next/font/google";
import { links } from "@/utils/menulinks";
import {motion} from "framer-motion"
import { endVariants, menuItemVariants, menuVariants, midVariants, topVariants } from "@/utils/framer-variants";

type NavLinkProps = {
  link: string;
  name: string;
};

type SocialLinkProps = {
  link: string;
  icon: ReactNode;
};

const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="max-w-7xl mx-auto md:px-2 md:py-4 p-5 flex justify-between items-center lg:flex-row md:flex-row-reverse border-b border-b-gray-600">
      <div className="items-center gap-3 hidden md:flex">
        <NavLinks link="/" name="Home" />
        <NavLinks link="/about" name="About" />
        <NavLinks link="/projects" name="Projects" />
        <NavLinks link="/contact" name="Contact" />
      </div>
      <Link href="/">
        <div className="flex items-center gap-2 justify-center">
          <p className={cn("antialiased text-2xl", great_vibes.className)}>
            Sparshak
          </p>
          <p className={cn("antialiased text-2xl", great_vibes.className)}>
            Nag
          </p>
        </div>
      </Link>
      {pathname !== "/contact" && (
        <div className="items-center gap-8 hidden lg:flex">
          <SocialLinks
            link="https://github.com/sparshak7"
            icon={<BsGithub className="size-5" />}
          />
          <SocialLinks
            link="https://www.linkedin.com/in/sparshak-nag-9211b314b/"
            icon={<BsLinkedin className="size-5" />}
          />
          <SocialLinks
            link="https://www.instagram.com/exzeitgeist/"
            icon={<BsInstagram className="size-5" />}
          />
        </div>
      )}

      <div className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative">
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={midVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={endVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            className="flex flex-col items-center justify-center gap-8 absolute top-0 left-0 w-screen h-screen bg-background text-2xl z-40"
          >
            {links.map((link, id) => (
              <motion.div variants={menuItemVariants} key={id} className="z-50">
                <Link href={link.link}>{link.name}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

function NavLinks(props: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={props.link}
      className={cn(
        "p-3 hover:bg-accent rounded-2xl transition duration-200 ease-in-out",
        pathname === props.link && "bg-accent rounded-2xl"
      )}
    >
      {props.name}
    </Link>
  );
}

export function SocialLinks(props: SocialLinkProps) {
  return <Link href={props.link} target="_blank">{props.icon}</Link>;
}

export default Navbar;
