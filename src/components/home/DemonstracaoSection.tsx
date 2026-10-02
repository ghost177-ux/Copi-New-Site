import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import escritorioWaybitImg from "@/assets/Escritorio waybit.png";
import notebookImg from "@/assets/notebook.png";

export function DemonstracaoSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const officeRef = useRef<HTMLDivElement>(null);

  // Efeito Parallax suave aplicado exclusivamente à imagem de fundo do escritório durante o scroll
  useEffect(() => {
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

      // Executa quando o elemento estiver dentro ou próximo do campo de visão da tela
      if (rect.bottom >= -150 && rect.top <= windowHeight + 150) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const normalized = (elementCenter - screenCenter) / (windowHeight / 2);
        const clamped = Math.max(-1, Math.min(1, normalized));
        // Deslocamento vertical real, perceptível e suave (máximo ±36px)
        const maxOffset = 36;
        setParallaxOffset(Math.round(-clamped * maxOffset));
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
      {/* =========================================================================
          SECTION: DEMONSTRAÇÃO PERSONALIZADA (COMPOSIÇÃO HORIZONTAL PANORÂMICA)
          - Tag no topo fora da imagem do escritório
          - Notebook centralizado em primeiro plano (metade superior fora do escritório, largura ampla)
          - Faixa Panorâmica do Escritório Waybit (ampla largura, altura moderada e equilibrada)
          - Somente Título e Parágrafo sobre a imagem do escritório, com distribuição horizontal ampla
      ========================================================================= */}
      <section
        id="banner-demonstracao"
        className="relative w-full overflow-hidden bg-background pt-10 sm:pt-12 lg:pt-14 border-t border-border"
      >
        {/* ========================================================
            TAG (FORA DA IMAGEM DO ESCRITÓRIO, NO TOPO DA SEÇÃO)
        ======================================================== */}
        <div className="fluid-container relative z-20 flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 sm:px-4 py-1.5 fluid-caption font-semibold text-primary shadow-2xs">
            <Sparkles size={14} className="text-[#FFB800]" />
            <span>Demonstração Personalizada de 15 Minutos</span>
          </div>
        </div>

        {/* ========================================================
            1. NOTEBOOK EM PRIMEIRO PLANO (z-20)
            - Centralizado horizontalmente
            - 1440px = 50% da largura do container pai
            - > 1440px: percentual diminui progressivamente (< 50%)
            - < 1440px: cresce de forma contínua e fluida até 100% no mobile
            - Proporção natural preservada (height: auto, object-contain)
        ======================================================== */}
        <div className="relative z-20 w-full flex justify-center demonstracao-notebook-container px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="demonstracao-notebook group relative block cursor-pointer transition-all duration-250 ease-out hover:-translate-y-2 hover:drop-shadow-[0_28px_50px_rgba(0,0,0,0.7)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
            aria-label="Assistir demonstração do Dominus"
            title="Clique para assistir à demonstração em vídeo"
          >
            <img
              src={notebookImg}
              alt="Demonstração do Sistema Dominus no Notebook"
              className="w-full h-auto object-contain pointer-events-none select-none transition-filter duration-250 group-hover:brightness-105"
              loading="lazy"
            />
            <span className="sr-only">Assistir demonstração do Dominus</span>
          </button>
        </div>

        {/* ========================================================
            2. CENÁRIO DO ESCRITÓRIO WAYBIT (FAIXA PANORÂMICA LIMPA)
            - 100% da largura da seção
            - Sobreposição equilibrada com o notebook
            - Sem min-height artificial, sem pilhas de compensações
            - Altura governada pela composição e pelo conteúdo real
        ======================================================== */}
        <div
          ref={officeRef}
          className="relative w-full overflow-hidden -mt-16 sm:-mt-20 lg:-mt-24 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 flex flex-col items-center"
        >
          {/* 1. FUNDO: Imagem do Escritório com Parallax Vertical Real */}
          <div className="pointer-events-none absolute inset-x-0 -top-12 -bottom-12 w-full h-[calc(100%+6rem)] overflow-hidden z-0">
            <img
              src={escritorioWaybitImg}
              alt="Cenário do Escritório Waybit"
              className="w-full h-full object-cover pointer-events-none select-none will-change-transform"
              style={{
                objectPosition: "center center",
                transform: prefersReducedMotion
                  ? "none"
                  : `translate3d(0, ${parallaxOffset}px, 0)`,
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 100ms ease-out",
              }}
              loading="lazy"
            />
          </div>

          {/* 2. OVERLAY PRETO ESTÁTICO (30% PRETO UNIFORME) */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
            aria-hidden="true"
          />

          {/* ========================================================
              CONTEÚDO: TÍTULO E PARÁGRAFO
              - Segue o sistema global do projeto (fluid-container)
              - Largura percentual para legibilidade editorial sem cascata de max-width
          ======================================================== */}
          <div className="fluid-container relative z-10 flex flex-col items-center text-center text-white">
            {/* TÍTULO */}
            <h2 className="font-display fluid-h2 font-extrabold tracking-tight leading-snug sm:leading-tight w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] mx-auto text-white drop-shadow-md">
              Pronto para ver o que o{" "}
              <span className="bg-gradient-to-r from-[#00ADEF] via-[#71BE44] to-[#FFB800] bg-clip-text text-transparent font-extrabold">
                Dominus
              </span>{" "}
              pode fazer pelo seu negócio?
            </h2>

            {/* PARÁGRAFO */}
            <p className="mt-4 sm:mt-5 fluid-body-lg text-zinc-200 leading-relaxed w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[62%] mx-auto drop-shadow-sm font-normal">
              Agende uma apresentação online com um especialista no seu segmento. Mostramos como
              acelerar suas vendas, controlar seu estoque e ter tranquilidade fiscal sem
              compromisso.
            </p>
          </div>
        </div>
      </section>

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
