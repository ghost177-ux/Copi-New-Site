import { ArrowRight } from "lucide-react";
import dominusFoodLogo from "@/assets/Dominus Food - White.png";

interface DominusFoodHeaderProps {
  onOpenSpecialist?: () => void;
  onOpenBooking: () => void;
}

export function DominusFoodHeader({
  onOpenSpecialist,
  onOpenBooking,
}: DominusFoodHeaderProps) {
  return (
    <header className="relative z-30 w-full bg-transparent">
      <div className="fluid-container flex min-h-[68px] sm:min-h-[76px] lg:min-h-[84px] items-center justify-between gap-2 sm:gap-4 py-2.5 sm:py-3">
        {/* Lado esquerdo: Logotipo oficial Dominus Food mantendo proporção original */}
        <a
          href="/dominus-food"
          aria-label="Dominus Food — Início"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src={dominusFoodLogo}
            alt="Dominus Food"
            className="h-6 sm:h-8 md:h-9 w-auto max-w-[130px] sm:max-w-[180px] md:max-w-[230px] object-contain"
          />
        </a>

        {/* Lado direito: Dois botões lado a lado */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Botão 1: Falar com um especialista (Link direto para o WhatsApp) */}
          <a
            id="header-food-cta-especialista"
            href="https://api.whatsapp.com/send/?phone=5521975812676&text=Ol%C3%A1%2C+vim+do+site+e+quero+saber+mais+sobre+o+Dominus&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 sm:min-h-11 items-center justify-center gap-1 sm:gap-2 rounded-xl px-2.5 sm:px-5 text-[11px] sm:text-xs md:text-sm font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 active:scale-[0.98] cursor-pointer shrink-0 no-underline"
            style={{ backgroundColor: "#63B628" }}
          >
            <span className="whitespace-nowrap">Falar com um especialista</span>
            <ArrowRight size={14} className="shrink-0 hidden xs:inline" aria-hidden="true" />
          </a>

          {/* Botão 2: Agendar demonstração (estilo idêntico ao antigo botão translúcido da Hero) */}
          <button
            type="button"
            id="header-food-cta-agendar"
            onClick={onOpenBooking}
            className="inline-flex min-h-9 sm:min-h-11 items-center justify-center gap-1 sm:gap-2 rounded-xl border border-white/25 bg-white/10 px-2.5 sm:px-5 text-[11px] sm:text-xs md:text-sm font-bold text-white/95 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/40 active:scale-[0.98] cursor-pointer shrink-0"
          >
            <span className="whitespace-nowrap">Agendar demonstração</span>
          </button>
        </div>
      </div>
    </header>
  );
}
