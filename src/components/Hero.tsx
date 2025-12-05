import { MessageCircle, Clock, MapPin } from "lucide-react";
import heroPets from "@/assets/hero-pets-real.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-vet-green-light opacity-50" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-vet-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-card">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                10 años cuidando a tu familia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Especializados en{" "}
              <span className="text-gradient-primary">bienestar animal</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              En Plus+Vet brindamos servicios veterinarios integrales con un equipo profesional 
              comprometido con la salud y felicidad de tu mascota.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Lun - Sáb: 8:40am - 5:00pm</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Silvania, Cundinamarca</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://wa.me/573143160602?text=Hola,%20quiero%20agendar%20una%20cita%20para%20mi%20mascota"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-hero text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-button hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Agenda tu Cita por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-purple rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-hero rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }} />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                <img
                  src={heroPets}
                  alt="Mascotas felices en Plus+Vet"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐾</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">+1000</p>
                    <p className="text-xs text-muted-foreground">Mascotas atendidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
