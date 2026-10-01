import { MessageSquare, Rocket } from "lucide-react";

export function CicloOperacionalSideBySide() {
  return (
    <section
      id="ciclo-operacional"
      className="relative w-full overflow-hidden border-b border-[#E2EEF2] bg-[#F4F9FB] py-16 sm:py-24"
    >
      {/* Linha superior: espelha a composição exata da linha inferior (1px border-border + 1px border-[#E2EEF2]) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full border-t border-border border-b border-[#E2EEF2]" />

      {/* Luzes difusas sutis de ambientação corporativa */}
      <div className="pointer-events-none absolute -left-36 top-1/3 size-[460px] rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-1/4 size-[460px] rounded-full bg-sky-100/30 blur-3xl" />

      {/* Container Global 100% Fluido (Gutter: 3% / 5% / 10% sem max-width global) */}
      <div className="fluid-container relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-[4%]">

        {/* ========================================================
            COLUNA ESQUERDA (45%): IMAGEM TRANSPARENTE PURA + FOGUETE LUCIDE
        ======================================================== */}
        <div className="flex w-full items-center justify-center lg:w-[45%]">
          <div className="relative flex w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] aspect-square items-center justify-center">
            {/* Imagem Transparente Pura (Zero fundo, zero caixa branca, zero bordas) */}
            <img
              src="/Diag-ciclo.png"
              alt="Ciclo Operacional Waybit"
              className="size-full object-contain pointer-events-none select-none"
              loading="lazy"
            />

            {/* ====================================================
                ANIMAÇÃO ORBITAL DO FOGUETE LUCIDE
                Órbita perfeitamente sincronizada em torno do relógio central:
                50% linha contínua + 50% linha tracejada (mesmo raio e espessura)
            ==================================================== */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {/* Trilha Guia Circular: 50% contínua + 50% tracejada em único círculo perfeito */}
              <svg
                viewBox="0 0 100 100"
                className="absolute size-[25%] sm:size-[24%] pointer-events-none overflow-visible text-slate-400/60"
              >
                {/* 50% Linha Contínua (arco direito de 12h às 6h) */}
                <path
                  d="M 50 0 A 50 50 0 0 1 50 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                {/* 50% Linha Tracejada (arco esquerdo de 6h às 12h) */}
                <path
                  d="M 50 100 A 50 50 0 0 1 50 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="4 3"
                />
              </svg>

              {/* Container Orbital com rotação suave e contínua de 360 graus em 12s */}
              <div className="relative size-[25%] sm:size-[24%] aspect-square flex items-center justify-center animate-[spin_12s_linear_infinite]">
                {/* Ícone Lucide Rocket com presença visual aumentada, alinhado tangencialmente à órbita com pequeno offset radial para fora */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <Rocket className="size-8 sm:size-9 text-slate-600 fill-slate-600/30 stroke-[2] rotate-45 drop-shadow-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            COLUNA DIREITA (53%): TÍTULO, TEXTO E CTA
        ======================================================== */}
        <div className="flex w-full flex-col justify-center lg:w-[53%]">
          {/* Título Principal */}
          <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-slate-900 leading-tight">
            Seu negócio mais rápido. Seu dia mais produtivo!
          </h2>

          {/* Texto Oficial */}
          <p className="mt-5 fluid-body-lg leading-relaxed text-slate-600">
            O Dominus é um sistema de gestão completo que conecta toda a sua operação em um único fluxo: balcão, estoque, pagamentos, maquininha, notas fiscais, delivery, relatórios e integrações. Do pedido à emissão fiscal, as etapas trabalham de forma integrada, reduzindo os erros manuais e dando mais agilidade à sua empresa.
          </p>

          {/* CTA com integração ao WhatsApp existente */}
          <div className="mt-7 sm:mt-8 flex items-center">
            <a
              href="https://wa.me/5521975812676?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Waybit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#71BE44] hover:bg-[#62a83a] px-6 sm:px-7 h-11 sm:h-12 text-white font-semibold fluid-btn shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare size={18} className="shrink-0" />
              <span>Falar com especialista</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
