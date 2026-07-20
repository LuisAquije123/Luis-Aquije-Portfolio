# Luis Aquije — Portfolio (Vite + React)

Landing page construida con Vite, React, TypeScript y Tailwind CSS.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Desplegar en Vercel

Framework preset: **Vite**. Build command: `npm run build`, output dir: `dist`.
No requiere variables de entorno.

## Estructura

```
src/
  main.tsx          → punto de entrada
  App.tsx            → ensambla las secciones
  index.css          → paleta de colores (variables CSS)
  components/        → un componente por sección
  data/               → todo el contenido editable, separado del diseño
    site.ts           → nombre, headline del hero, tech row
    contact.ts         → email, teléfono/WhatsApp, redes sociales
    services.ts
    matrix.ts
    projects.ts
    process.ts
```

## Cambiar tus datos de contacto

Todo vive en `src/data/contact.ts`:

```ts
export const contactChannels: ContactChannel[] = [
  { id: "email", label: "Email", value: "hola@luisaquije.dev",
    href: "mailto:hola@luisaquije.dev", primary: true },
  { id: "whatsapp", label: "WhatsApp", value: "+51 999 999 999",
    href: "https://wa.me/51999999999" },
  // agrega Instagram, X, Behance, lo que necesites...
];
```

El canal marcado con `primary: true` es el que se usa como botón principal
"Agenda una llamada" en el nav, el hero y la sección de contacto. Los demás
aparecen listados automáticamente debajo. Agregar una red social nueva es
agregar un objeto al arreglo, no tocar ningún componente.

## Cambiar la paleta de colores

Todo el color vive en `src/index.css`:

```css
--accent: #3e7bfa;  /* color principal: CTAs, headline, links */
--accent2: #ffb020; /* color secundario: labels, números de proceso */
```

## Agregar un proyecto nuevo

Edita `src/data/projects.ts` y agrega un objeto al array `projects`:

```ts
{
  name: "Nombre del proyecto",
  stack: ["Next.js", "Supabase"],
  outcome: "Qué problema resolvió, en una línea.",
  status: "live",
  url: "https://...",
  ctaLabel: "Ver caso →",
}
```

## Responsive

El sitio usa los breakpoints de Tailwind (`sm`, `md`) en todas las secciones:
nav con menú hamburguesa en móvil, la matriz de capacidades cambia de tabla a
tarjetas apiladas por debajo de `md`, y el grid de servicios/proceso pasa de
varias columnas a una sola en pantallas chicas.
