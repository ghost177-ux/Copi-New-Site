import { Rocket } from "lucide-react";

export function CicloOperacionalSideBySide() {
  return (
    <section
      id="ciclo-operacional"
      className="fluid-gutter relative w-full overflow-hidden border-b border-[#E2EEF2] bg-[#F4F9FB] py-16 sm:py-24"
    >
      {/* Luzes difusas sutis de ambientação corporativa */}
      <div className="pointer-events-none absolute -left-36 top-1/3 size-[460px] rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-1/4 size-[460px] rounded-full bg-sky-100/30 blur-3xl" />

      {/* Grid Principal Dividido: 45% Esquerda | 53% Direita */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-[2%]">
        
        {/* ========================================================
            COLUNA ESQUERDA (45%): IMAGEM TRANSPARENTE PURA + FOGUETE LUCIDE
        ======================================================== */}
        <div className="flex w-full items-center justify-center lg:w-[45%]">
          <div className="relative flex w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] aspect-square items-center justify-center">
            {/* Imagem Transparente Pura (Zero fundo, zero caixa branca, zero bordas) */}
            <img
              src="/Diag-ciclo.png"
              alt="Ciclo Operacional"
              className="size-full object-contain pointer-events-none select-none"
              loading="lazy"
            />

            {/* ====================================================
                ANIMAÇÃO ORBITAL DO FOGUETE LUCIDE
                Órbita perfeitamente sincronizada em torno do relógio central
            ==================================================== */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {/* Trilha Guia Circular Pontilhada Limpa */}
              <div className="absolute size-[25%] sm:size-[24%] rounded-full border border-dashed border-slate-400/50" />

              {/* Container Orbital com rotação suave e contínua de 360 graus */}
              <div className="relative size-[25%] sm:size-[24%] aspect-square flex items-center justify-center animate-[spin_12s_linear_infinite]">
                {/* Ícone Lucide Rocket Limpo em cinza escuro sólido, alinhado tangencialmente à órbita */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <Rocket className="size-5 sm:size-5.5 text-slate-600 fill-slate-600/30 stroke-[2] rotate-45 drop-shadow-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            COLUNA DIREITA (53%): APENAS TÍTULO E SUBTÍTULO LIMPOS
        ======================================================== */}
        <div className="flex w-full flex-col justify-center lg:w-[53%]">
          {/* Título Principal */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Tudo o que sua empresa precisa para operar sem atritos
          </h2>

          {/* Subtítulo */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600">
            Do pedido no balcão à expedição e emissão fiscal, todas as etapas operam em um fluxo automatizado contínuo, eliminando erros manuais e retrabalho.
          </p>
        </div>

      </div>
    </section>
  );
}
