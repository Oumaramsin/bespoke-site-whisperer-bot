
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, School, Wrench, Star, Link } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Consultant Architecte MEGA HOPEX",
      company: "COVEA",
      period: "Juin 2023 - Présent",
      description: [
        "Amélioration de la documentation transverse sur les différents périmètres du SI",
        "Échange avec les architectes fonctionnels et solutions pour sécuriser les documentations",
        "Enrichissement de la cartographie (description application, objets gérés, flux applicatifs, technologies)",
        "Participation à l'évolution des bonnes pratiques et de l'outillage",
        "Gestion des manques et incohérences avec la cartographie MEGA HOPEX V5",
        "Suivi de la backlog des évolutions",
        "Reporting sur la qualité du référentiel"
      ]
    },
    {
      title: "Consultant Architecte Solution",
      company: "La Banque Postale (via Marte)",
      period: "Septembre 2022 - Mai 2023",
      description: [
        "Cadrage de projets de transformation digitale",
        "Analyses d'impacts (Adhérence projets et Stratégie SI)",
        "Rédaction des Dossiers d'Architecture Applicative et Technique",
        "Passage en Design Authority pour validation",
        "Collaboration au sein des Squads pour l'intégration systémique",
        "Cartographie des processus métiers et flux du périmètre crédit immobilier"
      ]
    },
    {
      title: "Consultant Solution AE MEGA HOPEX",
      company: "Marte",
      period: "Janvier 2020 - Septembre 2022",
      description: [
        "Migration de MEGA 2009 vers MEGA HOPEX V2R1",
        "Analyse de cas d'usage et portage de fonctionnalités",
        "Développement de scripts en VB.Net pour l'API MEGA HOPEX",
        "Conception d'interfaces utilisateur personnalisées",
        "Création de scripts VBScript pour l'automatisation",
        "Support technique et fonctionnel",
        "Conduite du changement"
      ]
    },
    {
      title: "Ingénieur Études et Développement",
      company: "Société Générale",
      period: "Janvier 2017 - Janvier 2019",
      description: [
        "Développement d'applications web (PHP 7, Symfony 3.4, MySQL, JavaScript)",
        "Utilisation des API REST",
        "Gestion des déploiements sur environnements Linux",
        "Animation de Daily Meetings en méthode Agile",
        "Assistance à la maîtrise d'ouvrage"
      ]
    }
  ];

  const education = [
    {
      degree: "Master 2 Expert en Systèmes d'Informations",
      school: "Pôle Universitaire Léonard de Vinci - Sup de Vinci",
      year: "2019"
    },
    {
      degree: "Licence 3 Parcours MIAGE",
      school: "Université d'Orléans",
      year: "2017"
    }
  ];

  const skills = [
    "Architecture SI", "MEGA HOPEX", "Gestion de projet", "Agile", 
    "MySQL", "Symfony", "Gitlab", "Linux", "Python", "API REST",
    "Java", "SQL", "PHP", "JavaScript", "VB.NET", "UML", "MERISE",
    "Cartographie de Processus", "Architecture d'Entreprise"
  ];

  const interests = ["Sport", "Voyages", "Technologies"];

  const contact = {
    email: "sidibeoumar94@gmail.com",
    phone: "+33761518890",
    location: "94260 Fresnes, France",
    linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profil"
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SIDIBÉ OUMAR</h1>
          <p className="text-xl text-muted-foreground">Architecte SI & Expert MEGA Hopex</p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">{contact.email}</Badge>
            <Badge variant="secondary">{contact.phone}</Badge>
            <Badge variant="secondary">{contact.location}</Badge>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              Doté d'une curiosité insatiable pour l'acquisition de nouvelles connaissances, je me
              passionne pour la recherche et la relève de défis techniques innovants.
            </p>
            <p className="text-lg mb-4">
              Ma nature souriante et ma volonté inébranlable sont les atouts clés qui me permettent de
              m'intégrer avec aisance et efficacité au sein de nouvelles équipes.
            </p>
            <p className="text-lg">
              Mon engagement est de contribuer activement à la dynamique et au succès de votre entreprise
              grâce à une adaptabilité rapide et une collaboration productive.
            </p>
          </CardContent>
        </Card>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Expériences Professionnelles</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-3">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <School className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Formation</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Compétences</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Centres d'intérêt</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                {interest}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Link className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Liens</h2>
          </div>
          <div className="flex gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
