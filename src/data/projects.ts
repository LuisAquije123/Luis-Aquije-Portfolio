export type ProjectStatus = "live" | "en progreso" | "archivado";

export interface Project {
  name: string;
  stack: string[];
  outcome: string; // formato "Antes: ... Ahora: ..." o una línea de resultado
  status: ProjectStatus;
  url: string;
  ctaLabel: string;
}

// Para agregar un proyecto nuevo, solo añade un objeto aquí.
export const projects: Project[] = [
  {
    name: "LeaQ Dashboard",
    stack: ["Next.js", "Supabase", "Vercel"],
    outcome:
      "Antes: conciliación manual de facturas en Excel. Ahora: procesamiento automatizado con estados y reclasificación por fecha.",
    status: "live",
    url: "#",
    ctaLabel: "Ver caso →",
  },
  {
    name: "Billing Sync API",
    stack: ["NestJS", "PostgreSQL", "Vercel"],
    outcome:
      "API que normaliza reportes de distintos formatos y los sincroniza en un solo estándar CSV.",
    status: "live",
    url: "#",
    ctaLabel: "Ver caso →",
  },
  {
    name: "Boutique Store",
    stack: ["WordPress", "WooCommerce"],
    outcome:
      "Tienda con catálogo, checkout y panel de pedidos, lista para operar sin soporte técnico diario.",
    status: "live",
    url: "#",
    ctaLabel: "Ver sitio →",
  },
];
