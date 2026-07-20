export type ContactChannel = {
  id: string;
  label: string; // texto corto: "Email", "WhatsApp", "LinkedIn"...
  value: string; // lo que se muestra: "hola@luisaquije.dev"
  href: string; // link real: "mailto:...", "tel:...", "https://..."
  primary?: boolean; // si es true, se usa como el botón principal "Agenda una llamada"
};

// Para cambiar tus datos de contacto, edita solo este arreglo.
// El botón principal de "Agenda una llamada" toma el canal marcado como primary: true.
export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "luisaquijequiroga11@gmail.com",
    href: "mailto:luisaquijequiroga11@gmail.com",
    primary: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+51 945 163 898",
    href: "https://wa.me/51945163898",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/luis-aquije-80507b234",
    href: "linkedin.com/in/luis-aquije-80507b234",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/LuisAquije123",
    href: "https://github.com/LuisAquije123",
  },
];
