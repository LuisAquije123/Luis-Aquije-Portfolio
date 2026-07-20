import { matrixRows } from "../data/matrix";

export default function CapabilityMatrix() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="mb-10 max-w-[600px] sm:mb-12">
          <div className="mb-3 font-label text-xs uppercase tracking-wider text-accent2">
            Cómo encajan tus necesidades
          </div>
          <h2 className="mb-3 font-display text-[24px] font-semibold tracking-tight sm:text-[28px] md:text-[32px]">
            De lo que necesitas a lo que recibes
          </h2>
          <p className="text-[14.5px] text-muted sm:text-[15.5px]">
            Una guía rápida de qué stack y qué entregable corresponde a cada
            tipo de proyecto.
          </p>
        </div>

        {/* Desktop / tablet: tabla */}
        <div className="hidden overflow-hidden rounded-card border border-border bg-surface md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-bg">
                {["Necesitas", "Qué incluye", "Stack", "Dónde vive"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-5 py-4 text-left font-label text-[11.5px] uppercase tracking-wide text-muted"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row) => (
                <tr
                  key={row.need}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-5 py-6 align-top">
                    <div className="mb-1 font-display text-base font-semibold">
                      {row.need}
                    </div>
                    <div className="text-[13px] text-muted">{row.needSub}</div>
                  </td>
                  <td className="px-5 py-6 align-top text-sm text-muted">
                    {row.includes}
                  </td>
                  <td className="px-5 py-6 align-top font-label text-[12.5px] leading-relaxed text-accent">
                    {row.stack}
                  </td>
                  <td className="px-5 py-6 align-top text-sm text-muted">
                    {row.where}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Móvil: tarjetas apiladas */}
        <div className="flex flex-col gap-4 md:hidden">
          {matrixRows.map((row) => (
            <div
              key={row.need}
              className="rounded-card border border-border bg-surface p-5"
            >
              <div className="mb-0.5 font-display text-base font-semibold">
                {row.need}
              </div>
              <div className="mb-3 text-[13px] text-muted">{row.needSub}</div>

              <div className="mb-3 text-sm text-muted">{row.includes}</div>

              <div className="mb-2 font-label text-[12px] leading-relaxed text-accent">
                {row.stack}
              </div>
              <div className="font-label text-[12px] text-muted">
                {row.where}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
