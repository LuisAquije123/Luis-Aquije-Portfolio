import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="mb-10 max-w-[600px] sm:mb-12">
          <div className="mb-3 font-label text-xs uppercase tracking-wider text-accent2">
            Proceso
          </div>
          <h2 className="mb-3 font-display text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px]">
            Cómo trabajamos juntos
          </h2>
          <p className="text-[14.5px] text-muted sm:text-[15.5px]">
            Cuatro pasos, del primer mensaje al proyecto en producción.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          {processSteps.map((step, i) => (
            <div key={step.num} className="relative md:pr-6">
              {i < processSteps.length - 1 && (
                <div className="absolute right-0 top-[22px] hidden h-px w-full bg-border md:block" />
              )}
              <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-accent2 bg-surface font-display text-[15px] font-bold text-accent2 sm:mb-4.5">
                {step.num}
              </div>
              <h4 className="mb-2 font-display text-[16px] font-semibold sm:text-[16.5px]">
                {step.title}
              </h4>
              <p className="text-[13.5px] text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
