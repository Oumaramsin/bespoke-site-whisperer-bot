
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simuler un envoi d'email
    setTimeout(() => {
      console.log("Form data:", data);
      setIsSubmitting(false);
      
      toast({
        title: "Message envoyé",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      
      form.reset();
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Me contacter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet ou une question ? N'hésitez pas à me contacter pour discuter 
            de vos besoins en architecture SI ou en expertise MEGA Hopex.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <Mail className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                <a href="mailto:contact@ramsin.fr" className="text-primary hover:underline">
                  contact@ramsin.fr
                </a>
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <Phone className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                <a href="tel:+33123456789" className="text-primary hover:underline">
                  +33 (0)1 23 45 67 89
                </a>
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <MapPin className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Localisation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Paris et région parisienne<br />
                Disponible pour des missions en France
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Formulaire de contact</CardTitle>
            <CardDescription>
              Remplissez ce formulaire pour me faire part de votre projet ou de vos questions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom*</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.com" {...field} />
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
                        <FormLabel>Entreprise</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre entreprise" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre numéro de téléphone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet*</FormLabel>
                      <FormControl>
                        <Input placeholder="Sujet de votre message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez votre projet ou votre demande..." 
                          className="min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Envoi en cours...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Envoyer <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
