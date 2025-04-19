
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  content: string;
}

const ServiceCard = ({ Icon, title, description, content }: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Icon className="h-10 w-10 mb-2 text-primary" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
