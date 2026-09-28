import {
  Zap,
  Receipt,
  Truck,
  BarChart3,
  Smartphone,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SatelliteNode {
  id: string;
  title: string;
  shortDesc: string;
  icon: typeof Zap;
  iconColor: string;
  iconBg: string;
  activeColor: string;
  borderHover: string;
  side: "left" | "right";
}

const satelliteNodes: SatelliteNode[] = [
  // Coluna Esquerda
  {
    id: "pdv",
    title: "Frente de Caixa",
    shortDesc: "PDV rápido e sem filas",
    icon: Zap,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 border border-amber-200/60",
    activeColor: "#F59E0B",
    borderHover: "hover:border-amber-300",
    side: "left",
  },
  {
    id: "fiscal",
    title: "Fiscal",
    shortDesc: "Emissão 100% automática",
    icon: Receipt,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border border-emerald-200/60",
    activeColor: "#10B981",
    borderHover: "hover:border-emerald-300",
    side: "left",
  },
  {
    id: "estoque",
    title: "Estoque",
    shortDesc: "Inventário e reposição",
    icon: Truck,
    iconColor: "text-[#3BBCEC]",
    iconBg: "bg-cyan-50 border border-cyan-200/60",
    activeColor: "#3BBCEC",
    borderHover: "hover:border-cyan-300",
    side: "left",
  },

  // Coluna Direita
  {
    id: "financeiro",
    title: "Financeiro",
    shortDesc: "DRE e fluxo de caixa",
    icon: BarChart3,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 border border-purple-200/60",
    activeColor: "#8B5CF6",
    borderHover: "hover:border-purple-300",
    side: "right",
  },
  {
    id: "mobile",
    title: "Mobile",
    shortDesc: "Métricas em tempo real",
    icon: Smartphone,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50 border border-rose-200/60",
    activeColor: "#F43F5E",
    borderHover: "hover:border-rose-300",
    side: "right",
  },
  {
    id: "backup",
    title: "Backup",
    shortDesc: "Proteção de dados 24/7",
    icon: Shield,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border border-indigo-200/60",
    activeColor: "#2563EB",
    borderHover: "hover:border-indigo-300",
    side: "right",
  },
];

export function EcossistemaIntegrado() {
  const [activeNodeId, setActiveNodeId] = useState<string>("pdv");

  const leftNodes = satelliteNodes.filter((n) => n.side === "left");
  const rightNodes = satelliteNodes.filter((n) => n.side === "right");

  return (
    <section
      id="ecossistema"
      className="fluid-gutter relative w-full overflow-hidden border-b border-indigo-100/80 bg-linear-to-b from-[#F7F4FF] via-[#F3F0FF] to-[#F7F4FF] py-20 sm:py-28"
    >
      {/* Luzes difusas sutis estilo enterprise */}
      <div className="pointer-events-none absolute -left-24 top-1/4 size-96 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 size-96 rounded-full bg-indigo-200/40 blur-3xl" />

      {/* Header Centralizado */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge 'Ecossistema Integrado' */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-xs">
          <span className="flex size-2 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Ecossistema Integrado
          </span>
        </div>

        {/* Título Principal */}
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
          Tudo o que sua empresa precisa para operar sem atritos
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Conexão direta entre frente de loja, retaguarda, gestão fiscal e tomada de decisão em uma
          única plataforma integrada.
        </p>
      </div>

      {/* Diagrama Interativo Core */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-6xl">
        {/* ========================================================
            DESKTOP LAYOUT (Duas colunas de 3 cards flanqueando o círculo central)
        ======================================================== */}
        <div className="relative hidden items-center justify-between gap-6 lg:flex min-h-[460px]">
          {/* Linhas Conectoras SVG Vetoriais Conectadas Diretamente às Bordas do Círculo */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 size-full"
            viewBox="0 0 1152 460"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Conectores do lado esquerdo ancorados na borda do círculo central */}
            {/* Card 1 (Frente de Caixa) -> Borda superior-esquerda do círculo */}
            <path
              d="M 288 55 C 365 55, 385 125, 452 125"
              fill="none"
              stroke={activeNodeId === "pdv" ? "#F59E0B" : "#CBD5E1"}
              strokeWidth={activeNodeId === "pdv" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "pdv" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            {/* Card 2 (Fiscal) -> Borda lateral-esquerda do círculo */}
            <path
              d="M 288 230 L 406 230"
              fill="none"
              stroke={activeNodeId === "fiscal" ? "#10B981" : "#CBD5E1"}
              strokeWidth={activeNodeId === "fiscal" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "fiscal" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            {/* Card 3 (Estoque) -> Borda inferior-esquerda do círculo */}
            <path
              d="M 288 405 C 365 405, 385 335, 452 335"
              fill="none"
              stroke={activeNodeId === "estoque" ? "#3BBCEC" : "#CBD5E1"}
              strokeWidth={activeNodeId === "estoque" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "estoque" ? "none" : "6 4"}
              className="transition-all duration-300"
            />

            {/* Conectores do lado direito ancorados na borda do círculo central */}
            {/* Card 4 (Financeiro) -> Borda superior-direita do círculo */}
            <path
              d="M 864 55 C 787 55, 767 125, 700 125"
              fill="none"
              stroke={activeNodeId === "financeiro" ? "#8B5CF6" : "#CBD5E1"}
              strokeWidth={activeNodeId === "financeiro" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "financeiro" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            {/* Card 5 (Mobile) -> Borda lateral-direita do círculo */}
            <path
              d="M 864 230 L 746 230"
              fill="none"
              stroke={activeNodeId === "mobile" ? "#F43F5E" : "#CBD5E1"}
              strokeWidth={activeNodeId === "mobile" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "mobile" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            {/* Card 6 (Backup) -> Borda inferior-direita do círculo */}
            <path
              d="M 864 405 C 787 405, 767 335, 700 335"
              fill="none"
              stroke={activeNodeId === "backup" ? "#2563EB" : "#CBD5E1"}
              strokeWidth={activeNodeId === "backup" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "backup" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
          </svg>

          {/* Coluna Esquerda (3 Cards Compactos) */}
          <div className="relative z-10 flex w-72 flex-col gap-6">
            {leftNodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  onClick={() => setActiveNodeId(node.id)}
                  className={cn(
                    "group flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition-all duration-300",
                    node.borderHover,
                    isActive
                      ? "scale-[1.03] shadow-md border-indigo-300 ring-2 ring-indigo-200/50"
                      : "hover:-translate-y-0.5 hover:shadow-md",
                  )}
                >
                  {/* Ícone com fundo pastel */}
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                      node.iconBg,
                      node.iconColor,
                    )}
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Título e Breve Descrição */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-950">
                      {node.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 truncate">{node.shortDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Elemento Central: Círculo Ampliado e Autocontido */}
          <div className="relative z-20 flex items-center justify-center">
            {/* Halo de luz difusa suave atrás do círculo */}
            <div className="absolute -inset-4 rounded-full bg-indigo-500/15 blur-2xl -z-10" />

            {/* Círculo Principal Autocontido (rounded-full) */}
            <div className="group relative flex size-80 sm:size-84 flex-col items-center justify-center rounded-full border-4 border-indigo-300/70 bg-white p-8 text-center shadow-[0_0_55px_-5px_rgba(99,102,241,0.25)] transition-all duration-500 hover:scale-105 hover:border-indigo-400 hover:shadow-[0_0_75px_-5px_rgba(99,102,241,0.35)]">
              {/* 1. Imagem Oficial Logo Dominus Centralizada */}
              <div className="flex items-center justify-center h-20 w-full px-2">
                <img
                  src="/Logo-dominus.png"
                  alt="Dominus"
                  className="max-h-full max-w-[210px] sm:max-w-[230px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 2. Diretamente Abaixo da Logo, Dentro do Mesmo Círculo: Texto em Caixa Alta */}
              <p className="mt-3 max-w-[200px] text-center text-[10.5px] sm:text-[11.5px] font-black uppercase tracking-wider text-slate-800 leading-snug">
                SISTEMA DE GESTÃO EMPRESARIAL COMPLETO
              </p>
            </div>
          </div>

          {/* Coluna Direita (3 Cards Compactos) */}
          <div className="relative z-10 flex w-72 flex-col gap-6">
            {rightNodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  onClick={() => setActiveNodeId(node.id)}
                  className={cn(
                    "group flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition-all duration-300",
                    node.borderHover,
                    isActive
                      ? "scale-[1.03] shadow-md border-indigo-300 ring-2 ring-indigo-200/50"
                      : "hover:-translate-y-0.5 hover:shadow-md",
                  )}
                >
                  {/* Ícone com fundo pastel */}
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                      node.iconBg,
                      node.iconColor,
                    )}
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Título e Breve Descrição */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-950">
                      {node.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 truncate">{node.shortDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET ADAPTIVE VIEW (< lg)
        ======================================================== */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          {/* Círculo Central Autocontido no Topo */}
          <div className="group relative flex size-72 sm:size-80 flex-col items-center justify-center rounded-full border-4 border-indigo-300/70 bg-white p-7 text-center shadow-xl">
            {/* Logo */}
            <div className="flex items-center justify-center h-16 w-full">
              <img
                src="/Logo-dominus.png"
                alt="Dominus"
                className="max-h-full max-w-[190px] sm:max-w-[210px] object-contain"
              />
            </div>

            {/* Texto dentro do círculo */}
            <p className="mt-3 max-w-[180px] sm:max-w-[200px] text-center text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-800 leading-snug">
              SISTEMA DE GESTÃO EMPRESARIAL COMPLETO
            </p>
          </div>

          {/* Grade com os 6 Cards Compactos */}
          <div className="grid w-full gap-3 sm:grid-cols-2">
            {satelliteNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
                >
                  <div
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-xl",
                      node.iconBg,
                      node.iconColor,
                    )}
                  >
                    <Icon className="size-5.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-900">{node.title}</h4>
                    <p className="text-xs text-slate-500 truncate">{node.shortDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rodapé do Diagrama com CTA Rápido */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-200/80 bg-white/95 p-5 shadow-xs backdrop-blur-xs sm:flex-row sm:px-8">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Pronto para transformar a gestão da sua empresa?
            </h4>
            <p className="mt-0.5 text-xs text-slate-500">
              Veja o Ecossistema Dominus operando ao vivo com um de nossos consultores.
            </p>
          </div>
          <a
            href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Ecossistema%20Integrado%20Dominus"
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
