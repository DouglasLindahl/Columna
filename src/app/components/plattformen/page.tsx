"use client";
import { motion } from "motion/react";

export default function Plattformen() {
  return (
    <section id="platform" className=" px-[256px] relative">
      <div className="pointer-events-none absolute right-30 top-1/2 -translate-y-1/2 rotate-[-90deg] translate-x-1/2 select-none">
        <h5 className="text-[64px] font-medium tracking-[0.3em] text-black/5 whitespace-nowrap">
          PLATTFORMEN
        </h5>
      </div>
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
                className="text-bg-primary mb-6"
                style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 500 }}
              >
                En struktur för långsiktig utveckling
              </h2>
              <p
                className="text-bg-primary"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
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
              <div className="relative w-94 h-94">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  style={{ opacity: 0.45 }}
                >
                  {/* grid */}
                  <line
                    x1="30"
                    y1="160"
                    x2="180"
                    y2="160"
                    stroke="#C8A96A"
                    strokeWidth="1"
                  />
                  <line
                    x1="30"
                    y1="120"
                    x2="180"
                    y2="120"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="30"
                    y1="80"
                    x2="180"
                    y2="80"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="30"
                    y1="40"
                    x2="180"
                    y2="40"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />

                  <line
                    x1="40"
                    y1="30"
                    x2="40"
                    y2="165"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="80"
                    y1="30"
                    x2="80"
                    y2="165"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="120"
                    y1="30"
                    x2="120"
                    y2="165"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="160"
                    y1="30"
                    x2="160"
                    y2="165"
                    stroke="#C8A96A"
                    strokeWidth="0.5"
                  />

                  {/* bars */}
                  <rect
                    x="42"
                    y="125"
                    width="12"
                    height="35"
                    fill="#C8A96A"
                    opacity="0.45"
                  />
                  <rect
                    x="78"
                    y="105"
                    width="12"
                    height="55"
                    fill="#C8A96A"
                    opacity="0.55"
                  />
                  <rect
                    x="114"
                    y="78"
                    width="12"
                    height="82"
                    fill="#C8A96A"
                    opacity="0.65"
                  />
                  <rect
                    x="150"
                    y="48"
                    width="12"
                    height="112"
                    fill="#C8A96A"
                    opacity="0.8"
                  />

                  {/* upward line */}
                  <polyline
                    points="48,125 84,105 120,78 156,48"
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* points */}
                  <circle cx="48" cy="125" r="4" fill="#C8A96A" />
                  <circle cx="84" cy="105" r="4" fill="#C8A96A" />
                  <circle cx="120" cy="78" r="4" fill="#C8A96A" />
                  <circle cx="156" cy="48" r="4" fill="#C8A96A" />

                  {/* arrow */}
                  <path
                    d="M156 48 L145 50 L153 59 Z"
                    fill="#C8A96A"
                    transform="rotate(-35 156 48)"
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
