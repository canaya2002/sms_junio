import Image from "next/image";

// PENDIENTE: confirmar el número telefónico final de la campaña.
// Por ahora se usa la línea de la campaña anterior como marcador.
const PHONE_DISPLAY = "(713) 322-7646";
const PHONE_TEL = "+17133227646";

const YOUTUBE_ID = "3Z6BOOCBgas";

const AVATARS = [
  { letter: "M", color: "bg-green-500" },
  { letter: "S", color: "bg-blue-500" },
  { letter: "R", color: "bg-amber-500" },
  { letter: "A", color: "bg-rose-500" },
  { letter: "J", color: "bg-purple-500" },
];

export default function Home() {
  return (
    <main
      className="overflow-hidden flex flex-col items-center px-3 sm:px-5 py-2 sm:py-4 relative animate-fade-in"
      style={{ height: "100dvh" }}
    >
      {/* Fondo claro con acentos dorados suaves */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FDFBF4 15%, #FBF7EC 35%, #F5ECD4 52%, #FBF7EC 70%, #FDFBF4 88%, #FFFFFF 100%)",
        }}
      >
        <svg
          className="absolute top-[10%] left-0 w-full h-[100px] opacity-[0.05]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path fill="#0D1B3E" d="M0,50 C360,100 720,0 1440,70 L1440,100 L0,100 Z" />
        </svg>
        <svg
          className="absolute bottom-[15%] left-0 w-full h-[100px] opacity-[0.05]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path fill="#1A3A6B" d="M0,70 C240,10 720,90 1440,30 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute top-[18%] left-[5%] w-48 h-48 bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[18%] right-[5%] w-56 h-56 bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 w-72 h-32 bg-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Logo */}
      <div className="relative z-10 shrink-0 mt-1.5 sm:mt-3">
        <Image
          src="/LogoManuelSolis.png"
          alt="Law Offices of Manuel Solis"
          width={400}
          height={182}
          priority
          className="h-14 sm:h-20 md:h-24 w-auto mix-blend-multiply"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 w-full gap-2 sm:gap-3 py-1">
        {/* Enganche + Headline */}
        <div className="text-center shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 border border-gold/40 text-navy/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Aviso importante para ti
          </span>
          <h1 className="mt-1.5 text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-navy">
            ROI PROGRAM
            <br />
            <span className="text-gradient-gold">SIGUE VIGENTE</span> PARA TI
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-navy/70 max-w-[320px] sm:max-w-md mx-auto mt-1.5 leading-snug">
            Activa hoy tu representación legal y obtén respaldo profesional
            durante los próximos 12 meses.
          </p>
        </div>

        {/* Video */}
        <div className="relative shrink-0">
          <div
            className="aspect-video rounded-lg sm:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(197,165,90,0.35)] border-2 border-gold/40 relative bg-navy/5"
            style={{ width: "min(88vw, calc(34dvh * 16 / 9), 560px)" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title="Video informativo — Law Offices of Manuel Solis"
            />
          </div>
        </div>

        {/* Badge de confianza + CTA */}
        <div className="shrink-0 text-center flex flex-col items-center gap-2 sm:gap-2.5">
          <div className="flex items-center gap-2 text-navy/60">
            <div className="flex -space-x-1.5">
              {AVATARS.map(({ letter, color }) => (
                <div
                  key={letter}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[8px] sm:text-[9px] font-bold`}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs leading-tight">
              <span className="font-bold text-navy/80">
                Más de 50,000 familias
              </span>{" "}
              ya confiaron en nosotros.
            </p>
          </div>

          <a
            href={`tel:${PHONE_TEL}`}
            className="group relative inline-flex flex-col items-center px-5 sm:px-14 py-3.5 sm:py-4 bg-gradient-to-b from-green-500 via-green-600 to-green-700 text-white font-bold text-[15px] sm:text-xl rounded-full active:scale-95 transition-all sm:tracking-wide animate-pulse-glow overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="flex items-center gap-2 relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 animate-float"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              ACTIVA TU ROI PROGRAM HOY
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-wider opacity-90 relative z-10">
              {PHONE_DISPLAY}
            </span>
          </a>

          <div className="flex flex-col items-center gap-0.5">
            <p className="text-[10px] sm:text-xs text-navy/70 leading-snug">
              Toca el botón verde para llamar ahora
            </p>
            <p className="text-[10px] sm:text-[11px] text-navy/60">
              Hablamos español • Atención personalizada
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <footer className="relative z-10 shrink-0 pb-1.5 sm:pb-2 text-center">
        <p className="text-[10px] sm:text-[11px] text-navy/60 max-w-md mx-auto leading-tight">
          Anuncio publicitario de abogados — Law Offices of Manuel Solis. La
          activación del programa está sujeta a la evaluación individual de
          cada caso. Los resultados anteriores no garantizan un resultado
          similar.
        </p>
      </footer>
    </main>
  );
}
