import ColumnIcon from "../columnIcon/page";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-[140px] overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 bg-[url('/columna_background_white.jpeg')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-[140px] w-full">
        <section className="text-center flex flex-col justify-center items-center gap-[24px] text-bg-primary w-[60%]">
          <h1>Columna Group</h1>
          <h2>Vi bygger strukturen bakom hållbara företag</h2>
          <p>
            En långsiktig partner för företag och entreprenörer som vill växa
            med stabilitet, tydlig riktning och rätt förutsättningar från
            början.
          </p>
        </section>

        <button className="px-12 py-4 border border-bg-primary text-bg-priamry text-2xl hover:border-[#c8a96a] hover:text-[#c8a96a] hover:cursor-pointer transition-colors">
          Inled dialog
        </button>
      </div>
    </section>
  );
}
