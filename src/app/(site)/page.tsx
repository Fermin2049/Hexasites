import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services />
      <Technologies />
      <Portfolio />
      <About />
      <ContactCTA />
    </main>
  );
}
