"use client";

import { project } from "@/utils/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Skills = () => {
  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ x: "-300vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto p-4 h-[calc(100vh-6rem)]">
        <div className="flex flex-col gap-6 mb-10">
          <h1 className="antialiased text-4xl font-bold">Big-scale projects</h1>
          <p className="text-lg">
            I have done many small projects to build my foundation on these
            topics, learning from others. I have not included those because they
            were for learning and I was not the creator. Below are the projects
            that I have worked from scratch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.map((p, id) => (
              <ProjectCard key={id} project={p} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-12 py-4">
          <h1 className="antialiased text-4xl font-bold">Achievements</h1>
          <div className="flex flex-col gap-2">
            <h3 className="p-2 text-lg tracking-wide">
              i. 400+ problems on
              <span>
                <Link
                  href="https://leetcode.com/u/zeitgeist_7/"
                  target="_blank"
                  className="text-red-500"
                >
                  {" "}
                  Leetcode
                </Link>
              </span>
            </h3>
            <h3 className="p-2 text-lg tracking-wide">
              ii. Highest rating 1555 in
              <span>
                <Link
                  href="https://www.codechef.com/users/sparshak_nag7"
                  target="_blank"
                  className="text-red-500"
                >
                  {" "}
                  Codechef
                </Link>
              </span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-12 py-4">
          <h1 className="antialiased text-4xl font-bold">Certifications</h1>
          <div className="flex flex-col gap-2">
            <h3 className="p-2 text-lg tracking-wide">
              i. The Web Development Bootcamp by Angela Yu on Udemy
            </h3>
            <h3 className="p-2 text-lg tracking-wide">
              ii. Mastering C++ DSA by Abdul Bari on Udemy
            </h3>
            <h3 className="p-2 text-lg tracking-wide">
              iii. Fullstack VAT Training by ESC Technologies
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Skills;
