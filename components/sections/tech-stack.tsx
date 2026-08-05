import { ReactNode } from "react";
import Link from "next/link";

import Section from "@/components/layout/section";
import JavaIcon from "../icons/java-icon";
import JavaScriptIcon from "../icons/javascript-icon";
import SpringBootIcon from "../icons/spring-boot-icon";
import ReactIcon from "../icons/react-icon";
import NextjsIcon from "../icons/next-js-icon";
import TailwindCSSIcon from "../icons/tailwindcss-icon";
import ShadCnIcon from "../icons/shadcn-icon";
import PostgresIcon from "../icons/postgres-icon";
import DockerIcon from "../icons/docker-icon";



type TechStack = {
  name: string;
  icon: ReactNode;
  url: string;
};

const TECH_STACK: TechStack[] = [
  {
    name: "Java",
    icon: <JavaIcon />,
    url: "https://www.java.com/",
  },
  {
    name: "Spring Boot",
    icon: <SpringBootIcon />,
    url: "https://spring.io/projects/spring-boot",
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon />,
    url: "https://www.postgresql.org/",
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
    url: "https://www.docker.com/",
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: <ReactIcon />,
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <NextjsIcon />,
    url: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSSIcon />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "shadcn/ui",
    icon: <ShadCnIcon />,
    url: "https://ui.shadcn.com/",
  },
];

const TechStackSection = () => {
  return (
    <Section>
      <div className="w-full">
        <div className="px-3 border-b border-border">
          <h2 className="text-2xl font-medium font-heading">Tech Stack</h2>
        </div>
        <div className="flex w-full flex-wrap shrink-0 gap-2 p-3">
          {TECH_STACK.map(({ name, icon, url }) => (
            <Link
              href={url}
              key={url}
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-full border border-border py-1.5 px-2.5 bg-accent/40"
            >
              <div className="w-4">{icon}</div>
              <span className="text-xs font-mono font-medium">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechStackSection;
