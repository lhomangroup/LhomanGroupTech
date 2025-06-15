import { Card, CardContent } from "@/components/ui/card";
import { 
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiJavascript,
  SiPython,
  SiReact,
  SiDocker,
  SiKubernetes
} from "react-icons/si";

const expertiseCategories = [
  {
    title: "Cloud Platforms",
    technologies: [
      { name: "Amazon Web Services", icon: SiAmazonaws, color: "text-orange-600", bg: "bg-orange-100" },
      { name: "Microsoft Azure", icon: SiMicrosoftazure, color: "text-blue-600", bg: "bg-blue-100" },
      { name: "Google Cloud Platform", icon: SiGooglecloud, color: "text-green-600", bg: "bg-green-100" }
    ]
  },
  {
    title: "Développement",
    technologies: [
      { name: "JavaScript/TypeScript", icon: SiJavascript, color: "text-yellow-600", bg: "bg-yellow-100" },
      { name: "Python", icon: SiPython, color: "text-blue-600", bg: "bg-blue-100" },
      { name: "Java/Spring", icon: null, color: "text-red-600", bg: "bg-red-100" },
      { name: "React/Angular", icon: SiReact, color: "text-cyan-600", bg: "bg-cyan-100" }
    ]
  },
  {
    title: "Data & Analytics",
    technologies: [
      { name: "Apache Spark", icon: null, color: "text-orange-600", bg: "bg-orange-100" },
      { name: "Elasticsearch", icon: null, color: "text-blue-600", bg: "bg-blue-100" },
      { name: "MongoDB/PostgreSQL", icon: null, color: "text-green-600", bg: "bg-green-100" },
      { name: "Apache Kafka", icon: null, color: "text-purple-600", bg: "bg-purple-100" }
    ]
  },
  {
    title: "DevOps Tools",
    technologies: [
      { name: "Docker/Kubernetes", icon: SiDocker, color: "text-blue-600", bg: "bg-blue-100" },
      { name: "GitLab CI/Jenkins", icon: null, color: "text-orange-600", bg: "bg-orange-100" },
      { name: "Terraform/Ansible", icon: null, color: "text-purple-600", bg: "bg-purple-100" },
      { name: "Prometheus/Grafana", icon: null, color: "text-red-600", bg: "bg-red-100" }
    ]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseCategories.map((category, index) => (
            <Card key={index} className="bg-white rounded-xl p-6 shadow-sm border-0">
              <CardContent className="p-0">
                <h4 className="font-semibold text-slate-900 mb-4 text-center">{category.title}</h4>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${tech.bg} rounded-lg flex items-center justify-center`}>
                        {tech.icon ? (
                          <tech.icon className={`${tech.color} text-lg`} />
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${tech.color.replace('text-', 'bg-')}`}></div>
                        )}
                      </div>
                      <span className="text-slate-600 text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
