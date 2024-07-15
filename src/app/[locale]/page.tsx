import Image from "next/image";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Cars from "../components/Cars";
import Features from "../components/Features";
import DatePicker from "../components/DatePicker";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center relative w-full">
      <Hero />
      <Services />
      <Features />
      <Cars />
      <DatePicker />
    </main>
  );
}
