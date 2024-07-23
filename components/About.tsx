'use client'

import {motion} from "framer-motion"
import ProjectCard from "./ProjectCard";

const About = () => {
  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ x: "-300vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto p-4 h-[calc(100vh-6rem)]">
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="antialiased text-4xl font-bold">Biography</h1>
          <p className="text-lg tracking-wide">
            I am Sparshak Nag. I was born in Jalpaiguri, West Bengal on 24th
            July, 2003. I studied in Holy Child School, Jalpaiguri from KG to
            Class 12 entirely from 2007 to 2021. After my class 12th, I appeared
            for WBJEE exam and got into Netaji Subhash Engineering College,
            Kolkata to pursue B.Tech in Information Technology. I am currently
            nearing the end of my 3rd year. I am now also a resident of Kolkata,
            living in Sonarpur.
          </p>
        </div>
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="antialiased text-4xl font-bold">Academics</h1>
          <div className="flex flex-col gap-2">
            <h3 className="p-2 text-lg tracking-wide">
              i. 90% in 10th ICSE Boards
            </h3>
            <h3 className="p-2 text-lg tracking-wide">
              ii. 95% in 12th ISC Boards
            </h3>
            <h3 className="p-2 text-lg tracking-wide">
              iii. 8.996 CGPA (till 6th sem)
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-12 py-4">
          <h1 className="antialiased text-4xl font-bold">Skills</h1>
          <div className="flex items-center flex-wrap gap-4">
            {[
              "C",
              "C++",
              "Java",
              "Python",
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "ReactJS",
              "NextJS",
              "NodeJS",
              "Express",
              "MongoDB",
              "Firebase",
              "Supabase",
              "Redux Toolkit",
              "Chakra UI",
              "Shadcn/ui",
            ].map((s, id) => (
              <div
                key={id}
                className="px-2 py-1 bg-accent text-secondary-foreground rounded-2xl"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default About