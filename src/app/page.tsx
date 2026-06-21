"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import ColumnIcon from "./components/columnIcon/page";
import ColumnaUnderline from "./components/columnaUnderline/page";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "columna", label: "Columna" },
  { id: "partnerships", label: "Partnerships" },
  { id: "advisory", label: "Advisory" },
  { id: "platform", label: "Platform" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "legacy", label: "Legacy" },
  { id: "contact", label: "Contact" },
];

const ecosystemItems = [
  "Business Development & Investments",
  "Accounting & Business Systems",
  "Digital Products & SaaS",
  "Logistics & Vehicle Operations",
  "Vehicle Inspection & Technical Services",
  "Service & Property Services",
  "Natural Pools, Rainwater Harvesting Systems & Ecofriendly Water Features",
  "Real Estate & Property Investments",
];

const paragraphClass = "text-bg-primary text-[18px] leading-[1.7]";
const sectionTitleClass =
  "text-bg-primary text-[40px] leading-[1.3] font-medium";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = menuItems[0];

      for (const item of menuItems) {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.4
        ) {
          currentSection = item;
        }
      }

      setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="home"
        className="h-screen relative flex flex-col justify-center items-center overflow-hidden"
      >
        <div className="fixed inset-0 bg-[url('/columna_background_four.jpeg')] bg-cover bg-center" />

        <PageMenu activeSection={activeSection} />

        <div className="fixed right-[-180px] top-1/2 -translate-y-1/2 z-[1] opacity-[0.04] pointer-events-none">
          <ColumnIcon />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center gap-[140px] w-full">
          <section className="text-center flex flex-col justify-center items-center gap-6 text-bg-primary w-[60%]">
            <h1>
              Columna Group
              <ColumnaUnderline width="short" color="accent" />
            </h1>

            <h2>Building Companies. Creating Value. For Generations.</h2>

            <p>
              Columna Group develops, builds and supports businesses together
              with entrepreneurs, operators and partners who share a long-term
              vision for growth, profitability and sustainable value creation.
            </p>
          </section>

          <CTAButton>Start a Conversation</CTAButton>
        </div>
      </section>

      <TextSection id="columna" sideLabel="COLUMNA" centered>
        <p className="text-bg-primary text-[24px] leading-[1.7]">
          Where Businesses Are Built
        </p>

        <Paragraph>
          Columna Group is a business-building platform focused on developing
          companies, supporting entrepreneurs and creating long-term value
          through active ownership and strategic development.
        </Paragraph>

        <Paragraph>Some businesses are started internally.</Paragraph>

        <Paragraph>
          Others are built together with entrepreneurs who bring industry
          expertise, operational leadership and the ambition to create something
          meaningful.
        </Paragraph>

        <Paragraph>
          Our role is to provide structure, strategic direction, business
          development and access to a broader ecosystem of companies, resources
          and relationships.
        </Paragraph>

        <Paragraph>
          We believe that strong businesses are built by capable people
          supported by the right structure.
        </Paragraph>
      </TextSection>

      <section id="partnerships" className="px-[256px] relative">
        <SideLabel label="PARTNERSHIPS" />

        <section className="py-[140px]">
          <div className="grid grid-cols-2 gap-[64px] items-center">
            <FadeIn direction="left">
              <h2 className={`${sectionTitleClass} mb-6`}>
                Building Businesses Together
              </h2>

              <Paragraph>
                Many successful businesses begin with a capable person, a strong
                idea and the determination to build something of lasting value.
              </Paragraph>

              <Paragraph>
                In selected opportunities, Columna becomes an active partner and
                co-owner.
              </Paragraph>

              <Paragraph>
                We contribute structure, experience, business development,
                strategic guidance and long-term support while our partners
                focus on leading and growing the business.
              </Paragraph>

              <Paragraph>The goal is simple:</Paragraph>

              <Paragraph>
                To build independent, profitable businesses capable of creating
                value for decades.
              </Paragraph>

              <div className="mt-10">
                <CTAButton>Learn More About Partnerships</CTAButton>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <ProcessList
                items={[
                  "Idea",
                  "Partnership",
                  "Structure",
                  "Growth",
                  "Independent Company",
                ]}
              />
            </FadeIn>
          </div>
        </section>
      </section>

      <section id="advisory" className="px-[256px] relative">
        <SideLabel label="ADVISORY" />

        <section className="py-[140px]">
          <div className="grid grid-cols-2 gap-[64px] items-center">
            <FadeIn direction="left">
              <ProblemSolution />
            </FadeIn>

            <FadeIn direction="right">
              <h2 className={`${sectionTitleClass} mb-6`}>
                When Progress Stalls
              </h2>

              <Paragraph>
                Many businesses eventually reach a point where growth slows,
                decisions become difficult and the same challenges continue to
                return.
              </Paragraph>

              <Paragraph>The problem is rarely a lack of effort.</Paragraph>

              <Paragraph>
                More often it is a lack of clarity, structure, prioritisation or
                direction.
              </Paragraph>

              <Paragraph>
                Columna helps identify bottlenecks, simplify complexity and
                restore momentum through practical, hands-on business
                development.
              </Paragraph>

              <Paragraph>
                When progress stalls, we help businesses move forward again.
              </Paragraph>

              <div className="mt-10">
                <CTAButton>Contact Us</CTAButton>
              </div>
            </FadeIn>
          </div>
        </section>
      </section>

      <section id="platform" className="px-[256px] relative">
        <SideLabel label="PLATFORM" />

        <section className="py-[140px]">
          <div className="grid grid-cols-2 gap-[64px] items-center">
            <FadeIn direction="left">
              <h2 className={`${sectionTitleClass} mb-6`}>
                A Platform for Long-Term Growth
              </h2>

              <Paragraph>
                Every business faces different challenges at different stages of
                its journey.
              </Paragraph>

              <Paragraph>
                Columna provides a platform where businesses can access
                experience, relationships, strategic support and operational
                resources while remaining focused on their own customers and
                markets.
              </Paragraph>

              <Paragraph>The objective is not to create dependence.</Paragraph>

              <Paragraph>
                The objective is to help businesses become stronger, more
                profitable and increasingly independent over time.
              </Paragraph>
            </FadeIn>

            <FadeIn direction="right">
              <PlatformHub />
            </FadeIn>
          </div>
        </section>
      </section>

      <section id="ecosystem" className="px-[256px] relative">
        <SideLabel label="ECOSYSTEM" />

        <section className="py-[140px]">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className={`${sectionTitleClass} inline-block`}>
                  Business Ecosystem
                </h2>

                <ColumnaUnderline width="short" color="accent" />

                <p className="max-w-[760px] mx-auto mt-8 text-bg-primary text-[18px] leading-[1.7]">
                  Columna Group consists of a growing ecosystem of specialised
                  businesses operating across multiple industries.
                </p>

                <p className="max-w-[760px] mx-auto mt-4 text-bg-primary text-[18px] leading-[1.7]">
                  Each company focuses on its own expertise while benefiting
                  from shared knowledge, relationships and resources throughout
                  the group.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-2 gap-6">
                {ecosystemItems.map((item) => (
                  <div
                    key={item}
                    className="border border-accent/30 p-6 text-bg-primary hover:border-accent hover:bg-accent/5 transition-all duration-300"
                  >
                    <p className="text-[18px] leading-[1.5]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="max-w-[760px] mx-auto mt-12 text-center text-bg-primary text-[18px] leading-[1.7]">
                Together, these businesses create an ecosystem designed to
                support growth, profitability and long-term value creation.
              </p>

              <div className="mt-10 flex justify-center">
                <CTAButton>Explore the Ecosystem</CTAButton>
              </div>
            </FadeIn>
          </div>
        </section>
      </section>

      <section id="legacy" className="px-[256px] relative">
        <SideLabel label="LEGACY" />

        <section className="py-[140px]">
          <div className="grid grid-cols-2 gap-[64px] items-center">
            <FadeIn direction="left">
              <h2 className={`${sectionTitleClass} mb-6`}>
                Built for the Long Run
              </h2>

              <Paragraph>
                Columna is not focused on short-term opportunities or rapid
                exits.
              </Paragraph>

              <Paragraph>
                Our approach is based on patience, profitability and sustainable
                growth.
              </Paragraph>

              <Paragraph>
                We seek businesses that solve real problems, create real value
                and have the potential to remain relevant for generations.
              </Paragraph>

              <Paragraph>
                The strongest companies are those that can continue growing long
                after their founders step away from daily operations.
              </Paragraph>

              <Paragraph>
                That is the type of business we aim to build.
              </Paragraph>
            </FadeIn>

            <FadeIn direction="right">
              <ProcessList
                items={[
                  "Today",
                  "Growth",
                  "Profitability",
                  "Succession",
                  "Generations",
                ]}
              />
            </FadeIn>
          </div>
        </section>
      </section>

      <section
        id="contact"
        className="min-h-screen relative flex items-center justify-center px-20 text-center"
      >
        <SideLabel label="CONTACT" />

        <FadeIn>
          <div className="max-w-[850px] mx-auto text-bg-primary">
            <h2 className="text-[56px] leading-[1.15] font-medium">
              Let's Build Something Worth Keeping
            </h2>

            <p className="mt-8 text-[20px] leading-[1.7]">
              Whether you are building a company, exploring a new opportunity or
              looking for a long-term business partner, we would be happy to
              start a conversation.
            </p>

            <div className="mt-12 flex justify-center">
              <CTAButton>Contact Us</CTAButton>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function PageMenu({ activeSection }: { activeSection: string }) {
  return (
    <aside className="fixed left-0 bottom-20 z-20 h-screen">
      <nav className="h-full flex flex-col justify-center gap-[22px] pl-[60px]">
        {menuItems.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="text-left group flex items-center gap-4"
            >
              <span
                className={`text-[12px] tracking-[0.25em] transition-colors ${
                  isActive ? "text-accent" : "text-accent/40"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`h-px w-6 transition-colors ${
                  isActive ? "bg-accent" : "bg-accent/25"
                }`}
              />

              <span
                className={`font-serif text-[17px] leading-none transition-colors ${
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
  );
}

function TextSection({
  id,
  sideLabel,
  centered = false,
  children,
}: {
  id: string;
  sideLabel: string;
  centered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative">
      <SideLabel label={sideLabel} />

      <section className="py-[140px] px-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div
              className={`max-w-[760px] mx-auto ${
                centered ? "text-center" : ""
              }`}
            >
              {children}
            </div>
          </FadeIn>
        </div>
      </section>
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={`${paragraphClass} pt-6`}>{children}</p>;
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-12 py-4 border border-bg-primary text-bg-primary text-2xl hover:border-accent hover:text-accent hover:cursor-pointer transition-colors">
      {children}
    </button>
  );
}

function SideLabel({ label }: { label: string }) {
  return (
    <div className="pointer-events-none absolute right-30 top-1/2 -translate-y-1/2 rotate-[-90deg] translate-x-1/2 select-none">
      <h5 className="text-[64px] font-medium tracking-[0.3em] text-black/5 whitespace-nowrap">
        {label}
      </h5>
    </div>
  );
}

function FadeIn({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
        y: direction ? 0 : 30,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function ProcessList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col items-center">
      {items.map((item, index) => (
        <div key={item} className="flex flex-col items-center">
          <div className="w-[260px] border border-accent/40 px-8 py-5 text-center text-bg-primary text-[20px] hover:border-accent transition-colors">
            {item}
          </div>

          {index !== items.length - 1 && (
            <div className="h-10 w-px bg-accent/40" />
          )}
        </div>
      ))}
    </div>
  );
}

function ProblemSolution() {
  const problems = [
    "Slow growth",
    "Constant firefighting",
    "Poor priorities",
    "Operational bottlenecks",
  ];

  const outcomes = [
    "Clarity",
    "Structure",
    "Better decisions",
    "Sustainable growth",
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="border border-bg-primary/20 p-8">
        <h3 className="text-bg-primary text-[24px] mb-6">Business Today</h3>

        <ul className="space-y-4">
          {problems.map((item) => (
            <li key={item} className="text-bg-primary/70 text-[18px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-accent/40 p-8 bg-accent/5">
        <h3 className="text-bg-primary text-[24px] mb-6">With Columna</h3>

        <ul className="space-y-4">
          {outcomes.map((item) => (
            <li key={item} className="text-bg-primary text-[18px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PlatformHub() {
  const items = [
    "Experience",
    "Relationships",
    "Strategic Support",
    "Operational Resources",
    "Business Development",
  ];

  return (
    <div className="relative h-[420px] flex items-center justify-center">
      <div className="absolute w-[180px] h-[180px] rounded-full border border-accent/50 flex items-center justify-center text-center text-bg-primary text-[22px]">
        Columna
      </div>

      {items.map((item, index) => {
        const positions = [
          "top-0 left-1/2 -translate-x-1/2",
          "right-0 top-1/2 -translate-y-1/2",
          "bottom-0 left-1/2 -translate-x-1/2",
          "left-0 top-1/2 -translate-y-1/2",
          "top-[70px] right-[60px]",
        ];

        return (
          <div
            key={item}
            className={`absolute ${positions[index]} border border-accent/30 px-6 py-4 text-bg-primary bg-white/5`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
