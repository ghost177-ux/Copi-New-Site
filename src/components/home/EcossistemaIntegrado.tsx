import {
  CreditCard,
  FileCheck2,
  PackageCheck,
  TrendingUp,
  Smartphone,
  Server,
  Cpu,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SatelliteNode {
  id: string;
  title: string;
  description: string;
  icon: typeof CreditCard;
  color: string;
  accentBg: string;
  accentBorder: string;
  tag: string;
  metrics: string;
  side: "left" | "right";
}

const satelliteNodes: SatelliteNode[] = [
  {
    id: "pdv",
    title: "Frente de Caixa",
    description: "Vendas ultrarrápidas, TEF multicarteiras e contingência offline contínua.",
    icon: CreditCard,
    color: "#3BBCEC",
    accentBg: "rgba(59, 188, 236, 0.1)",
    accentBorder: "rgba(59, 188, 236, 0.35)",
    tag: "PDV Ágil",
    metrics: "Tempo médio de cupom: 1.2s",
    side: "left",
  },
  {
    id: "fiscal",
    title: "Fiscal 100% Descomplicado",
    description: "NF-e, NFC-e, SPED e conciliação tributária automática com a SEFAZ.",
    icon: FileCheck2,
    color: "#10B981",
    accentBg: "rgba(16, 185, 129, 0.1)",
    accentBorder: "rgba(16, 185, 129, 0.35)",
    tag: "100% Seguro",
    metrics: "Conformidade em tempo real",
    side: "left",
  },
  {
    id: "estoque",
    title: "Estoque Inteligente",
    description: "Entrada por XML, ponto de reposição dinâmico e inventário sem perdas.",
    icon: PackageCheck,
    color: "#F59E0B",
    accentBg: "rgba(245, 158, 11, 0.1)",
    accentBorder: "rgba(245, 158, 11, 0.35)",
    tag: "Curva ABC",
    metrics: "Zero ruptura de estoque",
    side: "left",
  },
  {
    id: "financeiro",
    title: "DRE & Financeiro",
    description: "Fluxo de caixa, conciliação bancária e rentabilidade real por canal.",
    icon: TrendingUp,
    color: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.1)",
    accentBorder: "rgba(139, 92, 246, 0.35)",
    tag: "Visão 360°",
    metrics: "DRE atualizado a cada venda",
    side: "right",
  },
  {
    id: "mobile",
    title: "App Mobile / Métricas",
    description: "Indicadores executivos, metas e faturamento ao vivo no seu smartphone.",
    icon: Smartphone,
    color: "#FC4242",
    accentBg: "rgba(252, 66, 66, 0.1)",
    accentBorder: "rgba(252, 66, 66, 0.35)",
    tag: "Na Palma da Mão",
    metrics: "Dados sincronizados ao vivo",
    side: "right",
  },
  {
    id: "cloud",
    title: "Backup & Nuvem",
    description: "Dados protegidos com redundância bancária e restauração instantânea 24/7.",
    icon: Server,
    color: "#2563EB",
    accentBg: "rgba(37, 99, 235, 0.1)",
    accentBorder: "rgba(37, 99, 235, 0.35)",
    tag: "Segurança Total",
    metrics: "99.98% de disponibilidade",
    side: "right",
  },
];

export function EcossistemaIntegrado() {
  const [activeNodeId, setActiveNodeId] = useState<string>("pdv");

  const activeNode =
    satelliteNodes.find((node) => node.id === activeNodeId) ?? satelliteNodes[0];

  const leftNodes = satelliteNodes.filter((n) => n.side === "left");
  const rightNodes = satelliteNodes.filter((n) => n.side === "right");

  return (
    <section
      id="ecossistema"
      className="fluid-gutter relative w-full overflow-hidden border-b border-indigo-100/80 bg-linear-to-b from-[#FAF8FF] via-[#F3F0FF] to-[#FAF8FF] py-20 sm:py-28"
    >
      {/* Elementos visuais sutis de fundo estilo Enterprise SaaS */}
      <div className="pointer-events-none absolute -left-20 top-1/3 size-96 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 size-96 rounded-full bg-indigo-200/40 blur-3xl" />

      {/* Header Centralizado */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge 'Fluxo Automatizado' */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/90 bg-white/95 px-4 py-1.5 shadow-xs backdrop-blur-xs">
          <span className="flex size-2 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Fluxo Automatizado
          </span>
        </div>

        {/* Título Principal */}
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
          Tudo o que sua empresa precisa para operar sem atritos
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Uma arquitetura inteligente onde cada ponta da operação se conecta ao Núcleo Central do
          ERP em tempo real, eliminando retrabalho, divergências de estoque e erros manuais.
        </p>
      </div>

      {/* Diagrama Interativo Core (Hub-and-Spoke / Arquitetura Visual) */}
      <div className="relative z-10 mx-auto mt-16 w-full max-w-6xl">
        {/* ========================================================
            DESKTOP HUB-AND-SPOKE VIEW (>= lg)
        ======================================================== */}
        <div className="relative hidden items-center justify-between gap-6 lg:flex">
          {/* Camada SVG de Conexões Vetoriais */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 size-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Linhas conectando os 3 nós esquerdos ao centro */}
            <path
              d="M 280 85 C 380 85, 390 270, 480 270"
              fill="none"
              stroke={activeNodeId === "pdv" ? "#3BBCEC" : "#CBD5E1"}
              strokeWidth={activeNodeId === "pdv" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "pdv" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            <path
              d="M 280 270 C 370 270, 400 270, 480 270"
              fill="none"
              stroke={activeNodeId === "fiscal" ? "#10B981" : "#CBD5E1"}
              strokeWidth={activeNodeId === "fiscal" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "fiscal" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            <path
              d="M 280 455 C 380 455, 390 270, 480 270"
              fill="none"
              stroke={activeNodeId === "estoque" ? "#F59E0B" : "#CBD5E1"}
              strokeWidth={activeNodeId === "estoque" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "estoque" ? "none" : "6 4"}
              className="transition-all duration-300"
            />

            {/* Linhas conectando os 3 nós direitos ao centro */}
            <path
              d="M 870 85 C 770 85, 760 270, 670 270"
              fill="none"
              stroke={activeNodeId === "financeiro" ? "#8B5CF6" : "#CBD5E1"}
              strokeWidth={activeNodeId === "financeiro" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "financeiro" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            <path
              d="M 870 270 C 780 270, 750 270, 670 270"
              fill="none"
              stroke={activeNodeId === "mobile" ? "#FC4242" : "#CBD5E1"}
              strokeWidth={activeNodeId === "mobile" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "mobile" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
            <path
              d="M 870 455 C 770 455, 760 270, 670 270"
              fill="none"
              stroke={activeNodeId === "cloud" ? "#2563EB" : "#CBD5E1"}
              strokeWidth={activeNodeId === "cloud" ? "2.5" : "1.5"}
              strokeDasharray={activeNodeId === "cloud" ? "none" : "6 4"}
              className="transition-all duration-300"
            />
          </svg>

          {/* Coluna Esquerda: 3 Nós Satélites */}
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
                    "group relative cursor-pointer rounded-2xl border p-5 shadow-xs transition-all duration-300 bg-white",
                    isActive
                      ? "scale-[1.03] shadow-md border-transparent ring-2"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm",
                  )}
                  style={{
                    boxShadow: isActive ? `0 10px 30px -10px ${node.color}40` : undefined,
                    borderColor: isActive ? node.color : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex size-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: node.accentBg, color: node.color }}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                      style={{ backgroundColor: node.accentBg, color: node.color }}
                    >
                      {node.tag}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-bold text-slate-900 group-hover:text-indigo-900">
                    {node.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {node.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    <span>{node.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nó Central: Núcleo de Inteligência (ERP) */}
          <div className="relative z-20 flex w-80 shrink-0 flex-col items-center justify-center rounded-3xl border-2 border-indigo-400/60 bg-white p-7 text-center shadow-[0_0_45px_-8px_rgba(99,102,241,0.25)] transition-all duration-500 hover:shadow-[0_0_60px_-5px_rgba(99,102,241,0.35)]">
            {/* Halo pulsante suave */}
            <div className="absolute -inset-1 rounded-3xl bg-indigo-500/10 blur-xl -z-10" />

            {/* Ícone Core com micro-animação */}
            <div className="relative flex size-18 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/40">
              <Cpu className="size-9" />
              <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-emerald-400 text-white ring-2 ring-white">
                <Zap className="size-2.5 fill-white" />
              </span>
            </div>

            {/* Título do Hub */}
            <h3 className="mt-5 text-xl font-extrabold text-slate-950">
              Núcleo de Inteligência
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Dominus ERP
            </span>

            <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
              Processamento centralizado de dados operacionais e fiscais com sincronização
              automática.
            </p>

            {/* Chip de Status Ativo Dinâmico */}
            <div className="mt-5 w-full rounded-xl border border-indigo-100 bg-indigo-50/70 p-3 text-left">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-indigo-950 flex items-center gap-1.5">
                  <Activity className="size-3.5 text-indigo-600 animate-spin" />
                  Fluxo Conectado:
                </span>
                <span
                  className="font-bold rounded px-1.5 py-0.5 text-[10px]"
                  style={{
                    backgroundColor: activeNode.accentBg,
                    color: activeNode.color,
                  }}
                >
                  {activeNode.title}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-600 leading-snug">
                {activeNode.description}
              </p>
            </div>

            {/* Selo inferior */}
            <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <Sparkles className="size-3.5" />
              <span>Sincronização 360° em tempo real</span>
            </div>
          </div>

          {/* Coluna Direita: 3 Nós Satélites */}
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
                    "group relative cursor-pointer rounded-2xl border p-5 shadow-xs transition-all duration-300 bg-white",
                    isActive
                      ? "scale-[1.03] shadow-md border-transparent ring-2"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm",
                  )}
                  style={{
                    boxShadow: isActive ? `0 10px 30px -10px ${node.color}40` : undefined,
                    borderColor: isActive ? node.color : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex size-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: node.accentBg, color: node.color }}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                      style={{ backgroundColor: node.accentBg, color: node.color }}
                    >
                      {node.tag}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-bold text-slate-900 group-hover:text-indigo-900">
                    {node.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {node.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    <span>{node.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET ADAPTIVE FLOW (< lg)
        ======================================================== */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Card Central no Topo no Mobile */}
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-indigo-400/60 bg-white p-6 text-center shadow-lg">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md">
              <Cpu className="size-7" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-slate-950">Núcleo de Inteligência</h3>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Dominus ERP
            </span>
            <p className="mt-1.5 text-xs text-slate-500 max-w-sm">
              Conexão e sincronização contínua entre todos os módulos operacionais.
            </p>
          </div>

          {/* Grade dos 6 Satélites Conectados */}
          <div className="grid gap-4 sm:grid-cols-2">
            {satelliteNodes.map((node) => {
              const Icon = node.icon;
              const isActive = activeNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={cn(
                    "flex flex-col justify-between rounded-xl border p-4.5 bg-white transition-all shadow-xs",
                    isActive
                      ? "border-indigo-400 ring-2 ring-indigo-200/50"
                      : "border-slate-200/80",
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex size-9 items-center justify-center rounded-lg"
                        style={{ backgroundColor: node.accentBg, color: node.color }}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                        style={{ backgroundColor: node.accentBg, color: node.color }}
                      >
                        {node.tag}
                      </span>
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-slate-900">{node.title}</h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {node.description}
                    </p>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <CheckCircle2 className="size-3 text-emerald-500" />
                      {node.metrics}
                    </span>
                    <ArrowRight className="size-3.5 text-indigo-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rodapé do Diagrama com Chamada de Ação */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-200/70 bg-white/90 p-5 shadow-xs backdrop-blur-xs sm:flex-row sm:px-8">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Quer ver como o Ecossistema funciona na prática para o seu ramo?
            </h4>
            <p className="mt-0.5 text-xs text-slate-500">
              Demonstração personalizada sem custo com um especialista da Waybit.
            </p>
          </div>
          <a
            href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20Ecossistema%20Integrado%20Dominus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-indigo-700 hover:scale-[1.02]"
          >
            <span>Agendar Demonstração</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
