import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Products from "@/components/sections/Products";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider color="#F0EDE6" />
      <About />
      <SectionDivider color="#FAF9F5" flip />
      <HowItWorks />
      <SectionDivider color="#F0EDE6" />
      <Products />
      <Clients />
      <SectionDivider color="#F0EDE6" flip />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}