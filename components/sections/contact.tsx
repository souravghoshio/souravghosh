"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/layout/section";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Mars,
  Calendar,
} from "lucide-react";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";

import { CopyButton } from "@/components/ui/copy-button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const ContactSection = () => {
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
    <Section>
      <div className="flex flex-col md:flex-row w-full border-b border-border">
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
      <div className="w-full p-3">
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
    </Section>
  );
};

export default ContactSection;
