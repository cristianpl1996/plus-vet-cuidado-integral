import { 
  Stethoscope, 
  Scissors, 
  ShoppingBag, 
  Pill, 
  Syringe,
  Heart,
  Sparkles,
  Activity,
  Phone
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Evaluación completa del estado de salud de tu mascota con diagnósticos precisos.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Odontología Veterinaria",
    description: "Limpieza dental profesional, extracciones y tratamientos para una sonrisa saludable.",
    color: "secondary",
  },
  {
    icon: Activity,
    title: "Cirugía",
    description: "Procedimientos quirúrgicos con equipos modernos y personal altamente capacitado.",
    color: "primary",
  },
  {
    icon: Syringe,
    title: "Vacunación y Desparasitación",
    description: "Protege a tu mascota con nuestros planes de vacunación actualizados.",
    color: "secondary",
  },
  {
    icon: Scissors,
    title: "Grooming",
    description: "Baño, corte de pelo, limpieza de oídos y uñas. ¡Tu mascota lucirá espectacular!",
    color: "primary",
  },
  {
    icon: ShoppingBag,
    title: "Pet Shop",
    description: "Alimentos premium, accesorios, juguetes y todo lo que tu mascota necesita.",
    color: "secondary",
  },
  {
    icon: Pill,
    title: "Farmacia Veterinaria",
    description: "Medicamentos y productos farmacéuticos especializados para mascotas.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Consulta Especializada",
    description: "Atención con especialistas para casos que requieren cuidado adicional.",
    color: "secondary",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-vet-green-light text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cuidamos a tus peludos con{" "}
            <span className="text-gradient-mixed">amor y profesionalismo</span>
          </h2>
          <p className="text-muted-foreground">
            Ofrecemos servicios veterinarios integrales con los más altos estándares de calidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  service.color === "primary"
                    ? "bg-vet-green-light text-primary"
                    : "bg-vet-purple-light text-secondary"
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/573143160602?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-purple text-secondary-foreground px-8 py-4 rounded-full font-bold shadow-purple hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
