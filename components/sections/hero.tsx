import React from "react";
import Image from "next/image";
import Section from "../layout/section";
import { ShimmeringText } from "../ui/shimmering-text";
import { TextFlip } from "../ui/text-flip";

const WORDS = ["Software Developer.", "Problem Solver.", "Java Enthusiast."];

const HeroSection = () => {
  return (
    <Section>
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
      <div className="flex w-full border-t border-border">
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
                  className="font-mono text-sm text-balance tracking-wide"
                  key={word}
                  text={word}
                />
              ))}
            </TextFlip>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
