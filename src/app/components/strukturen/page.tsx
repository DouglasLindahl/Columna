"use client";

import { motion } from "motion/react";
import ColumnaUnderline from "../columnaUnderline/page";

export default function Strukturen() {
  const companies = [
    {
      name: "Future Logistics AB",
      description:
        "Transport och logistiklösningar för företag och verksamheter.",
      url: "https://futurelogistics.se",
    },
    {
      name: "LTSE AB",
      description:
        "Affärsutveckling och strategiska lösningar för långsiktig tillväxt.",
      url: "https://ltse.se",
    },
    {
      name: "Uppsikt Sverige AB",
      description:
        "Tillsyn, uppföljning och operativ kontroll inom olika verksamhetsområden.",
      url: "https://uppsikt.se",
    },
    {
      name: "Faunapoolen",
      description: "Specialiserade tjänster inom naturvård, djur och miljö.",
      url: "https://faunapoolen.se",
    },
    {
      name: "Core Business Group",
      description:
        "Resurser och kompetens för företagsutveckling och expansion.",
      url: "https://corebusinessgroup.se",
    },
  ];

  return (
    <section
      id="structure"
      className="text-text-primary text-center min-h-screen relative"
    >
      <div className="pointer-events-none absolute right-30 top-1/2 -translate-y-1/2 rotate-[-90deg] translate-x-1/2 select-none">
        <h5 className="text-[64px] font-medium tracking-[0.3em] text-black/5 whitespace-nowrap">
          STRUKTUREN
        </h5>
      </div>

      <section className="py-[140px] px-[256px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-bg-primary mb-6">
              <div className="inline-block">
                <h2
                  style={{
                    fontSize: "40px",
                    lineHeight: "1.3",
                    fontWeight: 500,
                  }}
                  className="inline-block"
                >
                  En del av Columna
                </h2>

                <ColumnaUnderline width="short" color="accent" />
              </div>
            </div>

            <p
              className="max-w-[700px] mx-auto text-bg-primary"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Columna Group består av flera verksamheter inom olika områden, där
              varje bolag har sin roll i en större struktur.
            </p>

            <p
              className="max-w-[700px] mx-auto text-bg-primary mt-4"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Tillsammans skapar de en plattform där kompetens, resurser och
              erfarenhet samverkar för att utveckla nya och befintliga
              verksamheter.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {companies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-accent/30 p-8 text-left hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <h3 className="text-[24px] font-medium text-bg-primary mb-4 group-hover:text-accent transition-colors">
                  {company.name}
                </h3>

                <p className="text-bg-primary/75 leading-relaxed">
                  {company.description}
                </p>
              </a>
            ))}
          </motion.div>

          <div className="mt-12">
            <small className="text-accent">
              Fler verksamheter tillkommer som en del av Columna Groups
              fortsatta utveckling.
            </small>
          </div>
        </div>
      </section>
    </section>
  );
}
