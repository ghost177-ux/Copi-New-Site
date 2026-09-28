import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileCheck2,
  Headphones,
  HelpCircle,
  Laptop,
  Mail,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ReceiptText,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EcossistemaIntegrado } from "@/components/home/EcossistemaIntegrado";
import { CicloOperacionalSideBySide } from "@/components/home/CicloOperacionalSideBySide";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waybit Software — ERP Ágil para Varejo, Auto-center e Food" },
      {
        name: "description",
        content:
          "ERP ágil, completo e intuitivo para varejo, auto-center e food. Simplifique vendas, estoque, fiscal e suporte com a Waybit e o ecossistema Dominus.",
      },
      { property: "og:title", content: "Waybit Software — ERP Ágil para Varejo, Auto-center e Food" },
      {
        property: "og:description",
        content: "Tecnologia que simplifica a rotina da sua empresa, do atendimento à gestão fiscal e financeira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type SegmentId = "varejo" | "auto" | "food";

interface SegmentInfo {
  id: SegmentId;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  color: string;
  hoverColor: string;
  bgLight: string;
  borderLight: string;
  icon: typeof Store;
  features: string[];
  metrics: string;
  targetAudience: string[];
}

const segmentsData: Record<SegmentId, SegmentInfo> = {
  varejo: {
    id: "varejo",
    name: "Dominus Varejo",
    badge: "Varejo & Comércio",
    tagline: "Venda melhor. Controle tudo com agilidade.",
    description:
      "Frente de caixa ultra-rápida, controle de grade e estoque em tempo real, emissão fiscal simplificada para lojas, minimercados e comércios em geral.",
    color: "#3BBCEC",
    hoverColor: "#28abd9",
    bgLight: "rgba(59, 188, 236, 0.08)",
    borderLight: "rgba(59, 188, 236, 0.25)",
    icon: Store,
    features: [
      "Frente de Caixa (PDV) sem travamentos",
      "Controle de Grade, Tamanho e Cor",
      "Emissão de NF-e, NFC-e e Cupom Fiscal",
      "Inventário Inteligente & Giro de Estoque",
    ],
    metrics: "Fechamento de caixa até 4x mais rápido",
    targetAudience: ["Lojas de Roupas & Calçados", "Minimercados & Empórios", "Lojas de Cosméticos & Presentes"],
  },
  auto: {
    id: "auto",
    name: "Dominus Auto-center",
    badge: "Oficinas & Auto-center",
    tagline: "Serviço ágil. Histórico completo do veículo.",
    description:
      "Emissão de ordens de serviço transparentes, controle de aplicação de peças, histórico do veículo por placa e fidelização para oficinas e centros automotivos.",
    color: "#FCC42C",
    hoverColor: "#e5b024",
    bgLight: "rgba(252, 196, 44, 0.09)",
    borderLight: "rgba(252, 196, 44, 0.28)",
    icon: Wrench,
    features: [
      "Ordens de Serviço (OS) com checklist digital",
      "Histórico de Manutenções pela Placa",
      "Controle de Comissões de Mecânicos",
      "Estoque de Peças com Aplicação e Códigos",
    ],
    metrics: "+30% de produtividade no box de atendimento",
    targetAudience: ["Oficinas Mecânicas", "Centros Automotivos & Troca de Óleo", "Autopeças & Moto Peças"],
  },
  food: {
    id: "food",
    name: "Dominus Food",
    badge: "Bares & Gastronomia",
    tagline: "Pedidos fluidos. Mesa cheia e delivery integrado.",
    description:
      "Comanda eletrônica ágil, integração com iFood, controle de mesas e tela de cozinha (KDS) para restaurantes, bares, lanchonetes e delivery.",
    color: "#FC4242",
    hoverColor: "#e03535",
    bgLight: "rgba(252, 66, 66, 0.08)",
    borderLight: "rgba(252, 66, 66, 0.25)",
    icon: UtensilsCrossed,
    features: [
      "Comanda Mobile no celular do garçom",
      "Integração nativa com iFood & Delivery",
      "Gestão de Mesas, Balcão e Cartões de Consumo",
      "KDS (Monitor de Cozinha) para produção sem atrasos",
    ],
    metrics: "Zero perda de comandas e pedidos integrados",
    targetAudience: ["Restaurantes & Buffets", "Bares, Pubs & Choperias", "Pizzarias & Hamburguerias Delivery"],
  },
};

const searchOptions = [
  { label: "Loja de roupas e confecções", segment: "varejo" as const },
  { label: "Calçados e acessórios", segment: "varejo" as const },
  { label: "Minimercado, mercearia ou empório", segment: "varejo" as const },
  { label: "Loja de presentes e variedades", segment: "varejo" as const },
  { label: "Oficina mecânica de automóveis", segment: "auto" as const },
  { label: "Centro automotivo e suspensão", segment: "auto" as const },
  { label: "Troca de óleo e filtros", segment: "auto" as const },
  { label: "Autopeças e motopeças", segment: "auto" as const },
  { label: "Restaurante à la carte e self-service", segment: "food" as const },
  { label: "Bar, pub e choperia", segment: "food" as const },
  { label: "Hamburgueria artesanal", segment: "food" as const },
  { label: "Pizzaria com delivery", segment: "food" as const },
  { label: "Cafeteria, confeitaria ou doceria", segment: "food" as const },
];

const segmentKeys: SegmentId[] = ["varejo", "auto", "food"];

const resourcesList = [
  {
    number: "01",
    title: "Vendas & Frente de Caixa",
    text: "Atendimento ágil, PDV blindado contra quedas de internet e fechamento de caixa sem discrepâncias.",
    icon: ShoppingBag,
    color: "#3BBCEC",
  },
  {
    number: "02",
    title: "Estoque em Tempo Real",
    text: "Entrada facilitada por XML, controle de lotes, grades de produtos e alertas automáticos de reposição.",
    icon: PackageCheck,
    color: "#65B32E",
  },
  {
    number: "03",
    title: "Gestão Fiscal & Tributária",
    text: "Emissão simplificada de NF-e, NFC-e, NFS-e e geração de arquivos fiscais em conformidade total com o fisco.",
    icon: ReceiptText,
    color: "#FCC42C",
  },
  {
    number: "04",
    title: "Suporte Técnico Humanizado",
    text: "Time de especialistas prontos para atender via WhatsApp e telefone direto. Sem robôs complicados.",
    icon: Headphones,
    color: "#FC4242",
  },
];

const integrationsList = [
  { name: "SEFAZ Nacional", detail: "NF-e, NFC-e e NFS-e automáticas", icon: FileCheck2 },
  { name: "TEF & Maquininhas", detail: "Cielo, Stone, Rede, PagBank e mais", icon: CreditCard },
  { name: "Pix Instantâneo", detail: "Recebimento com QR Code dinâmico", icon: Zap },
  { name: "iFood & Delivery", detail: "Cardápio e pedidos centralizados", icon: Truck },
  { name: "Balanças & Leitores", detail: "Filizola, Toledo, Elgin e Zebra", icon: Laptop },
  { name: "Backup em Nuvem", detail: "Segurança de dados 24/7 automática", icon: Server },
];

const testimonials = [
  {
    quote:
      "A agilidade no fechamento de caixa e a facilidade para emitir as notas nos libertaram de horas de retrabalho. O suporte da Waybit é o mais atencioso que já tivemos.",
    author: "Carlos Menezes",
    role: "Proprietário da Empório do Centro",
    segment: "Varejo",
    badgeColor: "#3BBCEC",
  },
  {
    quote:
      "Ter o histórico do cliente pela placa e emitir ordens de serviço no balcão em segundos aumentou a confiança dos clientes e a organização da oficina.",
    author: "Roberto Albuquerque",
    role: "Diretor da Autocenter Alvorada",
    segment: "Auto-center",
    badgeColor: "#FCC42C",
  },
  {
    quote:
      "A comanda móvel no celular dos garçons e a integração com o iFood acabaram com os erros de pedidos. A cozinha funciona no ritmo perfeito.",
    author: "Juliana Duarte",
    role: "Sócia do Bistrô & Bar Estação",
    segment: "Food",
    badgeColor: "#FC4242",
  },
];

const plansList = [
  {
    name: "Essencial",
    badge: "Ideal para começar",
    description: "Para pequenos negócios que precisam de agilidade em vendas e emissão fiscal sem burocracia.",
    features: [
      "Frente de Caixa (PDV) rápido",
      "Emissão de NF-e e NFC-e ilimitada",
      "Controle de estoque básico",
      "Cadastro de clientes e produtos",
      "Suporte humanizado em horário comercial",
    ],
    highlight: false,
    cta: "Falar com Especialista",
  },
  {
    name: "Profissional",
    badge: "Mais Escolhido",
    description: "A solução completa para empresas em expansão que exigem gestão financeira, estoque avançado e integração.",
    features: [
      "Tudo do Plano Essencial",
      "Módulo específico para o seu segmento",
      "Controle financeiro completo (DRE e fluxo)",
      "Ordens de Serviço ou Comanda Mobile",
      "Integração TEF, Pix e emissão rápida",
      "Suporte prioritário via WhatsApp",
    ],
    highlight: true,
    cta: "Falar com Especialista",
  },
  {
    name: "Corporativo",
    badge: "Redes e Grandes Operações",
    description: "Para redes de lojas, franquias e operações com alto volume de atendimento e múltiplos pontos de venda.",
    features: [
      "Tudo do Plano Profissional",
      "Múltiplos usuários e caixas simultâneos",
      "Gestão de filiais e estoque compartilhado",
      "Relatórios gerenciais avançados e BI",
      "Gerente de conta exclusivo e onboarding VIP",
      "SLA garantido de suporte técnico",
    ],
    highlight: false,
    cta: "Falar com Especialista",
  },
];

const faqList = [
  {
    question: "Quanto tempo leva para implantar o sistema Dominus?",
    answer:
      "A implantação padrão é muito rápida! Na maioria dos casos, realizamos o cadastro, parametrização fiscal e treinamento da sua equipe em menos de 48 horas úteis, sem interromper as vendas da sua empresa.",
  },
  {
    question: "É possível migrar os dados do meu sistema antigo?",
    answer:
      "Sim. Nossa equipe técnica auxilia na importação do seu cadastro de clientes, fornecedores e produtos através de planilhas ou XMLs, garantindo que seu histórico não seja perdido.",
  },
  {
    question: "O sistema emite todos os documentos fiscais exigidos pela SEFAZ?",
    answer:
      "Sim! O Dominus é homologado para emissão de NF-e (Nota Fiscal Eletrônica), NFC-e (Nota Fiscal ao Consumidor Eletrônica), NFS-e (Nota Fiscal de Serviços) e geração do arquivo SPED Fiscal, mantendo sua empresa 100% regularizada.",
  },
  {
    question: "Como funciona caso a internet caia durante o atendimento?",
    answer:
      "O módulo de Frente de Caixa (PDV) opera em modo de contingência offline. Você continua vendendo e emitindo os comprovantes normalmente. Assim que a conexão for restabelecida, os dados e documentos fiscais são sincronizados automaticamente.",
  },
  {
    question: "O suporte técnico está incluso na mensalidade?",
    answer:
      "Sim! Todos os nossos planos incluem suporte técnico com especialistas reais via WhatsApp, telefone e acesso remoto. Não há cobranças surpresas por chamados abertos.",
  },
];

function Index() {
  const [activeSegment, setActiveSegment] = useState<SegmentId>("varejo");
  const [systemOpen, setSystemOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const currentSegment = segmentsData[activeSegment];
  const activeIndex = segmentKeys.indexOf(activeSegment);

  const filteredMatches = useMemo(() => {
    if (!query.trim()) return [];
    const normalized = query.toLowerCase();
    return searchOptions.filter((option) =>
      option.label.toLowerCase().includes(normalized),
    );
  }, [query]);

  // Fechar mega menu ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSystemOpen(false);
      }
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selectSegment = (segment: SegmentId) => {
    setActiveSegment(segment);
    setSystemOpen(false);
    setMobileOpen(false);
  };

  const handleNextSegment = () => {
    const nextIndex = (activeIndex + 1) % segmentKeys.length;
    setActiveSegment(segmentKeys[nextIndex]);
  };

  const handlePrevSegment = () => {
    const prevIndex = (activeIndex - 1 + segmentKeys.length) % segmentKeys.length;
    setActiveSegment(segmentKeys[prevIndex]);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased selection:bg-brand-green/20 selection:text-brand-green">
      {/* ========================================================
          1. HEADER (TopBar + Navbar Fixa com Blur)
      ======================================================== */}
      <header className="sticky top-0 z-50 w-full transition-all">
        {/* Barra Superior (Top Bar) Fina e Discreta */}
        <div className="fluid-gutter w-full border-b border-white/10 bg-[#0F172A] py-2 text-xs text-slate-300">
          <div className="flex w-full items-center justify-between gap-4">
            {/* Contato Direto à Esquerda */}
            <div className="flex min-w-0 items-center gap-4 sm:gap-6">
              <a
                href="tel:+5521975812676"
                className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
                title="Ligar para a Waybit"
              >
                <Phone aria-hidden="true" className="size-3.5 shrink-0 text-brand-green" />
                <span className="font-medium">(21) 97581-2676</span>
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href="mailto:comercial@waybit.com.br"
                className="flex min-w-0 items-center gap-2 text-slate-300 transition-colors hover:text-white"
                title="Enviar e-mail para Waybit"
              >
                <Mail aria-hidden="true" className="size-3.5 shrink-0 text-varejo" />
                <span className="truncate font-medium">comercial@waybit.com.br</span>
              </a>
            </div>

            {/* Links Rápidos de Suporte e Atendimento à Direita */}
            <nav aria-label="Atendimento rápido" className="hidden items-center gap-5 sm:flex">
              <a
                href="#faq"
                className="text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                FAQ
              </a>
              <span className="h-3 w-px bg-slate-700" />
              <a
                href="#suporte"
                className="text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Central de Ajuda
              </a>
              <span className="h-3 w-px bg-slate-700" />
              <a
                href="#suporte"
                className="text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Suporte
              </a>
            </nav>
          </div>
        </div>

        {/* Barra de Navegação Principal (Navbar Fixa com Backdrop-Blur) */}
        <div className="fluid-gutter w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xs">
          <div className="flex h-18 w-full items-center justify-between gap-4">
            {/* Logo Oficial da Waybit */}
            <a
              href="#inicio"
              aria-label="Waybit Software — Página Inicial"
              className="flex shrink-0 items-center transition-transform hover:scale-[1.02]"
            >
              <img
                src="/waybit-logo.png"
                alt="Waybit Software"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </a>

            {/* Menus Centrais Desktop */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              {/* Menu 'Sistema' com Mega Menu interativo por clique */}
              <div ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setSystemOpen((prev) => !prev)}
                  aria-expanded={systemOpen}
                  aria-haspopup="true"
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-all",
                    systemOpen
                      ? "bg-slate-100 text-[#0F172A]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0F172A]",
                  )}
                >
                  <span>Sistema</span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-slate-500 transition-transform duration-200",
                      systemOpen && "rotate-180 text-brand-green",
                    )}
                  />
                </button>

                {/* Mega Menu Suspenso Simétrico por Clique */}
                {systemOpen && (
                  <div className="animate-in fade-in-0 zoom-in-95 absolute -left-20 top-[calc(100%+14px)] z-50 w-[780px] rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xl">
                    <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Ecossistema Dominus
                        </p>
                        <h4 className="text-sm font-bold text-slate-900">
                          Soluções especializadas para a rotina da sua empresa
                        </h4>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold text-brand-green">
                        <Sparkles className="size-3.5" />
                        ERP Ágil
                      </span>
                    </div>

                    {/* 3 Colunas Alinhadas à Esquerda no formato "Sistema para [Segmento]" */}
                    <div className="grid grid-cols-3 gap-4">
                      {/* Varejo */}
                      <button
                        type="button"
                        onClick={() => selectSegment("varejo")}
                        className="group flex flex-col rounded-lg p-3 text-left transition-all hover:bg-slate-50 border border-transparent hover:border-[#3BBCEC]/30"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex size-9 items-center justify-center rounded-lg bg-[#3BBCEC]/10 text-[#3BBCEC] transition-transform group-hover:scale-110">
                            <Store className="size-5" />
                          </div>
                          <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#3BBCEC] bg-[#3BBCEC]/10">
                            Varejo
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#3BBCEC]">
                          Sistema para Varejo
                        </h5>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          Lojas de roupas, calçados, mercadinhos e comércios em geral.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#3BBCEC]">
                          <span>Ver recursos</span>
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </button>

                      {/* Auto-center */}
                      <button
                        type="button"
                        onClick={() => selectSegment("auto")}
                        className="group flex flex-col rounded-lg p-3 text-left transition-all hover:bg-slate-50 border border-transparent hover:border-[#FCC42C]/30"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex size-9 items-center justify-center rounded-lg bg-[#FCC42C]/15 text-[#e5b024] transition-transform group-hover:scale-110">
                            <Wrench className="size-5" />
                          </div>
                          <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#c6930d] bg-[#FCC42C]/15">
                            Oficinas
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#c6930d]">
                          Sistema para Auto-center
                        </h5>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          Oficinas mecânicas, centros automotivos e autopeças.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#c6930d]">
                          <span>Ver recursos</span>
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </button>

                      {/* Food */}
                      <button
                        type="button"
                        onClick={() => selectSegment("food")}
                        className="group flex flex-col rounded-lg p-3 text-left transition-all hover:bg-slate-50 border border-transparent hover:border-[#FC4242]/30"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex size-9 items-center justify-center rounded-lg bg-[#FC4242]/10 text-[#FC4242] transition-transform group-hover:scale-110">
                            <UtensilsCrossed className="size-5" />
                          </div>
                          <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#FC4242] bg-[#FC4242]/10">
                            Gastronomia
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#FC4242]">
                          Sistema para Food
                        </h5>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          Restaurantes, bares, cafeterias, hamburguerias e delivery.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#FC4242]">
                          <span>Ver recursos</span>
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </button>
                    </div>

                    {/* Faixa inferior informativa */}
                    <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                      <span>Dúvidas sobre o sistema ideal para sua empresa?</span>
                      <a
                        href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20escolher%20o%20sistema%20Dominus%20ideal"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-brand-green hover:underline flex items-center gap-1"
                      >
                        Falar com consultor técnico <ArrowRight className="size-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Links de Seções In-Page */}
              <a
                href="#integracoes"
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#3BBCEC]"
              >
                Integrações
              </a>
              <a
                href="#parceiros"
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#3BBCEC]"
              >
                Seja um Parceiro
              </a>
              <a
                href="#planos"
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#3BBCEC]"
              >
                Planos
              </a>
              <a
                href="#blog"
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#3BBCEC]"
              >
                Blog
              </a>
            </nav>

            {/* Ação à Direita (CTA) Botão Verde Estilizado */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button
                asChild
                className="h-11 bg-brand-green px-6 font-bold text-white shadow-brand-glow transition-all hover:bg-brand-green/90 hover:scale-[1.02]"
              >
                <a
                  href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Waybit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Falar com Especialista</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            {/* Botão Mobile */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile Suspenso */}
        {mobileOpen && (
          <nav
            aria-label="Menu móvel"
            className="fluid-gutter absolute left-0 top-full w-full border-b border-slate-200 bg-white py-5 shadow-2xl lg:hidden animate-in slide-in-from-top-2"
          >
            <div className="flex flex-col gap-1">
              <p className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                Soluções Dominus
              </p>
              <button
                type="button"
                onClick={() => selectSegment("varejo")}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Store className="size-4 text-[#3BBCEC]" />
                <span>Sistema para Varejo</span>
              </button>
              <button
                type="button"
                onClick={() => selectSegment("auto")}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Wrench className="size-4 text-[#FCC42C]" />
                <span>Sistema para Auto-center</span>
              </button>
              <button
                type="button"
                onClick={() => selectSegment("food")}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <UtensilsCrossed className="size-4 text-[#FC4242]" />
                <span>Sistema para Food</span>
              </button>

              <hr className="my-2 border-slate-100" />
              <p className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                Navegação
              </p>
              <a
                href="#integracoes"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Integrações
              </a>
              <a
                href="#parceiros"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Seja um Parceiro
              </a>
              <a
                href="#planos"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Planos
              </a>
              <a
                href="#blog"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Blog
              </a>
              <a
                href="#faq"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Dúvidas Frequentes (FAQ)
              </a>

              <Button
                asChild
                className="mt-4 h-11 w-full bg-brand-green font-bold text-white shadow-brand-glow"
              >
                <a
                  href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Waybit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  <span>Falar com Especialista</span>
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* ========================================================
          2. SEÇÃO HERO (Primeira Dobra em 2 Colunas Fluidas)
      ======================================================== */}
      <section
        id="inicio"
        className="fluid-gutter relative w-full border-b border-slate-200/80 bg-surface-soft py-10 lg:min-h-[calc(100vh-112px)] lg:py-14 flex items-center"
      >
        {/* Fundo sutil com gradiente radial no tom do segmento ativo */}
        <div
          className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl opacity-15 transition-all duration-700"
          style={{ backgroundColor: currentSegment.color }}
        />

        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* ==========================================
              COLUNA ESQUERDA (Institucional, H1, Busca)
          ========================================== */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
            {/* Tagline / Indicador de Inovação Superior */}
            <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-xs">
              <span
                className="inline-block size-2 rounded-full animate-pulse"
                style={{ backgroundColor: currentSegment.color }}
              />
              <span className="text-xs font-semibold text-slate-700">
                Ecossistema Dominus • Tecnologia Especializada
              </span>
            </div>

            {/* Título Principal (H1) com destaque corporativo */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[clamp(2.75rem,4.2vw,4.5rem)] leading-[1.05]">
              A rotina da sua empresa{" "}
              <span className="text-[#3BBCEC] transition-colors">leve</span> e com{" "}
              <span className="text-[#65B32E]">menos esforço</span>.
            </h1>

            {/* Subtítulo: Proposta de valor do ERP */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Um ERP ágil, completo e intuitivo para transformar a gestão de vendas, estoque,
              finanças e emissão fiscal da sua operação — sem complicar o que já funciona.
            </p>

            {/* Campo de Busca de Segmentos Interativo */}
            <div ref={searchContainerRef} className="relative mt-8 w-full max-w-xl">
              <label
                htmlFor="hero-segment-search"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                Qual é o seu ramo de atuação?
              </label>

              <div className="relative flex items-center rounded-xl border border-slate-300 bg-white p-1.5 shadow-sm transition-all focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/20">
                <Search className="ml-3 size-5 text-slate-400 shrink-0" aria-hidden="true" />
                <input
                  id="hero-segment-search"
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="Ex.: loja de roupas, oficina mecânica, restaurante..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  autoComplete="off"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setSearchOpen(false);
                    }}
                    className="p-1 text-slate-400 hover:text-slate-600"
                    title="Limpar pesquisa"
                  >
                    <X className="size-4" />
                  </button>
                )}
                <Button
                  type="button"
                  size="sm"
                  className="h-9 shrink-0 bg-slate-900 text-white hover:bg-slate-800"
                  onClick={() => setSearchOpen((prev) => !prev)}
                >
                  <span className="hidden sm:inline">Encontrar</span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              {/* Dropdown de Resultados da Busca em Tempo Real */}
              {searchOpen && (
                <div className="absolute left-0 top-[calc(100%+6px)] z-30 w-full rounded-xl border border-slate-200 bg-white p-2 shadow-xl animate-in fade-in-50">
                  {filteredMatches.length > 0 ? (
                    <div className="max-h-60 overflow-y-auto divide-y divide-slate-100">
                      {filteredMatches.map((option) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => {
                            selectSegment(option.segment);
                            setQuery(option.label);
                            setSearchOpen(false);
                          }}
                          className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 transition-colors rounded-md"
                        >
                          <span className="font-medium">{option.label}</span>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: segmentsData[option.segment].bgLight,
                              color: segmentsData[option.segment].color,
                            }}
                          >
                            {segmentsData[option.segment].name}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="p-3 text-center text-xs text-slate-500">
                      Nenhum segmento exato encontrado. Nosso ERP atende centenas de atividades.{" "}
                      <a
                        href="https://wa.me/5521975812676"
                        className="font-bold text-brand-green hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Consulte nosso especialista
                      </a>
                    </div>
                  ) : (
                    <div className="p-2 text-xs text-slate-400">
                      Digite o nome do seu negócio para visualizar a solução ideal.
                    </div>
                  )}
                </div>
              )}

              {/* Sugestões Rápidas em Pílulas */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Populares:</span>
                <button
                  type="button"
                  onClick={() => selectSegment("varejo")}
                  className={cn(
                    "rounded-full px-2.5 py-1 font-semibold transition-all border",
                    activeSegment === "varejo"
                      ? "border-[#3BBCEC] bg-[#3BBCEC]/10 text-[#3BBCEC]"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                  )}
                >
                  Lojas & Varejo
                </button>
                <button
                  type="button"
                  onClick={() => selectSegment("auto")}
                  className={cn(
                    "rounded-full px-2.5 py-1 font-semibold transition-all border",
                    activeSegment === "auto"
                      ? "border-[#FCC42C] bg-[#FCC42C]/15 text-[#c6930d]"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                  )}
                >
                  Oficina & Mecânica
                </button>
                <button
                  type="button"
                  onClick={() => selectSegment("food")}
                  className={cn(
                    "rounded-full px-2.5 py-1 font-semibold transition-all border",
                    activeSegment === "food"
                      ? "border-[#FC4242] bg-[#FC4242]/10 text-[#FC4242]"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                  )}
                >
                  Restaurante & Bar
                </button>
              </div>
            </div>

            {/* Controles de Navegação: Paginação Limpa em Pílulas e Círculos */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                {segmentKeys.map((key, index) => {
                  const isActive = activeSegment === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => selectSegment(key)}
                      aria-label={`Ver ${segmentsData[key].name}`}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        isActive ? "w-9" : "w-2.5 bg-slate-300 hover:bg-slate-400",
                      )}
                      style={{
                        backgroundColor: isActive ? segmentsData[key].color : undefined,
                      }}
                    />
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <span>0{activeIndex + 1} / 03</span>
                <span className="text-slate-300">•</span>
                <span className="font-semibold text-slate-700">{currentSegment.badge}</span>
              </div>

              {/* Setas de Anterior / Próximo */}
              <div className="ml-auto flex items-center gap-1 sm:ml-4">
                <button
                  type="button"
                  onClick={handlePrevSegment}
                  className="flex size-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-50"
                  aria-label="Segmento anterior"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSegment}
                  className="flex size-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-50"
                  aria-label="Próximo segmento"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================================================================
              COLUNA DIREITA (Segmentos Autônomos + Placeholder de Imagem Única)
          ================================================================ */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-6">
            {/* Exibição dos Segmentos (Sem Cartões engessados): Triggers Autônomos e Laterais */}
            <div className="mb-4 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
              {segmentKeys.map((key) => {
                const seg = segmentsData[key];
                const isActive = activeSegment === key;
                const IconComponent = seg.icon;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectSegment(key)}
                    className={cn(
                      "group flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition-all relative",
                      isActive
                        ? "bg-white text-slate-950 shadow-xs border border-slate-200/90"
                        : "text-slate-500 hover:text-slate-900 hover:bg-white/60",
                    )}
                  >
                    <IconComponent
                      className="size-4 transition-transform group-hover:scale-110"
                      style={{ color: seg.color }}
                    />
                    <span>{seg.name}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                        style={{ backgroundColor: seg.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Destaque do Segmento Autônomo com Transição Suave */}
            <div className="mb-4 rounded-xl bg-white/70 p-4 backdrop-blur-xs border border-slate-200/70 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: currentSegment.color }}
                >
                  {currentSegment.tagline}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {currentSegment.metrics}
                </span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {currentSegment.features.slice(0, 3).map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600 border border-slate-200/60"
                  >
                    <Check className="size-3 text-brand-green" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* ==========================================================
                PLACEHOLDER DE IMAGEM ÚNICA (Sem fotos aleatórias)
                Container estrutural limpo, responsivo e bem posicionado
            ========================================================== */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all hover:shadow-2xl">
              {/* Barra superior estilo janela de aplicação SaaS */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    app.dominus.com.br/{activeSegment}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: currentSegment.color }}
                  />
                  <span className="text-[10px] font-bold uppercase text-slate-500">
                    {currentSegment.name}
                  </span>
                </div>
              </div>

              {/* Área interna do container de imagem reservada */}
              <div className="relative flex aspect-16/10 w-full items-center justify-center bg-slate-50/50 p-6 sm:p-10">
                {/* Imagem Placeholder Oficial */}
                <div className="relative flex flex-col items-center justify-center text-center">
                  <img
                    src="/placeholder-image.png"
                    alt="Espaço Reservado para Imagem Oficial do Sistema Dominus"
                    className="h-28 w-auto object-contain opacity-40 transition-opacity hover:opacity-60 sm:h-36"
                  />
                  <div className="mt-4 flex flex-col items-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-xs">
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: currentSegment.color }}
                      />
                      Espaço Reservado para Imagem Oficial do Sistema
                    </span>
                    <p className="mt-1.5 text-xs text-slate-400 max-w-sm">
                      Mockup oficial do software {currentSegment.name} será encaixado exatamente
                      nesta área
                    </p>
                  </div>
                </div>

                {/* Chips Flutuantes Estruturais de Interface SaaS */}
                <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-xs">
                  <CheckCircle2 className="size-4 text-brand-green" />
                  <span>Emissão Fiscal Instantânea</span>
                </div>

                <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-xs">
                  <ShieldCheck className="size-4 text-[#3BBCEC]" />
                  <span>Contingência Offline Ativa</span>
                </div>
              </div>

              {/* Barra de rodapé do mockup */}
              <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-2.5 text-xs text-slate-500">
                <span className="font-medium">
                  Solução testada e aprovada por centenas de empresas
                </span>
                <a
                  href="#planos"
                  className="font-bold text-brand-green hover:underline flex items-center gap-1"
                >
                  Ver Planos <ChevronRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ECOSSISTEMA INTEGRADO (Diagrama de Fluxo Automatizado)
      ======================================================== */}
      <EcossistemaIntegrado />

      {/* ========================================================
          CICLO OPERACIONAL DOMINUS (Side-by-Side Híbrido com Animação)
      ======================================================== */}
      <CicloOperacionalSideBySide />

      {/* ========================================================
          3. SEÇÃO RECURSOS & PILARES DE GESTÃO (#recursos)
      ======================================================== */}
      <section id="recursos" className="fluid-gutter w-full py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Do Essencial ao Estratégico
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Tudo conversa.<br />Você decide.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Uma gestão verdadeiramente integrada para enxergar sua operação por inteiro e agir
              com agilidade e segurança jurídica.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand-green shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-700">
                  Implantação acompanhada passo a passo por especialista.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand-green shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-700">
                  Migração rápida dos seus dados e produtos do sistema atual.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand-green shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-700">
                  Suporte humanizado sem espera por ticket demorado.
                </p>
              </div>
            </div>

            <Button asChild className="mt-8 bg-slate-900 text-white hover:bg-slate-800">
              <a href="#planos" className="flex items-center gap-2">
                Conhecer Planos <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {resourcesList.map((resource) => {
              const Icon = resource.icon;
              return (
                <article
                  key={resource.number}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all hover:border-slate-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {resource.number}
                      </span>
                      <div
                        className="flex size-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${resource.color}15`, color: resource.color }}
                      >
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-slate-900">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{resource.text}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-700">
                    <span>Recurso Integrado</span>
                    <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SEÇÃO INTEGRAÇÕES (#integracoes)
      ======================================================== */}
      <section
        id="integracoes"
        className="fluid-gutter w-full bg-[#0F172A] py-20 text-white sm:py-28"
      >
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Conectividade Sem Atritos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Menos operação manual.<br />Mais direção.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              O ecossistema Dominus se comunica com os órgãos fiscais, meios de pagamento e
              plataformas que você já utiliza, eliminando digitação dupla.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                100% em Nuvem & Local
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                Homologação SEFAZ
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                API de Integração
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {integrationsList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-xs transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-slate-400">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SEÇÃO DEPOIMENTOS / PROVA SOCIAL
      ======================================================== */}
      <section className="fluid-gutter w-full py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Quem vive a rotina, aprova
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Parceria que faz a diferença no dia a dia.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Veja o que dizem gestores e proprietários que escolheram o Dominus para gerenciar seus
            estabelecimentos.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-surface-soft p-7 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base font-medium leading-relaxed text-slate-800">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                  style={{
                    backgroundColor: `${item.badgeColor}15`,
                    color: item.badgeColor,
                  }}
                >
                  {item.segment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. SEÇÃO SEJA UM PARCEIRO (#parceiros)
      ======================================================== */}
      <section
        id="parceiros"
        className="fluid-gutter w-full py-20 sm:py-28 bg-surface-soft border-b border-slate-200"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Cresça Junto com a Waybit
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Seja um Parceiro Waybit e multiplique sua receita.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Programa de canais feito para contadores, consultores de negócios e profissionais de TI
              que desejam indicar ou revender um ERP estável, com excelente aceitação e suporte
              garantido.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <TrendingUp className="size-5 text-brand-green mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Comissão Recorrente</h4>
                <p className="mt-1 text-xs text-slate-500">
                  Ganhe mensalmente por cada cliente ativo na sua carteira.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <Users className="size-5 text-[#3BBCEC] mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Capacitação & Treinamento</h4>
                <p className="mt-1 text-xs text-slate-500">
                  Material completo de apoio comercial e suporte nível 2 dedicado.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="mt-8 h-12 bg-brand-green px-7 font-bold text-white shadow-brand-glow hover:bg-brand-green/90"
            >
              <a
                href="mailto:comercial@waybit.com.br?subject=Interesse%20em%20ser%20Parceiro%20Waybit"
                className="flex items-center gap-2"
              >
                <span>Quero ser um Parceiro</span>
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg lg:col-span-6">
            <h3 className="text-xl font-bold text-slate-900">
              Vantagens do Ecossistema Dominus para Parceiros
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm">
              <li className="flex items-center gap-3 py-3">
                <Check className="size-4 text-brand-green shrink-0" />
                <span className="text-slate-700">
                  <strong>Zero dor de cabeça tributária:</strong> sistema sempre atualizado com a
                  legislação brasileira.
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Check className="size-4 text-brand-green shrink-0" />
                <span className="text-slate-700">
                  <strong>Onboarding estruturado:</strong> nossa equipe assume a implantação e
                  treinamento dos indicados.
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Check className="size-4 text-brand-green shrink-0" />
                <span className="text-slate-700">
                  <strong>Portal de contabilidade:</strong> acesso direto às notas e relatórios para
                  facilitar o fechamento contábil.
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Check className="size-4 text-brand-green shrink-0" />
                <span className="text-slate-700">
                  <strong>Retenção acima de 98%:</strong> clientes satisfeitos permanecem por anos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. SEÇÃO PLANOS (#planos)
      ======================================================== */}
      <section id="planos" className="fluid-gutter w-full py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            Planos & Investimento
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Soluções na medida certa para a sua operação.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Sem contratos com multas abusivas ou taxas escondidas. Escolha o plano ideal e converse
            com nossos consultores.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plansList.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-8 transition-all hover:shadow-xl",
                plan.highlight
                  ? "border-brand-green bg-white shadow-lg ring-2 ring-brand-green/20"
                  : "border-slate-200 bg-surface-soft shadow-xs",
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-green px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  {!plan.highlight && (
                    <span className="rounded-md bg-slate-200/60 px-2 py-0.5 text-xs font-semibold text-slate-600">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{plan.description}</p>

                <hr className="my-6 border-slate-200" />

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="size-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button
                  asChild
                  className={cn(
                    "w-full h-11 font-bold",
                    plan.highlight
                      ? "bg-brand-green text-white hover:bg-brand-green/90 shadow-brand-glow"
                      : "bg-slate-900 text-white hover:bg-slate-800",
                  )}
                >
                  <a
                    href={`https://wa.me/5521975812676?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20${plan.name}%20da%20Waybit`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. SEÇÃO BLOG / CONTEÚDO (#blog)
      ======================================================== */}
      <section id="blog" className="fluid-gutter w-full py-20 sm:py-28 bg-surface-soft border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Blog & Conhecimento
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Conteúdos práticos para fazer sua empresa lucrar mais.
            </h2>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <a href="#inicio" className="flex items-center gap-2">
              Ver todos os artigos <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md">
            <span className="text-xs font-bold uppercase text-[#3BBCEC]">Gestão de Varejo</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900 hover:text-[#3BBCEC] transition-colors">
              Como reduzir as perdas de estoque em até 70% com controle de ponto de reposição
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Estratégias simples para evitar rupturas de prateleira e capital de giro parado.
            </p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
              <span>Leitura de 4 min</span>
              <span className="font-semibold text-brand-green">Ler artigo →</span>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md">
            <span className="text-xs font-bold uppercase text-[#FCC42C]">Oficinas & Auto</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900 hover:text-[#FCC42C] transition-colors">
              Checklist digital para ordens de serviço: por que os clientes valorizam a transparência
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Saiba como fotos e histórico digital aumentam o ticket médio de serviços mecânicos.
            </p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
              <span>Leitura de 5 min</span>
              <span className="font-semibold text-brand-green">Ler artigo →</span>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-bold uppercase text-[#FC4242]">Food Service</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900 hover:text-[#FC4242] transition-colors">
              Cardápio integrado e comanda eletrônica: o fim dos atrasos na cozinha
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Dicas para restaurantes aumentarem o giro de mesas sem comprometer a qualidade do prato.
            </p>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
              <span>Leitura de 3 min</span>
              <span className="font-semibold text-brand-green">Ler artigo →</span>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================================
          9. SEÇÃO FAQ (#faq)
      ======================================================== */}
      <section id="faq" className="fluid-gutter w-full py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Tire suas Dúvidas
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Tudo o que você precisa saber antes de contratar o Dominus para sua empresa.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqList.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-brand-blue text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-xl bg-slate-50 p-6 text-center border border-slate-200">
            <HelpCircle className="size-6 text-brand-green mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica?</h4>
            <p className="mt-1 text-xs text-slate-600">
              Nossa equipe comercial está à disposição para analisar a rotina da sua empresa.
            </p>
            <Button asChild size="sm" className="mt-4 bg-brand-green font-bold text-white shadow-xs hover:bg-brand-green/90">
              <a
                href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Dominus"
                target="_blank"
                rel="noreferrer"
              >
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. SEÇÃO CTA FINAL / PRÉ-FOOTER
      ======================================================== */}
      <section className="fluid-gutter w-full bg-surface-soft py-20 sm:py-24 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green mb-6">
            <BarChart3 className="size-7" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-tight">
            Pronto para deixar sua gestão mais leve?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base text-slate-600 leading-relaxed sm:text-lg">
            Converse com especialistas que entendem a rotina real do seu segmento e veja uma
            demonstração personalizada do ERP Dominus.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="h-12 bg-brand-green px-8 font-bold text-white shadow-brand-glow hover:bg-brand-green/90 hover:scale-[1.02] transition-all"
            >
              <a
                href="https://wa.me/5521975812676?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20ERP%20Dominus"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-base"
              >
                <span>Falar com Especialista</span>
                <ArrowRight className="size-5" />
              </a>
            </Button>

            <Button variant="outline" asChild className="h-12 px-6 font-semibold">
              <a href="tel:+5521975812676" className="flex items-center gap-2">
                <Phone className="size-4 text-brand-green" />
                <span>(21) 97581-2676</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. FOOTER COMPLETO (#suporte)
      ======================================================== */}
      <footer id="suporte" className="fluid-gutter w-full bg-[#0F172A] py-16 text-slate-300 sm:py-24">
        <div className="grid gap-12 border-b border-slate-800 pb-14 md:grid-cols-12">
          {/* Logo e Institucional */}
          <div className="md:col-span-4">
            <a href="#inicio" aria-label="Waybit Software">
              <img
                src="/waybit-logo.png"
                alt="Waybit Software"
                className="h-10 w-auto brightness-200 contrast-125"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Tecnologia brasileira desenvolvida para simplificar a gestão e acelerar as vendas de
              varejos, oficinas e restaurantes em todo o país.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sistemas e servidores operando 100% online</span>
            </div>
          </div>

          {/* Links Rápidos Waybit */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Soluções Dominus
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => selectSegment("varejo")}
                  className="hover:text-white transition-colors"
                >
                  Sistema para Varejo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => selectSegment("auto")}
                  className="hover:text-white transition-colors"
                >
                  Sistema para Auto-center
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => selectSegment("food")}
                  className="hover:text-white transition-colors"
                >
                  Sistema para Food
                </button>
              </li>
              <li>
                <a href="#recursos" className="hover:text-white transition-colors">
                  Recursos & Diferenciais
                </a>
              </li>
              <li>
                <a href="#integracoes" className="hover:text-white transition-colors">
                  Integrações Fiscais e TEF
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação In-Page */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Navegação</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-white transition-colors">
                  Seja um Parceiro
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Fale com a Gente */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Fale com a Gente
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-brand-green shrink-0" />
                <a href="tel:+5521975812676" className="hover:text-white transition-colors">
                  (21) 97581-2676
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#3BBCEC] shrink-0" />
                <a
                  href="mailto:comercial@waybit.com.br"
                  className="hover:text-white transition-colors truncate"
                >
                  comercial@waybit.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/5521975812676"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Atendimento
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Atendimento de segunda a sexta, das 08h às 18h. Plantão para clientes contratados.
            </p>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Políticas */}
        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Waybit Software. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#inicio" className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </a>
            <a href="#inicio" className="hover:text-slate-300 transition-colors">
              Termos de Uso
            </a>
            <a href="#suporte" className="hover:text-slate-300 transition-colors">
              Suporte Técnico
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
