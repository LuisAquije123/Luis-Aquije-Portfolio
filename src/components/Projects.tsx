import { projects } from "../data/projects";

const statusColor: Record<string, string> = {
  live: "text-accent2",
  "en progreso": "text-muted",
  archivado: "text-muted",
};

export default function Projects() {
  return (
    <section id="work" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="mb-10 max-w-[600px] sm:mb-12">
          <div className="mb-3 font-label text-xs uppercase tracking-wider text-accent2">
            Proyectos
          </div>
          <h2 className="mb-3 font-display text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px]">
            Trabajo reciente
          </h2>
          <p className="text-[14.5px] text-muted sm:text-[15.5px]">
            Proyectos entregados y actualmente en producción.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.name}
              className="grid gap-4 border-b border-border py-7 last:border-b-0 sm:gap-6 md:grid-cols-[1fr_1.3fr_auto] md:items-center md:gap-8 md:py-8"
            >
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold sm:text-xl">
                    {project.name}
                  </h3>
                  <span
                    className={`font-label text-[10.5px] uppercase ${statusColor[project.status]}`}
                  >
                    ● {project.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border px-2.5 py-0.5 font-label text-[11px] text-muted sm:text-[11.5px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[14px] text-muted sm:text-[14.5px]">
                {project.outcome}
              </p>

              <a
                href={project.url}
                className="whitespace-nowrap text-sm font-semibold text-accent hover:underline"
              >
                {project.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Agregar un proyecto: solo edita el array en data/projects.ts */}
        <div className="mt-7 flex flex-col gap-5 rounded-card border border-dashed border-border p-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:p-7">
          <div className="max-w-[380px] text-sm text-muted">
            <b className="mb-1.5 block font-display text-[16px] font-semibold text-ink sm:text-[17px]">
              Así se agrega un proyecto nuevo
            </b>
            Pensado para actualizar el portafolio en minutos, sin tocar
            código.
          </div>
          <div className="flex flex-wrap gap-4 font-label text-xs text-muted sm:gap-5">
            <span><b className="text-accent2">1.</b> Link del repo o sitio</span>
            <span><b className="text-accent2">2.</b> Stack usado</span>
            <span><b className="text-accent2">3.</b> Estado del proyecto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
