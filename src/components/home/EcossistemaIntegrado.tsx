import {
  Rocket,
  ArrowRight,
  Check,
  Zap,
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
  colorName: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  arrowColor: string;
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
    colorName: "emerald",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    arrowColor: "#10B981",
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
    colorName: "amber",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    arrowColor: "#F59E0B",
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
    colorName: "cyan",
    iconColor: "text-[#06B6D4]",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-300",
    arrowColor: "#06B6D4",
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
    colorName: "emerald",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    arrowColor: "#10B981",
    popoverPlacement: "bottom",
    isPartnerCluster: true,
  },
  {
    id: 5,
    tag: "05 • Entrega",
    title: "Logística Integrada",
    subtitle: "Despacho com rotas inteligentes e rastreamento com pin GPS.",
    icon: DeliveryScooterPinIcon,
    colorName: "amber",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    arrowColor: "#F59E0B",
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
    colorName: "cyan",
    iconColor: "text-[#06B6D4]",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-300",
    arrowColor: "#06B6D4",
    popoverPlacement: "top-left",
    features: [
      "Checkout em menos de 1.5s por cliente",
      "TEF integrado e Pix dinâmico no balcão",
      "Operação com ou sem conexão de internet",
    ],
  },
];

export function EcossistemaIntegrado() {
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

  return (
    <section
      id="ecossistema"
      className="fluid-gutter relative w-full overflow-hidden border-b border-indigo-100/80 bg-linear-to-b from-[#F7F4FF] via-[#F3F0FF] to-[#F7F4FF] py-20 sm:py-28"
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
          Do pedido no balcão à expedição e emissão fiscal, passe o mouse nos nós orbitais para
          visualizar os detalhes de cada etapa.
        </p>
      </div>

      {/* ========================================================
          DIAGRAMA ORBITAL COMPACTO E MINIMALISTA (DESKTOP)
      ======================================================== */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-4xl">
        <div className="relative hidden items-center justify-center lg:flex h-[560px] w-full">
          {/* ======================================================
              SVG COM ÓRBITA REDUZIDA & SETAS DIRECIONAIS SUTIS
          ====================================================== */}
          <svg
            className="pointer-events-none absolute inset-0 size-full"
            viewBox="0 0 640 560"
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

            {/* Trilha Orbital Compacta Tracejada (Raio = 180px, centro em 320, 280) */}
            <circle
              cx="320"
              cy="280"
              r="180"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-70"
            />

            {/* Arco Seta 1 ➔ 2 (Verde: Top para Top-Right) */}
            <path
              d="M 360 105 A 180 180 0 0 1 455 170"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              markerEnd="url(#orb-arrow-emerald)"
              className="opacity-80"
            />

            {/* Arco Seta 2 ➔ 3 (Amarelo: Top-Right para Bottom-Right) */}
            <path
              d="M 495 230 A 180 180 0 0 1 495 330"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              markerEnd="url(#orb-arrow-amber)"
              className="opacity-80"
            />

            {/* Arco Seta 3 ➔ 4 (Azul: Bottom-Right para Bottom) */}
            <path
              d="M 455 390 A 180 180 0 0 1 360 455"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2"
              markerEnd="url(#orb-arrow-cyan)"
              className="opacity-80"
            />

            {/* Arco Seta 4 ➔ 5 (Verde: Bottom para Bottom-Left) */}
            <path
              d="M 280 455 A 180 180 0 0 1 185 390"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              markerEnd="url(#orb-arrow-emerald)"
              className="opacity-80"
            />

            {/* Arco Seta 5 ➔ 6 (Amarelo: Bottom-Left para Top-Left) */}
            <path
              d="M 145 330 A 180 180 0 0 1 145 230"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              markerEnd="url(#orb-arrow-amber)"
              className="opacity-80"
            />

            {/* Arco Seta 6 ➔ 1 (Azul: Top-Left para Top) */}
            <path
              d="M 185 170 A 180 180 0 0 1 280 105"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2"
              markerEnd="url(#orb-arrow-cyan)"
              className="opacity-80"
            />
          </svg>

          {/* ======================================================
              CENTRAL HUB: NÓ CIRCULAR COM DOMINUS E TEXTO INTERNO
          ====================================================== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
            {/* Trilha do Foguete Orbitante */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="size-[228px] rounded-full border border-indigo-200/40 border-dashed" />
              {/* Rotação Contínua com Foguete */}
              <div className="absolute size-[228px] animate-[spin_20s_linear_infinite]">
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 flex size-6 items-center justify-center rounded-full bg-linear-to-tr from-indigo-600 to-purple-600 text-white shadow-xs"
                  style={{ transform: "rotate(45deg)" }}
                >
                  <Rocket className="size-3" />
                </div>
              </div>
            </div>

            {/* Halo Suave */}
            <div className="absolute -inset-2.5 rounded-full bg-indigo-500/10 blur-lg -z-10" />

            {/* Círculo Central Compacto (rounded-full) */}
            <div className="group relative flex size-44 sm:size-48 flex-col items-center justify-center rounded-full border-3 border-indigo-300/70 bg-white p-4 text-center shadow-[0_0_35px_-5px_rgba(99,102,241,0.2)] transition-all duration-500 hover:scale-105 hover:border-indigo-400">
              {/* Efeito sutil no contorno interno */}
              <div className="pointer-events-none absolute inset-1 rounded-full border border-dashed border-indigo-200/60 animate-[spin_40s_linear_infinite]" />

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
              6 NÓS SATÉLITES COMPACTOS (ÍCONES APENAS POR PADRÃO)
          ====================================================== */}

          {orbitalNodes.map((node) => {
            const Icon = node.icon;
            const isHovered = hoveredNodeId === node.id;

            // Coordenadas calculadas no círculo reduzido (r = 180px em torno de 320, 280)
            // Node 1 (Top): 320, 100
            // Node 2 (Top-Right): 476, 190
            // Node 3 (Bottom-Right): 476, 370
            // Node 4 (Bottom): 320, 460
            // Node 5 (Bottom-Left): 164, 370
            // Node 6 (Top-Left): 164, 190

            const positions = [
              { left: "50%", top: "72px", transform: "translate(-50%, -50%)" }, // 1
              { left: "75%", top: "185px", transform: "translate(-50%, -50%)" }, // 2
              { left: "75%", top: "375px", transform: "translate(-50%, -50%)" }, // 3
              { left: "50%", top: "488px", transform: "translate(-50%, -50%)" }, // 4
              { left: "25%", top: "375px", transform: "translate(-50%, -50%)" }, // 5
              { left: "25%", top: "185px", transform: "translate(-50%, -50%)" }, // 6
            ];

            const pos = positions[node.id - 1];

            return (
              <div
                key={node.id}
                style={{ left: pos.left, top: pos.top, transform: pos.transform }}
                className="absolute z-20"
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                {/* Botão Ícone Compacto Circular */}
                <button
                  type="button"
                  aria-label={node.title}
                  className={cn(
                    "group relative flex size-14 sm:size-15 items-center justify-center rounded-full border-2 bg-white shadow-md transition-all duration-300",
                    node.bgColor,
                    node.borderColor,
                    isHovered
                      ? "scale-115 shadow-xl ring-4 ring-indigo-200/50"
                      : "hover:scale-108 hover:shadow-lg",
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
                    POPOVER / TOOLTIP FLUTUANTE EM HOVER
                ==================================================== */}
                {isHovered && (
                  <div
                    className={cn(
                      "animate-in fade-in-0 zoom-in-95 pointer-events-none absolute z-50 w-72 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-2xl backdrop-blur-md",
                      // Posicionamento inteligente para não encavalar
                      node.popoverPlacement === "top" && "bottom-full mb-3 left-1/2 -translate-x-1/2",
                      node.popoverPlacement === "top-right" && "left-full ml-3 top-1/2 -translate-y-1/2",
                      node.popoverPlacement === "bottom-right" && "left-full ml-3 top-1/2 -translate-y-1/2",
                      node.popoverPlacement === "bottom" && "top-full mt-3 left-1/2 -translate-x-1/2",
                      node.popoverPlacement === "bottom-left" && "right-full mr-3 top-1/2 -translate-y-1/2",
                      node.popoverPlacement === "top-left" && "right-full mr-3 top-1/2 -translate-y-1/2",
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

                    <h4 className="mt-2 text-sm font-bold text-slate-900">{node.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{node.subtitle}</p>

                    {/* Conteúdo Estruturado Específico do Popover */}
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
                            <span className="text-[9px] font-black uppercase">{partner.name}</span>
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

        {/* ========================================================
            MOBILE & TABLET VIEW (< lg)
        ======================================================== */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          {/* Círculo Central */}
          <div className="relative flex size-44 flex-col items-center justify-center rounded-full border-3 border-indigo-300/70 bg-white p-4 text-center shadow-lg">
            <div className="relative z-10 flex items-center justify-center h-10 w-full">
              <img
                src="/Logo-dominus.png"
                alt="Dominus"
                className="max-h-full max-w-[110px] object-contain"
              />
            </div>
            <p className="relative z-10 mt-1 max-w-[120px] text-center text-[7.5px] font-black uppercase tracking-wider text-slate-800 leading-tight">
              SISTEMA DE GESTÃO EMPRESARIAL COMPLETO
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            <Info className="size-3.5" />
            <span>Toque em qualquer nó para ver detalhes</span>
          </div>

          {/* Grade dos 6 Nós no Mobile */}
          <div className="grid w-full gap-3 sm:grid-cols-2">
            {orbitalNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-full border",
                        node.bgColor,
                        node.borderColor,
                      )}
                    >
                      <Icon className={cn("size-5.5", node.iconColor)} />
                    </div>
                    <div>
                      <span className={cn("text-[10px] font-bold uppercase", node.iconColor)}>
                        {node.tag}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{node.subtitle}</p>

                  {node.isPartnerCluster ? (
                    <div className="mt-2.5 grid grid-cols-3 gap-1">
                      {partnerList.map((partner) => (
                        <div
                          key={partner.name}
                          className="flex flex-col items-center justify-center rounded p-1 text-center border border-emerald-100 bg-emerald-50/70 text-emerald-700"
                        >
                          <span className="text-[9px] font-black uppercase">{partner.name}</span>
                          <span className="text-[7.5px] text-emerald-600/80 leading-none">
                            {partner.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-2 border-t border-slate-100 pt-2 text-[11px] text-slate-600 space-y-1">
                      {node.features?.slice(0, 2).map((f) => (
                        <div key={f} className="flex items-center gap-1.5">
                          <Check className="size-3 text-brand-green shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Rodapé da Seção com CTA Rápido */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-200/80 bg-white/95 p-5 shadow-xs backdrop-blur-xs sm:flex-row sm:px-8">
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
