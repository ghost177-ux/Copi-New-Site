import { useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import escritorioWaybitImg from "@/assets/Escritorio waybit.png";
import notebookImg from "@/assets/notebook.png";

export function DemonstracaoVisualComposition() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const officeRef = useRef<HTMLDivElement>(null);

  // Efeito Parallax suave durante o scroll
  useEffect(() => {
    // Acessibilidade: respeitar preferência do sistema por redução de movimento
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setParallaxOffset(0);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }

    let rafId: number;

    const updateParallax = () => {
      if (!officeRef.current) return;
      const rect = officeRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Executa somente quando o elemento estiver no campo de visão (viewport com folga)
      if (rect.bottom >= -50 && rect.top <= windowHeight + 50) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const normalized = (elementCenter - screenCenter) / (windowHeight / 2);
        const clamped = Math.max(-1, Math.min(1, normalized));
        // Deslocamento sutil e controlado (máx ±16px) para evitar qualquer espaço vazio
        const maxOffset = 16;
        setParallaxOffset(Math.round(clamped * maxOffset));
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateParallax();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* ========================================================
          ÁREA VISUAL: COMPOSIÇÃO EM CAMADAS (NOTEBOOK + ESCRITÓRIO)
          - Camada Traseira: Faixa horizontal do escritório com parallax
          - Camada Frontal: Notebook sobreposto, centralizado e interativo
      ======================================================== */}
      <div className="relative w-full max-w-[540px] mx-auto select-none mt-4 lg:mt-0">
        {/* ====================================================
            CAMADA TRASEIRA: FAIXA HORIZONTAL DO ESCRITÓRIO
            - Não ocupa a altura total da seção
            - Inicia aproximadamente na região central do notebook
            - Overflow controlado para suportar o deslocamento do parallax
        ==================================================== */}
        <div
          ref={officeRef}
          className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] mt-[19%] sm:mt-[20%] lg:mt-[21%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/80"
        >
          {/* Imagem do Escritório com Parallax suave */}
          <img
            src={escritorioWaybitImg}
            alt="Cenário do Escritório Waybit"
            className="absolute left-0 top-[-18%] w-full h-[136%] object-cover object-center pointer-events-none select-none will-change-transform"
            style={{
              transform: prefersReducedMotion
                ? "scale(1.06)"
                : `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
              transition: "transform 100ms ease-out",
            }}
            loading="lazy"
          />

          {/* Vinheta sutil e reflexo para integração com o card escuro */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 bg-gradient-to-t from-zinc-950/50 via-transparent to-black/15" />
        </div>

        {/* ====================================================
            CAMADA FRONTAL: NOTEBOOK CLICÁVEL COM MICROINTERAÇÃO
            - Primeiro plano (z-20)
            - Centralizado horizontalmente
            - Metade superior sobreposta acima da borda do escritório
            - Proporção original preservada
            - Microinteração de subida suave no hover (translateY -8px)
        ==================================================== */}
        <button
          type="button"
          onClick={() => setIsVideoModalOpen(true)}
          className="group absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-[88%] max-w-[470px] cursor-pointer transition-all duration-250 ease-out hover:-translate-y-2 hover:drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-xl"
          aria-label="Assistir demonstração do Dominus"
          title="Clique para assistir à demonstração em vídeo"
        >
          <img
            src={notebookImg}
            alt="Demonstração do Sistema Dominus no Notebook"
            className="w-full h-auto object-contain pointer-events-none select-none transition-filter duration-250 group-hover:brightness-105"
            loading="lazy"
          />

          {/* Dica visual discreta de play em hover para reforçar a intenção interativa */}
          <span className="sr-only">Assistir demonstração do Dominus</span>
        </button>
      </div>

      {/* ========================================================
          POPUP MODAL DO YOUTUBE
          - Acessível com semântica de Dialog
          - Proporção 16:9 responsiva
          - Fechamento por X, clique fora ou tecla ESC
          - Encerramento imediato do vídeo e restauração de scroll
      ======================================================== */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-[94vw] p-2 sm:p-3 bg-zinc-950/95 border border-zinc-800 text-white rounded-2xl shadow-2xl backdrop-blur-xl">
          <DialogTitle className="sr-only">
            Demonstração Oficial do Sistema Dominus — Waybit Software
          </DialogTitle>

          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            {isVideoModalOpen && (
              <iframe
                src="https://www.youtube.com/embed/uNWOvb8bMPo?autoplay=1&rel=0&modestbranding=1"
                title="Conheça a Waybit e as soluções que vão te deixar mais feliz!"
                className="w-full h-full border-0 rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
