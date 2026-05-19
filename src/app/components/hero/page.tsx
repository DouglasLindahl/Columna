"use client";

import { useEffect, useState } from "react";
import ColumnaUnderline from "../columnaUnderline/page";
import ColumnIcon from "../columnIcon/page";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("platform");

  const menuItems = [
    { id: "hem", label: "Hem" },
    { id: "introduction", label: "Introduktion" },
    { id: "platform", label: "Plattformen" },
    { id: "structure", label: "Strukturen" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = menuItems.findLast((item) => {
        const section = document.getElementById(item.id);
        if (!section) return false;

        return section.getBoundingClientRect().top <= window.innerHeight * 0.4;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hem"
      className="h-screen relative flex flex-col justify-center items-center gap-[140px] overflow-hidden"
    >
      <div className="fixed inset-0 bg-[url('/columna_background_four.jpeg')] bg-cover bg-center" />

      <aside className="fixed left-0 bottom-20 z-20 h-screen">
        <nav className="h-full flex flex-col justify-center gap-[32px] pl-[60px]">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-left flex flex-col gap-2 group"
              >
                <span
                  className={`text-[12px] tracking-[0.25em] transition-colors ${
                    isActive ? "text-[#c8a96a]" : "text-[#c8a96a]/50"
                  }`}
                >
                  0 {index + 1}
                </span>

                <span
                  className={`font-serif text-[18px] leading-none transition-colors ${
                    isActive
                      ? "text-bg-primary"
                      : "text-bg-primary/25 group-hover:text-bg-primary/50"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="fixed right-[-180px] top-1/2 -translate-y-1/2 z-[1] opacity-[0.04] pointer-events-none">
        <ColumnIcon />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center gap-[140px] w-full">
        <section className="text-center flex flex-col justify-center items-center gap-[24px] text-bg-primary w-[60%]">
          <h1>
            Columna Group
            <ColumnaUnderline width="short" color="accent" />
          </h1>
          <h2>Vi bygger strukturen bakom hållbara företag</h2>
          <p>
            En långsiktig partner för företag och entreprenörer som vill växa
            med stabilitet, tydlig riktning och rätt förutsättningar från
            början.
          </p>
        </section>

        <button className="px-12 py-4 border border-bg-primary text-bg-primary text-2xl hover:border-accent hover:text-[#c8a96a] hover:cursor-pointer transition-colors">
          Inled dialog
        </button>
      </div>
    </section>
  );
}
