import React from "react";
import Section from "@/components/layout/section";
import JavaIcon from "../icons/java-icon";
import JavaScriptIcon from "../icons/javascript-icon";
import SpringIcon from "../icons/spring-icon";
import SpringBootIcon from "../icons/spring-boot-icon";
import ReactIcon from "../icons/react-icon";
import NextjsIcon from "../icons/next-js-icon";
import TailwindCSSIcon from "../icons/tailwindcss-icon";
import ShadCnIcon from "../icons/shadcn-icon";
import PostgreIcon from "../icons/postgres-icon";
import DockerIcon from "../icons/docker-icon";

const TECH_STACK = [
  {
    name: "Java",
    icon: <JavaIcon />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    name: "Spring",
    icon: <SpringIcon />,
  },

  {
    name: "Spring Boot",
    icon: <SpringBootIcon />,
  },

  {
    name: "React.js",
    icon: <ReactIcon />,
  },

  {
    name: "Next.js",
    icon: <NextjsIcon />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSSIcon />,
  },
  {
    name: "Shadcn UI ",
    icon: <ShadCnIcon />,
  },

  {
    name: "PostgreSQL",
    icon: <PostgreIcon />,
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
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
          {TECH_STACK.map(({ name, icon }) => (
            <div
              key={name}
              className="h-8 flex items-center justify-center gap-2 rounded-full border border-border py-2 px-3"
            >
              <div className="w-4 grayscale">{icon}</div>
              <span className="text-xs font-mono font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechStackSection;
