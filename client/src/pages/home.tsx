import Navigation from "@/components/ui/navigation";
import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";
import Expertise from "@/components/ui/expertise";
import Methodology from "@/components/ui/methodology";
import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Expertise />
      <Methodology />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
