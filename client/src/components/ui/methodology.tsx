import { Search, Compass, Code, Rocket, Settings } from "lucide-react";

const methodologySteps = [
  {
    number: 1,
    title: "Analyse & Découverte",
    description: "Audit approfondi de votre infrastructure existante, identification des besoins et définition des objectifs stratégiques.",
    color: "bg-brand-blue",
    icon: Search
  },
  {
    number: 2,
    title: "Conception & Architecture",
    description: "Conception d'architectures scalables et sécurisées, avec prototypage rapide et validation des concepts.",
    color: "bg-brand-cyan",
    icon: Compass
  },
  {
    number: 3,
    title: "Développement Agile",
    description: "Implémentation itérative avec sprints courts, intégration continue et feedback régulier.",
    color: "bg-brand-emerald",
    icon: Code
  },
  {
    number: 4,
    title: "Déploiement & Support",
    description: "Mise en production sécurisée, formation des équipes et accompagnement continu pour garantir le succès.",
    color: "bg-purple-500",
    icon: Rocket
  }
];

export default function Methodology() {
  return (
    <section id="methodologie" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Méthodologie</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une approche structurée et agile pour garantir le succès de vos projets technologiques
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8">
              {methodologySteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full shadow-xl flex items-center justify-center">
                  <Settings className="text-white h-12 w-12" />
                </div>
              </div>
              
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
                  <Search className="text-brand-blue h-6 w-6" />
                </div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
                  <Compass className="text-brand-cyan h-6 w-6" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
                  <Code className="text-brand-emerald h-6 w-6" />
                </div>
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
                  <Rocket className="text-purple-500 h-6 w-6" />
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(222, 84%, 45%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(188, 95%, 43%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <circle cx="50%" cy="50%" r="80" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
