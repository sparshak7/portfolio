'use client'

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ x: "-300vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-12 py-2 gap-4">
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/hero.jpg"
            alt="Personal picture"
            fill
            className="object-contain"
          />
        </div>
        <div className="h-1/2 lg:h-full items-center lg:items-start flex flex-col gap-8 justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, this is Sparshak Nag.
          </h1>
          <p className="md:text-xl">
            An ardent web developer and an IT engineering student.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://drive.google.com/file/d/1WM5Sg43mCNNnLZD-6AjMzecy_94xGaxO/view?usp=sharing"
              target="_blank"
            >
              <button className="p-2 ring-2 bg-accent text-secondary-foreground ring-cyan-400 rounded-2xl hover:opacity-75">
                Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Hero