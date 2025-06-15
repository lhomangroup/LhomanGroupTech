import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  MapPin, 
  Building, 
  Users, 
  TrendingUp, 
  Lightbulb,
  BarChart3,
  Rocket
} from "lucide-react";

const strategyOffers = [
  {
    icon: Building,
    title: "Architecture solution",
    description: "Conception d'architectures technologiques robustes et évolutives adaptées à vos besoins métier.",
    gradient: "from-brand-blue to-blue-600"
  },
  {
    icon: Target,
    title: "Stratégie produit",
    description: "Définition de la vision produit et de la roadmap pour maximiser la valeur business.",
    gradient: "from-brand-cyan to-cyan-600"
  },
  {
    icon: Building,
    title: "Architecture d'entreprise",
    description: "Alignement des systèmes d'information avec la stratégie d'entreprise globale.",
    gradient: "from-brand-emerald to-emerald-600"
  },
  {
    icon: Users,
    title: "Expérience utilisateur",
    description: "Optimisation de l'expérience utilisateur pour améliorer l'engagement et la satisfaction.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: MapPin,
    title: "Roadmap & Portfolio",
    description: "Planification stratégique et gestion de portefeuille de projets technologiques.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Objectifs & Key Results (OKR)",
    description: "Mise en place d'un système de mesure de performance aligné sur les objectifs stratégiques.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Rocket,
    title: "Startup / Innovation Lab",
    description: "Accompagnement des startups et laboratoires d'innovation dans leur croissance technologique.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export default function Strategy() {
  return (
    <section id="strategie" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Stratégie</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ippon accompagne les organisations à concevoir leur stratégie numérique 
              et déployer leur roadmap à l'échelle, afin de délivrer rapidement la valeur 
              attendue par le marché.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center">
                <Target className="text-white h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900">Vision Stratégique</h4>
                <p className="text-slate-600">Transformation digitale orientée résultats</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              {/* Business people illustration placeholder */}
              <div className="absolute inset-8 bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/90 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-12 w-12 text-brand-blue" />
                  </div>
                  <div className="text-slate-600 font-medium">Stratégie & Roadmap</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-brand-blue/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-brand-cyan/20 rounded-xl"></div>
              <div className="absolute top-20 left-6 w-8 h-8 bg-brand-emerald/30 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Strategy Offers */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Nos Offres</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {strategyOffers.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <Card key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border-0 h-full">
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