"use client";
import { motion } from "motion/react";
import ColumnaUnderline from "../columnaUnderline/page";
import MarbleBackground from "../columnaBackground/page";

export default function Strukturen() {
  const companies = [
    { name: "Future Logistics AB", logo: "next.svg" },
    { name: "LTSE AB", logo: "vercel.svg" },
    { name: "Uppsikt Sverige AB", logo: "window.svg" },
    { name: "Faunapoolen", logo: "globe.svg" },
    { name: "Core Business Group", logo: "file.svg" },
  ];

  return (
    <section className="bg-bg-primary text-text-primary text-center h-screen relative">
      <section className="py-[140px] px-20">
        <div className="max-w-[1100px] mx-auto mb-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white mb-6">
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
              className="max-w-[700px] mx-auto"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Columna Group består av flera verksamheter inom olika områden, där
              varje bolag har sin roll i en större struktur
            </p>
            <p
              className="max-w-[700px] mx-auto"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Tillsammans skapar de en plattform där kompetens, resurser och
              erfarenhet samverkar för att utveckla nya och befintliga
              verksamheter.
            </p>
          </motion.div>
          <ColumnaUnderline width="long" color="white"></ColumnaUnderline>
          <motion.div
            className="grid grid-cols-4 gap-[48px] my-4 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
          <ColumnaUnderline width="long" color="white"></ColumnaUnderline>
        </div>
        <small className="text-accent">
          Fler verksamheter tillkommer som en del av Columna Groups fortsatta
          utveckling.
        </small>
      </section>
    </section>
  );
}
