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
            <span>Demonstração Waybit</span>
          </div>
        </div>

        {/* ========================================================
            1. NOTEBOOK EM PRIMEIRO PLANO (z-30)
            - Centralizado horizontalmente
            - 1440px = 50% da largura do container pai
            - > 1440px: percentual diminui progressivamente (< 50%)
            - < 1440px: cresce de forma contínua e fluida até 100% no mobile
            - Proporção natural preservada (height: auto, object-contain)
        ======================================================== */}
        <div className="relative z-30 w-full flex justify-center demonstracao-notebook-container px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="demonstracao-notebook group relative block cursor-pointer transition-all duration-250 ease-out hover:scale-[1.02] hover:drop-shadow-[0_28px_50px_rgba(0,0,0,0.7)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
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
            2. CENÁRIO DO ESCRITÓRIO WAYBIT (ÁREA DE CONTEÚDO + FUNDO EXPANDIDO PARA CIMA)
            - Camada visual de background e overlay expandem-se para cima atrás do notebook
            - O conteúdo (H2 + parágrafo) permanece no fluxo normal abaixo do notebook
            - min-height fluida controlada para a área de conteúdo
        ======================================================== */}
        <div
          className="relative w-full flex flex-col items-center justify-center"
          style={{
            minHeight: "clamp(340px, 38vw, 520px)",
          }}
        >
          {/* CAMADA 1: BACKGROUND EXPANDIDO PARA TRÁS DO NOTEBOOK */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-scroll sm:bg-fixed bg-center bg-no-repeat bg-cover z-0"
            style={{
              top: "calc(-1 * clamp(80px, 14vw, 200px))",
              backgroundImage: `url("${escritorioWaybitImg}")`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            aria-hidden="true"
          />

          {/* CAMADA 2: OVERLAY PRETO EXPANDIDO (~55% PRETO UNIFORME) */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]"
            style={{
              top: "calc(-1 * clamp(80px, 14vw, 200px))",
              backgroundColor: "rgba(0, 0, 0, 0.55)",
            }}
            aria-hidden="true"
          />

          {/* ========================================================
              CAMADA 3: CONTEÚDO (H2 + PARÁGRAFO)
              - Centralizado verticalmente na área de conteúdo
              - Totalmente livre, abaixo do notebook e no fluxo normal
              - Espaçamento vertical reduzido pela metade: clamp(12px, 1.75vw, 24px)
          ======================================================== */}
          <div
            className="fluid-container relative z-[2] w-full flex flex-col items-center text-center text-white"
            style={{ paddingBlock: "clamp(12px, 1.75vw, 24px)" }}
          >
            {/* TÍTULO */}
            <h2 className="font-display fluid-h2 font-extrabold tracking-tight leading-snug sm:leading-tight w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] mx-auto text-white drop-shadow-md">
              Pronto para ver o que o Dominus pode fazer pelo seu negócio?
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
