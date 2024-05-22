'use client'

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"
import Navbar from "./Navbar";
import {motion} from "framer-motion"
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

const TransitionProvider = ({children}: {children: ReactNode}) => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="h-screen w-screen">
        <motion.div
          className="bg-[#092635] h-screen w-screen fixed rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto inset-0 bg-[#092635] text-black text-6xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-6 items-center">
            <Loader2 className="animate-spin text-red-500 size-12" />
            <p className="text-red-500 text-sm">
              Refresh if it takes too long.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#092635] h-screen w-screen fixed bottom-0 rounded-t-[100px] z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
export default TransitionProvider