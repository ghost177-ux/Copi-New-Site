import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Send, Sparkles, Tag } from "lucide-react";

interface SpecialistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialSegment?: string;
  initialPlan?: string;
}

export function SpecialistDialog({
  open,
  onOpenChange,
  initialSegment = "Varejo (Loja/Comércio)",
  initialPlan,
}: SpecialistDialogProps) {
  const [name, setName] = useState("");
  const [segment, setSegment] = useState(initialSegment);
  const [phone, setPhone] = useState("");

  // Sync initialSegment when dialog opens or prop changes
  useEffect(() => {
    if (initialSegment) {
      setSegment(initialSegment);
    }
  }, [initialSegment, open]);

  function handleSendWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const phoneInfo = phone ? ` Meu contato é ${phone}.` : "";
    const planInfo = initialPlan ? ` Tenho interesse específico no plano: ${initialPlan}.` : "";
    const text = encodeURIComponent(
      `Olá! Meu nome é ${name || "Cliente"}, atuo no segmento ${segment}.${phoneInfo}${planInfo} Gostaria de falar com um especialista sobre as soluções Waybit.`,
    );
    window.open(`https://wa.me/5521975812676?text=${text}`, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  }

  const directWhatsAppUrl = initialPlan
    ? `https://wa.me/5521975812676?text=${encodeURIComponent(
        `Olá! Gostaria de contratar ou tirar dúvidas sobre o plano ${initialPlan} da Waybit.`,
      )}`
    : "https://wa.me/5521975812676?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Waybit.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-6 sm:p-8">
        <DialogHeader className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary w-fit mb-2">
            <Sparkles size={13} className="text-[#FFB800]" />
            <span>Atendimento Especializado</span>
          </div>
          <DialogTitle className="font-display text-2xl font-bold tracking-tight text-foreground">
            Falar com um Especialista Waybit
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Escolha o canal de sua preferência ou preencha os dados abaixo para iniciar um
            atendimento personalizado.
          </DialogDescription>

          {initialPlan && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <Tag size={13} className="text-emerald-600" />
              <span>
                Plano Selecionado: <strong>{initialPlan}</strong>
              </span>
            </div>
          )}
        </DialogHeader>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors group cursor-pointer"
          >
            <div className="size-10 rounded-lg bg-[#71BE44]/20 text-[#71BE44] flex items-center justify-center shrink-0">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">WhatsApp Direto</p>
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                (21) 97581-2676
              </p>
            </div>
          </a>

          <a
            href="tel:+5521975812676"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 transition-colors group cursor-pointer"
          >
            <div className="size-10 rounded-lg bg-[#00ADEF]/20 text-[#00ADEF] flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Ligação Gratuita</p>
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                (21) 97581-2676
              </p>
            </div>
          </a>
        </div>

        <div className="relative my-4 flex items-center">
          <div className="flex-grow border-t border-border" />
          <span className="shrink-0 px-3 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            ou envie sua mensagem
          </span>
          <div className="flex-grow border-t border-border" />
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label
              htmlFor="specialist-name"
              className="block text-xs font-semibold text-foreground mb-1"
            >
              Seu Nome ou Nome da Empresa
            </label>
            <input
              id="specialist-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: João da Silva / Padaria Central"
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="specialist-segment"
              className="block text-xs font-semibold text-foreground mb-1"
            >
              Ramo / Segmento de Atuação
            </label>
            <select
              id="specialist-segment"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="Varejo (Loja/Comércio)">Varejo (Lojas, Mercados, Comércio Geral)</option>
              <option value="Food (Restaurante/Delivery)">Food (Restaurantes, Bares, Lanchonetes, Delivery)</option>
              <option value="Auto-Center (Oficina/Mecânica)">Auto-Center (Oficinas, Autopeças, Mecânica)</option>
              <option value="Posto de Combustíveis (Xpert)">Posto de Combustíveis (Xpert)</option>
              <option value="Certificado Digital (Certbit)">Certificado Digital (Certbit)</option>
              <option value="Outro Segmento">Outro Segmento</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="specialist-phone"
              className="block text-xs font-semibold text-foreground mb-1"
            >
              Telefone / WhatsApp para Contato
            </label>
            <input
              id="specialist-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(21) 99999-9999"
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 bg-[#71BE44] hover:bg-[#62a83a] text-white font-semibold cursor-pointer shadow-sm flex items-center justify-center gap-2 text-sm mt-2"
          >
            <Send size={15} />
            Iniciar Conversa com Especialista
          </Button>

          <p className="text-[11px] text-center text-muted-foreground">
            Resposta rápida em horário comercial. Seus dados estão 100% protegidos.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
