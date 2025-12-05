import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-plusvet.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo y Desktop Navigation */}
          <div className="flex items-center gap-8">
            <a href="#inicio" className="flex items-center gap-2">
              <img src={logo} alt="Plus+Vet Logo" className="h-14 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/573143160602"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-full font-semibold shadow-button hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Agendar Cita
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/573143160602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground px-5 py-3 rounded-full font-semibold shadow-button"
              >
                <Phone className="w-4 h-4" />
                Agendar cita
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
