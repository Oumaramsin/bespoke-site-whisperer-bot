
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
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
              <Link to="/about">En savoir plus sur mon parcours</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
