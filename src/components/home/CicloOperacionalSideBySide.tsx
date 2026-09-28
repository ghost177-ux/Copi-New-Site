import { useState } from "react";
import { Check, ArrowRight, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Ícones Customizados Refinados para os 6 Nós do Ciclo
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
  stepNumber: string;
  category: string;
  title: string;
  subtitle: string;
  icon: (props: { className?: string }) => JSX.Element;
  colorHex: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  // Coordenadas calculadas no viewBox de 540x540 com raio R=175 e centro (270, 270)
  cx: number;
  cy: number;
  features?: string[];
  isPartnerCluster?: boolean;
}

const orbitalNodes: OrbitalNode[] = [
  {
    id: 1,
    stepNumber: "01",
    category: "Separação",
    title: "Pedidos & Separação",
    subtitle: "Conferência ágil de pedidos e expedição blindada contra erros.",
    icon: ClipboardBoxIcon,
    colorHex: "#10B981",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    cx: 270,
    cy: 95,
    features: [
      "Separação por lote e pedidos prioritários",
      "Conferência via leitor de código de barras",
      "Redução drástica de devoluções e trocas",
    ],
  },
  {
    id: 2,
    stepNumber: "02",
    category: "Fiscal",
    title: "Emissão Fiscal",
    subtitle: "NF-e, NFC-e e QR Code transmitidos em contingência automática.",
    icon: InvoiceQrIcon,
    colorHex: "#F59E0B",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    cx: 422,
    cy: 182,
    features: [
      "Emissão ultrarrápida homologada na SEFAZ",
      "Contingência offline automática sem travamentos",
      "Disponibilização de XML para o contador",
    ],
  },
  {
    id: 3,
    stepNumber: "03",
    category: "Inteligência",
    title: "Gestão e BI",
    subtitle: "DRE consolidado, curva ABC de produtos e gráficos em tempo real.",
    icon: DashboardFunnelIcon,
    colorHex: "#06B6D4",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-300",
    cx: 422,
    cy: 358,
    features: [
      "Painéis executivos com margem e faturamento",
      "Relatórios automáticos de CMV e ticket médio",
      "Decisões orientadas a dados e lucratividade",
    ],
  },
  {
    id: 4,
    stepNumber: "04",
    category: "Integrações",
    title: "Gateway & Marketplaces",
    subtitle: "Conexões nativas com os principais parceiros do ecossistema.",
    icon: PartnerClusterIcon,
    colorHex: "#10B981",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    cx: 270,
    cy: 445,
    isPartnerCluster: true,
  },
  {
    id: 5,
    stepNumber: "05",
    category: "Logística",
    title: "Delivery & Rastreamento",
    subtitle: "Roteirização inteligente, app do entregador e status em tempo real.",
    icon: DeliveryScooterPinIcon,
    colorHex: "#F59E0B",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    cx: 118,
    cy: 358,
    features: [
      "Gestão de frotas e motoboys próprios",
      "Rastreamento de entrega com pin GPS",
      "Cálculo automatizado de taxa de entrega",
    ],
  },
  {
    id: 6,
    stepNumber: "06",
    category: "Vendas",
    title: "Frente de Caixa",
    subtitle: "PDV veloz com atalhos, TEF e pagamento por aproximação.",
    icon: PosTerminalCardIcon,
    colorHex: "#06B6D4",
    iconColor: "text-[#06B6D4]",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-300",
    cx: 118,
    cy: 182,
    features: [
      "Checkout em menos de 1.5s por cliente",
      "TEF integrado e Pix dinâmico no balcão",
      "Operação com ou sem conexão de internet",
    ],
  },
];

export function CicloOperacionalSideBySide() {
  const [activeNodeId, setActiveNodeId] = useState<number>(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

  const selectedNode =
    orbitalNodes.find((n) => n.id === (hoveredNodeId ?? activeNodeId)) ?? orbitalNodes[0];

  return (
    <section
      id="ciclo-operacional"
      className="fluid-gutter relative w-full overflow-hidden border-b border-[#E2EEF2] bg-[#F4F9FB] py-16 sm:py-24"
    >
      {/* Luzes difusas sutis estilo enterprise no tom azul claro */}
      <div className="pointer-events-none absolute -left-32 top-1/3 size-[440px] rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 size-[440px] rounded-full bg-sky-100/30 blur-3xl" />

      {/* Container Principal Side-by-Side: 45% Diagrama | 53% Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-[2%]">
        
        {/* ========================================================
            COLUNA ESQUERDA (45%): DIAGRAMA CIRCULAR HÍBRIDO COM FOGUETE
        ======================================================== */}
        <div className="flex w-full items-center justify-center lg:w-[45%]">
          {/* Palco Orbital com proporção travada e escala responsiva */}
          <div className="relative flex size-[340px] xs:size-[400px] sm:size-[460px] md:size-[500px] lg:size-[520px] shrink-0 items-center justify-center overflow-visible">
            {/* Stage fixo 540x540 escalonado */}
            <div className="relative size-[540px] shrink-0 scale-[0.62] xs:scale-[0.74] sm:scale-[0.85] md:scale-[0.92] lg:scale-[0.96] origin-center transition-transform duration-300">
              
              {/* SVG dos Arcos Conectores Orbitais */}
              <svg
                className="pointer-events-none absolute inset-0 size-full"
                viewBox="0 0 540 540"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="split-arrow-emerald"
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
                    id="split-arrow-amber"
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
                    id="split-arrow-cyan"
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

                {/* Trilha Orbital Compacta Tracejada (R=175, Centro em 270, 270) */}
                <circle
                  cx="270"
                  cy="270"
                  r="175"
                  fill="none"
                  stroke="#D7E8EE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="opacity-75"
                />

                {/* 1 ➔ 2: Top (Green) para Top-Right (Yellow) */}
                <path
                  d="M 312 101 A 175 175 0 0 1 396 148"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  markerEnd="url(#split-arrow-emerald)"
                  className="opacity-80"
                />

                {/* 2 ➔ 3: Top-Right (Yellow) para Bottom-Right (Blue) */}
                <path
                  d="M 439 222 A 175 175 0 0 1 439 318"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  markerEnd="url(#split-arrow-amber)"
                  className="opacity-80"
                />

                {/* 3 ➔ 4: Bottom-Right (Blue) para Bottom (Green) */}
                <path
                  d="M 396 392 A 175 175 0 0 1 312 439"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  markerEnd="url(#split-arrow-cyan)"
                  className="opacity-80"
                />

                {/* 4 ➔ 5: Bottom (Green) para Bottom-Left (Yellow) */}
                <path
                  d="M 228 439 A 175 175 0 0 1 144 392"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  markerEnd="url(#split-arrow-emerald)"
                  className="opacity-80"
                />

                {/* 5 ➔ 6: Bottom-Left (Yellow) para Top-Left (Blue) */}
                <path
                  d="M 101 318 A 175 175 0 0 1 101 222"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  markerEnd="url(#split-arrow-amber)"
                  className="opacity-80"
                />

                {/* 6 ➔ 1: Top-Left (Blue) para Top (Green) */}
                <path
                  d="M 144 148 A 175 175 0 0 1 228 101"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  markerEnd="url(#split-arrow-cyan)"
                  className="opacity-80"
                />
              </svg>

              {/* ======================================================
                  NÚCLEO CENTRAL HÍBRIDO: IMAGEM DIAG CICLO + ANIMAÇÃO FOGUETE
              ====================================================== */}
              <div className="absolute top-[270px] left-[270px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
                {/* Hub Circular com Imagem Base */}
                <div className="group relative flex size-44 sm:size-48 items-center justify-center rounded-full border-2 border-slate-300/80 bg-white shadow-[0_4px_30px_-5px_rgba(59,188,236,0.18)] transition-all duration-500 overflow-hidden">
                  
                  {/* Imagem Estática Base (assets/Diag ciclo.png) focada no Relógio Central */}
                  <img
                    src="/Diag-ciclo.png"
                    alt="Ciclo Operacional"
                    className="absolute size-full object-cover scale-[2.7] pointer-events-none select-none opacity-95 transition-transform duration-700 group-hover:scale-[2.85]"
                  />

                  {/* Sutil overlay translúcido para integrar ao tema */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-b from-white/10 to-sky-500/5 mix-blend-multiply" />

                  {/* ====================================================
                      ANIMAÇÃO ORBITAL DO FOGUETE COM TRILHA PONTILHADA
                  ==================================================== */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    
                    {/* SVG com Trilha Dotted/Solid ao redor dos ponteiros do relógio */}
                    <svg
                      className="absolute size-[140px]"
                      viewBox="0 0 140 140"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Trilha Pontilhada (Lado Esquerdo, idêntica ao design de referência) */}
                      <path
                        d="M 70 15 A 55 55 0 0 0 70 125"
                        stroke="#5B5B5B"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="4 8"
                        className="opacity-90"
                      />

                      {/* Trilha Sólida (Lado Direito) */}
                      <path
                        d="M 70 125 A 55 55 0 0 0 70 15"
                        stroke="#5B5B5B"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="opacity-90"
                      />
                    </svg>

                    {/* Container Giratório do Foguete (Giro Suave Contínuo) */}
                    <div className="absolute size-[110px] animate-[spin_10s_linear_infinite]">
                      {/* Foguete Estilizado idêntico ao modelo da referência */}
                      <div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center transition-transform"
                        style={{ transform: "rotate(-45deg)" }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="drop-shadow-xs"
                        >
                          {/* Trilha de Propulsão / Fumaça (3 linhas de exaustão) */}
                          <line
                            x1="3"
                            y1="17"
                            x2="7"
                            y2="17"
                            stroke="#5B5B5B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <line
                            x1="1"
                            y1="19.5"
                            x2="6"
                            y2="19.5"
                            stroke="#5B5B5B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <line
                            x1="4"
                            y1="22"
                            x2="8"
                            y2="22"
                            stroke="#5B5B5B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />

                          {/* Corpo do Foguete Cinza Escuro com Detalhes */}
                          <path
                            d="M 7 17 C 7 14 11 11 15 8 C 19 5 21 3 21 3 C 21 3 19 5 16 9 C 13 13 10 17 7 17 Z"
                            fill="#5B5B5B"
                          />
                          {/* Bico e Fuselagem Curva */}
                          <path
                            d="M 21 3 C 15 5 9 10 7 17 C 8 18 10 19 11 19 C 18 17 23 11 21 3 Z"
                            fill="#5B5B5B"
                            stroke="#374151"
                            strokeWidth="0.8"
                          />
                          {/* Janela Circular Branca */}
                          <circle cx="14" cy="10" r="2.2" fill="#FFFFFF" />
                          <circle cx="14" cy="10" r="1.2" fill="#5B5B5B" />

                          {/* Aletas Traseiras */}
                          <path
                            d="M 7 14 L 4 15 L 6 18 Z"
                            fill="#4B5563"
                          />
                          <path
                            d="M 14 21 L 15 24 L 18 22 Z"
                            fill="#4B5563"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ======================================================
                  6 NÓS SATÉLITES INTERATIVOS (SEM NÚMEROS DE BADGE)
              ====================================================== */}
              {orbitalNodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode.id === node.id;
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
                    }}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onClick={() => setActiveNodeId(node.id)}
                  >
                    {/* Botão Ícone Circular Pastel com Transição Suave */}
                    <button
                      type="button"
                      aria-label={node.title}
                      className={cn(
                        "group relative flex size-14 sm:size-15 items-center justify-center rounded-full border-2 bg-white shadow-md transition-all duration-300 cursor-pointer",
                        node.bgColor,
                        node.borderColor,
                        isSelected
                          ? "scale-115 shadow-xl ring-4 ring-sky-200/80"
                          : "hover:scale-110 hover:shadow-lg",
                      )}
                    >
                      <Icon
                        className={cn(
                          "size-6 transition-transform group-hover:scale-110",
                          node.iconColor,
                        )}
                      />
                    </button>

                    {/* Tooltip Estável Diretamente Abaixo do Nó */}
                    {isHovered && (
                      <div className="animate-in fade-in-0 zoom-in-95 pointer-events-none absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50 w-64 rounded-xl border border-slate-200 bg-white/98 p-3 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                          <span
                            className={cn(
                              "text-[10px] font-bold uppercase tracking-wider",
                              node.iconColor,
                            )}
                          >
                            {node.category}
                          </span>
                          <span
                            className="size-2 rounded-full"
                            style={{ backgroundColor: node.colorHex }}
                          />
                        </div>
                        <h4 className="mt-1.5 text-xs font-bold text-slate-900 leading-tight">
                          {node.title}
                        </h4>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                          {node.subtitle}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            COLUNA DIREITA (53%): TÍTULO, DESCRIÇÃO E DETALHES SINCRONIZADOS
        ======================================================== */}
        <div className="flex w-full flex-col justify-center lg:w-[53%]">
          
          {/* Badge de Destaque */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800 shadow-2xs">
              <Clock className="size-3.5 text-sky-600" />
              <span>FLUXO AUTOMATIZADO 360°</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
              <Sparkles className="size-3 text-amber-500" />
              <span>Tempo Real</span>
            </span>
          </div>

          {/* Título Principal */}
          <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Tudo o que sua empresa precisa para operar sem atritos
          </h2>

          {/* Subtítulo */}
          <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-slate-600">
            Do pedido no balcão à expedição e emissão fiscal, todas as etapas operam em um
            ecossistema inteligente e sincronizado. Selecione ou passe o mouse nos nós ao lado para
            explorar a dinâmica do fluxo.
          </p>

          {/* Card Dinâmico Sincronizado com o Nó Ativo */}
          <div className="mt-6 rounded-2xl border border-[#D7E8EE] bg-white/95 p-6 shadow-sm backdrop-blur-xs transition-all duration-300">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-xl border transition-all",
                    selectedNode.bgColor,
                    selectedNode.borderColor,
                  )}
                >
                  <selectedNode.icon className={cn("size-5", selectedNode.iconColor)} />
                </div>
                <div>
                  <span
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider",
                      selectedNode.iconColor,
                    )}
                  >
                    Etapa {selectedNode.stepNumber} • {selectedNode.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {selectedNode.title}
                  </h3>
                </div>
              </div>

              {/* Botões Rápidos de Etapa (1 a 6) */}
              <div className="flex items-center gap-1">
                {orbitalNodes.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => setActiveNodeId(n.id)}
                    aria-label={`Ver etapa ${n.id}`}
                    className={cn(
                      "size-7 rounded-full text-xs font-bold transition-all cursor-pointer",
                      selectedNode.id === n.id
                        ? "bg-slate-900 text-white shadow-xs scale-105"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200",
                    )}
                  >
                    {n.id}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-3.5 text-sm leading-relaxed text-slate-600">
              {selectedNode.subtitle}
            </p>

            {/* Conteúdo Específico de Cada Etapa */}
            {selectedNode.isPartnerCluster ? (
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3.5">
                {partnerList.map((partner) => (
                  <div
                    key={partner.name}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg p-2 text-center transition-all hover:scale-102",
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
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 border-t border-slate-100 pt-3.5 text-xs text-slate-600">
                {selectedNode.features?.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check className="size-4 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Botão de Ação CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
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
              ✓ Implantação guiada &bull; Treinamento de equipe &bull; Sem taxa oculta
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
