export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Brief",
    description:
      "Entendemos el objetivo del negocio y el alcance real del proyecto.",
  },
  {
    num: "02",
    title: "Construcción",
    description: "Desarrollo con avances semanales, sin cajas negras.",
  },
  {
    num: "03",
    title: "Despliegue",
    description: "Publicación en producción con tu dominio y base de datos.",
  },
  {
    num: "04",
    title: "Soporte",
    description: "Documentación clara y acompañamiento post-lanzamiento.",
  },
];
