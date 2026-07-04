"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const menuItems = [
  { id: "home", label: "Hero" },
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
  "Natural Pools, Rainwater harvesting systems & Ecofriendly water features",
  "Real Estate & Property Investments",
];

const sectionClass =
  "relative min-h-screen flex items-center px-6 py-28 sm:px-10 lg:pl-[260px] lg:pr-20 xl:pl-[300px] 2xl:pl-[360px]";

const contentClass = "relative z-10 w-full max-w-[820px] text-left";

const eyebrowClass =
  "mb-10 text-[10px] sm:text-[11px] tracking-[0.42em] uppercase text-accent/70 leading-[1.8]";

const titleClass =
  "font-serif text-bg-primary text-[44px] sm:text-[64px] lg:text-[82px] xl:text-[92px] leading-[0.98] font-medium tracking-[-0.055em]";

const paragraphClass =
  "max-w-[710px] font-serif text-bg-primary/68 text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.68] tracking-[-0.018em]";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = menuItems[0];

      for (const item of menuItems) {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.45
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
    <main className="relative overflow-x-hidden bg-white text-bg-primary">
      <div className="fixed inset-0 bg-[url('/columna_background_four.jpeg')] bg-cover bg-center" />
      <div className="fixed inset-0 bg-white/20 pointer-events-none" />
      <div className="fixed inset-y-0 left-0 w-[190px] bg-white/18 backdrop-blur-[1px] pointer-events-none" />

      <BrandMark />
      <PageMenu activeSection={activeSection} />

      <section id="home" className={sectionClass}>
        <FadeIn>
          <div className={contentClass}>
            <p className={eyebrowClass}>01 — Hero</p>

            <h1 className={titleClass}>
              Building Companies.
              <br />
              Creating Value.
              <br />
              For Generations.
            </h1>

            <div className="mt-10 border-l border-accent/35 pl-8">
              <p className={paragraphClass}>
                Columna Group develops, builds and supports businesses together
                with entrepreneurs, operators and partners who share a long-term
                vision for growth, profitability and sustainable value creation.
              </p>
            </div>

            <div className="mt-12">
              <TextButton>Start a Conversation</TextButton>
            </div>
          </div>
        </FadeIn>
      </section>

      <SimpleSection
        id="columna"
        eyebrow="02 — Where Businesses Are Built"
        title="Where Businesses Are Built"
      >
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
      </SimpleSection>

      <SimpleSection
        id="partnerships"
        eyebrow="03 — Building Businesses Together"
        title="Building Businesses Together"
      >
        <Paragraph>
          Many successful businesses begin with a capable person, a strong idea
          and the determination to build something of lasting value.
        </Paragraph>
        <Paragraph>
          In selected opportunities, Columna becomes an active partner and
          co-owner.
        </Paragraph>
        <Paragraph>
          We contribute structure, experience, business development, strategic
          guidance and long-term support while our partners focus on leading and
          growing the business.
        </Paragraph>
        <Paragraph>The goal is simple:</Paragraph>
        <Paragraph>
          To build independent, profitable businesses capable of creating value
          for decades.
        </Paragraph>
        <div className="mt-12">
          <TextButton>Learn More About Partnerships</TextButton>
        </div>
      </SimpleSection>

      <SimpleSection
        id="advisory"
        eyebrow="04 — When Progress Stalls"
        title="When Progress Stalls"
      >
        <Paragraph>
          Many businesses eventually reach a point where growth slows, decisions
          become difficult and the same challenges continue to return.
        </Paragraph>
        <Paragraph>The problem is rarely a lack of effort.</Paragraph>
        <Paragraph>
          More often it is a lack of clarity, structure, prioritisation or
          direction.
        </Paragraph>
        <Paragraph>
          Columna helps identify bottlenecks, simplify complexity and restore
          momentum through practical, hands-on business development.
        </Paragraph>
        <Paragraph>
          When progress stalls, we help businesses move forward again.
        </Paragraph>
        <div className="mt-12">
          <TextButton>Contact Us</TextButton>
        </div>
      </SimpleSection>

      <SimpleSection
        id="platform"
        eyebrow="05 — A Platform for Long-Term Growth"
        title="A Platform for Long-Term Growth"
      >
        <Paragraph>
          Every business faces different challenges at different stages of its
          journey.
        </Paragraph>
        <Paragraph>
          Columna provides a platform where businesses can access experience,
          relationships, strategic support and operational resources while
          remaining focused on their own customers and markets.
        </Paragraph>
        <Paragraph>The objective is not to create dependence.</Paragraph>
        <Paragraph>
          The objective is to help businesses become stronger, more profitable
          and increasingly independent over time.
        </Paragraph>
      </SimpleSection>

      <SimpleSection
        id="ecosystem"
        eyebrow="06 — Business Ecosystem"
        title="Business Ecosystem"
      >
        <Paragraph>
          Columna Group consists of a growing ecosystem of specialised
          businesses operating across multiple industries.
        </Paragraph>
        <Paragraph>
          Each company focuses on its own expertise while benefiting from shared
          knowledge, relationships and resources throughout the group.
        </Paragraph>
        <Paragraph>Current and future business areas include:</Paragraph>

        <ul className="mt-10 max-w-[720px] divide-y divide-bg-primary/10 border-y border-bg-primary/10">
          {ecosystemItems.map((item) => (
            <li
              key={item}
              className="flex gap-5 py-5 font-serif text-bg-primary/68 text-[18px] sm:text-[21px] leading-[1.45] tracking-[-0.018em]"
            >
              <span className="mt-[0.72em] h-px w-6 shrink-0 bg-accent/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Paragraph>
          Together, these businesses create an ecosystem designed to support
          growth, profitability and long-term value creation.
        </Paragraph>
        <div className="mt-12">
          <TextButton>Explore the Ecosystem</TextButton>
        </div>
      </SimpleSection>

      <SimpleSection
        id="legacy"
        eyebrow="07 — Built for the Long Run"
        title="Built for the Long Run"
      >
        <Paragraph>
          Columna is not focused on short-term opportunities or rapid exits.
        </Paragraph>
        <Paragraph>
          Our approach is based on patience, profitability and sustainable
          growth.
        </Paragraph>
        <Paragraph>
          We seek businesses that solve real problems, create real value and
          have the potential to remain relevant for generations.
        </Paragraph>
        <Paragraph>
          The strongest companies are those that can continue growing long after
          their founders step away from daily operations.
        </Paragraph>
        <Paragraph>That is the type of business we aim to build.</Paragraph>
      </SimpleSection>

      <SimpleSection
        id="contact"
        eyebrow="08 — Contact"
        title="Let's Build Something Worth Keeping"
      >
        <Paragraph>
          Whether you are building a company, exploring a new opportunity or
          looking for a long-term business partner, we would be happy to start a
          conversation.
        </Paragraph>
        <div className="mt-12">
          <TextButton>Contact Us</TextButton>
        </div>
      </SimpleSection>
    </main>
  );
}

function BrandMark() {
  return (
    <header className="fixed left-6 top-6 z-30 hidden sm:block lg:left-10">
      <p className="text-bg-primary text-[13px] tracking-[0.44em] uppercase">
        Columna Group
      </p>
      <p className="mt-2 text-bg-primary/42 text-[10px] tracking-[0.38em] uppercase">
        Structure. Stability. Growth.
      </p>
    </header>
  );
}

function PageMenu({ activeSection }: { activeSection: string }) {
  return (
    <aside className="hidden lg:block fixed left-0 top-0 z-20 h-screen w-[190px] pointer-events-none">
      <nav className="relative ml-[62px] h-full flex flex-col justify-center gap-[22px] pointer-events-auto">
        <div className="absolute left-[-24px] top-[18%] bottom-[18%] w-px bg-accent/28" />
        <div className="absolute left-[-27px] top-[18%] h-px w-[7px] bg-accent/55" />
        <div className="absolute left-[-27px] bottom-[18%] h-px w-[7px] bg-accent/55" />

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
              className="group w-fit text-left"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`block text-[9px] tracking-[0.32em] transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-accent/35"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`mt-1 block font-serif text-[16px] leading-none transition-colors duration-300 ${
                  isActive
                    ? "text-bg-primary"
                    : "text-bg-primary/32 group-hover:text-bg-primary/60"
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

function SimpleSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <FadeIn>
        <div className={contentClass}>
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={titleClass}>{title}</h2>
          <div className="mt-10 border-l border-accent/35 pl-8">{children}</div>
        </div>
      </FadeIn>
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={`${paragraphClass} mt-7 first:mt-0`}>{children}</p>;
}

function TextButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-4 font-serif text-bg-primary text-[17px] sm:text-[19px] tracking-[0.18em] uppercase transition-colors hover:text-accent">
      <span>{children}</span>
      <span className="h-px w-12 bg-bg-primary/50 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
    </button>
  );
}

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
