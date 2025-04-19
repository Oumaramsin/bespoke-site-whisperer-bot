
import React from 'react';

interface Client {
  name: string;
  logo: string;
}

const ClientsSection = () => {
  const clients: Client[] = [
    {
      name: "La Banque Postale",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      name: "France Travail",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      name: "COVEA",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      name: "Société Générale",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-10">Nos Clients Principaux</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`Logo de ${client.name}`} 
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Une expertise reconnue par des acteurs majeurs du secteur bancaire et de l'emploi
        </p>
      </div>
    </div>
  );
};

export default ClientsSection;
