import React from "react";
import Link from "next/link";
import Image from "next/image";

import ThemeButton from "@/components/common/theme-button"

type navLink = {
  text: string;
  url: string;
};

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

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 z-50 px-2">
      <nav className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between border border-border bg-background">
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
      </nav>
    </header>
  );
};

export default Navbar;
