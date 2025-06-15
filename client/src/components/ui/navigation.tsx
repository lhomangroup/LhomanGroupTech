import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section
      const sections = ["services", "strategie", "technologie", "transformation", "expertise", "methodologie", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navItems = [
    { id: "services", label: "Services" },
    { id: "strategie", label: "Stratégie" },
    { id: "technologie", label: "Technologie" },
    { id: "transformation", label: "Transformation" },
    { id: "expertise", label: "Expertise" },
    { id: "methodologie", label: "Méthodologie" },
    { id: "about", label: "À propos" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/98 backdrop-blur-sm border-b border-slate-200" : "bg-white/95 backdrop-blur-sm border-b border-slate-200"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Lhoman Group Technologies</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-slate-600 hover:text-brand-blue transition-colors ${
                  activeSection === item.id ? "text-brand-blue" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-slate-600 hover:text-brand-blue transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-brand-blue text-white justify-start"
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
