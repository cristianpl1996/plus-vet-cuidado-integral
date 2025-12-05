import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo-plusvet.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Plus+Vet" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Clínica veterinaria con más de 10 años de experiencia brindando 
              servicios integrales para el bienestar de tu mascota.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 hover:text-background transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Información de Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-background/70">
                  Calle 9 # 8-66, Piso 1<br />
                  Barrio Kennedy, Silvania
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+573143160602" className="text-background/70 hover:text-background">
                  314 316 0602
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:plusvet01@gmail.com" className="text-background/70 hover:text-background">
                  plusvet01@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/70">
                  Lun - Sáb: 8:40am - 5:00pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Plus+Vet - Clínica Veterinaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
