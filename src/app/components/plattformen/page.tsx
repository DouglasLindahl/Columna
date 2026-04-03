"use client";
import { motion } from "motion/react";
import MarbleBackground from "../columnaBackground/page";

export default function Plattformen() {
  return (
    <section className="bg-bg-primary px-[128px] relative">
      <section className="py-[140px] ">
        <div className=" mx-auto">
          <div className="grid grid-cols-2 gap-[64px] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="text-white mb-6"
                style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 500 }}
              >
                En struktur för långsiktig utveckling
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Columna Group fungerar som en plattform där nya samarbeten och
                verksamheter tas in, struktureras och utvecklas vidare i rätt
                sammanhang. Genom vår struktur och våra partners skapas
                förutsättningar att placera varje verksamhet där den har bäst
                möjlighet att växa långsiktigt.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-64 h-64">
                {/* Abstract geometric visual with gold lines */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  style={{ opacity: 0.4 }}
                >
                  <line
                    x1="40"
                    y1="20"
                    x2="40"
                    y2="180"
                    stroke="#c8a96a"
                    strokeWidth="1"
                  />
                  <line
                    x1="80"
                    y1="20"
                    x2="80"
                    y2="180"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />
                  <line
                    x1="120"
                    y1="20"
                    x2="120"
                    y2="180"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />
                  <line
                    x1="160"
                    y1="20"
                    x2="160"
                    y2="180"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="60"
                    x2="180"
                    y2="60"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="20"
                    y1="100"
                    x2="180"
                    y2="100"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="20"
                    y1="140"
                    x2="180"
                    y2="140"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="38"
                    y="58"
                    width="6"
                    height="84"
                    fill="#C8A96A"
                    opacity="0.6"
                  />
                  <rect
                    x="118"
                    y="98"
                    width="6"
                    height="44"
                    fill="#C8A96A"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
