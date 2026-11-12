import PortfolioHero from "@/components/ui/demo";
import Differentiators from "@/components/sections/differentiators";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import SiteFooter from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-950">
      <PortfolioHero />
      <Differentiators />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  );
}
