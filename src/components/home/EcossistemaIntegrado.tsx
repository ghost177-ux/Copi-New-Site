import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Wifi,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Ícones Customizados / Refinados para cada nó do Ciclo Operacional
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
      {/* Mini QR code / NF Indicator */}
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
      {/* Bars & funnel lines */}
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
      {/* Scooter & Package */}
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="17" cy="18" r="2.5" />
      <path d="M12 18H7.5" />
      <path d="M12 18V9l3 3h2" />
      <path d="M17 12V9" />
      {/* Package Box on rear */}
      <rect x="8" y="9" width="4" height="4" rx="0.5" />
      {/* Mini GPS Tracking Pin */}
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
      {/* POS Terminal */}
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <rect x="8" y="6" width="8" height="4" rx="1" />
      {/* Keypad dots */}
      <circle cx="8.5" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="12" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="13.5" r="0.8" fill="currentColor" />
      <circle cx="8.5" cy="17" r="0.8" fill="currentColor" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="17" r="0.8" fill="currentColor" />
      {/* Contactless waves on side */}
      <path d="M21 7a3 3 0 0 1 0 4" />
      <path d="M22 5a6 6 0 0 1 0 8" />
    </svg>
  );
}

// 6 Parceiros uniformes em monocromático verde claro
const partnerList = [
  { name: "ASAAS", tag: "Pix & Boletos" },
  { name: "repediu", tag: "Cardápio Web" },
  { name: "shipay", tag: "Carteiras Digitais" },
  { name: "iFood", tag: "Delivery Integrado" },
  { name: "JOTAJÁ", tag: "Logística Express" },
  { name: "+ Integrar", tag: "Conexões API", isPlaceholder: true },
];

export function EcossistemaIntegrado() {
  const [activeNode, setActiveNode] = useState<number>(1);

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
          Um fluxo contínuo de ponta a ponta: do pedido no balcão ao fechamento fiscal e conciliação
          financeira, cada etapa alimenta a próxima em tempo real.
        </p>
      </div>

      {/* Diagrama Interativo do Ciclo Operacional */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-6xl">
        {/* ========================================================
            DESKTOP CIRCULAR FLOW LAYOUT (>= lg)
        ======================================================== */}
        <div className="relative hidden items-center justify-center lg:flex min-h-[740px] w-full">
          {/* ======================================================
              CAMADA DE SETAS SVG CONECTANDO OS 6 NÓS SEQUENCIALMENTE
          ====================================================== */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 size-full"
            viewBox="0 0 1152 740"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Marcadores de Ponta de Seta Coloridos */}
              <marker
                id="arrow-cyan"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#06B6D4" />
              </marker>
              <marker
                id="arrow-emerald"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#10B981" />
              </marker>
              <marker
                id="arrow-amber"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#F59E0B" />
              </marker>
            </defs>

            {/* Órbita Guia Tracejada Sutis */}
            <circle
              cx="576"
              cy="370"
              r="290"
              fill="none"
              stroke="#E0E7FF"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-60"
            />

            {/* 1 ➔ 2: Node 1 (Top Green) para Node 2 (Top-Right Yellow) */}
            <path
              d="M 685 85 C 770 100, 830 145, 870 190"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              markerEnd="url(#arrow-emerald)"
              className="transition-all duration-300 opacity-80 hover:opacity-100"
            />

            {/* 2 ➔ 3: Node 2 (Top-Right Yellow) para Node 3 (Bottom-Right Blue) */}
            <path
              d="M 960 270 C 990 340, 990 400, 960 470"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.5"
              markerEnd="url(#arrow-amber)"
              className="transition-all duration-300 opacity-80 hover:opacity-100"
            />

            {/* 3 ➔ 4: Node 3 (Bottom-Right Blue) para Node 4 (Bottom Green) */}
            <path
              d="M 870 550 C 820 600, 755 640, 680 655"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2.5"
              markerEnd="url(#arrow-cyan)"
              className="transition-all duration-300 opacity-80 hover:opacity-100"
            />

            {/* 4 ➔ 5: Node 4 (Bottom Green) para Node 5 (Bottom-Left Yellow) */}
            <path
              d="M 470 655 C 395 640, 330 600, 280 550"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              markerEnd="url(#arrow-emerald)"
              className="transition-all duration-300 opacity-80 hover:opacity-100"
            />

            {/* 5 ➔ 6: Node 5 (Bottom-Left Yellow) para Node 6 (Top-Left Blue) */}
            <path
              d="M 190 470 C 160 400, 160 340, 190 270"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.5"
              markerEnd="url(#arrow-amber)"
              className="transition-all duration-300 opacity-80 hover:opacity-100"
            />

            {/* 6 ➔ 1: Node 6 (Top-Left Blue) para Node 1 (Top Green) */}
            <path
              d="M 280 190 C 320 145, 380 100, 465 85"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2.5"
              markerEnd="url(#arrow-cyan)"
              className="transition-all duration-300 opacity-80 hover:opacity-100"
            />
          </svg>

          {/* ======================================================
              CORE HUB: NÓ CENTRAL COM ROTAÇÃO SUTIL & FOGUETE EM ÓRBITA
          ====================================================== */}
          <div className="relative z-20 flex size-52 sm:size-56 items-center justify-center">
            {/* Anel de Órbita com Foguete Contínuo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Trilha do Foguete */}
              <div className="size-[270px] rounded-full border border-indigo-200/50 border-dashed" />

              {/* Rotação Contínua com Foguete na Extremidade */}
              <div className="absolute size-[270px] animate-[spin_18s_linear_infinite]">
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex size-7 items-center justify-center rounded-full bg-linear-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/40"
                  style={{ transform: "rotate(45deg)" }}
                  title="Foguete em órbita contínua"
                >
                  <Rocket className="size-3.5" />
                </div>
              </div>
            </div>

            {/* Halo Suave */}
            <div className="absolute -inset-3 rounded-full bg-indigo-500/10 blur-xl -z-10" />

            {/* Círculo Central com Rotação Sutil Contínua de Fundo e Logo Estável */}
            <div className="relative flex size-48 sm:size-52 flex-col items-center justify-center rounded-full border-3 border-indigo-300/70 bg-white p-5 text-center shadow-[0_0_40px_-5px_rgba(99,102,241,0.22)] transition-all duration-500 hover:scale-105 hover:border-indigo-400 hover:shadow-[0_0_55px_-5px_rgba(99,102,241,0.3)]">
              {/* Efeito sutil de rotação no contorno interno */}
              <div className="pointer-events-none absolute inset-1.5 rounded-full border border-dashed border-indigo-200/60 animate-[spin_40s_linear_infinite]" />

              {/* Logo Dominus Centralizada */}
              <div className="relative z-10 flex items-center justify-center h-12 w-full px-2">
                <img
                  src="/Logo-dominus.png"
                  alt="Dominus"
                  className="max-h-full max-w-[130px] object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Texto em Caixa Alta Centralizado dentro do Círculo */}
              <p className="relative z-10 mt-1.5 max-w-[135px] text-center text-[8.5px] font-black uppercase tracking-wider text-slate-800 leading-tight">
                SISTEMA DE GESTÃO EMPRESARIAL COMPLETO
              </p>
            </div>
          </div>

          {/* ======================================================
              6 NÓS SATÉLITES REQUISITADOS EM FLUXO CIRCULAR
          ====================================================== */}

          {/* NÓ 1 (Top, Green): Pedidos & Separação */}
          <div
            onMouseEnter={() => setActiveNode(1)}
            className={cn(
              "absolute top-4 left-1/2 -translate-x-1/2 z-10 flex w-68 cursor-pointer items-center gap-3.5 rounded-2xl border bg-white p-4 shadow-xs transition-all duration-300",
              activeNode === 1
                ? "scale-105 shadow-xl border-emerald-400 ring-2 ring-emerald-200/50"
                : "border-slate-200/80 hover:border-emerald-300 hover:shadow-md",
            )}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
              <ClipboardBoxIcon className="size-5.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                01 • Separação
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                Pedidos & Separação
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-tight truncate">
                Conferência ágil e expedição
              </p>
            </div>
          </div>

          {/* NÓ 2 (Top Right, Yellow): Emissão Fiscal */}
          <div
            onMouseEnter={() => setActiveNode(2)}
            className={cn(
              "absolute top-24 right-10 z-10 flex w-68 cursor-pointer items-center gap-3.5 rounded-2xl border bg-white p-4 shadow-xs transition-all duration-300",
              activeNode === 2
                ? "scale-105 shadow-xl border-amber-400 ring-2 ring-amber-200/50"
                : "border-slate-200/80 hover:border-amber-300 hover:shadow-md",
            )}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 border border-amber-200/60">
              <InvoiceQrIcon className="size-5.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                02 • Fiscal
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                Emissão Fiscal
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-tight truncate">
                NF-e, NFC-e e QR Code SEFAZ
              </p>
            </div>
          </div>

          {/* NÓ 3 (Bottom Right, Blue): Gestão e BI */}
          <div
            onMouseEnter={() => setActiveNode(3)}
            className={cn(
              "absolute bottom-28 right-10 z-10 flex w-68 cursor-pointer items-center gap-3.5 rounded-2xl border bg-white p-4 shadow-xs transition-all duration-300",
              activeNode === 3
                ? "scale-105 shadow-xl border-cyan-400 ring-2 ring-cyan-200/50"
                : "border-slate-200/80 hover:border-cyan-300 hover:shadow-md",
            )}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#06B6D4] border border-cyan-200/60">
              <DashboardFunnelIcon className="size-5.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#06B6D4]">
                03 • Inteligência
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                Gestão e BI
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-tight truncate">
                DRE, funis e dashboards
              </p>
            </div>
          </div>

          {/* NÓ 4 (Bottom, Green - Partner Integration): Gateway & Marketplaces */}
          <div
            onMouseEnter={() => setActiveNode(4)}
            className={cn(
              "absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex w-84 cursor-pointer flex-col rounded-2xl border bg-white p-4 shadow-xs transition-all duration-300",
              activeNode === 4
                ? "scale-105 shadow-xl border-emerald-400 ring-2 ring-emerald-200/50"
                : "border-slate-200/80 hover:border-emerald-300 hover:shadow-md",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-emerald-500" />
                <h3 className="text-xs font-bold text-slate-900">
                  Gateway de Pagamentos & Marketplaces
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase text-emerald-600">
                04 • Integrações
              </span>
            </div>

            {/* Cluster de 6 Parceiros em Monocromático Verde Claro Uniforme */}
            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
              {partnerList.map((partner) => (
                <div
                  key={partner.name}
                  className={cn(
                    "flex flex-col items-center justify-center rounded-lg px-2 py-1.5 text-center transition-colors",
                    partner.isPlaceholder
                      ? "border border-dashed border-emerald-200 bg-emerald-50/40 text-emerald-600"
                      : "border border-emerald-100 bg-emerald-50/70 text-emerald-700 hover:bg-emerald-100/70",
                  )}
                >
                  <span className="font-mono text-[10px] font-black tracking-tight uppercase">
                    {partner.name}
                  </span>
                  <span className="text-[8.5px] text-emerald-600/80 leading-tight truncate max-w-full">
                    {partner.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NÓ 5 (Bottom Left, Yellow): Logística Integrada */}
          <div
            onMouseEnter={() => setActiveNode(5)}
            className={cn(
              "absolute bottom-28 left-10 z-10 flex w-68 cursor-pointer items-center gap-3.5 rounded-2xl border bg-white p-4 shadow-xs transition-all duration-300",
              activeNode === 5
                ? "scale-105 shadow-xl border-amber-400 ring-2 ring-amber-200/50"
                : "border-slate-200/80 hover:border-amber-300 hover:shadow-md",
            )}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 border border-amber-200/60">
              <DeliveryScooterPinIcon className="size-5.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                05 • Entrega
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                Logística Integrada
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-tight truncate">
                Despacho e rastreio com pin
              </p>
            </div>
          </div>

          {/* NÓ 6 (Top Left, Blue): Frente de Caixa */}
          <div
            onMouseEnter={() => setActiveNode(6)}
            className={cn(
              "absolute top-24 left-10 z-10 flex w-68 cursor-pointer items-center gap-3.5 rounded-2xl border bg-white p-4 shadow-xs transition-all duration-300",
              activeNode === 6
                ? "scale-105 shadow-xl border-cyan-400 ring-2 ring-cyan-200/50"
                : "border-slate-200/80 hover:border-cyan-300 hover:shadow-md",
            )}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#06B6D4] border border-cyan-200/60">
              <PosTerminalCardIcon className="size-5.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#06B6D4]">
                06 • Vendas
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                Frente de Caixa
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-tight truncate">
                PDV ágil e aproximação
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET VIEW (< lg)
        ======================================================== */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          {/* Círculo Central com Rotação e Foguete no Topo */}
          <div className="relative flex flex-col items-center justify-center text-center">
            <div className="relative flex size-48 sm:size-52 flex-col items-center justify-center rounded-full border-3 border-indigo-300/70 bg-white p-5 shadow-lg">
              <div className="pointer-events-none absolute inset-1.5 rounded-full border border-dashed border-indigo-200/60 animate-[spin_30s_linear_infinite]" />
              <div className="relative z-10 flex items-center justify-center h-11 w-full">
                <img
                  src="/Logo-dominus.png"
                  alt="Dominus"
                  className="max-h-full max-w-[130px] object-contain"
                />
              </div>
              <p className="relative z-10 mt-1 max-w-[130px] text-center text-[8.5px] font-black uppercase tracking-wider text-slate-800 leading-tight">
                SISTEMA DE GESTÃO EMPRESARIAL COMPLETO
              </p>
            </div>
          </div>

          {/* Grade dos 6 Nós no Fluxo Sequencial */}
          <div className="grid w-full gap-3 sm:grid-cols-2">
            {/* 1 */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                <ClipboardBoxIcon className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-600">01</span>
                <h4 className="text-sm font-bold text-slate-900">Pedidos & Separação</h4>
                <p className="text-xs text-slate-500">Conferência ágil e expedição</p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 border border-amber-200/60">
                <InvoiceQrIcon className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-amber-600">02</span>
                <h4 className="text-sm font-bold text-slate-900">Emissão Fiscal</h4>
                <p className="text-xs text-slate-500">NF-e, NFC-e e QR Code</p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#06B6D4] border border-cyan-200/60">
                <DashboardFunnelIcon className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-[#06B6D4]">03</span>
                <h4 className="text-sm font-bold text-slate-900">Gestão e BI</h4>
                <p className="text-xs text-slate-500">DRE, funis e dashboards</p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs sm:col-span-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">
                  04 • Gateway de Pagamentos & Marketplaces
                </h4>
                <span className="text-[10px] font-bold uppercase text-emerald-600">
                  Integrações
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {partnerList.map((partner) => (
                  <div
                    key={partner.name}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg p-1 text-center",
                      partner.isPlaceholder
                        ? "border border-dashed border-emerald-200 bg-emerald-50/40 text-emerald-600"
                        : "border border-emerald-100 bg-emerald-50/70 text-emerald-700",
                    )}
                  >
                    <span className="text-[9.5px] font-black uppercase">{partner.name}</span>
                    <span className="text-[8px] text-emerald-600/80">{partner.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5 */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 border border-amber-200/60">
                <DeliveryScooterPinIcon className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-amber-600">05</span>
                <h4 className="text-sm font-bold text-slate-900">Logística Integrada</h4>
                <p className="text-xs text-slate-500">Despacho e rastreio com pin</p>
              </div>
            </div>

            {/* 6 */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#06B6D4] border border-cyan-200/60">
                <PosTerminalCardIcon className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-[#06B6D4]">06</span>
                <h4 className="text-sm font-bold text-slate-900">Frente de Caixa</h4>
                <p className="text-xs text-slate-500">PDV ágil e aproximação</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé do Ciclo com CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-200/80 bg-white/95 p-5 shadow-xs backdrop-blur-xs sm:flex-row sm:px-8">
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
