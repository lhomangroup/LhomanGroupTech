import { Card, CardContent } from "@/components/ui/card";
import { 
  Cloud, 
  Database, 
  Infinity, 
  Smartphone, 
  Brain, 
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migration, architecture et optimisation cloud avec AWS, Azure et Google Cloud Platform.",
    features: [
      "Migration vers le cloud",
      "Architecture multi-cloud",
      "Optimisation des coûts",
      "Sécurité cloud"
    ],
    gradient: "from-brand-blue to-blue-600"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Conception et mise en œuvre de pipelines de données robustes et évolutifs.",
    features: [
      "Architecture de données",
      "ETL/ELT moderne",
      "Data lakes et warehouses",
      "Analytics en temps réel"
    ],
    gradient: "from-brand-cyan to-cyan-600"
  },
  {
    icon: Infinity,
    title: "DevOps & CI/CD",
    description: "Automatisation des déploiements et culture DevOps pour accélérer la livraison.",
    features: [
      "Pipelines CI/CD",
      "Infrastructure as Code",
      "Monitoring et observabilité",
      "Containers et Kubernetes"
    ],
    gradient: "from-brand-emerald to-emerald-600"
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description: "Applications mobiles natives et cross-platform performantes et intuitives.",
    features: [
      "Applications natives iOS/Android",
      "Développement React Native",
      "Flutter development",
      "Progressive Web Apps"
    ],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions IA et machine learning pour automatiser et optimiser vos processus.",
    features: [
      "Machine Learning models",
      "Natural Language Processing",
      "Computer Vision",
      "MLOps et déploiement"
    ],
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protection complète de vos infrastructures et données contre les menaces.",
    features: [
      "Audit de sécurité",
      "Identity & Access Management",
      "Security Operations Center",
      "Compliance et governance"
    ],
    gradient: "from-red-500 to-red-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des solutions technologiques complètes pour accompagner votre croissance et optimiser vos performances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border-0">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="text-sm text-slate-500 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
