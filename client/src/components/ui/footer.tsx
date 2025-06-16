import { Linkedin, Twitter, Github } from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      "Cloud Computing",
      "Data Engineering", 
      "DevOps & CI/CD",
      "Développement Mobile",
      "Intelligence Artificielle",
      "Cybersécurité"
    ]
  },
  {
    title: "Entreprise",
    links: [
      "À propos",
      "Notre équipe",
      "Carrières",
      "Blog",
      "Actualités",
      "Partenaires"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold">Lhoman Group Technologies</span>
            </div>
            <p className="text-slate-400 mb-6">
              Votre partenaire de confiance pour la transformation digitale et l'innovation technologique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services and Company sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3 text-slate-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start space-x-3">
                <span className="text-brand-blue mt-1">📍</span>
                <span>187 Rue Colbert<br />92700 Colombes, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-brand-cyan">📞</span>
                <span>Nous contacter via email</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-brand-emerald">✉️</span>
                <span>contact@lhomangroup.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2024 Lhoman Group Technologies. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
