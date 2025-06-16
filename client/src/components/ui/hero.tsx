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
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              {/* Modern tech illustration */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/80 to-slate-50/80 rounded-xl backdrop-blur-sm">
                <div className="p-8 h-full flex flex-col justify-center">
                  {/* Code brackets icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <div className="text-white text-2xl font-mono">&lt;/&gt;</div>
                  </div>
                  
                  {/* Floating tech elements */}
                  <div className="grid grid-cols-3 gap-4 opacity-60">
                    <div className="h-2 bg-gradient-to-r from-brand-blue to-transparent rounded"></div>
                    <div className="h-2 bg-gradient-to-r from-brand-cyan to-transparent rounded"></div>
                    <div className="h-2 bg-gradient-to-r from-brand-emerald to-transparent rounded"></div>
                    <div className="h-1 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-1 bg-slate-300 rounded"></div>
                    <div className="h-1 bg-slate-300 rounded"></div>
                    <div className="h-1 bg-slate-300 rounded col-span-2"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative geometric shapes */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-brand-blue/20 rounded-lg rotate-12"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-brand-cyan/30 rounded-full"></div>
              <div className="absolute top-16 left-4 w-4 h-4 bg-brand-emerald/25 rounded-sm rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
