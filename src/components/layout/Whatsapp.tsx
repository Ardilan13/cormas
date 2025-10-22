import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "573503461730"; // tu número en formato internacional (sin +, solo dígitos)
  const message = "¡Hola! Me gustaría obtener más información.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
