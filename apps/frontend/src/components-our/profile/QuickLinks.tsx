"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "summary", label: "Profile Summary" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
];

const QuickLinks = () => {
  const [activeSection, setActiveSection] = useState("summary");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-24 bg-card rounded-2xl shadow-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-lg transition-colors",
              activeSection === section.id
                ? "bg-primary text-primary-foreground font-medium"
                : "hover:bg-secondary text-foreground"
            )}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default QuickLinks;
