import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface FullFunnelBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FullFunnelBookingModal({
  open,
  onOpenChange,
}: FullFunnelBookingModalProps) {
  // Carrega o script de integração do Full Funnel de forma controlada sem duplicatas
  React.useEffect(() => {
    if (!open) return;

    const scriptId = "fullfunnel-form-embed-js";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://links.fullfunnel.app/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Overlay preto com aproximadamente 60% de opacidade */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Modal centralizado na tela, fundo branco, bordas arredondadas de ~8px, largura 95% limitada a 800px no desktop, altura ajustada com scroll vertical */}
        <DialogPrimitive.Content
          aria-describedby="booking-modal-description"
          className="fixed left-1/2 top-1/2 z-50 flex flex-col w-[95vw] max-w-[800px] h-[88vh] sm:h-[82vh] md:h-[75vh] max-h-[92vh] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white p-0 shadow-2xl overflow-hidden focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <DialogPrimitive.Title className="sr-only">
            Agendar Demonstração Dominus Food
          </DialogPrimitive.Title>
          <DialogPrimitive.Description id="booking-modal-description" className="sr-only">
            Calendário oficial de agendamento de demonstração da plataforma Dominus Food.
          </DialogPrimitive.Description>

          {/* Botão de fechar (X) fixo no canto superior direito do modal, sempre visível sobre o conteúdo */}
          <DialogPrimitive.Close
            aria-label="Fechar modal"
            className="absolute right-3 top-3 z-30 flex size-9 items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md transition-all hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 border border-zinc-200/80 cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>

          {/* Contêiner interno rolável verticalmente permitindo percorrer todo o calendário */}
          <div className="relative w-full h-full flex-1 overflow-y-auto overscroll-contain bg-white rounded-[8px]">
            <iframe
              src="https://links.fullfunnel.app/widget/booking/LE6EdU7qlKZEKo7LPCT1"
              id="fullfunnel-booking-iframe"
              title="Calendário de Agendamento — Dominus Food"
              className="w-full border-0 block"
              style={{ width: "100%", minHeight: "750px" }}
              scrolling="auto"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
