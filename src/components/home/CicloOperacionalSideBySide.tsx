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
            COLUNA ESQUERDA (45%): IMAGEM TRANSPARENTE PURA + FOGUETE
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
                ANIMAÇÃO ORBITAL DO FOGUETE COM TRILHA PONTILHADA
                Perfeitamente centralizada sobre o relógio da imagem
            ==================================================== */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative size-[30%] aspect-square flex items-center justify-center animate-[spin_10s_linear_infinite]">
                
                {/* Trilha do Foguete (Dashed + Solid matching reference image) */}
                <svg
                  className="absolute inset-0 size-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Trilha Pontilhada (Lado Esquerdo) */}
                  <path
                    d="M 50 10 A 40 40 0 0 0 50 90"
                    stroke="#5B5B5B"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeDasharray="3 6"
                    className="opacity-85"
                  />

                  {/* Trilha Sólida (Lado Direito) */}
                  <path
                    d="M 50 90 A 40 40 0 0 0 50 10"
                    stroke="#5B5B5B"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="opacity-85"
                  />
                </svg>

                {/* Foguete Estilizado com Rastro de Propulsão */}
                <div
                  className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-xs"
                  >
                    {/* Linhas de exaustão */}
                    <line
                      x1="3"
                      y1="17"
                      x2="7"
                      y2="17"
                      stroke="#5B5B5B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="1"
                      y1="19.5"
                      x2="6"
                      y2="19.5"
                      stroke="#5B5B5B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="4"
                      y1="22"
                      x2="8"
                      y2="22"
                      stroke="#5B5B5B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    {/* Corpo e bico do foguete */}
                    <path
                      d="M 7 17 C 7 14 11 11 15 8 C 19 5 21 3 21 3 C 21 3 19 5 16 9 C 13 13 10 17 7 17 Z"
                      fill="#5B5B5B"
                    />
                    <path
                      d="M 21 3 C 15 5 9 10 7 17 C 8 18 10 19 11 19 C 18 17 23 11 21 3 Z"
                      fill="#5B5B5B"
                      stroke="#374151"
                      strokeWidth="0.8"
                    />
                    {/* Janela circular branca */}
                    <circle cx="14" cy="10" r="2.2" fill="#FFFFFF" />
                    <circle cx="14" cy="10" r="1.1" fill="#5B5B5B" />

                    {/* Aletas */}
                    <path d="M 7 14 L 4 15 L 6 18 Z" fill="#4B5563" />
                    <path d="M 14 21 L 15 24 L 18 22 Z" fill="#4B5563" />
                  </svg>
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
