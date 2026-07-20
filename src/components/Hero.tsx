import { site, techStack } from "../data/site";
import { contactChannels } from "../data/contact";

export default function Hero() {
  const primaryContact = contactChannels.find((c) => c.primary);

  return (
    <header className="py-16 sm:py-24 md:py-[104px]">
      <div className="mx-auto max-w-[760px] px-5 sm:px-8">
        {site.available && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 font-label text-xs text-accent sm:mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availabilityLabel}
          </div>
        )}

        <h1 className="mb-6 font-display text-[30px] font-semibold leading-[1.18] tracking-tight sm:text-[38px] md:text-[50px] md:leading-[1.15]">
          {site.heroHeadlinePre}
          <span className="text-accent">{site.heroHeadlineHighlight}</span>
        </h1>

        <p className="mb-8 max-w-[600px] text-[15.5px] text-muted sm:mb-9 sm:text-[17px] md:text-lg">
          {site.heroSubtext}
        </p>

        <div className="mb-10 flex flex-wrap gap-3.5 sm:mb-12">
          <a
            href="#work"
            className="rounded-lg bg-accent px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#6d9bff] sm:py-4"
          >
            Ver proyectos
          </a>
          <a
            href={primaryContact?.href ?? "#contact"}
            className="rounded-lg border border-border bg-surface px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-accent2 hover:text-accent2 sm:py-4"
          >
            Agenda una llamada
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2.5 border-t border-border pt-6 sm:gap-x-7 sm:pt-7">
          {techStack.map((tech) => (
            <span key={tech} className="font-label text-[11.5px] text-muted sm:text-[12.5px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
