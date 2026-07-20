import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="mb-10 max-w-[600px] sm:mb-12">
          <div className="mb-3 font-label text-xs uppercase tracking-wider text-accent2">
            Servicios
          </div>
          <h2 className="mb-3 font-display text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px]">
            En qué te puedo ayudar
          </h2>
          <p className="text-[14.5px] text-muted sm:text-[15.5px]">
            Tres tipos de proyecto que cubro de principio a fin, sin depender
            de terceros para el despliegue.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.num}
              className="rounded-card border border-border bg-surface p-6 sm:p-7"
            >
              <div className="mb-4 font-label text-xs text-accent2 sm:mb-5">
                {service.num}
              </div>
              <h3 className="mb-2.5 font-display text-[18px] font-semibold sm:text-[19px]">
                {service.title}
              </h3>
              <p className="text-[14px] text-muted sm:text-[14.5px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
