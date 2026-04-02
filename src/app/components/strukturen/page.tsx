"use client";
import { motion } from "motion/react";

export default function Strukturen() {
  return (
    <section className="bg-bg-primary text-text-primary text-center h-screen">
      <section className="py-[140px] px-20">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-white mb-6"
              style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 500 }}
            >
              En del av Columna
            </h2>
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

          <motion.div
            className="grid grid-cols-4 gap-[48px] my-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              "Future Logistics AB",
              "LTSE AB",
              "Uppsikt Sverige AB",
              "Faunapoolen",
              "Core Business Group",
            ].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 transition-opacity duration-300 hover:opacity-100"
                style={{ opacity: 0.7 }}
              >
                <div
                  className="text-white text-center"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "0.15em",
                    fontWeight: 300,
                  }}
                >
                  {company}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <small className="text-accent ">
          Fler verksamheter tillkommer som en del av Columna Groups fortsatta
          utveckling.
        </small>
      </section>
    </section>
  );
}
