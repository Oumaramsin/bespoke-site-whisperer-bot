
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Architecture SI", "MEGA Hopex", "Gestion de projet", "Product Owner", 
    "Management d'équipe", "Architecture d'entreprise", "TOGAF", "ArchiMate",
    "Analyse fonctionnelle", "UML", "BPMN", "Agilité", "Scrum", "Cartographie SI",
    "Transformation digitale", "Urbanisation SI"
  ];

  const experiences = [
    {
      title: "Architecte MEGA Hopex",
      company: "Diverses entreprises",
      period: "2020 - Présent",
      description: "Accompagnement des clients dans l'implémentation et l'optimisation de leur architecture SI via MEGA Hopex. Conception des modèles adaptés aux besoins spécifiques des organisations."
    },
    {
      title: "Chef de projet / Product Owner",
      company: "Entreprises variées",
      period: "2018 - 2020",
      description: "Gestion de projets de transformation numérique, coordination des équipes techniques et métier. Définition et priorisation des backlogs, suivi de la réalisation."
    },
    {
      title: "Ingénieur d'études SI",
      company: "Entreprise précédente",
      period: "2015 - 2018",
      description: "Conception et développement de solutions dans le cadre de l'évolution du système d'information. Analyse des besoins et modélisation des processus métier."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">À propos de moi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <div className="bg-primary/10 rounded-lg p-8 flex flex-col items-center justify-center text-center h-full">
              <div className="w-32 h-32 bg-primary/20 rounded-full mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">R</span>
              </div>
              <h2 className="text-xl font-bold mb-2">RAMSIN</h2>
              <p className="text-muted-foreground">Ingénieur & Architecte SI</p>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  Je suis un ingénieur informatique spécialisé dans l'architecture des systèmes d'information, 
                  avec une double compétence technique et fonctionnelle.
                </p>
                <p className="text-lg mb-4">
                  Mon expertise se concentre sur l'outil MEGA Hopex, pour lequel j'accompagne mes clients 
                  en tant qu'architecte, Product Owner et dans le pilotage d'équipe.
                </p>
                <p className="text-lg">
                  Je propose également des formations utilisateurs pour assurer une bonne prise en main 
                  de l'outil et l'adoption des bonnes pratiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Expérience professionnelle</h2>
        <div className="space-y-6 mb-12">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary mb-3">{exp.company}</p>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Compétences</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
              {skill}
            </Badge>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Approche professionnelle</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              Ma méthodologie repose sur une approche collaborative et pragmatique, visant à 
              comprendre les enjeux métier avant de proposer des solutions techniques adaptées.
            </p>
            <p className="mb-4">
              Je m'efforce de créer une synergie entre les différentes parties prenantes pour 
              assurer le succès des projets et l'adoption des solutions par les utilisateurs.
            </p>
            <p>
              Mon objectif est d'apporter une valeur ajoutée concrète à mes clients, en les 
              accompagnant dans leur transformation digitale avec des solutions pérennes et évolutives.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
