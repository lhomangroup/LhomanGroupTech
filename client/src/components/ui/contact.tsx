import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Prêt à transformer votre entreprise ? Discutons de votre projet et trouvons ensemble les meilleures solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Adresse</h4>
                  <p className="text-slate-600">187 Rue Colbert<br />92700 Colombes, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-cyan h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Téléphone</h4>
                  <p className="text-slate-600">Mobile : (+33) 7 43 16 82 35<br />Fixe : (+33) 9 74 06 41 23</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-emerald h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">contact@lhomangroup.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-purple-500 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Horaires</h4>
                  <p className="text-slate-600">Lun - Ven: 9h00 - 18h00<br />Sam: Sur rendez-vous</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-600/10 rounded-lg flex items-center justify-center hover:bg-slate-600 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-50 rounded-2xl p-8 border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Demande de Projet</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Prénom *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre prénom" 
                              {...field}
                              className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Nom *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre nom" 
                              {...field}
                              className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="votre@email.com" 
                            {...field}
                            className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Entreprise</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nom de votre entreprise" 
                            {...field}
                            className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Type de Projet</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                              <SelectValue placeholder="Sélectionnez un type de projet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cloud">Cloud Computing</SelectItem>
                            <SelectItem value="data">Data Engineering</SelectItem>
                            <SelectItem value="devops">DevOps & CI/CD</SelectItem>
                            <SelectItem value="mobile">Développement Mobile</SelectItem>
                            <SelectItem value="ai">Intelligence Artificielle</SelectItem>
                            <SelectItem value="security">Cybersécurité</SelectItem>
                            <SelectItem value="transformation">Transformation Digitale</SelectItem>
                            <SelectItem value="audit">Audit & Conseil</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Budget Estimé</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent">
                              <SelectValue placeholder="Sélectionnez votre budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="50k">Moins de 50K€</SelectItem>
                            <SelectItem value="50k-100k">50K€ - 100K€</SelectItem>
                            <SelectItem value="100k-250k">100K€ - 250K€</SelectItem>
                            <SelectItem value="250k-500k">250K€ - 500K€</SelectItem>
                            <SelectItem value="500k+">Plus de 500K€</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Description du Projet *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                            {...field}
                            className="border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Envoi en cours..." : "Envoyer la Demande"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
