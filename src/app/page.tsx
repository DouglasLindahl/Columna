import Image from "next/image";
import Hero from "./components/hero/page";
import Intro from "./components/intro/page";
import Plattformen from "./components/plattformen/page";
import Strukturen from "./components/strukturen/page";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Intro></Intro>
      <Plattformen></Plattformen>
      <Strukturen></Strukturen>
    </>
  );
}
