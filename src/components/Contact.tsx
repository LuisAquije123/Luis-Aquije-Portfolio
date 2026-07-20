import { contactChannels } from "../data/contact";

export default function Contact() {
  const primaryContact = contactChannels.find((c) => c.primary);
  const otherContacts = contactChannels.filter((c) => !c.primary);

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid items-start gap-8 rounded-2xl border border-border bg-surface p-7 sm:p-9 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10 md:p-14">
          <div>
            <h2 className="mb-3.5 font-display text-[24px] font-semibold sm:text-[26px] md:text-[30px]">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="max-w-[420px] text-[14.5px] text-muted sm:text-[15px]">
              Cuéntame qué necesitas y te digo, sin rodeos, qué stack tiene
              más sentido y en cuánto tiempo podría estar en producción.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            {primaryContact && (
              <a
                href={primaryContact.href}
                className="rounded-lg bg-accent px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#6d9bff] sm:py-4"
              >
                {primaryContact.label === "Email"
                  ? "Agenda una llamada"
                  : `Escribir por ${primaryContact.label}`}
              </a>
            )}

            {/* El resto de canales, tomados directo del arreglo — agrega uno nuevo y aparece aquí solo */}
            <div className="flex flex-col gap-2.5 pt-1">
              {otherContacts.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="font-label text-[13px] text-muted transition-colors hover:text-accent2"
                >
                  {channel.label}: {channel.value}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
