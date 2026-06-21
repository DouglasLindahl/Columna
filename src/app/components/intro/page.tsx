"use client";
import { motion } from "motion/react";
import MarbleBackground from "../columnaBackground/page";

export default function Intro() {
  return (
    <section id="introduction" className=" relative">
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
              className="text-bg-primary"
              style={{
                fontWeight: "normal",
                fontSize: "24px",
                lineHeight: "1.7",
              }}
            >
              Where Businesses Are Built
            </p>
            <p
              className="text-bg-primary pt-6"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Columna Group is a business-building platform focused on
              developing companies, supporting entrepreneurs and creating
              long-term value through active ownership and strategic
              development.
            </p>
            <p
              className="text-bg-primary pt-6"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Some businesses are started internally.
            </p>
            <p
              className="text-bg-primary pt-6"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Others are built together with entrepreneurs who bring industry
              expertise, operational leadership and the ambition to create
              something meaningful.
            </p>
            <p
              className="text-bg-primary pt-6"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Our role is to provide structure, strategic direction, business
              development and access to a broader ecosystem of companies,
              resources and relationships.
            </p>
            <p
              className="text-bg-primary"
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              We believe that strong businesses are built by capable people
              supported by the right structure.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
