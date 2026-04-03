"use client";
import { motion } from "motion/react";
import MarbleBackground from "../columnaBackground/page";

export default function Intro() {
  return (
    <section className="bg-bg-primary relative">
      <section className="py-[140px] px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="max-w-[700px] mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Columna Group är en företagsgrupp som utvecklar och bygger företag
              tillsammans med entreprenörer och verksamheter i olika skeden. Vi
              arbetar långsiktigt med struktur, stabilitet och utveckling genom
              våra bolag och partners.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
