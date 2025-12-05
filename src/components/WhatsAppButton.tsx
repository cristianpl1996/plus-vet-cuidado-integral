import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573143160602?text=Hola,%20quiero%20información%20sobre%20Plus+Vet"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline group-hover:inline transition-all">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppButton;
