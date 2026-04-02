import ColumnIcon from "../columnIcon/page";

export default function Hero() {
  return (
    <section className="bg-bg-primary h-screen flex flex-col justify-center items-center gap-[140px] ">
      <div className="absolute inset-0 flex items-center justify-center">
        <ColumnIcon className="w-full h-full" opacity={0.05} />
      </div>
      <section className="text-center flex flex-col justify-center items-center gap-[24px] text-text-primary w-[60%]">
        <h1>Columna Group</h1>
        <h2>Vi bygger strukturen bakom hållbara företag</h2>
        <p>
          En långsiktig partner för företag och entreprenörer som vill växa med
          stabilitet, tydlig riktning och rätt förutsättningar från början.
        </p>
      </section>
      <button className="px-12 py-4 border-1 border-accent text-accent text-2xl hover:bg-accent hover:text-bg-primary hover:cursor-pointer transition-colors">
        Inled dialog
      </button>
    </section>
  );
}
