"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/layout/section";

import { Mail, Phone, MapPin, Clock, Mars, Calendar } from "lucide-react";
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
            <div className="h-6 w-6 flex items-center justify-center bg-secondary border border-border rounded-sm ring-1 ring-foreground/10 ring-offset-1 ring-offset-background">
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
            <div className="h-6 w-6 flex items-center justify-center bg-secondary border border-border rounded-sm ring-1 ring-foreground/10 ring-offset-1 ring-offset-background">
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
            <div className="h-6 w-6 flex items-center justify-center bg-secondary border border-border rounded-sm ring-1 ring-foreground/10 ring-offset-1 ring-offset-background">
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
            <div className="h-6 w-6 flex items-center justify-center bg-secondary border border-border rounded-sm ring-1 ring-foreground/10 ring-offset-1 ring-offset-background">
              <Calendar className="w-4 text-gray-400" />
            </div>
            <span className="text-sm font-mono">
              {day}, {date}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-6 w-6 flex items-center justify-center bg-secondary border border-border rounded-sm ring-1 ring-foreground/10 ring-offset-1 ring-offset-background">
              <Clock className="w-4 text-gray-400" />
            </div>
            <span className="text-sm font-mono">{time.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <div className="h-6 w-6 flex items-center justify-center bg-secondary border border-border rounded-sm ring-1 ring-foreground/10 ring-offset-1 ring-offset-background">
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
                  className="w-8 h-8 flex items-center justify-center p-1 border-primary/20 border rounded-md opacity-80 hover:opacity-100 hover:bg-accent/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
                    />
                  </svg>
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
                  className="w-8 h-8 flex items-center justify-center p-1 border-primary/20 border rounded-md opacity-80 hover:opacity-100 hover:bg-accent/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                    />
                  </svg>
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
                  className="w-8 h-8 flex items-center justify-center p-1 border-primary/20 border rounded-md opacity-80 hover:opacity-100 hover:bg-accent/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z"
                    />
                  </svg>
                </Link>
              }
            />
            <TooltipContent>
              <p>GitHub (souravghoshio)</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              delay={0}
              closeDelay={0}
              render={
                <Link
                  target="_blank"
                  href="https://leetcode.com/souravghoshio"
                  className="w-8 h-8 flex items-center justify-center p-1 border-primary/20 border rounded-md opacity-80 hover:opacity-100 hover:bg-accent/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M331.4 73.3C342.5 61.5 361.1 60.8 373 71.9C384.9 83 385.5 101.7 374.4 113.5L331.4 159.5C352.9 162.8 373.5 171.3 390.5 185.1L465.1 245.4C477.7 255.6 479.7 274.2 469.5 286.8C459.3 299.4 440.8 301.4 428.1 291.2L353.5 230.9C327.3 209.8 281.6 212.7 259 236.8L177 325C155.5 348 157.9 385 182.6 409.2L273.8 498.6C298.7 522.6 339.4 522.6 363.9 498.2L415 447.2C426.5 435.7 445.1 435.7 456.6 447.3C468.1 458.9 468 477.5 456.5 489L405.4 540C358.3 587.1 281.4 587.7 233.5 541.6L141.5 451.4C94.6 405.3 90 331.9 134 284.7L331.4 73.3zM507.7 337.2C523.9 337.2 537.1 350.4 537.1 366.7C537.1 383 523.9 396.2 507.7 396.2L290.8 396.2C274.6 396.2 261.4 383 261.4 366.7C261.4 350.4 274.6 337.2 290.8 337.2L507.7 337.2z"
                    />
                  </svg>
                </Link>
              }
            />
            <TooltipContent>
              <p>LeetCode (souravghoshio)</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
