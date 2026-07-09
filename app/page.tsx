import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Moon } from "lucide-react";
import { TextFlip } from "@/components/text-flip";
import { ShimmeringText } from "@/components/shimmering-text"


const WORDS = ["Software Developer.", "Problem Solver.", "Java Enthusiast."]

const Home = () => {
  const navLinks = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Projects",
      url: "/projects",
    },
    {
      text: "Skills",
      url: "/skills",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <main className="w-full min-h-screen">
      <nav className="w-full fixed top-0 left-0 border-b border-white/10 bg-background">
        <div className="flex w-full max-w-3xl items-center justify-between mx-auto px-4 py-3 border-l border-r border-white/10">
          <div className="flex items-center gap-1.5">
            <Image
              src={"/profile-pic.png"}
              alt="profile image"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-semibold">Sourav Ghosh</span>
          </div>

          <div className="flex items-center gap-1">
            <ul className="hidden md:flex items-center gap-4">
              {navLinks.map((navlink) => (
                <li key={navlink.url} className="text-sm">
                  <Link
                    className="font-medium text-gray-400 hover:text-gray-50"
                    href={navlink.url}
                  >
                    {navlink.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <span className="text-xl font-light text-gray-500/50 pl-1">
                |
              </span>
            </div>
            <button className="hover:bg-zinc-800/50 p-2 rounded-md group">
              <Moon size={16} className="group-hover:-rotate-12 " />
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-3xl border-l border-r border-white/10 min-h-screen mx-auto">
        <div>
          <Image
            src={"/bg-new.jpg"}
            alt="backgroud image"
            width={200}
            height={200}
            className="w-full h-56 md:h-80"
          />
        </div>
        <div className="flex w-full border-b border-t border-white/10">
          <div className="border-r border-white/10">
            <Image
              src={"/profile-pic.png"}
              alt="profile picture"
              width={100}
              height={100}
              className="h-auto w-32 md:w-48 aspect-square rounded-full"
            />
          </div>
          <div className="mt-auto w-full">
            <div className="w-full border-b border-t border-white/10 px-4">
              <h3 className="text-3xl font-bold">Sourav Ghosh</h3>
            </div>
            <div className="px-4 py-1.5">
              <TextFlip className="">
                {WORDS.map((word) => (
                  <ShimmeringText className="[--color:#4B5563] [--shimmering-color:#fff] font-mono text-balance" key={word} text={word}/>
                ))}
              </TextFlip>
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </main>
  );
};

export default Home;
