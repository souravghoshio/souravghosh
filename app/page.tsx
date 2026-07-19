"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {useTheme} from "next-themes"
import { useClickSound } from "@/hooks/use-click-sound"

import { Moon, Sun, Mail, Phone, MapPin, Clock, Mars, Calendar, Repeat } from "lucide-react";
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


  const {setTheme, resolvedTheme} = useTheme();
  const { playClick } = useClickSound();

  const toggleTheme = () => {
    setTheme(resolvedTheme == "dark" ? "light" : "dark");
  }

  return (
    <main className="w-full min-h-screen">
      <nav className="w-full fixed top-0 left-0 border-b border-border bg-background">
        <div className="flex w-full max-w-3xl items-center justify-between mx-auto px-4 py-3 border-l border-r border-border">
          <div className="flex items-center gap-1.5">
            <Image
              src={"/profile-pic-light.png"}
              alt="profile image"
              width={24}
              height={24}
              className="rounded-full block dark:hidden"
            />
            <Image
              src={"/profile-pic-dark.png"}
              alt="profile image"
              width={24}
              height={24}
              className="rounded-full hidden dark:block"
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
            <button onClick={() => {
              toggleTheme();
              playClick();
            }} className="dark:hover:bg-zinc-800/50 hover:bg-gray-100 p-2 rounded-md group cursor-pointer">
              <Moon size={16} className="group-hover:-rotate-12 hidden dark:block" />
              <Sun size={16} className="group-hover:-rotate-12 dark:hidden block" />
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-3xl border-l border-r border-border min-h-screen mx-auto">
        <div>
          <Image
            src={"/bg-light.jpg"}
            alt="backgroud image"
            width={200}
            height={200}
            className="w-full h-56 md:h-72 block dark:hidden"
          />

          <Image
            src={"/bg-dark.png"}
            alt="backgroud image"
            width={200}
            height={200}
            className="w-full h-56 md:h-72 hidden dark:block"
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
              <h3 className="text-3xl font-bold">Sourav Ghosh</h3>
            </div>
            <div className="px-4 py-1.5">
              <TextFlip interval={3}>
                {WORDS.map((word) => (
                  <ShimmeringText
                    className="[--color:#4B5563] [--shimmering-color:#fff] font-mono text-sm text-balance"
                    key={word}
                    text={word}
                  />
                ))}
              </TextFlip>
            </div>
          </div>
        </div>
        <div className="h-10 w-full pattern overflow-hidden" />
        <div className="border-t border-b border-border flex w-full">
          <div className="w-1/2 border-r border-dashed border-border p-3">
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
          <div className="w-1/2 p-3">
           <div className="flex items-center gap-3">
              <div className="h-6 w-6 flex items-center justify-center bg-zinc-800/80 border border-border rounded-sm ring-1 ring-white/8 ring-offset-1 ring-offset-background">
                <Calendar className="w-4 text-gray-400" />
              </div>
              <span className="text-sm font-mono">{day}, {date}</span>
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
                  >
                    <Button variant="outline" className="w-8 h-8 p-1">
                      <RiLinkedinBoxFill size={36} />
                    </Button>
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
                  <Link target="_blank" href="https://x.com/souravghoshio">
                    <Button variant="outline" className="w-8 h-8 p-1">
                      <RiTwitterXFill />
                    </Button>
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
                  <Link target="_blank" href="https://github.com/souravghoshio">
                    <Button variant="outline" className="w-8 h-8 p-1">
                      <RiGithubFill />
                    </Button>
                  </Link>
                }
              />
              <TooltipContent>
                <p>GitHub (souravghoshio)</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="h-10 w-full pattern overflow-hidden" />
        <div className="border-t border-b border-border p-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae ex magnam tempore debitis, dolores, provident
            praesentium dicta dignissimos odit ad rem minima veniam? Voluptatem
            amet assumenda ducimus quo rerum dolorem repudiandae excepturi animi
            in reprehenderit at, asperiores, eveniet nemo quos porro vitae
            voluptate soluta, ad officiis. Amet dolor in nesciunt incidunt omnis
            earum. Perferendis, provident fuga. Repellat ad tempora eius aut
            minus delectus necessitatibus natus voluptates dicta. Perferendis
            ipsam doloribus perspiciatis quis! Magni, excepturi eos. Accusamus
            minima quis at excepturi eos ea ratione impedit fuga possimus sed,
            doloribus cumque molestias magnam numquam fugit qui nam quisquam
            quod. Asperiores inventore aspernatur animi vero at similique maxime
            doloribus fugiat ipsa atque repellat quod corrupti officiis
            voluptatum, voluptatem et sunt vel nobis culpa itaque ratione,
            repudiandae dolor? Recusandae fugiat, laudantium distinctio aut vel
            dignissimos voluptates repellat explicabo officia laboriosam.
            Dolorum numquam excepturi commodi, facere at adipisci dolorem,
            sapiente officiis amet eum vel fuga, nemo doloribus ex a ipsum
            laudantium. At vel, asperiores rem id quae excepturi quas dicta
            natus in mollitia accusantium quod veniam numquam ea libero
            obcaecati dolores quam non, itaque odit provident enim velit tempora
            dolorem? Nihil, reprehenderit soluta quos cumque enim tenetur saepe.
            Unde vero laboriosam velit voluptatem deserunt quisquam!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
