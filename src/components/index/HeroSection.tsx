
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
