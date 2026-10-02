import { useEffect, useRef, useState } from "react";
import { Sparkles, MessageSquare, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import escritorioWaybitImg from "@/assets/Escritorio waybit.png";
import notebookImg from "@/assets/notebook.png";

export function DemonstracaoSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const officeRef = useRef<HTMLDivElement>(null);

  // Efeito Parallax suave aplicado exclusivamente ao fundo do escritório durante o scroll
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

      // Executa somente quando o elemento estiver visível no campo de visão
      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const normalized = (elementCenter - screenCenter) / (windowHeight / 2);
        const clamped = Math.max(-1, Math.min(1, normalized));
        // Deslocamento sutil e fluido (máximo ±20px) para não criar gaps
        const maxOffset = 20;
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
      {/* =========================================================================
          SECTION: 6. DEMONSTRAÇÃO PERSONALIZADA (COMPOSIÇÃO VERTICAL EM CAMADAS)
          - Sem card/container preto fechado
          - Notebook centralizado no topo atravessando o limite superior do escritório
          - Escritório Waybit ocupando 100% de largura (full-width) com parallax
          - Conteúdo textual centralizado sobre o escritório abaixo do notebook
      ========================================================================= */}
      <section
        id="banner-demonstracao"
        className="relative w-full overflow-hidden bg-background pt-10 sm:pt-14 lg:pt-18 border-t border-border"
      >
        {/* ========================================================
            1. CAMADA SUPERIOR: NOTEBOOK EM PRIMEIRO PLANO (z-20)
            - Centralizado horizontalmente
            - Parcialmente FORA da imagem do escritório (metade superior)
            - Metade inferior sobreposta à borda do escritório
            - Proporção original preservada, sem card, sem fundo próprio
        ======================================================== */}
        <div className="fluid-container relative z-20 flex justify-center">
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="group relative block w-full max-w-[560px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-[760px] cursor-pointer transition-all duration-250 ease-out hover:-translate-y-2 hover:drop-shadow-[0_28px_50px_rgba(0,0,0,0.7)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
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
            2. FUNDO — ESCRITÓRIO WAYBIT (100% LARGURA) + CONTEÚDO
            - Margem negativa calculada para subir exatamente até a metade do notebook
            - A borda superior do escritório passa visualmente atrás do notebook
            - Parallax aplicado exclusivamente na imagem de fundo
            - Sem card, sem bordas arredondadas de card, sem faixa preta pesada
        ======================================================== */}
        <div className="relative w-full -mt-[19%] sm:-mt-[18%] md:-mt-[17%] lg:-mt-[16%] pt-[22%] sm:pt-[21%] md:pt-[20%] lg:pt-[19%] pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
          {/* BACKGROUND: Imagem do Escritório Waybit com Parallax */}
          <div
            ref={officeRef}
            className="pointer-events-none absolute inset-0 -top-[12%] -bottom-[12%] w-full h-[124%] overflow-hidden"
          >
            <img
              src={escritorioWaybitImg}
              alt="Cenário do Escritório Waybit"
              className="w-full h-full object-cover object-center pointer-events-none select-none will-change-transform"
              style={{
                transform: prefersReducedMotion
                  ? "scale(1.05)"
                  : `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
                transition: "transform 100ms ease-out",
              }}
              loading="lazy"
            />

            {/* Overlay sutil em gradiente para garantir leitura perfeita mantendo o escritório vivo */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/65 to-slate-950/85" />
          </div>

          {/* ========================================================
              3. CONTEÚDO CENTRALIZADO SOBRE O ESCRITÓRIO
              - TAG -> TÍTULO -> PARÁGRAFO -> BOTÕES -> BENEFÍCIOS
          ======================================================== */}
          <div className="fluid-container relative z-10 mx-auto max-w-4xl text-center text-white">
            {/* TAG */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 sm:px-4 py-1.5 fluid-caption font-semibold text-white/95 backdrop-blur-md mb-4 sm:mb-5 border border-white/20 shadow-sm mx-auto">
              <Sparkles size={14} className="text-[#FFB800]" />
              <span>Demonstração Personalizada de 15 Minutos</span>
            </div>

            {/* TÍTULO */}
            <h2 className="font-display fluid-h2 font-extrabold tracking-tight leading-snug sm:leading-tight max-w-3xl mx-auto text-white drop-shadow-md">
              Pronto para ver o que o{" "}
              <span className="bg-gradient-to-r from-[#00ADEF] via-[#71BE44] to-[#FFB800] bg-clip-text text-transparent font-extrabold">
                Dominus
              </span>{" "}
              pode fazer pelo seu negócio?
            </h2>

            {/* PARÁGRAFO */}
            <p className="mt-4 sm:mt-5 fluid-body-lg text-zinc-200 leading-relaxed max-w-2xl mx-auto drop-shadow-sm font-normal">
              Agende uma apresentação online com um especialista no seu segmento. Mostramos como
              acelerar suas vendas, controlar seu estoque e ter tranquilidade fiscal sem
              compromisso.
            </p>

            {/* BOTÕES (CTAs) */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
              <Button
                type="button"
                onClick={() => {
                  const modal = document.getElementById("fullFunnelModal");
                  modal?.classList.add("show");
                  const scriptId = "full-funnel-form-embed-js";
                  if (!document.getElementById(scriptId)) {
                    const script = document.createElement("script");
                    script.id = scriptId;
                    script.src = "https://links.fullfunnel.app/js/form_embed.js";
                    script.type = "text/javascript";
                    script.async = true;
                    document.body.appendChild(script);
                  }
                }}
                className="abrirAgendarDemonstracao h-11 sm:h-12 px-7 sm:px-9 bg-[#71BE44] hover:bg-[#62a83a] text-white font-bold fluid-btn cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
              >
                Agendar Demonstração
              </Button>

              <a
                href="https://wa.me/5521975812676?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Dominus."
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <Button
                  variant="outline"
                  className="h-11 sm:h-12 px-6 sm:px-7 border-white/20 bg-black/40 hover:bg-black/60 text-white font-semibold cursor-pointer backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 fluid-btn shadow-md"
                >
                  <MessageSquare size={17} className="text-[#71BE44]" />
                  Conversar no WhatsApp
                </Button>
              </a>
            </div>

            {/* BENEFÍCIOS */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 fluid-caption text-zinc-300 font-medium">
              <span className="flex items-center gap-2 drop-shadow-sm">
                <CheckCircle2 size={15} className="text-[#71BE44]" /> Sem compromisso
              </span>
              <span className="flex items-center gap-2 drop-shadow-sm">
                <CheckCircle2 size={15} className="text-[#00ADEF]" /> Implantação orientada
              </span>
              <span className="flex items-center gap-2 drop-shadow-sm">
                <CheckCircle2 size={15} className="text-[#FFB800]" /> Suporte humano incluso
              </span>
            </div>
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
