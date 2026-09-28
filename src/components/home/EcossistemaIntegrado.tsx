import {
  Rocket,
  Check,
  Zap,
  ArrowRight,
  Info,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Ícones Customizados Refinados para cada Nó
function ClipboardBoxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 12 2 2 4-4" />
      <path d="M9 17h6" />
    </svg>
  );
}

function InvoiceQrIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <rect x="7" y="12" width="3" height="3" fill="currentColor" />
      <rect x="14" y="12" width="3" height="3" fill="currentColor" />
      <rect x="7" y="17" width="3" height="3" fill="currentColor" />
      <line x1="14" y1="18" x2="17" y2="18" />
      <line x1="17" y1="15" x2="17" y2="18" />
    </svg>
  );
}

function DashboardFunnelIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="6" y1="13" x2="6" y2="10" />
      <line x1="10" y1="13" x2="10" y2="8" />
      <line x1="14" y1="13" x2="14" y2="6" />
      <path d="M17 7l-3 2-2-1-3 3" />
    </svg>
  );
}

function DeliveryScooterPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="17" cy="18" r="2.5" />
      <path d="M12 18H7.5" />
      <path d="M12 18V9l3 3h2" />
      <path d="M17 12V9" />
      <rect x="8" y="9" width="4" height="4" rx="0.5" />
      <circle cx="19" cy="5" r="2" />
      <path d="M19 7v2" />
    </svg>
  );
}

function PosTerminalCardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <rect x="8" y="6" width="8" height="4" rx="1" />
      <circle cx="8.5" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="12" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="8.5" cy="17" r="0.8" fill="currentColor" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="17" r="0.8" fill="currentColor" />
      <path d="M21 7a3 3 0 0 1 0 4" />
      <path d="M22 5a6 6 0 0 1 0 8" />
    </svg>
  );
}

function PartnerClusterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M10 7h4" />
      <path d="M7 10v4" />
      <path d="M17 10v4" />
      <path d="M10 17h4" />
    </svg>
  );
}

// 6 Parceiros para o nó 04
const partnerList = [
  { name: "ASAAS", tag: "Pix & Boletos" },
  { name: "repediu", tag: "Cardápio Web" },
  { name: "shipay", tag: "Carteiras Digitais" },
  { name: "iFood", tag: "Delivery Integrado" },
  { name: "JOTAJÁ", tag: "Logística Express" },
  { name: "+ Integrar", tag: "Conexões API", isPlaceholder: true },
];

interface OrbitalNode {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  icon: typeof ClipboardBoxIcon;
  colorHex: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  // Coordenadas calculadas no viewBox de 580x580 com raio R=190 e centro (290, 290)
  cx: number;
  cy: number;
  popoverPlacement: "top" | "top-right" | "bottom-right" | "bottom" | "bottom-left" | "top-left";
  features?: string[];
  isPartnerCluster?: boolean;
}

const orbitalNodes: OrbitalNode[] = [
  {
    id: 1,
    tag: "01 • Separação",
    title: "Pedidos & Separação",
    subtitle: "Conferência ágil de pedidos e expedição blindada contra erros.",
    icon: ClipboardBoxIcon,
    colorHex: "#10B981",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    cx: 290,
    cy: 100,
    popoverPlacement: "top",
    features: [
      "Separação por lote e pedidos prioritários",
      "Conferência via leitor de código de barras",
      "Impressão automática de etiquetas de despacho",
    ],
  },
  {
    id: 2,
    tag: "02 • Fiscal",
    title: "Emissão Fiscal",
    subtitle: "NF-e, NFC-e e QR Code transmitidos em contingência automática.",
    icon: InvoiceQrIcon,
    colorHex: "#F59E0B",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    cx: 455,
    cy: 195,
    popoverPlacement: "top-right",
    features: [
      "Emissão ultrarrápida homologada na SEFAZ",
      "Contingência offline automática sem travamentos",
      "Disponibilização de XML para o contador",
    ],
  },
  {
    id: 3,
    tag: "03 • Inteligência",
    title: "Gestão e BI",
    subtitle: "DRE consolidado, curva ABC de produtos e gráficos em tempo real.",
    icon: DashboardFunnelIcon,
    colorHex: "#06B6D4",
    iconColor: "text-[#06B6D4]",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-300",
    cx: 455,
    cy: 385,
    popoverPlacement: "bottom-right",
    features: [
      "Demonstrativo de Resultado (DRE) em tempo real",
      "Curva ABC e giro de estoque automatizado",
      "Ticket médio e lucratividade por canal",
    ],
  },
  {
    id: 4,
    tag: "04 • Integrações",
    title: "Gateway de Pagamentos & Marketplaces",
    subtitle: "Conexões nativas com os principais parceiros do mercado.",
    icon: PartnerClusterIcon,
    colorHex: "#10B981",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    cx: 290,
    cy: 480,
    popoverPlacement: "bottom",
    isPartnerCluster: true,
  },
  {
    id: 5,
    tag: "05 • Entrega",
    title: "Logística Integrada",
    subtitle: "Despacho com rotas inteligentes e rastreamento com pin GPS.",
    icon: DeliveryScooterPinIcon,
    colorHex: "#F59E0B",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    cx: 125,
    cy: 385,
    popoverPlacement: "bottom-left",
    features: [
      "Gestão de frotas e motoboys próprios",
      "Rastreamento de entrega com pin GPS",
      "Cálculo automatizado de taxa de entrega",
    ],
  },
  {
    id: 6,
    tag: "06 • Vendas",
    title: "Frente de Caixa",
    subtitle: "PDV veloz com atalhos, TEF e pagamento por aproximação.",
    icon: PosTerminalCardIcon,
    colorHex: "#06B6D4",
    iconColor: "text-[#06B6D4]",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-300",
    cx: 125,
    cy: 195,
    popoverPlacement: "top-left",
    features: [
      "Checkout em menos de 1.5s por cliente",
      "TEF integrado e Pix dinâmico no balcão",
      "Operação com ou sem conexão de internet",
    ],
  },
];

export function EcossistemaIntegrado() {
  const [activeNodeId, setActiveNodeId] = useState<number>(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

  const activeNode =
    orbitalNodes.find((n) => n.id === (hoveredNodeId ?? activeNodeId)) ?? orbitalNodes[0];

  return (
    <section
      id="ecossistema"
      className="fluid-gutter relative w-full overflow-hidden border-b border-indigo-100/80 bg-linear-to-b from-[#F7F4FF] via-[#F3F0FF] to-[#F7F4FF] py-16 sm:py-24"
    >
      {/* Luzes difusas sutis estilo enterprise */}
      <div className="pointer-events-none absolute -left-28 top-1/4 size-[420px] rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-1/4 size-[420px] rounded-full bg-indigo-200/40 blur-3xl" />

      {/* Header Centralizado */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge 'Ciclo Operacional Dominus' */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-xs">
          <span className="flex size-2 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-950">
            Ciclo Operacional Dominus
          </span>
        </div>

        {/* Título Principal */}
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
          Tudo o que sua empresa precisa para operar sem atritos
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Do pedido no balcão à expedição e emissão fiscal, passe o mouse ou toque nos nós orbitais
          para visualizar os detalhes de cada etapa.
        </p>
      </div>

      {/* ========================================================
          PALCO ORBITAL RESPONSIVO (Não quebra em mobile nem tablet)
      ======================================================== */}
      <div className="relative z-10 mx-auto mt-8 flex flex-col items-center justify-center w-full max-w-5xl">
        {/* Container Escalonável proporcionalmente que preserva a órbita exata em qualquer viewport */}
        <div className="relative flex items-center justify-center h-[340px] xs:h-[400px] sm:h-[460px] md:h-[540px] lg:h-[580px] w-full overflow-visible">
          {/* Estágio com Coordenadas 580x580 Fixas e Escala Dinâmica por Breakpoint */}
          <div className="relative size-[580px] shrink-0 scale-[0.58] xs:scale-[0.68] sm:scale-[0.78] md:scale-[0.92] lg:scale-100 origin-center transition-transform duration-300">
            {/* SVG com Órbita Exata R=190 e Arcos Conectores Alinhados às Posições */}
            <svg
              className="pointer-events-none absolute inset-0 size-full"
              viewBox="0 0 580 580"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="orb-arrow-emerald"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="#10B981" />
                </marker>
                <marker
                  id="orb-arrow-amber"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="#F59E0B" />
                </marker>
                <marker
                  id="orb-arrow-cyan"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="#06B6D4" />
                </marker>
              </defs>

              {/* Trilha Orbital Compacta Tracejada (R=190, Centro em 290, 290) */}
              <circle
                cx="290"
                cy="290"
                r="190"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-70"
              />

              {/* 1 ➔ 2: Top (Green) para Top-Right (Yellow) */}
              <path
                d="M 336 106 A 190 190 0 0 1 427 158"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                markerEnd="url(#orb-arrow-emerald)"
                className="opacity-80"
              />

              {/* 2 ➔ 3: Top-Right (Yellow) para Bottom-Right (Blue) */}
              <path
                d="M 473 238 A 190 190 0 0 1 473 342"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                markerEnd="url(#orb-arrow-amber)"
                className="opacity-80"
              />

              {/* 3 ➔ 4: Bottom-Right (Blue) para Bottom (Green) */}
              <path
                d="M 427 422 A 190 190 0 0 1 336 474"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2.5"
                markerEnd="url(#orb-arrow-cyan)"
                className="opacity-80"
              />

              {/* 4 ➔ 5: Bottom (Green) para Bottom-Left (Yellow) */}
              <path
                d="M 244 474 A 190 190 0 0 1 153 422"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                markerEnd="url(#orb-arrow-emerald)"
                className="opacity-80"
              />

              {/* 5 ➔ 6: Bottom-Left (Yellow) para Top-Left (Blue) */}
              <path
                d="M 107 342 A 190 190 0 0 1 107 238"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                markerEnd="url(#orb-arrow-amber)"
                className="opacity-80"
              />

              {/* 6 ➔ 1: Top-Left (Blue) para Top (Green) */}
              <path
                d="M 153 158 A 190 190 0 0 1 244 106"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2.5"
                markerEnd="url(#orb-arrow-cyan)"
                className="opacity-80"
              />
            </svg>

            {/* ======================================================
                CORE HUB: NÓ CIRCULAR COM DOMINUS E TEXTO INTERNO
            ====================================================== */}
            <div className="absolute top-[290px] left-[290px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
              {/* Trilha do Foguete Orbitante */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="size-[240px] rounded-full border border-indigo-200/50 border-dashed" />
                {/* Rotação Contínua com Foguete */}
                <div className="absolute size-[240px] animate-[spin_18s_linear_infinite]">
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex size-6.5 items-center justify-center rounded-full bg-linear-to-tr from-indigo-600 to-purple-600 text-white shadow-xs"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <Rocket className="size-3.5" />
                  </div>
                </div>
              </div>

              {/* Halo Suave */}
              <div className="absolute -inset-3 rounded-full bg-indigo-500/10 blur-xl -z-10" />

              {/* Círculo Central Compacto (rounded-full) */}
              <div className="group relative flex size-44 sm:size-48 flex-col items-center justify-center rounded-full border-3 border-indigo-300/70 bg-white p-4 text-center shadow-[0_0_35px_-5px_rgba(99,102,241,0.22)] transition-all duration-500 hover:scale-105 hover:border-indigo-400">
                {/* Efeito sutil no contorno interno */}
                <div className="pointer-events-none absolute inset-1.5 rounded-full border border-dashed border-indigo-200/60 animate-[spin_40s_linear_infinite]" />

                {/* Logo Dominus perfeitamente centralizada */}
                <div className="relative z-10 flex items-center justify-center h-10 w-full px-2">
                  <img
                    src="/Logo-dominus.png"
                    alt="Dominus"
                    className="max-h-full max-w-[120px] object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Texto em Caixa Alta dentro do círculo */}
                <p className="relative z-10 mt-1 max-w-[125px] text-center text-[7.5px] sm:text-[8px] font-black uppercase tracking-wider text-slate-800 leading-tight">
                  SISTEMA DE GESTÃO EMPRESARIAL COMPLETO
                </p>
              </div>
            </div>

            {/* ======================================================
                6 NÓS SATÉLITES COMPACTOS RIGOROSAMENTE NA ÓRBITA R=190
            ====================================================== */}
            {orbitalNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = (hoveredNodeId ?? activeNodeId) === node.id;
              const isHovered = hoveredNodeId === node.id;

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.cx}px`,
                    top: `${node.cy}px`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  onMouseEnter={() => {
                    setHoveredNodeId(node.id);
                    setActiveNodeId(node.id);
                  }}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setActiveNodeId(node.id)}
                >
                  {/* Botão Ícone Compacto Circular */}
                  <button
                    type="button"
                    aria-label={node.title}
                    className={cn(
                      "group relative flex size-14 sm:size-15 items-center justify-center rounded-full border-2 bg-white shadow-md transition-all duration-300 cursor-pointer",
                      node.bgColor,
                      node.borderColor,
                      isSelected
                        ? "scale-115 shadow-xl ring-4 ring-indigo-200/60"
                        : "hover:scale-110 hover:shadow-lg",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-6 transition-transform group-hover:scale-110",
                        node.iconColor,
                      )}
                    />

                    {/* Número indicador discreto no cantinho */}
                    <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-700 shadow-xs border border-slate-200">
                      {node.id}
                    </span>
                  </button>

                  {/* ====================================================
                      POPOVER FLUTUANTE EM HOVER (DESKTOP)
                      Totalmente absoluto sem deslocar nenhum elemento!
                  ==================================================== */}
                  {isHovered && (
                    <div
                      className={cn(
                        "animate-in fade-in-0 zoom-in-95 pointer-events-none absolute z-50 w-72 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-2xl backdrop-blur-md hidden lg:block",
                        node.popoverPlacement === "top" &&
                          "bottom-full mb-3 left-1/2 -translate-x-1/2",
                        node.popoverPlacement === "top-right" &&
                          "left-full ml-4 top-1/2 -translate-y-1/2",
                        node.popoverPlacement === "bottom-right" &&
                          "left-full ml-4 top-1/2 -translate-y-1/2",
                        node.popoverPlacement === "bottom" &&
                          "top-full mt-3 left-1/2 -translate-x-1/2",
                        node.popoverPlacement === "bottom-left" &&
                          "right-full mr-4 top-1/2 -translate-y-1/2",
                        node.popoverPlacement === "top-left" &&
                          "right-full mr-4 top-1/2 -translate-y-1/2",
                      )}
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-wider",
                            node.iconColor,
                          )}
                        >
                          {node.tag}
                        </span>
                        <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-500">
                          Etapa 0{node.id}
                        </span>
                      </div>

                      <h4 className="mt-2 text-sm font-bold text-slate-900 leading-tight">
                        {node.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {node.subtitle}
                      </p>

                      {node.isPartnerCluster ? (
                        <div className="mt-3 grid grid-cols-3 gap-1 border-t border-slate-100 pt-2.5">
                          {partnerList.map((partner) => (
                            <div
                              key={partner.name}
                              className={cn(
                                "flex flex-col items-center justify-center rounded p-1 text-center",
                                partner.isPlaceholder
                                  ? "border border-dashed border-emerald-200 bg-emerald-50/40 text-emerald-600"
                                  : "border border-emerald-100 bg-emerald-50/70 text-emerald-700",
                              )}
                            >
                              <span className="text-[9px] font-black uppercase">
                                {partner.name}
                              </span>
                              <span className="text-[7.5px] text-emerald-600/80 leading-none">
                                {partner.tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-2.5 text-xs text-slate-600">
                          {node.features?.map((feat) => (
                            <li key={feat} className="flex items-start gap-1.5 text-[11px]">
                              <Check className="size-3 text-brand-green shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            CARD DE DETALHES INTERATIVO SINCRONIZADO (MOBILE / TABLET / FOCO)
            Em telas pequenas, exibe com clareza o nó selecionado sem lista bagunçada
        ======================================================== */}
        <div className="mt-4 w-full max-w-xl rounded-2xl border border-indigo-100 bg-white/95 p-5 shadow-sm backdrop-blur-xs transition-all duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl border",
                  activeNode.bgColor,
                  activeNode.borderColor,
                )}
              >
                <activeNode.icon className={cn("size-5", activeNode.iconColor)} />
              </div>
              <div>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    activeNode.iconColor,
                  )}
                >
                  {activeNode.tag}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-tight">
                  {activeNode.title}
                </h4>
              </div>
            </div>

            {/* Controles de Navegação entre Nós (1 a 6) */}
            <div className="flex items-center gap-1">
              {orbitalNodes.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setActiveNodeId(n.id)}
                  aria-label={`Ver etapa ${n.id}`}
                  className={cn(
                    "size-6 rounded-full text-[10px] font-bold transition-all",
                    activeNode.id === n.id
                      ? "bg-slate-900 text-white shadow-xs scale-110"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200",
                  )}
                >
                  {n.id}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
            {activeNode.subtitle}
          </p>

          {/* Conteúdo Específico */}
          {activeNode.isPartnerCluster ? (
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
              {partnerList.map((partner) => (
                <div
                  key={partner.name}
                  className={cn(
                    "flex flex-col items-center justify-center rounded-lg p-2 text-center",
                    partner.isPlaceholder
                      ? "border border-dashed border-emerald-200 bg-emerald-50/40 text-emerald-600"
                      : "border border-emerald-100 bg-emerald-50/70 text-emerald-700",
                  )}
                >
                  <span className="text-[10px] font-black uppercase">{partner.name}</span>
                  <span className="text-[8.5px] text-emerald-600/80 leading-none">
                    {partner.tag}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
              {activeNode.features?.map((feat) => (
                <li key={feat} className="flex items-start gap-1.5 text-[11px] sm:text-xs">
                  <Check className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-indigo-600 font-semibold">
              <Info className="size-3" />
              <span>Toque ou passe o mouse nos nós para navegar</span>
            </span>
            <span className="font-mono text-slate-400">
              Etapa 0{activeNode.id} / 06
            </span>
          </div>
        </div>

        {/* Rodapé da Seção com CTA Rápido */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-200/80 bg-white/95 p-5 shadow-xs backdrop-blur-xs sm:flex-row sm:px-8 w-full max-w-4xl">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Pronto para colocar o Ciclo Operacional Dominus na sua empresa?
            </h4>
            <p className="mt-0.5 text-xs text-slate-500">
              Converse com quem entende a rotina do seu negócio e agende uma demonstração.
            </p>
          </div>
          <a
            href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Ciclo%20Operacional%20Dominus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-green px-6 py-2.5 text-xs font-bold text-white shadow-brand-glow transition-all hover:bg-brand-green/90 hover:scale-[1.02]"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
