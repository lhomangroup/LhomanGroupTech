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
    gradient: "from-brand-blue to-blue-600"
  },
  {
    icon: Database,
    title: "Conseil Architecture",
    description: "Conception d'architectures techniques optimales pour vos besoins métier.",
    gradient: "from-brand-cyan to-cyan-600"
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Migration et optimisation d'infrastructures cloud natives.",
    gradient: "from-brand-emerald to-emerald-600"
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Développement d'applications mobiles performantes et intuitives.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "Applications Web",
    description: "Solutions web modernes avec les dernières technologies front-end.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Big Data & Analytics",
    description: "Traitement et analyse de données massives pour des insights métier.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Shield,
    title: "Blockchain & Security",
    description: "Solutions blockchain et sécurité avancée pour la confiance numérique.",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Monitor,
    title: "DevOps & Automation",
    description: "Automatisation des processus de développement et déploiement.",
    gradient: "from-teal-500 to-teal-600"
  }
];

export default function Technology() {
  return (
    <section id="technologie" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              {/* Tech workspace illustration */}
              <div className="absolute inset-8 bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/90 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <Code2 className="h-12 w-12 text-brand-blue" />
                  </div>
                  <div className="text-slate-600 font-medium">Solutions Technologiques</div>
                </div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-brand-blue/20 rounded-lg"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-brand-cyan/20 rounded-xl"></div>
              <div className="absolute top-20 right-6 w-8 h-8 bg-brand-emerald/30 rounded-full"></div>
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
                    <div className={`w-12 h-12 bg-gradient-to-r ${offer.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white h-6 w-6" />
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