import { useState, useEffect } from "react";
import Section from "@/components/layout/section";

const AboutSection = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = Number(
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      hour12: false,
    }).format(now),
  );

  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <Section>
      <div className="px-3 border-b border-border">
        <h2 className=" text-2xl font-medium font-heading">{greeting}</h2>
      </div>
      <div className="border-b border-border">
        <p className="p-3 text-sm font-normal leading-relaxed">
          I'm Sourav Ghosh — a Software Developer focused on backend
          engineering, building reliable applications with Java, Spring Boot,
          and modern web technologies.
        </p>
        <p className="p-3 text-sm font-normal leading-relaxed">
          I enjoy understanding how systems work under the hood and turning
          ideas into well-crafted software through clean code, continuous
          learning, and hands-on projects.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
