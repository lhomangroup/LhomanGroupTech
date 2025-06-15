import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-24 pb-16 gradient-bg-1">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Accélérez votre{" "}
              <span className="gradient-text">transformation digitale</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Expert en conseil technologique, nous accompagnons les entreprises dans leur modernisation IT, 
              cloud computing, data engineering et DevOps pour créer des solutions durables et performantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                size="lg"
              >
                Démarrer un projet
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
                size="lg"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10"></div>
              <div className="absolute top-8 left-8 w-16 h-16 bg-brand-blue/20 rounded-xl"></div>
              <div className="absolute top-24 right-12 w-12 h-12 bg-brand-cyan/30 rounded-full"></div>
              <div className="absolute bottom-16 left-16 w-20 h-20 bg-brand-emerald/20 rounded-2xl"></div>
              <div className="absolute bottom-8 right-8 w-14 h-14 bg-blue-500/20 rounded-lg"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/90 rounded-2xl shadow-xl flex items-center justify-center">
                  <Code className="h-12 w-12 text-brand-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
