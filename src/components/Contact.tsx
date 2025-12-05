import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Calle 9 # 8-66, Piso 1",
    subtitle: "Barrio Kennedy, Silvania, Cundinamarca",
    color: "primary",
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    content: "314 316 0602",
    subtitle: "Llámanos o escríbenos",
    color: "secondary",
    link: "tel:+573143160602",
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    content: "Lunes a Sábado",
    subtitle: "8:40 AM - 5:00 PM",
    color: "primary",
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    content: "plusvet01@gmail.com",
    subtitle: "Escríbenos tus consultas",
    color: "secondary",
    link: "mailto:plusvet01@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-vet-green-light text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Estamos aquí para{" "}
            <span className="text-gradient-mixed">ayudarte</span>
          </h2>
          <p className="text-muted-foreground">
            Agenda tu cita o consulta cualquier duda. ¡Tu mascota merece lo mejor!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info) => {
              const Wrapper = info.link ? "a" : "div";
              const wrapperProps = info.link
                ? { href: info.link, target: info.link.startsWith("tel") ? undefined : "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={info.title}
                  {...wrapperProps}
                  className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 ${
                    info.link ? "cursor-pointer hover:-translate-y-1" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      info.color === "primary"
                        ? "bg-vet-green-light text-primary"
                        : "bg-vet-purple-light text-secondary"
                    }`}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-muted-foreground text-sm mb-1">
                    {info.title}
                  </h3>
                  <p className="font-bold text-foreground text-lg">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </Wrapper>
              );
            })}
          </div>

          {/* Map & CTA */}
          <div className="space-y-6">
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1!2d-74.38!3d4.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSilvania%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Plus+Vet"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-mixed rounded-2xl p-8 text-center text-primary-foreground">
              <h3 className="text-2xl font-bold mb-3">¿Listo para agendar tu cita?</h3>
              <p className="mb-6 opacity-90">
                Contáctanos por WhatsApp y programa la consulta de tu mascota hoy mismo
              </p>
              <a
                href="https://wa.me/573143160602?text=Hola,%20quiero%20agendar%20una%20cita%20para%20mi%20mascota"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
