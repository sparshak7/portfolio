export type projectProps = {
  name: string,
  description: string,
  image: string,
  stack: string[],
  link: string,
  extra: boolean
}

export const project = [
  {
    name: "MovieBase",
    description:
      "A dynamic and responsive movie database, supporting watchlist and favorites for authenticated users with advanced search functionality.",
    image: "/proj1.png",
    stack: ["ReactJS", "Chakra UI", "RTK Query", "Firebase", "TMDB API"],
    link: "https://movie-base-v1.netlify.app/",
    extra: false,
  },
  {
    name: "CommerceStop",
    description:
      "A dynamic, responsive and SEO-optimised e-commerce website built on RSA architecture, facilitating seamless commerce with admin panel and payment checkout.",
    image: "/proj2.jpg",
    stack: ["NextJS", "Supabase", "Prisma ORM", "Stripe", "Shadcn/ui"],
    link: "www",
    extra: true,
  },
  {
    name: "Starfish Algorithm - PSO",
    description:
      "A metaheuristic, bio-inspired Particle Swarm Optimisation (PSO) based algorithm to solve optimization problems on datasets, taking the nature of reproduction of starfish.",
    image: "/proj3.jpg",
    stack: ["Python", "Numpy"],
    link: "www",
    extra: true,
  },
];