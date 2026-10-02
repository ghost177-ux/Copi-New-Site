import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import escritorioWaybitImg from "@/assets/Escritorio waybit.png";
import notebookImg from "@/assets/notebook.png";

export function DemonstracaoSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* =========================================================================
          SECTION: DEMONSTRAÇÃO PERSONALIZADA (COMPOSIÇÃO HORIZONTAL PANORÂMICA)
          - Tag no topo fora da imagem do escritório
          - Notebook centralizado em primeiro plano (metade superior fora do escritório, largura ampla)
          - Faixa Panorâmica do Escritório Waybit com background-attachment: fixed (efeito oficial Waybit)
          - Somente Título e Parágrafo sobre a imagem do escritório com padding fluido (clamp)
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
            2. CENÁRIO DO ESCRITÓRIO WAYBIT (BACKGROUND FIXED)
            - background-image: url(...)
            - background-position: center center
            - background-repeat: no-repeat
            - background-size: cover
            - background-attachment: fixed (fallback scroll no mobile)
            - Sem min-height artificial, sem compensações gigantes
        ======================================================== */}
        <div
          className="relative w-full overflow-hidden -mt-10 sm:-mt-12 lg:-mt-14 pt-10 sm:pt-12 lg:pt-14 flex flex-col items-center justify-center bg-scroll sm:bg-fixed bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("${escritorioWaybitImg}")`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "clamp(340px, 38vw, 520px)",
          }}
        >
          {/* OVERLAY PRETO ESTÁTICO (~30% PRETO UNIFORME) */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
            aria-hidden="true"
          />

          {/* ========================================================
              CONTEÚDO: TÍTULO E PARÁGRAFO
              - Centralizado verticalmente na área do escritório
              - Espaçamento vertical fluido e controlado com clamp(24px, 3.5vw, 48px)
              - 24px no mobile, crescendo suavemente até 48px no desktop
          ======================================================== */}
          <div
            className="fluid-container relative z-10 w-full flex flex-col items-center text-center text-white"
            style={{ paddingBlock: "clamp(24px, 3.5vw, 48px)" }}
          >
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
