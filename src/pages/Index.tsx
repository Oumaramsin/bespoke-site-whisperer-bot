
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Database, Users, Code, Briefcase, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">RAMSIN</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            Architecture des Systèmes d'Information & Expert MEGA Hopex
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/services">
                Découvrir mes services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Expertise & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Database className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Architecture SI</CardTitle>
              <CardDescription>
                Conception et optimisation des systèmes d'information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Accompagnement dans la conception, l'évolution et l'optimisation de votre 
                architecture de systèmes d'information avec une approche méthodique et adaptée 
                à vos enjeux métier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Expert MEGA Hopex</CardTitle>
              <CardDescription>
                Administration et configuration avancée de la plateforme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Expertise technique et fonctionnelle sur l'outil MEGA Hopex pour vous 
                accompagner dans l'implémentation, la configuration et l'exploitation 
                optimale de la solution.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Product Owner</CardTitle>
              <CardDescription>
                Gestion de projet et coordination des parties prenantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Pilotage de projets et coordination des équipes pour garantir 
                l'alignement avec les objectifs stratégiques et la satisfaction 
                des besoins métiers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Pilotage d'Équipe</CardTitle>
              <CardDescription>
                Encadrement et coordination des ressources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Management et supervision d'équipes techniques pour assurer 
                l'exécution efficace des projets et le développement des compétences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Formation</CardTitle>
              <CardDescription>
                Transfert de compétences et accompagnement utilisateurs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Formation sur mesure aux utilisateurs pour une prise en main efficace 
                de l'outil MEGA Hopex et l'adoption des bonnes pratiques.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-2 w-fit">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tous les services</CardTitle>
              <CardDescription>
                Découvrez l'ensemble de mes prestations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/services">
                  En savoir plus
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">À propos de RAMSIN</h2>
            <p className="text-lg mb-6">
              RAMSIN est une entreprise spécialisée dans l'architecture des systèmes d'information, 
              fondée par un ingénieur informatique possédant une double expertise technique et fonctionnelle.
            </p>
            <p className="text-lg mb-6">
              Fort d'une expérience significative dans le domaine, je mets mes compétences au service 
              des entreprises pour les accompagner dans la gestion de l'outil MEGA Hopex, jouant 
              le rôle d'architecte, de Product Owner et assurant le pilotage d'équipe.
            </p>
            <p className="text-lg">
              Mon approche allie rigueur technique et compréhension des enjeux métier pour 
              vous offrir un accompagnement personnalisé et efficace.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">
                  En savoir plus sur mon parcours
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
