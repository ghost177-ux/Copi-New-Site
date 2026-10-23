import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Utensils,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Wifi,
  WifiOff,
  Truck,
  BarChart3,
  Smartphone,
  ShoppingBag,
  Headset,
  Star,
  Package,
  CreditCard,
  ChefHat,
  TableProperties,
  Zap,
  Sparkles,
  Clock,
  ShieldCheck,
  Wine,
  Beer,
  Layers,
  Quote,
  HelpCircle,
  Coins,
  ArrowUpRight,
} from "lucide-react";
import { DominusFoodHeader } from "@/components/DominusFoodHeader";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import { FullFunnelBookingModal } from "@/components/FullFunnelBookingModal";

import foodLogo from "@/assets/food-logo.png";
import dominusIaLogo from "@/assets/Dominus IA.png";
import daOrlaLogo from "@/assets/DaOrla Cafeteria.jpg";
import dominusFoodEcosystemImage from "@/assets/Dominus-Food-1.avif";
import tableManagementImage from "@/assets/Tela de mesas.avif";
import kitchenDisplayImage from "@/assets/KDS.avif";
import pointOfSaleImage from "@/assets/PDV Rápido.png";
import inventoryImage from "@/assets/Controle de estoque.avif";
import dashboardImage from "@/assets/Dashboard.avif";
import bitfoodImage from "@/assets/BITFOOD COMPUTADOR.png";

export const Route = createFileRoute("/dominus-food")({
  head: () => ({
    meta: [
      { title: "Dominus Food — Sistema de Gestão para Botecos e Bares | Waybit" },
      {
        name: "description",
        content:
          "Seu boteco cheio. Sua gestão sob controle. Comanda eletrônica, mesas, cozinha, PDV offline, estoque, delivery e relatórios integrados no Dominus Food.",
      },
      {
        property: "og:title",
        content: "Dominus Food — Sistema de Gestão para Botecos | Waybit",
      },
      {
        property: "og:description",
        content:
          "Comandas, mesas, cozinha, caixa, estoque e delivery conectados. Tudo que o seu boteco precisa para sair do papel e ter controle real da operação.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DominusFoodPage,
});

// ─── DORES DO GESTOR DE BOTECO (Seção 3 da documentação) ─────────────────────
const dores = [
  {
    id: "dor-comandas",
    icon: ClipboardList,
    titulo: "Comandas confusas",
    problema: "Pedidos anotados no papel se perdem na correria.",
    resposta: "Comandas digitais com consumo atualizado em tempo real.",
  },
  {
    id: "dor-cozinha",
    icon: ChefHat,
    titulo: "Erros na cozinha",
    problema: "Pedidos desencontrados atrasam o atendimento.",
    resposta: "Envio direto dos pedidos para a cozinha pelo KDS.",
  },
  {
    id: "dor-operacao",
    icon: WifiOff,
    titulo: "Operação parada",
    problema: "Internet instável ou PDV lento atrapalham as vendas.",
    resposta: "PDV ágil com recursos para operar offline.",
    observacao: "A disponibilidade offline depende da configuração técnica homologada.",
  },
  {
    id: "dor-estoque",
    icon: Package,
    titulo: "Estoque descontrolado",
    problema: "Faltam produtos e aumentam os desperdícios.",
    resposta: "Controle de insumos e alertas de reposição.",
  },
  {
    id: "dor-gestao",
    icon: BarChart3,
    titulo: "Falta de visão financeira",
    problema: "É difícil acompanhar custos, caixa e resultados.",
    resposta: "Relatórios e indicadores para apoiar a gestão.",
  },
];

// ─── TRÊS PILARES ESTRATÉGICOS (Seção 5 da documentação) ─────────────────────
const pilares = [
  {
    id: "pilar-atendimento",
    icon: ChefHat,
    numero: "01",
    titulo: "Atendimento Organizado",
    descricao: "Comandas no celular, cozinha integrada e pedidos sempre atualizados.",
  },
  {
    id: "pilar-controle",
    icon: ClipboardList,
    numero: "02",
    titulo: "Controle do Negócio",
    descricao:
      "Acompanhe estoque, caixa e finanças em tempo real e tome decisões com mais segurança.",
  },
  {
    id: "pilar-operacao",
    icon: Zap,
    numero: "03",
    titulo: "Operação Conectada",
    descricao: "Delivery, pagamentos e integrações em um só sistema, sem complicação.",
  },
];

// ─── FUNCIONALIDADES POR ROTINA (Seção 4 da documentação) ─────────────────────
const funcionalidades = [
  {
    id: "func-mesas",
    icon: TableProperties,
    badge: "Salão & Balcão",
    image: tableManagementImage,
    titulo: "Mesas e Comandas Digitais",
    descricao:
      "Organize o atendimento com mapa de mesas interativo e comandas eletrônicas ágeis. Seu garçom atende mais mesas com menos passos.",
  },
  {
    id: "func-cozinha",
    icon: ChefHat,
    badge: "Produção",
    image: kitchenDisplayImage,
    titulo: "Comunicação Salão–Cozinha (KDS)",
    descricao:
      "Elimine a gritaria e a troca de papéis engordurados. Os pedidos lançados chegam direto na tela da cozinha ou impressora térmica.",
  },
  {
    id: "func-caixa",
    icon: CreditCard,
    badge: "Frente de Caixa",
    image: pointOfSaleImage,
    titulo: "PDV Rápido e Operação Offline",
    descricao:
      "Pensado para a rotina acelerada do boteco. Registra vendas com rapidez, integra com maquininhas e não para mesmo se a internet cair.",
    nota: "* O funcionamento offline e a sincronização dependem da configuração técnica instalada.",
  },
  {
    id: "func-estoque",
    icon: Package,
    badge: "Suprimentos",
    image: inventoryImage,
    titulo: "Estoque Inteligente & Dominus IA",
    descricao:
      "Monitore entradas, saídas e estoque mínimo. Crie combos promocionais de cervejas e petiscos com baixa automática por ficha técnica.",
    nota: "* Dominus IA é uma solução avançada de IA; consulte condições e disponibilidade por plano.",
  },
  {
    id: "func-delivery",
    icon: Truck,
    badge: "Canais Digitais",
    image: bitfoodImage,
    titulo: "Delivery Unificado: iFood & Bitfood",
    descricao:
      "Venda delivery sem bagunça de telas. Centralize pedidos do iFood e do seu cardápio próprio Bitfood no mesmo sistema.",
    nota: "* Condições de integração e planos de parceiros devem ser confirmados com a equipe comercial.",
  },
  {
    id: "func-relatorios",
    icon: BarChart3,
    badge: "Gestão Estratégica",
    image: dashboardImage,
    titulo: "Relatórios e Indicadores em Tempo Real",
    descricao:
      "Tenha clareza total dos números da sua empresa. Acompanhe vendas, faturamento por turno e produtos mais lucrativos pelo celular ou PC.",
  },
];

// ─── PLANOS FOOD REAIS DO SISTEMA (Alinhados com /planos?segmento=food) ──────
const planosFood = [
  {
    id: "fit-food",
    nome: "FIT FOOD",
    mensal: "199,00",
    anual: "165,00",
    faturamento: "Faturamento até 60 mil/mês",
    pdvs: "2 PDVs",
    descricao: "Ideal para botecos e petiscarias em fase de estruturação e saída do papel.",
    destaques: [
      "Gestão de Vendas e Mesas",
      "Gestão de Estoque Completo",
      "NFC-e e NF-e Ilimitados",
      "PDV Offline Homologado",
      "Ficha Técnica e Combos",
      "Suporte via Chat, E-mail e WhatsApp",
    ],
    popular: false,
  },
  {
    id: "basic-food",
    nome: "BASIC FOOD",
    mensal: "299,00",
    anual: "249,00",
    faturamento: "Faturamento de 60 a 120 mil/mês",
    pdvs: "PDVs Ilimitados",
    descricao: "O plano mais equilibrado para botecos movimentados com salão e balcão cheios.",
    destaques: [
      "Tudo do FIT FOOD",
      "PDVs e Caixas Ilimitados",
      "Comanda Eletrônica Mobile",
      "Integração com iFood*",
      "Dashboard Online em Tempo Real",
      "Treinamento ao Vivo da Equipe",
    ],
    popular: true,
  },
  {
    id: "full-food",
    nome: "FULL FOOD",
    mensal: "449,00",
    anual: "374,00",
    faturamento: "Faturamento de 120 a 200 mil/mês",
    pdvs: "PDVs Ilimitados",
    descricao: "Gestão robusta para estabelecimentos com alto giro, cozinha rápida e delivery.",
    destaques: [
      "Tudo do BASIC FOOD",
      "Integração Completa Salão-Cozinha (KDS)",
      "Gestão Financeira e Conciliação OFX",
      "Controle de Inventários Avançado",
      "Suporte Prioritário Waybit",
      "Usuários Ilimitados",
    ],
    popular: false,
  },
  {
    id: "vip-food",
    nome: "VIP FOOD",
    mensal: "Consulte",
    anual: "Consulte",
    faturamento: "Faturamento acima de 200 mil/mês",
    pdvs: "PDVs Ilimitados",
    descricao: "Solução sob medida para grandes bares, franquias ou redes de alimentação.",
    destaques: [
      "Tudo do FULL FOOD",
      "Acompanhamento Executivo Exclusivo",
      "Módulo Dominus IA para Estoque e CMV*",
      "Multifilial Centralizada",
      "SLA de Atendimento Dedicado",
      "Implantação Personalizada",
    ],
    popular: false,
  },
];

// ─── PROVA SOCIAL E CLIENTES (Seção 6 da documentação) ───────────────────────
const depoimentos = [
  {
    id: "dep-daorla",
    cliente: "DaOrla Café",
    tipo: "Cafeteria & Alimentação",
    logo: daOrlaLogo,
    texto:
      "Acesso rápido e seguro a informações estratégicas para a tomada de decisão do nosso dia a dia.",
    destaque: "Gestão de relatórios e controle diário",
  },
  {
    id: "dep-batata",
    cliente: "Batata Recheada do França",
    tipo: "Operação Delivery & Salão",
    texto:
      "Conseguimos integrar a operação de delivery, o controle financeiro e a baixa de estoque sem ter que redigitar pedidos em vários sistemas.",
    destaque: "Integração delivery e estoque",
  },
  {
    id: "dep-p22",
    cliente: "P22",
    tipo: "Bar & Gastronomia",
    texto:
      "O fechamento de contas direto nas maquininhas e a clareza dos relatórios facilitaram muito a conferência e o fechamento de caixa.",
    destaque: "Comanda e maquininhas integradas",
  },
  {
    id: "dep-hedon",
    cliente: "Hedon Bistro",
    tipo: "Restaurante & Salão",
    texto:
      "Os pedidos chegam à cozinha logo após serem lançados pelo garçom no smartphone, reduzindo o tempo de espera dos clientes.",
    destaque: "Fluxo ágil salão–cozinha",
  },
  {
    id: "dep-casadapraia",
    cliente: "Casa da Praia",
    tipo: "Bar & Petiscaria",
    texto:
      "O sistema trouxe muita facilidade no atendimento às mesas e agilizou o fluxo de pedidos no rush de fim de semana.",
    destaque: "Atendimento rápido em dias cheios",
  },
];

// ─── FAQ COMPLETO (Seção 8 da documentação) ──────────────────────────────────
const faqs = [
  {
    id: "faq-1",
    pergunta: "1. O Dominus Food é indicado para botecos?",
    resposta:
      "Sim. A Waybit apresenta o Dominus Food com recursos sob medida para a rotina de botecos, bares, choperias e petiscarias: controle de mesas e balcão, comandas eletrônicas no celular, envio para a cozinha, caixa rápido, estoque e delivery. Nossa equipe pode demonstrar como cada rotina se encaixa no seu estabelecimento.",
  },
  {
    id: "faq-2",
    pergunta: "2. O sistema permite controlar mesas e comandas?",
    resposta:
      "Sim. A página oficial apresenta mapa visual de mesas e balcão, além de comanda eletrônica no aplicativo do garçom para registrar pedidos em tempo real, acompanhar o consumo acumulado e fechar a conta com divisão facilitada por pessoa.",
  },
  {
    id: "faq-3",
    pergunta: "3. Os pedidos podem ser enviados para a cozinha?",
    resposta:
      "Segundo a Waybit, os pedidos registrados pelo garçom no smartphone ou tablet podem ser encaminhados automaticamente para a tela da cozinha (KDS) ou para impressoras térmicas, conectando o atendimento diretamente à preparação sem necessidade de comandas em papel.",
  },
  {
    id: "faq-4",
    pergunta: "4. Como o Dominus Food ajuda no controle de estoque?",
    resposta:
      "O Dominus Food divulga acompanhamento de estoque com baixa automática por ficha técnica, criação de combos de petiscos e bebidas, e alertas inteligentes de reposição mínima, oferecendo visibilidade para evitar compras no improviso ou falta de insumos no meio do expediente.",
  },
  {
    id: "faq-5",
    pergunta: "5. Posso usar o caixa quando a internet cair?",
    resposta:
      "A Waybit informa funcionamento offline do PDV em determinadas configurações homologadas, permitindo continuar emitindo vendas e notas em contingência mesmo durante instabilidade de conexão. O comportamento exato depende da instalação e pode ser verificado em uma demonstração.",
  },
  {
    id: "faq-6",
    pergunta: "6. O Dominus Food se integra ao iFood?",
    resposta:
      "A página oficial anuncia integração com o iFood para recebimento centralizado de pedidos e também disponibiliza a plataforma própria Bitfood para cardápio digital sem taxas de intermediação. As condições e planos de integração devem ser confirmados com a equipe comercial.",
  },
  {
    id: "faq-7",
    pergunta: "7. O sistema se conecta a maquininhas de cartão?",
    resposta:
      "A Waybit informa integração com os principais adquirentes e equipamentos do mercado, incluindo Stone, Rede, Getnet, Cielo e PagSeguro, entre outros. Isso permite fechar a conta na maquininha com baixa automática no sistema, sem digitação dupla de valores.",
  },
  {
    id: "faq-8",
    pergunta: "8. Posso acompanhar caixa e relatórios?",
    resposta:
      "Sim. O Dominus Food apresenta relatórios gerenciais detalhados, controle de entradas e saídas de caixa, curva de vendas e visualização de faturamento em tempo real, permitindo ao gestor acompanhar os resultados da empresa de onde estiver.",
  },
  {
    id: "faq-9",
    pergunta: "9. O sistema oferece suporte técnico?",
    resposta:
      "A Waybit anuncia suporte multicanal com atendimento técnico 24h, prestando assistência via WhatsApp, telefone, chat e e-mail, além de treinamento ao vivo da equipe para implantação sem atritos.",
  },
  {
    id: "faq-10",
    pergunta: "10. O Dominus IA está disponível para meu boteco?",
    resposta:
      "A Waybit apresenta uma solução de inteligência artificial voltada para gestão de estoque, entrada automatizada de notas fiscais, conferência de contagem, cálculo de CMV e análise de ruptura. Consulte a equipe comercial para saber a disponibilidade e as condições de contratação por plano.",
  },
  {
    id: "faq-11",
    pergunta: "11. Quanto custa o Dominus Food?",
    resposta:
      "Os planos do Dominus Food começam a partir de R$ 165,00/mês no plano anual (FIT FOOD) e contam com opções completas para diferentes faixas de faturamento e volumes de terminais. Você pode consultar todos os detalhes na nossa página exclusiva de planos ou solicitar uma proposta personalizada com um especialista.",
  },
  {
    id: "faq-12",
    pergunta: "12. Como faço para conhecer o sistema?",
    resposta:
      "O fluxo indicado é agendar uma demonstração gratuita sem compromisso. Nossa equipe apresenta as telas do sistema ao vivo, tira todas as suas dúvidas operacionais e ajuda a escolher o plano ideal para a rotina do seu boteco.",
  },
];

// Componente individual de FAQ
function FaqAccordionItem({
  pergunta,
  resposta,
  isOpen,
  onToggle,
}: {
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const safeId = pergunta.slice(0, 25).replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

  return (
    <div className="border-b border-[#FC4242]/15 last:border-b-0 transition-colors">
      <button
        type="button"
        id={`faq-btn-${safeId}`}
        aria-controls={`faq-panel-${safeId}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 sm:py-5 text-left font-semibold text-foreground transition-colors hover:text-[#FC4242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
      >
        <span className="fluid-body font-bold leading-snug">{pergunta}</span>
        <div
          className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-[#FC4242] text-white" : "bg-[#FC4242]/10 text-[#FC4242]"
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div
          id={`faq-panel-${safeId}`}
          role="region"
          aria-labelledby={`faq-btn-${safeId}`}
          className="pb-5 pr-4 fluid-body text-muted-foreground leading-relaxed animate-in fade-in-50 duration-200"
        >
          {resposta}
        </div>
      )}
    </div>
  );
}

function DominusFoodPage() {
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"anual" | "mensal">("anual");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [activeRotinaTab, setActiveRotinaTab] = useState(0);

  // Carrega o script de incorporação do Full Funnel de forma controlada sem duplicação
  useEffect(() => {
    const scriptId = "fullfunnel-form-embed-js";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://links.fullfunnel.app/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      {/* ─── CONTÊINER UNIFICADO HEADER + HERO ─── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #120303 0%, #1f0707 35%, #2a0a0a 65%, #120303 100%)",
        }}
      >
        {/* Luzes e gradientes sutis de ambientação de boteco abrangendo Header e Hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(252,66,66,0.22) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 45% at 15% 80%, rgba(252,66,66,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Header exclusivo para Dominus Food com fundo transparente integrado */}
        <DominusFoodHeader
          onOpenSpecialist={() => setSpecialistOpen(true)}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* ─── 1. HERO SECTION ─── */}
        <section
          id="hero-dominus-food"
          className="relative w-full pt-[60px] pb-14 sm:pb-20 lg:pb-28"
        >
          <div className="landing-page-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Lado Esquerdo: Mensagem e Ação */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Badge de posicionamento */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/10 px-4 py-1.5 mb-5 sm:mb-6">
                  <Wine size={14} className="text-[#FC4242]" aria-hidden="true" />
                  <span className="fluid-caption font-bold uppercase tracking-wider text-[#FC4242]">
                    Dominus Food • Sistema para Botecos & Bares
                  </span>
                </div>

                {/* Headline Oficial Dominus Food */}
                <h1 className="font-display fluid-h1 font-extrabold tracking-tight text-white leading-[1.1]">
                  <span className="block text-white">Quem está no controle:</span>
                  <span className="block text-[#FC4242]">você ou seu boteco?</span>
                </h1>

                {/* Subtítulo orientativo */}
                <p className="mt-5 sm:mt-6 fluid-body-lg text-white/80 leading-relaxed max-w-2xl">
                  Se a correria do dia a dia dita suas decisões, está na hora de virar esse jogo. Com o Dominus Food, tenha mais controle sobre pedidos, comandas, estoque e caixa, sem deixar a correria comandar seu negócio.
                </p>

                {/* Micro-prova / Badges de confiança (Desktop) */}
                <div className="mt-6 hidden lg:flex flex-wrap items-center justify-start gap-4 text-xs font-medium text-white/70">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#FC4242]" />
                    Comanda móvel no celular
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#FC4242]" />
                    PDV funciona sem internet
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#FC4242]" />
                    Suporte técnico 24h
                  </span>
                </div>

                <p className="mt-6 hidden lg:block text-xs text-white/50">
                  Sem taxas de adesão abusivas • Demonstração gratuita e sem compromisso
                </p>
              </div>

              {/* Lado Direito: Formulário Oficial Full Funnel Dominus Food */}
              <div className="lg:col-span-5 relative flex w-full flex-col items-center justify-center lg:self-stretch">
                {/* Card branco com bordas de 30px e sombra externa vermelha baseada em #FC4242 */}
                <div
                  className="relative w-full max-w-[500px] rounded-[30px] overflow-hidden border-0 pt-[25px]"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 0px 10px 5px #FC4242",
                  }}
                >
                  <iframe
                    src="https://links.fullfunnel.app/widget/form/CXAOoyZbuAZR4FXznTAR"
                    style={{
                      width: "100%",
                      height: "519px",
                      border: "none",
                      display: "block",
                    }}
                    id="inline-CXAOoyZbuAZR4FXznTAR"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-activation-type="alwaysActivated"
                    data-deactivation-type="neverDeactivate"
                    data-height="519"
                    data-form-id="CXAOoyZbuAZR4FXznTAR"
                    data-layout-iframe-id="inline-CXAOoyZbuAZR4FXznTAR"
                    title="Form Pag Dominus Food - Site Waybit"
                  />
                </div>

                {/* Micro-prova / Badges de confiança no Mobile (abaixo do formulário) */}
                <div className="mt-6 flex lg:hidden flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/70">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#FC4242]" />
                    Comanda móvel no celular
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#FC4242]" />
                    PDV funciona sem internet
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-[#FC4242]" />
                    Suporte técnico 24h
                  </span>
                </div>

                <p className="mt-4 block lg:hidden text-center text-xs text-white/50">
                  Sem taxas de adesão abusivas • Demonstração gratuita e sem compromisso
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="flex-1 w-full">
        {/* ─── 2. APRESENTAÇÃO DO ECOSSISTEMA DOMINUS FOOD ─── */}
        <section id="solucao-dominus-food" className="w-full bg-background py-14 sm:py-20 lg:py-24">
          <div className="landing-page-container">
            <div className="mx-auto mb-8 w-full max-w-7xl text-center sm:mb-10">
              <div
                className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <Layers size={13} aria-hidden="true" />
                <span>DOMINUS FOOD</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Tudo o que seu boteco precisa, em um só sistema.
              </h2>
              <p className="mx-auto mt-3.5 w-full max-w-4xl fluid-body leading-relaxed text-muted-foreground">
                Do atendimento ao caixa, acompanhe sua operação com ferramentas que trabalham juntas
                para facilitar a gestão do seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative mx-auto flex w-full max-w-[1020px] items-center justify-center overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(252,66,66,0.12) 0%, rgba(252,66,66,0.06) 42%, transparent 72%)",
                  }}
                />
                <img
                  src={dominusFoodEcosystemImage}
                  alt="Ecossistema Dominus Food em computadores, telas de operação e dispositivos móveis"
                  className="relative z-10 block h-auto w-full object-contain"
                  decoding="async"
                />
              </div>

              <div className="flex w-full flex-col gap-4 sm:gap-5">
                {pilares.map((pilar) => {
                  const Icon = pilar.icon;
                  return (
                    <div
                      key={pilar.id}
                      className="flex min-h-28 w-full items-center gap-4 rounded-2xl border border-[#FC4242]/20 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FC4242]/50 hover:shadow-md sm:gap-5 sm:p-5"
                    >
                      <div
                        className="flex size-12 shrink-0 items-center justify-center rounded-xl sm:size-14"
                        style={{ backgroundColor: "#FC424215" }}
                      >
                        <Icon size={25} style={{ color: "#FC4242" }} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display fluid-h3 font-bold leading-tight text-foreground">
                          {pilar.titulo}
                        </h3>
                        <p className="mt-1 fluid-secondary leading-relaxed text-muted-foreground">
                          {pilar.descricao}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="shrink-0 font-display text-3xl font-extrabold text-[#FC4242]/20 sm:text-4xl"
                      >
                        {pilar.numero}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. DORES DO GESTOR DE BOTECO (Problemas x Respostas) ─── */}
        <section id="dores-dominus-food" className="w-full py-16 sm:py-20 bg-background">
          <div className="landing-page-container">
            <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
              <div
                className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <span>Os desafios do dia a dia</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                O que trava a operação do seu boteco
              </h2>
              <p className="mt-3.5 fluid-body text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Quem atende balcão e salão movimentados sabe: ferramentas improvisadas geram perdas,
                pedidos trocados e fechamento de caixa com dor de cabeça.
              </p>
            </div>

            <div
              role="region"
              aria-label="Desafios e soluções do Dominus Food"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(252,66,66,0.35)_rgba(252,66,66,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2"
              tabIndex={0}
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-4 min-[1850px]:w-full">
                {dores.map((dor) => {
                  const Icon = dor.icon;
                  return (
                    <article
                      key={dor.id}
                      className="flex min-h-[320px] w-[min(84vw,320px)] shrink-0 snap-start flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FC4242]/40 hover:shadow-md min-[1850px]:min-w-[250px] min-[1850px]:flex-1 min-[1850px]:basis-0"
                    >
                      <div
                        className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "#FC424218" }}
                      >
                        <Icon size={23} style={{ color: "#FC4242" }} aria-hidden="true" />
                      </div>

                      <h3 className="font-display fluid-h3 font-bold leading-tight text-foreground">
                        {dor.titulo}
                      </h3>
                      <p className="mt-2 fluid-secondary leading-relaxed text-muted-foreground">
                        {dor.problema}
                      </p>

                      <div className="mt-auto border-t border-border pt-4">
                        <p className="mb-1.5 flex items-center gap-1.5 fluid-caption font-bold text-[#FC4242]">
                          <CheckCircle2 size={14} className="shrink-0" aria-hidden="true" />
                          Com o Dominus Food:
                        </p>
                        <p className="fluid-secondary leading-relaxed text-foreground">
                          {dor.resposta}
                        </p>
                        {dor.observacao && (
                          <p className="mt-2 fluid-legal leading-relaxed text-muted-foreground">
                            {dor.observacao}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Chamada para demonstração rápida */}
            <div className="mt-10 sm:mt-12 text-center">
              <button
                type="button"
                onClick={() => setSpecialistOpen(true)}
                className="inline-flex min-h-14 w-full max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2 sm:w-auto sm:px-8"
              >
                <span className="text-center">
                  Descubra como eliminar esses gargalos na sua operação
                </span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* ─── 4. FUNCIONALIDADES DETALHADAS POR ROTINA ─── */}
        <section
          id="funcionalidades-dominus-food"
          className="w-full py-16 sm:py-24 bg-background border-t border-border"
        >
          <div className="landing-page-container">
            <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold mb-3 sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <Utensils size={13} aria-hidden="true" />
                <span>Funcionalidades do Dominus Food</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Recursos pensados para cada momento da sua rotina
              </h2>
              <p className="mt-3.5 fluid-body text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Tudo o que sua equipe precisa para operar com rapidez no atendimento e o que o
                gestor precisa para tomar decisões fundamentadas.
              </p>
            </div>

            <div
              aria-label="Funcionalidades do Dominus Food"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(252,66,66,0.35)_rgba(252,66,66,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
              role="region"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                  event.preventDefault();
                  event.currentTarget.scrollBy({
                    left: event.key === "ArrowRight" ? 320 : -320,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <div className="flex w-max gap-6 lg:grid lg:w-full lg:grid-cols-3 lg:gap-6">
                {funcionalidades.map((func) => {
                  const Icon = func.icon;
                  return (
                    <div
                      key={func.id}
                      className="flex w-[min(84vw,360px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface-subtle/40 p-0 transition-all duration-300 hover:border-[#FC4242]/40 hover:shadow-lg lg:w-auto"
                    >
                      <div className="relative aspect-[16/9] w-full bg-white">
                        <img
                          src={func.image}
                          alt={`Tela do Dominus Food: ${func.titulo}`}
                          className="block h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-2">
                          <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm"
                            style={{ color: "#FC4242" }}
                          >
                            <Icon size={24} aria-hidden="true" />
                          </div>
                          <span className="max-w-[calc(100%-4rem)] rounded-full border border-[#FC4242]/20 bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FC4242] shadow-sm">
                            {func.badge}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <h3 className="mb-3 font-display fluid-h3 font-bold leading-tight text-foreground">
                          {func.titulo}
                        </h3>
                        <p className="fluid-secondary leading-relaxed text-muted-foreground">
                          {func.descricao}
                        </p>

                        {func.nota && (
                          <p className="mt-4 fluid-legal italic text-muted-foreground/75">
                            {func.nota}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. DESTAQUE DOMINUS IA — GESTÃO INTELIGENTE DE ESTOQUE ─── */}
        <section
          id="dominus-ia-food"
          className="w-full py-14 sm:py-20 border-t border-border"
          style={{
            background: "linear-gradient(135deg, #160404 0%, #200707 50%, #160404 100%)",
          }}
        >
          <div className="landing-page-container">
            <div className="max-w-4xl mx-auto rounded-3xl border border-[#FC4242]/30 bg-black/40 p-6 sm:p-10 lg:p-12 text-white backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/15 px-3.5 py-1 w-fit">
                    <Sparkles size={14} className="text-[#FC4242]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FC4242]">
                      Tecnologia Waybit
                    </span>
                  </div>

                  <h3 className="font-display fluid-h2 font-extrabold tracking-tight text-white leading-tight">
                    Dominus IA: Inteligência Artificial na gestão de estoque
                  </h3>

                  <p className="fluid-body text-white/80 leading-relaxed">
                    A Waybit desenvolveu o Dominus IA para apoiar as tarefas mais críticas do estoque:
                    leitura e entrada automatizada de notas fiscais, conferência de contagens, cálculo
                    do Custo de Mercadorias Vendidas (CMV) e análise preditiva de ruptura.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 size={14} className="text-[#FC4242] shrink-0" />
                      <span>Entrada ágil de NF-e de fornecedores</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 size={14} className="text-[#FC4242] shrink-0" />
                      <span>Análise de margem e CMV por porção</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 size={14} className="text-[#FC4242] shrink-0" />
                      <span>Alertas para evitar falta de insumos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 size={14} className="text-[#FC4242] shrink-0" />
                      <span>Mais precisão nas compras da semana</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-white/50 italic mt-1">
                    * Módulo avançado sujeito a plano e disponibilidade. Consulte a equipe comercial para saber mais.
                  </p>
                </div>

                <div className="md:col-span-4 flex flex-col items-center justify-center text-center gap-4 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
                  <img
                    src={dominusIaLogo}
                    alt="Dominus IA"
                    className="h-16 w-auto object-contain brightness-110"
                  />
                  <p className="text-xs text-white/70">
                    Automação inteligente para transformar a rotina do seu estabelecimento.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSpecialistOpen(true)}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-5 font-bold text-xs text-white shadow-md transition-all duration-300 hover:scale-[1.03]"
                    style={{ backgroundColor: "#FC4242" }}
                  >
                    <span>Saber mais sobre o Dominus IA</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. INTEGRAÇÕES DE PONTA A PONTA ─── */}
        <section
          id="integracoes-dominus-food"
          className="w-full py-14 sm:py-20 border-t border-border bg-surface-subtle/30"
        >
          <div className="landing-page-container">
            <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14">
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Conectado às ferramentas que o seu boteco já utiliza
              </h2>
              <p className="mx-auto mt-3 max-w-4xl fluid-body text-muted-foreground leading-relaxed">
                Integrações homologadas com os principais players de pagamento, delivery e hardware
                fiscal do mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  id: "int-ifood",
                  icon: Truck,
                  titulo: "iFood & Bitfood",
                  texto:
                    "Integração de pedidos anunciada com iFood e plataforma Bitfood própria para vender online sem taxas de terceiros.",
                },
                {
                  id: "int-maquininhas",
                  icon: CreditCard,
                  titulo: "Maquininhas de Cartão (TEF)",
                  texto:
                    "Integração com Stone, Rede, Getnet, Cielo, PagSeguro e outros. Feche a conta direto na máquina sem digitação manual.",
                },
                {
                  id: "int-offline",
                  icon: Wifi,
                  titulo: "PDV Offline & Sincronização",
                  texto:
                    "Operação homologada para registrar vendas sem conexão de internet em configurações suportadas pela Waybit.",
                },
                {
                  id: "int-fiscal",
                  icon: ClipboardList,
                  titulo: "Emissão Fiscal Completa",
                  texto:
                    "Emissão ágil de NFC-e e NF-e com suporte a contingência fiscal para manter a conformidade da empresa sem atritos.",
                },
                {
                  id: "int-hardwares",
                  icon: Smartphone,
                  titulo: "Hardware & Impressoras",
                  texto:
                    "Compatível com celulares Android/iOS, tablets, monitores KDS, computadores e impressoras térmicas de produção e balcão.",
                },
                {
                  id: "int-suporte",
                  icon: Headset,
                  titulo: "Suporte Técnico 24h",
                  texto:
                    "Atendimento multicanal via WhatsApp, telefone, chat e e-mail com treinamento ao vivo para sua equipe.",
                },
              ].map((integ) => {
                const Icon = integ.icon;
                return (
                  <div
                    key={integ.id}
                    className="flex gap-4 rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-[#FC4242]/40 hover:shadow-md"
                  >
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "#FC424218" }}
                    >
                      <Icon size={20} style={{ color: "#FC4242" }} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm sm:text-base leading-tight mb-1.5">
                        {integ.titulo}
                      </h4>
                      <p className="fluid-caption text-muted-foreground leading-relaxed">
                        {integ.texto}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 7. PROVA SOCIAL, INDICADORES & CLIENTES REAIS ─── */}
        <section
          id="prova-social-dominus-food"
          className="w-full py-16 sm:py-24 border-t border-border bg-background"
        >
          <div className="landing-page-container">
            {/* Números oficiais divulgados pela Waybit */}
            <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-surface-subtle/50 p-6 sm:p-10 mb-14">
              <p className="fluid-caption font-bold uppercase tracking-wider text-muted-foreground text-center mb-8">
                Indicadores oficiais divulgados pela Waybit*
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {[
                  { id: "met-1", valor: "+1.000", label: "Clientes atendidos no Brasil" },
                  { id: "met-2", valor: "+15 anos", label: "Experiência em gestão comercial" },
                  { id: "met-3", valor: "9,6 / 10", label: "Nota de satisfação divulgada" },
                  { id: "met-4", valor: "+30%", label: "Economia de tempo relatada" },
                ].map((item) => (
                  <div key={item.id} className="flex flex-col items-center text-center gap-1.5">
                    <span
                      className="font-display metric-value font-extrabold tracking-tight"
                      style={{ color: "#FC4242" }}
                    >
                      {item.valor}
                    </span>
                    <span className="fluid-caption text-muted-foreground font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center fluid-legal text-muted-foreground/60 italic max-w-2xl mx-auto">
                * Indicadores comerciais divulgados na página oficial da Waybit. Não representam garantia de resultado quantitativo para novos estabelecimentos.
              </p>
            </div>

            {/* Depoimentos e Cases Documentados */}
            <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
              <h3 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Quem já confia na tecnologia da Waybit
              </h3>
              <p className="mx-auto mt-3 max-w-4xl fluid-body text-muted-foreground leading-relaxed">
                Depoimentos e relatos de clientes do segmento de alimentação que transformaram a sua operação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {depoimentos.slice(0, 3).map((dep) => (
                <div
                  key={dep.id}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-surface-subtle/40 p-6 sm:p-7 transition-all duration-300 hover:border-[#FC4242]/40 hover:shadow-md"
                >
                  <div>
                    <Quote size={24} className="text-[#FC4242]/30 mb-3" aria-hidden="true" />
                    <p className="fluid-secondary text-foreground leading-relaxed italic mb-6">
                      "{dep.texto}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-foreground">{dep.cliente}</p>
                      <p className="text-[11px] text-muted-foreground">{dep.tipo}</p>
                    </div>
                    {dep.logo && (
                      <img
                        src={dep.logo}
                        alt={dep.cliente}
                        className="size-10 rounded-full object-cover border border-border shrink-0"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Linha com outros relatos citados */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {depoimentos.slice(3).map((dep) => (
                <div
                  key={dep.id}
                  className="rounded-xl border border-border bg-surface-subtle/30 p-5 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-[11px] font-bold text-[#FC4242] uppercase tracking-wide">
                      {dep.destaque}
                    </span>
                    <p className="text-xs text-foreground mt-1">"{dep.texto}"</p>
                    <p className="text-[11px] font-semibold text-muted-foreground mt-1">
                      — {dep.cliente} ({dep.tipo})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. SEÇÃO COMERCIAL DE PLANOS E INVESTIMENTOS (Requisito Principal) ─── */}
        <section
          id="planos-dominus-food"
          className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28 border-t border-[#FC4242]/20"
          style={{
            background:
              "linear-gradient(135deg, #160404 0%, #250808 45%, #2e0b0b 65%, #160404 100%)",
          }}
        >
          {/* Fundo luminoso */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(252,66,66,0.20) 0%, transparent 70%)",
            }}
          />

          <div className="landing-page-container relative z-10">
            <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FC4242]/40 bg-[#FC4242]/15 px-4 py-1.5 mb-4">
                <Star size={13} className="text-[#FC4242]" aria-hidden="true" />
                <span className="fluid-secondary font-bold uppercase tracking-wider text-[#FC4242]">
                  Investimento Transparente
                </span>
              </div>

              {/* Título e Subtítulo Sugeridos na Documentação */}
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-white leading-tight">
                Conheça os planos do Dominus Food
              </h2>
              <p className="mt-4 fluid-body text-white/80 leading-relaxed max-w-4xl mx-auto">
                Encontre uma opção para a realidade do seu boteco e descubra como começar a organizar
                sua gestão com o Dominus Food.
              </p>

              {/* Seletor de Periodicidade: Mensal / Anual */}
              <div className="mt-8 inline-flex items-center rounded-xl border border-white/20 bg-black/40 p-1 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setBillingCycle("anual")}
                  className={`rounded-lg px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    billingCycle === "anual"
                      ? "bg-[#FC4242] text-white shadow-md font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Anual (Desconto especial)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("mensal")}
                  className={`rounded-lg px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    billingCycle === "mensal"
                      ? "bg-[#FC4242] text-white shadow-md font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Mensal
                </button>
              </div>
            </div>

            {/* Grid com os 4 Planos Oficiais do Food */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
              {planosFood.map((plano) => {
                const preco = billingCycle === "anual" ? plano.anual : plano.mensal;
                return (
                  <div
                    key={plano.id}
                    className={`relative flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] ${
                      plano.popular
                        ? "border-[#FC4242] bg-[#2d0909]/90 shadow-2xl ring-2 ring-[#FC4242]/50"
                        : "border-white/15 bg-black/40 hover:border-white/30"
                    }`}
                  >
                    {plano.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
                        style={{ backgroundColor: "#FC4242" }}>
                        Mais Escolhido
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display font-extrabold text-lg text-white">
                          {plano.nome}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#FC4242] rounded-md bg-[#FC4242]/15 px-2 py-0.5">
                          {plano.pdvs}
                        </span>
                      </div>

                      <p className="text-xs text-white/60 min-h-[32px] leading-snug mb-4">
                        {plano.descricao}
                      </p>

                      {/* Bloco de Preço */}
                      <div className="py-4 border-y border-white/10 mb-4">
                        <div className="flex items-baseline gap-1 text-white">
                          {preco !== "Consulte" ? (
                            <>
                              <span className="text-xs font-semibold text-white/70">R$</span>
                              <span className="font-display text-3xl font-extrabold tracking-tight">
                                {preco}
                              </span>
                              <span className="text-xs text-white/60 font-medium">/mês</span>
                            </>
                          ) : (
                            <span className="font-display text-2xl font-extrabold text-white">
                              Sob Consulta
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/50 mt-1">{plano.faturamento}</p>
                      </div>

                      {/* Lista de Recursos */}
                      <ul className="flex flex-col gap-2 mb-6 text-xs text-white/80">
                        {plano.destaques.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0 text-[#FC4242]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/planos"
                      search={{ segmento: "food" }}
                      className={`inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                        plano.popular
                          ? "text-white shadow-md hover:brightness-110"
                          : "border border-white/25 bg-white/10 text-white hover:bg-white/20"
                      }`}
                      style={{
                        backgroundColor: plano.popular ? "#FC4242" : undefined,
                      }}
                    >
                      <span>Ver detalhes deste plano</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bloco de Ação Central com Botão de Redirecionamento e Aviso de Exclusividade */}
            <div className="max-w-2xl mx-auto rounded-2xl border border-white/20 bg-black/50 p-6 sm:p-8 text-center backdrop-blur-md">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Quer ver a tabela comparativa detalhada de todos os recursos?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                Acesse a página completa de planos da Waybit filtrada exclusivamente para o segmento Food,
                com tabela comparativa de mais de 25 funcionalidades, regras fiscais e opções de faturamento.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <Link
                  to="/planos"
                  search={{ segmento: "food" }}
                  id="planos-food-cta-ver-planos"
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-8 font-bold fluid-btn text-white shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    backgroundColor: "#FC4242",
                    boxShadow: "0 8px 32px rgba(252,66,66,0.45)",
                  }}
                >
                  <span>Ver planos completos do Dominus Food</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <a
                  id="planos-food-cta-especialista"
                  href="https://api.whatsapp.com/send/?phone=5521975812676&text=Ol%C3%A1%2C+vim+do+site+e+quero+saber+mais+sobre+o+Dominus&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 font-bold fluid-btn text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/40 active:scale-[0.98] no-underline"
                >
                  <span>Falar com um especialista</span>
                </a>
              </div>

              {/* Nota explicativa de exclusividade exigida pelo requisito comercial */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/05 px-3 py-1.5 text-xs text-white/60">
                <CheckCircle2 size={13} className="text-[#FC4242]" />
                <span>
                  O link exibe exclusivamente as condições e planos do Dominus Food (Varejo e Autocenter ficam ocultos).
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ COMPLETO COM TODAS AS 12 PERGUNTAS ─── */}
        <section
          id="faq-dominus-food"
          className="w-full py-16 sm:py-24 bg-background border-t border-border"
        >
          <div className="landing-page-container">
            <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-secondary font-bold mb-3 sm:mb-4"
                style={{ backgroundColor: "#FC42420D", color: "#FC4242" }}
              >
                <HelpCircle size={13} aria-hidden="true" />
                <span>Tire Suas Dúvidas</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Perguntas frequentes de gestores de boteco
              </h2>
              <p className="mt-3.5 fluid-body text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Respostas diretas e responsáveis sobre funcionalidades, funcionamento offline,
                equipamentos, maquininhas, preços e suporte.
              </p>
            </div>

            <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-surface-subtle/50 px-5 sm:px-8 py-3">
              {faqs.map((faq, idx) => (
                <FaqAccordionItem
                  key={faq.id}
                  pergunta={faq.pergunta}
                  resposta={faq.resposta}
                  isOpen={activeFaqIndex === idx}
                  onToggle={() => toggleFaq(idx)}
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground">
                Ainda tem alguma dúvida específica sobre a sua rotina?{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=5521975812676&text=Ol%C3%A1%2C+vim+do+site+e+quero+saber+mais+sobre+o+Dominus&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FC4242] hover:underline"
                >
                  Converse agora com nossa equipe comercial
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ─── 10. CTA FINAL DE CONVERSÃO ─── */}
        <section
          id="cta-final-dominus-food"
          className="w-full py-16 sm:py-24 border-t border-border bg-surface-subtle/40"
        >
          <div className="landing-page-container">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5 sm:gap-6">
              <div
                className="flex size-16 sm:size-20 items-center justify-center rounded-2xl shadow-md"
                style={{ backgroundColor: "#FC424218" }}
              >
                <Wine size={32} style={{ color: "#FC4242" }} aria-hidden="true" />
              </div>

              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Pronto para ter seu boteco cheio e sua gestão sob controle?
              </h2>

              <p className="fluid-body text-muted-foreground leading-relaxed max-w-4xl">
                Agende uma demonstração gratuita com nossos consultores. Veja na prática como o
                Dominus Food organiza o atendimento, acelera a cozinha e coloca seu financeiro nos
                trilhos.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mt-2">
                <button
                  type="button"
                  id="cta-final-food-especialista"
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-8 font-bold fluid-btn text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
                  style={{
                    backgroundColor: "#FC4242",
                    boxShadow: "0 8px 24px rgba(252,66,66,0.35)",
                  }}
                >
                  <span>Agendar demonstração gratuita</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>

                <Link
                  to="/planos"
                  search={{ segmento: "food" }}
                  id="cta-final-food-planos"
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border bg-background px-8 font-bold fluid-btn text-foreground transition-all duration-300 hover:border-[#FC4242]/50 hover:text-[#FC4242] active:scale-[0.98]"
                >
                  <span>Conhecer os planos Food</span>
                </Link>
              </div>

              <p className="text-xs text-muted-foreground/75 mt-2">
                Atendimento humanizado • Resposta rápida de especialistas no segmento Food
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé discreto sem elementos institucionais */}
      <footer className="w-full py-6 border-t border-border bg-surface-subtle/60 text-center text-xs text-muted-foreground">
        <div className="landing-page-container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Dominus Food • Waybit Software. Todos os direitos reservados.</p>
          <p className="text-[11px] text-muted-foreground/70">Tecnologia para uma gestão mais leve.</p>
        </div>
      </footer>

      {/* Modal de Contato com Especialista preenchido para Food */}
      <SpecialistDialog
        open={specialistOpen}
        onOpenChange={setSpecialistOpen}
        initialSegment="Food (Restaurante/Delivery)"
        initialPlan=""
      />

      {/* Modal Full Funnel de Agendamento de Demonstração */}
      <FullFunnelBookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
      />
    </div>
  );
}
