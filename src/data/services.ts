export interface Service {
  num: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Aplicaciones a medida",
    description:
      "Paneles internos, herramientas de negocio y APIs con React, Next.js o NestJS, conectadas a una base de datos real.",
  },
  {
    num: "02",
    title: "Landing pages & e-commerce",
    description:
      "Sitios en WordPress y tiendas WooCommerce pensadas para convertir, con SEO básico y carga rápida.",
  },
  {
    num: "03",
    title: "Despliegue & infraestructura",
    description:
      "Puesta en producción en Vercel y base de datos en Supabase.",
  },
];
