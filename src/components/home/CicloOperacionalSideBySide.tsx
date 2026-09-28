import { useState } from "react";
import {
  ClipboardCheck,
  FileText,
  BarChart3,
  Boxes,
  Truck,
  CreditCard,
  Check,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface OperationalStep {
  id: string;
  step: string;
  category: string;
  title: string;
  shortDesc: string;
  icon: typeof ClipboardCheck;
  color: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  highlights: string[];
}

const operationalSteps: OperationalStep[] = [
  {
    id: "separacao",
    step: "01",
    category: "Expedição",
    title: "Pedidos & Separação",
    shortDesc: "Conferência ágil de pedidos com leitor de código de barras e expedição blindada contra erros.",
    icon: ClipboardCheck,
    color: "#10B981",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    highlights: [
      "Separação por lote e pedidos prioritários",
      "Conferência via leitor de código de barras",
      "Redução drástica de trocas e devoluções",
    ],
  },
  {
    id: "fiscal",
    step: "02",
    category: "Fiscal",
    title: "Emissão Fiscal 100% Homologada",
    shortDesc: "NF-e, NFC-e e QR Code transmitidos instantaneamente com contingência offline automática.",
    icon: FileText,
    color: "#F59E0B",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    highlights: [
      "Transmissão ultra-rápida na SEFAZ",
      "Contingência automática sem travamento do caixa",
      "Envio mensal automatizado de XML ao contador",
    ],
  },
  {
    id: "bi",
    step: "03",
    category: "Inteligência",
    title: "Gestão e BI em Tempo Real",
    shortDesc: "DRE consolidado, curva ABC de produtos, faturamento e fluxo de caixa ao vivo.",
    icon: BarChart3,
    color: "#0284C7",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    borderColor: "border-sky-200",
    highlights: [
      "Painéis executivos de margem e ticket médio",
      "Curva ABC de produtos e controle de CMV",
      "Relatórios estratégicos para tomada de decisão",
    ],
  },
  {
    id: "integracoes",
    step: "04",
    category: "Conexões",
    title: "Gateway & Marketplaces Integrados",
    shortDesc: "Integrações nativas com Asaas, Repediu, Shipay, iFood, Jotajá e conexões via API.",
    icon: Boxes,
    color: "#10B981",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    highlights: [
      "Sincronização de cardápios e pedidos iFood",
      "Cobranças automáticas via Pix e boleto (Asaas)",
      "Carteiras digitais unificadas no mesmo fluxo",
    ],
  },
  {
    id: "delivery",
    step: "05",
    category: "Logística",
    title: "Delivery & Rastreamento Express",
    shortDesc: "Roteirização inteligente, app do entregador próprio e rastreio com status em tempo real.",
    icon: Truck,
    color: "#F59E0B",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    highlights: [
      "Gestão de frotas e motoboys próprios",
      "Rastreamento de entrega com pin GPS",
      "Cálculo automatizado de taxas por região",
    ],
  },
  {
    id: "pdv",
    step: "06",
    category: "Vendas",
    title: "Frente de Caixa (PDV Ágil)",
    shortDesc: "Checkout em menos de 1,5s por cliente, TEF multiadquirente e operação com ou sem internet.",
    icon: CreditCard,
    color: "#06B6D4",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    highlights: [
      "Atalhos de teclado e interface ergonômica",
      "TEF integrado com pagamento por aproximação",
      "Fechamento cego e conciliação sem divergências",
    ],
  },
];

export function CicloOperacionalSideBySide() {
  const [activeStepId, setActiveStepId] = useState<string>("separacao");
  const activeStep =
    operationalSteps.find((s) => s.id === activeStepId) ?? operationalSteps[0];

  return (
    <section
      id="ciclo-operacional"
      className="fluid-gutter relative w-full overflow-hidden border-b border-[#E2EEF2] bg-[#F4F9FB] py-16 sm:py-24"
    >
      {/* Luzes difusas sutis de ambientação corporativa */}
      <div className="pointer-events-none absolute -left-36 top-1/3 size-[460px] rounded-full bg-cyan-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-1/4 size-[460px] rounded-full bg-sky-100/35 blur-3xl" />

      {/* Grid Principal Dividido: 45% Esquerda | 53% Direita */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-[2%]">
        
        {/* ========================================================
            COLUNA ESQUERDA (45%): IMAGEM EXATA ASSETS/DIAG CICLO.PNG
        ======================================================== */}
        <div className="flex w-full items-center justify-center lg:w-[45%]">
          <div className="relative flex w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] items-center justify-center rounded-3xl bg-white/70 p-4 sm:p-6 shadow-sm border border-[#E2EEF2] backdrop-blur-xs transition-all duration-300 hover:shadow-md">
            <img
              src="/Diag-ciclo.png"
              alt="Diagrama do Ciclo Operacional Dominus"
              className="h-auto w-full object-contain select-none transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>

        {/* ========================================================
            COLUNA DIREITA (53%): TÍTULO, SUBTÍTULO, ABAS E CTA
        ======================================================== */}
        <div className="flex w-full flex-col justify-center lg:w-[53%]">
          {/* Título Principal */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Tudo o que sua empresa precisa para operar sem atritos
          </h2>

          {/* Subtítulo */}
          <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-slate-600">
            Do pedido no balcão à expedição e emissão fiscal, todas as etapas operam em um
            fluxo automatizado contínuo, eliminando erros manuais e retrabalho.
          </p>

          {/* Seletor de Etapas Interativo (Tabs Modernas) */}
          <div className="mt-7 flex flex-wrap gap-2">
            {operationalSteps.map((s) => {
              const isSelected = s.id === activeStepId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStepId(s.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer border",
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs scale-102"
                      : "bg-white text-slate-600 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-5 items-center justify-center rounded-md text-[10px] font-bold",
                      isSelected ? "bg-white/20 text-white" : s.iconBg + " " + s.iconColor,
                    )}
                  >
                    {s.step}
                  </span>
                  <span>{s.title.split(" (")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Card Detalhado da Etapa Ativa */}
          <div className="mt-5 rounded-2xl border border-[#D7E8EE] bg-white/95 p-6 shadow-xs backdrop-blur-xs transition-all duration-300">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-3.5">
              <div
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-xl border",
                  activeStep.iconBg,
                  activeStep.borderColor,
                )}
              >
                <activeStep.icon className={cn("size-5", activeStep.iconColor)} />
              </div>
              <div>
                <span className={cn("text-[11px] font-bold uppercase tracking-wider", activeStep.iconColor)}>
                  Etapa {activeStep.step} &bull; {activeStep.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <p className="mt-3.5 text-sm leading-relaxed text-slate-600">
              {activeStep.shortDesc}
            </p>

            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 border-t border-slate-100 pt-3.5">
              {activeStep.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="size-4 shrink-0 text-brand-green mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão de Ação CTA */}
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Ciclo%20Operacional%20Dominus"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-green px-7 py-3 text-sm font-bold text-white shadow-brand-glow transition-all hover:bg-brand-green/90 hover:scale-[1.02]"
            >
              <span>Falar com Especialista</span>
              <ArrowRight className="size-4" />
            </a>

            <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
              ✓ Atendimento consultivo &bull; Demonstração personalizada sem custo
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
