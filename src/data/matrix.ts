export interface MatrixRow {
  need: string;
  needSub: string;
  includes: string;
  stack: string;
  where: string;
}

export const matrixRows: MatrixRow[] = [
  {
    need: "Una herramienta interna",
    needSub: "Panel, automatización, reportes",
    includes:
      "Lógica de negocio, autenticación, base de datos y panel administrativo.",
    stack: "React · NestJS · Nextjs · PostgreSQL",
    where: "Vercel + Supabase",
  },
  {
    need: "Vender online",
    needSub: "Landing o tienda",
    includes:
      "Diseño, catálogo de productos, checkout y SEO básico configurado.",
    stack: "WordPress · WooCommerce",
    where: "Hosting gestionado + dominio propio",
  },
  {
    need: "Lanzar y no perderlo de vista",
    needSub: "Migración o puesta en producción",
    includes:
      "Configuración de dominio, DNS, variables de entorno y monitoreo básico.",
    stack: "Vercel · Supabase",
    where: "Producción, con tu dominio",
  },
];
