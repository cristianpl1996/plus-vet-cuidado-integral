import { useState } from "react";
import { X } from "lucide-react";
import promoServicios from "@/assets/promo-servicios.png";
import promoGrooming from "@/assets/promo-grooming.png";
import promoDental from "@/assets/promo-dental.png";
import promoVacunacion from "@/assets/promo-vacunacion.png";
import promoCita from "@/assets/promo-cita.png";
import promoClinica from "@/assets/promo-clinica.png";

const promos = [
  { src: promoClinica, alt: "Clínica Veterinaria Plus+Vet" },
  { src: promoServicios, alt: "Servicios veterinarios integrales" },
  { src: promoGrooming, alt: "Grooming y estética canina" },
  { src: promoDental, alt: "Salud dental para mascotas" },
  { src: promoVacunacion, alt: "Vacunación y desparasitación" },
  { src: promoCita, alt: "Programa tu cita previa" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-vet-purple-light text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Nuestras promociones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conoce todo lo que{" "}
            <span className="text-gradient-mixed">ofrecemos</span>
          </h2>
          <p className="text-muted-foreground">
            Descubre nuestros servicios especializados y promociones vigentes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {promos.map((promo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(promo.src)}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary aspect-square"
            >
              <img
                src={promo.src}
                alt={promo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-card rounded-full shadow-lg hover:bg-muted transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
