import { useState } from "react";
import { site } from "../data/site";
import { contactChannels } from "../data/contact";

const navLinks = [
  { href: "#services", label: "Servicios" },
  { href: "#work", label: "Proyectos" },
  { href: "#process", label: "Proceso" },
  { href: "#contact", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const primaryContact = contactChannels.find((c) => c.primary);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-[1140px] items-center justify-between px-5 sm:h-[76px] sm:px-8">
        <span className="font-display text-base font-bold sm:text-lg">
          {site.name}
        </span>

        <div className="hidden gap-9 text-[14.5px] text-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={primaryContact?.href ?? "#contact"}
          className="hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6d9bff] md:inline-block"
        >
          Agenda una llamada
        </a>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-ink transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="border-t border-border px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-[15px] text-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={primaryContact?.href ?? "#contact"}
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Agenda una llamada
          </a>
        </div>
      )}
    </nav>
  );
}
