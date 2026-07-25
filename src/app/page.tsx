import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Products from "@/components/sections/Products";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Products />
      <Clients />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  );
}