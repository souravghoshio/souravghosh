"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Mars,
  Calendar,
  Repeat,
} from "lucide-react";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { TextFlip } from "@/components/ui/text-flip";
import { ShimmeringText } from "@/components/ui/shimmering-text";

import { Button } from "@/components/ui/button";

import { CopyButton } from "@/components/ui/copy-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeButton from "@/components/common/theme-button";

const WORDS = ["Software Developer.", "Problem Solver.", "Java Enthusiast."];

const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

const dayFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  weekday: "long",
});

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const Home = () => {

  type navLink = {
    text: string;
    url: string;
  }

  const navLinks: navLink[] = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/#about",
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

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = timeFormatter.format(now);
  const day = dayFormatter.format(now);
  const date = dateFormatter.format(now);


  return (
    <main className="w-full min-h-screen">
      <nav className="w-full fixed top-0 left-0 border-b border-border bg-background z-10">
        <div className="flex w-full max-w-3xl items-center justify-between mx-auto px-4 py-3 border-l border-r border-border">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/profile-pic-light.png"}
              alt="profile image"
              width={32}
              height={32}
              className="rounded-full block dark:hidden"
            />
            <Image
              src={"/profile-pic-dark.png"}
              alt="profile image"
              width={32}
              height={32}
              className="rounded-full hidden dark:block"
            />
            <span className="font-medium font-heading">Sourav Ghosh</span>
          </Link>

          <div className="flex items-center gap-1">
            <ul className="hidden md:flex items-center gap-4 px-3 border-r-2">
              {navLinks.map((navlink) => (
                <li key={navlink.url} className="text-sm">
                  <Link
                    className="font-medium opacity-60 hover:opacity-100 transition-opacity"
                    href={navlink.url}
                  >
                    {navlink.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeButton />
          </div>
        </div>
      </nav>
      <div className="w-full max-w-3xl border-l border-r border-border min-h-screen mx-auto">
        <div>
          <Image
            src={"/bg.jpg"}
            alt="backgroud image"
            loading="eager"
            width={500}
            height={500}
            className="w-full h-56 md:h-72 object-cover md:object-fill dark:brightness-75 brightness-100 transition-all duration-700"
          />
        </div>
        <div className="flex w-full border-b border-t border-border">
          <div className="border-r border-border">
            <Image
              src={"/profile-pic-light.png"}
              alt="profile picture"
              width={100}
              height={100}
              className="h-auto w-32 md:w-48 aspect-square rounded-full block dark:hidden"
            />
            <Image
              src={"/profile-pic-dark.png"}
              alt="profile picture"
              width={100}
              height={100}
              className="h-auto w-32 md:w-48 aspect-square rounded-full hidden dark:block"
            />
          </div>
          <div className="mt-auto w-full">
            <div className="w-full border-b border-t border-border px-4">
              <h1 className="text-3xl font-heading font-semibold">
                Sourav Ghosh
              </h1>
            </div>
            <div className="px-4 py-1.5">
              <TextFlip interval={3}>
                {WORDS.map((word) => (
                  <ShimmeringText
                    className="[--color:#4B5563] [--shimmering-color:#fff] font-mono text-sm text-balance tracking-wide"
                    key={word}
                    text={word}
                  />
                ))}
              </TextFlip>
            </div>
          </div>
        </div>
        <div className="h-7 w-full pattern overflow-hidden" />
        <div className="border-t border-b border-border flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 md:border-r border-dashed border-border p-3">
            <div className="flex items-center gap-3 group">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <Mail className="w-4 text-gray-400" />
              </div>
              <Link
                className="hover:underline underline-offset-3 font-mono text-sm tracking-tight"
                href="mailto:inbox.souravghosh@gmail.com"
                target="_blank"
              >
                inbox.souravghosh@gmail.com
              </Link>
              <CopyButton
                className="opacity-0 group-hover:opacity-50 hover:opacity-100"
                variant="ghost"
                size="icon-sm"
                text="inbox.souravghosh@gmail.com"
              />
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <Phone className="w-4 text-gray-400" />
              </div>
              <a
                className="hover:underline underline-offset-3 font-mono text-sm tracking-tight"
                href="tel:+919734567676"
              >
                +91 97345 67676
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <MapPin className="w-4 text-gray-400" />
              </div>
              <a
                className="hover:underline underline-offset-3 font-mono text-sm tracking-tight"
                href="https://maps.app.goo.gl/PNDqHcRtFGFEgMrc8"
              >
                Kolkata, India
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <Calendar className="w-4 text-gray-400" />
              </div>
              <span className="text-sm font-mono">
                {day}, {date}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <Clock className="w-4 text-gray-400" />
              </div>
              <span className="text-sm font-mono">{time.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <Mars className="w-4 text-gray-400" />
              </div>
              <span className="text-sm font-mono">he/him</span>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-border p-3">
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                delay={0}
                closeDelay={0}
                render={
                  <Link
                    target="_blank"
                    href="https://linkedin.com/in/souravghoshio"
                    className="w-8 h-8 flex items-center justify-center p-1 border-border border rounded-md opacity-80 hover:opacity-100"
                  >
                    <RiLinkedinBoxFill className="w-full h-full" />
                  </Link>
                }
              />
              <TooltipContent>
                <p>LinkedIn (souravghoshio)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                delay={0}
                closeDelay={0}
                render={
                  <Link
                    target="_blank"
                    href="https://x.com/souravghoshio"
                    className="w-8 h-8 flex items-center justify-center p-1 border-border border rounded-md"
                  >
                    <RiTwitterXFill className="w-full h-full" />
                  </Link>
                }
              />
              <TooltipContent>
                <p>X (@souravghoshio)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                delay={0}
                closeDelay={0}
                render={
                  <Link
                    target="_blank"
                    href="https://github.com/souravghoshio"
                    className="w-8 h-8 flex items-center justify-center p-1 border-border border rounded-md"
                  >
                    <RiGithubFill className="w-full h-full" />
                  </Link>
                }
              />
              <TooltipContent>
                <p>GitHub (souravghoshio)</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="h-7 w-full pattern overflow-hidden" />
        <div className="border-t border-b border-border">
          <div className="px-3 border-b border-border">
            <h2 className=" text-2xl font-medium font-heading">
              {"Good Morning"}
            </h2>
          </div>
          <section id="about" className="border-b border-border">
            <p className="p-3 text-sm font-normal">
              I'm Sourav Ghosh — a Software Developer focused on backend
              engineering, building reliable applications with Java, Spring
              Boot, and modern web technologies.
            </p>
            <p className="p-3 text-sm font-normal">
              I enjoy understanding how systems work under the hood and turning
              ideas into well-crafted software through clean code, continuous
              learning, and hands-on projects.
            </p>
          </section>
        </div>
        <div className="h-7 w-full pattern overflow-hidden" />
      </div>
    </main>
  );
};

export default Home;
