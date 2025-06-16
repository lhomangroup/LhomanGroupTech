import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Zap,
  Shield,
  Monitor
} from "lucide-react";

const technologyOffers = [
  {
    icon: Code2,
    title: "Développement Java",
    description: "Expertise avancée en écosystème Java pour des applications robustes et scalables.",
    color: "bg-blue-500"
  },
  {
    icon: Database,
    title: "Conseil Architecture",
    description: "Conception d'architectures techniques optimales pour vos besoins métier.",
    color: "bg-cyan-500"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Migration et optimisation d'infrastructures cloud natives.",
    color: "bg-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Développement d'applications mobiles performantes et intuitives.",
    color: "bg-purple-500"
  },
  {
    icon: Globe,
    title: "Applications Web",
    description: "Solutions web modernes avec les dernières technologies front-end.",
    color: "bg-orange-500"
  },
  {
    icon: Zap,
    title: "Big Data & Analytics",
    description: "Traitement et analyse de données massives pour des insights métier.",
    color: "bg-red-500"
  },
  {
    icon: Shield,
    title: "Blockchain & Security",
    description: "Solutions blockchain et sécurité avancée pour la confiance numérique.",
    color: "bg-indigo-500"
  },
  {
    icon: Monitor,
    title: "DevOps & Automation",
    description: "Automatisation des processus de développement et déploiement.",
    color: "bg-teal-500"
  }
];

export default function Technology() {
  return (
    <section id="technologie" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              {/* Developer workspace illustration */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/80 to-slate-50/80 rounded-xl backdrop-blur-sm">
                <div className="p-6 h-full flex flex-col">
                  {/* Monitor/screen representation */}
                  <div className="bg-slate-800 rounded-lg p-4 mb-4 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-slate-400">IDE</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-brand-cyan text-xs">function</div>
                        <div className="text-yellow-400 text-xs">buildSolution()</div>
                      </div>
                      <div className="w-3/4 h-1 bg-brand-blue/50 rounded"></div>
                      <div className="w-1/2 h-1 bg-brand-cyan/50 rounded"></div>
                      <div className="w-2/3 h-1 bg-brand-emerald/50 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Tech stack icons */}
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-cyan to-cyan-600 rounded-lg flex items-center justify-center">
                      <Cloud className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-emerald to-emerald-600 rounded-lg flex items-center justify-center">
                      <Code2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-brand-blue/20 rounded-lg rotate-12"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-brand-cyan/30 rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Technologie</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              En tant que technologie leader dans le dev et ops Solution 
              nous développons des solutions de haute voltige dans toutes technologies 
              en suivant les meilleures pratiques de l'industrie.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center">
                <Code2 className="text-white h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900">Excellence Technique</h4>
                <p className="text-slate-600">Innovation et savoir-faire technologique</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Offers */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Nos Offres</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologyOffers.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <Card key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border-0 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className={`w-12 h-12 ${offer.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-slate-900 h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{offer.title}</h4>
                    <p className="text-slate-600 text-sm flex-grow">{offer.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}