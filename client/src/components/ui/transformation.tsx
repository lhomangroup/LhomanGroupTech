import { Card, CardContent } from "@/components/ui/card";
import { 
  RefreshCw, 
  Users, 
  TrendingUp, 
  Target,
  Lightbulb,
  Settings,
  BarChart3,
  Workflow
} from "lucide-react";

const transformationOffers = [
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Accompagnement complet dans votre transformation numérique et culturelle.",
    gradient: "from-brand-blue to-blue-600"
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Gestion du changement et adoption des nouvelles technologies par les équipes.",
    gradient: "from-brand-cyan to-cyan-600"
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Alignement de la stratégie business avec les capacités technologiques.",
    gradient: "from-brand-emerald to-emerald-600"
  },
  {
    icon: Target,
    title: "Process Optimization",
    description: "Optimisation et automatisation des processus métier existants.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description: "Création de laboratoires d'innovation pour explorer de nouvelles opportunités.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Settings,
    title: "Legacy Modernization",
    description: "Modernisation des systèmes legacy vers des architectures modernes.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Culture",
    description: "Instauration d'une culture data-driven pour la prise de décision.",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Workflow,
    title: "Agile Transformation",
    description: "Transformation agile des équipes et des méthodes de travail.",
    gradient: "from-teal-500 to-teal-600"
  }
];

export default function Transformation() {
  return (
    <section id="transformation" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Transformation</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Nous mettons en œuvre des solutions d'experts d'amélioration et de 
              modernisation. Des processus et outils pour que votre organisation 
              devienne plus agile et plus efficace.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center">
                <RefreshCw className="text-white h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900">Transformation Agile</h4>
                <p className="text-slate-600">Modernisation et optimisation continue</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              {/* Business transformation dashboard */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/80 to-slate-50/80 rounded-xl backdrop-blur-sm">
                <div className="p-6 h-full flex flex-col">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center shadow-lg">
                      <RefreshCw className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Transformation</div>
                      <div className="text-sm font-semibold text-slate-700">Progress</div>
                    </div>
                  </div>
                  
                  {/* Progress bars */}
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-slate-600">Digital Strategy</span>
                        <span className="text-xs text-brand-blue">85%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-brand-blue to-blue-600 h-2 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-slate-600">Process Automation</span>
                        <span className="text-xs text-brand-cyan">72%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-brand-cyan to-cyan-600 h-2 rounded-full w-[72%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-slate-600">Team Training</span>
                        <span className="text-xs text-brand-emerald">90%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-brand-emerald to-emerald-600 h-2 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center">
                      <div className="text-xs text-brand-blue font-semibold">+42%</div>
                      <div className="text-xs text-slate-500">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-brand-cyan font-semibold">-28%</div>
                      <div className="text-xs text-slate-500">Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-brand-emerald font-semibold">+65%</div>
                      <div className="text-xs text-slate-500">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-brand-blue/20 rounded-lg rotate-12"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-brand-cyan/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Transformation Offers */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Nos Offres</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transformationOffers.map((offer, index) => {
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