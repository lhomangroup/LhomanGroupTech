import { Badge } from "@/components/ui/badge";
import { Handshake, Users } from "lucide-react";

const stats = [
  { value: "150+", label: "Projets réalisés" },
  { value: "50+", label: "Clients satisfaits" },
  { value: "8", label: "Années d'expérience" }
];

const values = [
  { label: "Innovation", color: "bg-blue-100 text-brand-blue" },
  { label: "Excellence", color: "bg-cyan-100 text-brand-cyan" },
  { label: "Agilité", color: "bg-emerald-100 text-brand-emerald" },
  { label: "Collaboration", color: "bg-purple-100 text-purple-500" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">À Propos de Lhoman Group Technologies</h2>
            <p className="text-lg text-slate-600 mb-6">
              Fondée par des experts passionnés de technologie, Lhoman Group Technologies est un cabinet de conseil 
              spécialisé dans la transformation digitale et l'innovation technologique.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Notre mission est d'accompagner les entreprises dans leur évolution technologique en proposant des 
              solutions sur-mesure, performantes et durables qui s'adaptent aux enjeux de demain.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    index === 0 ? "text-brand-blue" :
                    index === 1 ? "text-brand-cyan" : "text-brand-emerald"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {values.map((value, index) => (
                <Badge key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${value.color}`}>
                  {value.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              <div className="absolute top-16 left-16 w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center">
                <Users className="text-white h-6 w-6" />
              </div>
              <div className="absolute top-16 right-16 w-16 h-16 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-full flex items-center justify-center">
                <Users className="text-white h-6 w-6" />
              </div>
              <div className="absolute bottom-16 left-20 w-16 h-16 bg-gradient-to-br from-brand-emerald to-emerald-600 rounded-full flex items-center justify-center">
                <Users className="text-white h-6 w-6" />
              </div>
              <div className="absolute bottom-16 right-20 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="text-white h-6 w-6" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-2xl shadow-xl flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-brand-blue" />
                </div>
              </div>
              
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="#64748B" strokeWidth="1" opacity="0.3"/>
                <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="#64748B" strokeWidth="1" opacity="0.3"/>
                <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="#64748B" strokeWidth="1" opacity="0.3"/>
                <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="#64748B" strokeWidth="1" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
