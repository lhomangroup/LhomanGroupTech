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
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5"></div>
              
              {/* Team collaboration visualization */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/80 to-slate-50/80 rounded-xl backdrop-blur-sm">
                <div className="p-6 h-full flex flex-col justify-center">
                  {/* Company logo/icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Handshake className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Team network visualization */}
                  <div className="relative flex-1 flex items-center justify-center">
                    {/* Team members around center */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <Users className="text-white h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                        <Users className="text-white h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-emerald to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                        <Users className="text-white h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                        <Users className="text-white h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Center collaboration hub */}
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-brand-blue/20">
                      <div className="text-brand-blue text-xs font-bold">LGT</div>
                    </div>
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"/>
                      <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"/>
                      <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"/>
                      <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4"/>
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(222, 84%, 45%)" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="hsl(188, 95%, 43%)" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Company values */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="text-xs">
                      <div className="text-brand-blue font-semibold">8+</div>
                      <div className="text-slate-500">Années</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-brand-cyan font-semibold">150+</div>
                      <div className="text-slate-500">Projets</div>
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
      </div>
    </section>
  );
}
