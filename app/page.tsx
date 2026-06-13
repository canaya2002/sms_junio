import Image from "next/image";

// PENDIENTE: confirmar el número telefónico final de la campaña.
// Por ahora se usa la línea de la campaña anterior como marcador.
const PHONE_DISPLAY = "(713) 322-7646";
const PHONE_TEL = "+17133227646";

const VIDEO_EMBED =
  "https://iframe.mediadelivery.net/embed/547379/b9aa29cc-cd26-4c6f-88eb-7c977e2f7a95?autoplay=true&muted=true&preload=true&loop=false";

export default function Home() {
  return (
    <main
      className="overflow-hidden flex flex-col items-center bg-paper px-0 sm:px-4 sm:py-2"
      style={{ height: "100dvh" }}
    >
      {/* Tarjeta: una sola pantalla, estilo aviso limpio y moderno */}
      <section className="animate-fade-in relative mx-auto flex h-full w-full max-w-[420px] flex-col gap-2 bg-white px-4 py-2.5 rounded-none sm:my-auto sm:rounded-3xl sm:shadow-[0_20px_60px_rgba(15,42,34,0.10)]">
        {/* Encabezado: logo + especialidad (sin lenguaje de notificación oficial) */}
        <header className="flex shrink-0 items-center justify-between border-b border-hairline pb-2">
          <Image
            src="/LogoManuelSolis.png"
            alt="Law Offices of Manuel Solis"
            width={1200}
            height={546}
            priority
            className="h-11 sm:h-12 w-auto mix-blend-multiply"
          />
          <div className="flex flex-col items-end gap-0.5 leading-none text-right">
            <span className="text-[9px] font-bold uppercase tracking-wide text-navy">
              Abogados de Inmigración
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-navy/55">
              Houston, TX
            </span>
          </div>
        </header>

        {/* Bloque central */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2.5 text-center">
          {/* Hook + Headline + Subheadline */}
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF3FB] px-3 py-1 ring-1 ring-[#9DBBE8]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-go/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-go" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-go-deep">
                Aviso importante para ti
              </span>
            </span>

            <h1 className="mt-2 font-black tracking-tight text-ink leading-[1.05] text-[clamp(24px,7vw,38px)]">
              ROI PROGRAM SIGUE{" "}
              <span className="[box-decoration-break:clone] [-webkit-box-decoration-break:clone] rounded-[3px] bg-mint/70 px-1">
                VIGENTE
              </span>{" "}
              PARA TI
            </h1>

            <p className="mx-auto mt-2 max-w-[340px] text-[13px] sm:text-sm leading-snug text-[#475569]">
              Activa hoy tu representación legal y obtén respaldo profesional
              durante los próximos 12 meses.
            </p>
          </div>

          {/* Video */}
          <div className="relative shrink-0">
            <div
              className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-hairline"
              style={{
                width: "min(88vw, calc(28dvh * 16 / 9), 480px)",
                boxShadow:
                  "inset 0 0 0 1px rgba(197,165,90,0.30), 0 14px 40px -12px rgba(15,42,34,0.18)",
              }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src={VIDEO_EMBED}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                scrolling="no"
                title="Mensaje informativo — Law Offices of Manuel Solis"
              />
              <span className="pointer-events-none absolute left-2 top-2 z-10 rounded-full bg-ink/85 px-2 py-0.5 text-[9px] font-semibold text-white">
                ▶ Mensaje informativo
              </span>
            </div>
          </div>

          {/* Sello de confianza */}
          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#EEF3FB] px-3 py-1.5">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
              <path
                d="M12 2l2.6 1.9 3.2-.3 1 3.1 2.6 1.9-1 3.1 1 3.1-2.6 1.9-1 3.1-3.2-.3L12 22l-2.6-1.9-3.2.3-1-3.1L2.6 15l1-3.1-1-3.1 2.6-1.9 1-3.1 3.2.3L12 2z"
                fill="#1b3a6b"
              />
              <path
                d="M8.5 12.2l2.3 2.3 4.5-4.7"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[12px] leading-tight text-[#475569]">
              <span className="font-bold text-ink">Más de 50,000 familias</span>{" "}
              ya confiaron en nosotros.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex shrink-0 flex-col items-center gap-1.5">
          <a
            href={`tel:${PHONE_TEL}`}
            className="animate-breathe flex min-h-[64px] w-full max-w-[360px] flex-col items-center justify-center rounded-2xl bg-go px-5 py-2.5 text-white transition-transform active:scale-[0.98]"
          >
            <span className="flex items-center gap-2 text-[15px] sm:text-base font-bold tracking-wide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              ACTIVA TU ROI PROGRAM HOY
            </span>
            <span className="text-[15px] font-semibold tabular-nums opacity-90">
              {PHONE_DISPLAY}
            </span>
          </a>
          <p className="text-[10px] sm:text-[11px] text-[#475569]">
            Toca para llamar ahora · Hablamos español
          </p>
        </div>

        {/* Disclaimer */}
        <footer className="shrink-0 border-t border-hairline pt-1.5 text-center">
          <p className="mx-auto max-w-md text-[10px] leading-tight text-[#64748B]">
            Anuncio publicitario de abogados — Law Offices of Manuel Solis.
            Abogado responsable: Manuel Solís (Houston, TX). Llamar no crea una
            relación abogado-cliente. La activación está sujeta a la evaluación
            individual de cada caso. Los resultados anteriores no garantizan un
            resultado similar.
          </p>
        </footer>
      </section>
    </main>
  );
}
