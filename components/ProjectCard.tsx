import { projectProps } from "@/utils/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  project: projectProps;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="py-4">
      <Card>
        <CardHeader>
          <div className="relative mb-4 h-[300px]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 py-2">
            <h1 className="antialiased font-bold">Tech Stack</h1>
            <div className="flex items-center flex-wrap gap-2">
              {project.stack.map((s, id) => (
                <div
                  key={id}
                  className="px-2 py-1 bg-accent text-secondary-foreground rounded-2xl"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {project.extra ? (
            <h3>Work in progress...</h3>
          ) : (
            <div>
              <h3>Hosted at: </h3>
              <span>
                <Link
                  href={project.link}
                  className="text-red-400"
                  target="_blank"
                >
                  {project.link}
                </Link>
              </span>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
export default ProjectCard;
