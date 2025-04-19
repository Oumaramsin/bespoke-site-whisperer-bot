
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, Code, Briefcase, BookOpen, ArrowRight, BarChart } from "lucide-react";

const ServiceDetail = ({ icon: Icon, title, description, details }) => (
  <Card className="mb-8">
    <CardHeader>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base mt-1">{description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Architecture des Systèmes d'Information",
      description: "Conception et optimisation des architectures SI",
      details: [
        "Analyse et cartographie de l'existant",
        "Conception d'architectures cibles alignées avec les objectifs stratégiques",
        "Définition de la trajectoire d'évolution et plans de transition",
        "Gouvernance et mise en place de standards d'architecture",
        "Conseil sur les bonnes pratiques d'architecture d'entreprise"
      ]
    },
    {
      icon: Code,
      title: "Expert MEGA Hopex",
      description: "Administration et configuration avancée de la plateforme",
      details: [
        "Implémentation et configuration de l'outil MEGA Hopex",
        "Optimisation des modèles et des métamodèles",
        "Création de rapports et tableaux de bord personnalisés",
        "Administration technique et fonctionnelle de la plateforme",
        "Résolution de problèmes complexes et optimisation des performances"
      ]
    },
    {
      icon: Briefcase,
      title: "Product Owner",
      description: "Gestion de projet et coordination des parties prenantes",
      details: [
        "Définition et priorisation du backlog produit",
        "Recueil et analyse des besoins métiers",
        "Rédaction des user stories et spécifications fonctionnelles",
        "Validation des livrables et acceptance testing",
        "Communication et coordination avec les équipes de développement"
      ]
    },
    {
      icon: Users,
      title: "Pilotage d'Équipe",
      description: "Encadrement et coordination des ressources",
      details: [
        "Constitution et animation d'équipes projet",
        "Supervision du travail réalisé et suivi de la qualité",
        "Développement des compétences et mentoring",
        "Facilitation des cérémonies agiles",
        "Rapportage et communication avec les parties prenantes"
      ]
    },
    {
      icon: BookOpen,
      title: "Formation",
      description: "Transfert de compétences et accompagnement utilisateurs",
      details: [
        "Conception de modules de formation adaptés aux différents profils",
        "Animation de sessions de formation utilisateurs",
        "Création de guides et documentation technique",
        "Accompagnement personnalisé à la prise en main de l'outil",
        "Évaluation des acquis et plans d'amélioration continue"
      ]
    },
    {
      icon: BarChart,
      title: "Conseil en Transformation Digitale",
      description: "Accompagnement stratégique des projets de transformation",
      details: [
        "Évaluation de la maturité digitale",
        "Définition de la stratégie de transformation",
        "Alignement des processus métiers et des systèmes d'information",
        "Conduite du changement et accompagnement des équipes",
        "Mesure des résultats et optimisation continue"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mes Services</h1>
        <p className="text-xl text-muted-foreground">
          Une expertise complète en architecture des systèmes d'information et MEGA Hopex
          pour accompagner vos projets de transformation.
        </p>
      </div>

      <div className="space-y-10">
        {services.map((service, index) => (
          <ServiceDetail
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            details={service.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
