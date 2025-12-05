import { Award, Users, Heart, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo-plusvet.png";

const stats = [
  { icon: Award, value: "10+", label: "Años de experiencia" },
  { icon: Users, value: "1000+", label: "Familias confían en nosotros" },
  { icon: Heart, value: "100%", label: "Dedicación y amor" },
];

const features = [
  "Equipo profesional altamente capacitado",
  "Tecnología de diagnóstico avanzada",
  "Tratamientos personalizados",
  "Atención integral multi-especie",
  "Ambiente cálido y seguro",
  "Compromiso con el bienestar animal",
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Logo Side */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl p-8 shadow-card">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-hero rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-purple rounded-full opacity-20" />
              
              <div className="relative text-center">
                <img
                  src={logo}
                  alt="Plus+Vet - Especializados en bienestar animal"
                  className="w-64 h-auto mx-auto mb-6"
                />
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <span className="inline-block bg-vet-purple-light text-secondary px-4 py-1.5 rounded-full text-sm font-semibold">
              Sobre Nosotros
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Tu mascota merece la{" "}
              <span className="text-gradient-mixed">mejor atención</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              En Plus+Vet contamos con más de 10 años de experiencia brindando servicios 
              veterinarios integrales en Silvania. Nuestro compromiso es ofrecer planes 
              diagnósticos y tratamientos eficaces para cada paciente, porque entendemos 
              que tu mascota es parte de tu familia.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Disponemos de recursos tecnológicos de última generación y un equipo humano 
              con alto conocimiento profesional, dedicado a brindar el mejor cuidado para 
              tu compañero de cuatro patas.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
