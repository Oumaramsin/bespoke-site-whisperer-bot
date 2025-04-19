
import React from 'react';
import { Database, Users, Code, Briefcase, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Expertise & Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          Icon={Database}
          title="Architecture SI"
          description="Conception et optimisation des systèmes d'information"
          content="Accompagnement dans la conception, l'évolution et l'optimisation de votre architecture de systèmes d'information avec une approche méthodique et adaptée à vos enjeux métier."
        />
        <ServiceCard
          Icon={Code}
          title="Expert MEGA Hopex"
          description="Administration et configuration avancée de la plateforme"
          content="Expertise technique et fonctionnelle sur l'outil MEGA Hopex pour vous accompagner dans l'implémentation, la configuration et l'exploitation optimale de la solution."
        />
        <ServiceCard
          Icon={Briefcase}
          title="Product Owner"
          description="Gestion de projet et coordination des parties prenantes"
          content="Pilotage de projets et coordination des équipes pour garantir l'alignement avec les objectifs stratégiques et la satisfaction des besoins métiers."
        />
        <ServiceCard
          Icon={Users}
          title="Pilotage d'Équipe"
          description="Encadrement et coordination des ressources"
          content="Management et supervision d'équipes techniques pour assurer l'exécution efficace des projets et le développement des compétences."
        />
        <ServiceCard
          Icon={BookOpen}
          title="Formation"
          description="Transfert de compétences et accompagnement utilisateurs"
          content="Formation sur mesure aux utilisateurs pour une prise en main efficace de l'outil MEGA Hopex et l'adoption des bonnes pratiques."
        />
        
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-2 w-fit">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Tous les services</CardTitle>
            <CardDescription>Découvrez l'ensemble de mes prestations</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/services">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicesSection;
