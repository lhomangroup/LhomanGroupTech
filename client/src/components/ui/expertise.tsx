import { Card, CardContent } from "@/components/ui/card";
import { 
  Cloud, 
  Database, 
  Code, 
  Layers,
  Server,
  Globe,
  Cpu,
  Monitor
} from "lucide-react";

const expertiseCategories = [
  {
    title: "Cloud Computing",
    description: "Migration, architecture et optimisation cloud avec AWS, Azure et Google Cloud Platform.",
    details: [
      "Migration vers le cloud",
      "Architecture multi-cloud", 
      "Optimisation des coûts",
      "Sécurité cloud"
    ],
    icon: Cloud,
    color: "bg-blue-500"
  },
  {
    title: "Data Engineering",
    description: "Conception et mise en œuvre de pipelines de données robustes et évolutifs.",
    details: [
      "Architecture de données",
      "ETL/ELT moderne",
      "Data lakes et warehouses",
      "Analytics en temps réel"
    ],
    icon: Database,
    color: "bg-green-500"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automatisation des déploiements et culture DevOps pour accélérer la livraison.",
    details: [
      "Pipelines CI/CD",
      "Infrastructure as Code",
      "Monitoring et observabilité",
      "Containers et Kubernetes"
    ],
    icon: Cpu,
    color: "bg-purple-500"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Notre Expertise Technologique</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Maîtrise des technologies de pointe pour des solutions innovantes et performantes
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white rounded-xl p-6 shadow-sm border-0 h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-slate-900 h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{category.title}</h4>
                  <p className="text-slate-600 mb-4 flex-grow">{category.description}</p>
                  <div className="space-y-2">
                    {category.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                        <span className="text-slate-600 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
