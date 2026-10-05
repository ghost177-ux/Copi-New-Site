import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Flame,
  Layers,
  Receipt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SpecialistDialog } from "@/components/SpecialistDialog";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos e Preços Dominus ERP | Waybit Software" },
      {
        name: "description",
        content:
          "Planos e preços oficiais do Sistema Dominus para Varejo, Food e Auto-center. Preços integrais transparentes, sem letras miúdas, com recursos 100% liberados.",
      },
      {
        property: "og:title",
        content: "Planos e Preços Dominus ERP | Waybit Software",
      },
      {
        property: "og:description",
        content:
          "Preços transparentes, sem letras miúdas. Encontre o plano ideal para o faturamento e caixas da sua empresa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PlanosPage,
});

type SegmentType = "varejo" | "food" | "autocenter";

interface PlanItem {
  id: string;
  name: string;
  price: string;
  periodText: string;
  revenueLimit: string;
  pdvCount: string;
  popular?: boolean;
  popularBadge?: string;
  isCustomPrice?: boolean;
  vipBonus?: string;
  annualOriginalPrice?: string;
  annualPrice?: string;
  annualPeriodText?: string;
}

interface SegmentMetaItem {
  name: string;
  sublabel: string;
  description: string;
  color: string;
  borderColor: string;
  bgAccent: string;
  btnClass: string;
  cardBorderHover: string;
  icon: typeof Store;
  samplePdvTerm: string;
}

interface SegmentFeatureModule {
  title: string;
  subtitle: string;
  icon: typeof Store;
  items: string[];
}

const segmentMeta: Record<SegmentType, SegmentMetaItem> = {
  varejo: {
    name: "Varejo",
    sublabel: "Lojas, comércio & empórios",
    description:
      "Gestão inteligente para lojas de roupas, calçados, empórios, materiais e mercados.",
    color: "#3BBCEC",
    borderColor: "border-[#3BBCEC]",
    bgAccent: "bg-[#3BBCEC]/10 text-[#3BBCEC]",
    btnClass: "bg-[#3BBCEC] hover:bg-[#28abd9] text-white shadow-sm",
    cardBorderHover: "hover:border-[#3BBCEC]/60",
    icon: Store,
    samplePdvTerm: "PDVs de Caixa",
  },
  food: {
    name: "Food",
    sublabel: "Restaurantes, bares & delivery",
    description: "Operação ágil com comandas, produção KDS, mesas e delivery integrado.",
    color: "#FC4242",
    borderColor: "border-[#FC4242]",
    bgAccent: "bg-[#FC4242]/10 text-[#FC4242]",
    btnClass: "bg-[#FC4242] hover:bg-[#e83030] text-white shadow-sm",
    cardBorderHover: "hover:border-[#FC4242]/60",
    icon: Utensils,
    samplePdvTerm: "PDVs Ilimitados",
  },
  autocenter: {
    name: "Auto-center",
    sublabel: "Oficinas, centros automotivos & motopeças",
    description: "Ordens de serviço completas, cotação de peças e histórico por placa do veículo.",
    color: "#FCC42C",
    borderColor: "border-[#FCC42C]",
    bgAccent: "bg-[#FCC42C]/15 text-[#9e7605]",
    btnClass: "bg-[#FCC42C] hover:bg-[#e8b21c] text-zinc-950 font-bold shadow-sm",
    cardBorderHover: "hover:border-[#FCC42C]/70",
    icon: Wrench,
    samplePdvTerm: "PDVs / Terminais O.S.",
  },
};

const plansData: Record<SegmentType, PlanItem[]> = {
  varejo: [
    {
      id: "fit-varejo",
      name: "Fit Varejo",
      price: "R$ 199,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 2.388,00",
      annualPrice: "R$ 165,84",
      annualPeriodText: "/Mês",
      revenueLimit: "Até R$ 30 mil/mês",
      pdvCount: "2 PDVs",
    },
    {
      id: "basic-varejo",
      name: "Basic Varejo",
      price: "R$ 399,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 4.788,00",
      annualPrice: "R$ 332,50",
      annualPeriodText: "/Mês",
      revenueLimit: "30 a 100 mil/mês",
      pdvCount: "4 PDVs",
      popular: true,
      popularBadge: "MAIS ESCOLHIDO",
    },
    {
      id: "full-varejo",
      name: "Full Varejo",
      price: "R$ 599,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 7.188,00",
      annualPrice: "R$ 499,17",
      annualPeriodText: "/Mês",
      revenueLimit: "100 a 200 mil/mês",
      pdvCount: "8 PDVs",
    },
    {
      id: "vip-varejo",
      name: "Vip Varejo",
      price: "R$ 799,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 9.588,00",
      annualPrice: "R$ 665,84",
      annualPeriodText: "/Mês",
      revenueLimit: "Acima de 200 mil/mês",
      pdvCount: "+8 PDVs (Ilimitados)",
      vipBonus: "Acompanhamento Exclusivo",
    },
  ],

  food: [
    {
      id: "fit-food",
      name: "Fit Food",
      price: "R$ 199,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 3.388,00",
      annualPrice: "R$ 165,00",
      annualPeriodText: "/Mês",
      revenueLimit: "Até 60 mil/mês",
      pdvCount: "2 PDVs",
    },
    {
      id: "basic-food",
      name: "Basic Food",
      price: "R$ 399,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 3.588,00",
      annualPrice: "R$ 249,00",
      annualPeriodText: "/Mês",
      revenueLimit: "60 a 120 mil/mês",
      pdvCount: "PDVs Ilimitados",
      popular: true,
      popularBadge: "MAIS ESCOLHIDO",
    },
    {
      id: "full-food",
      name: "Full Food",
      price: "R$ 449,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 5.388,00",
      annualPrice: "R$ 374,00",
      annualPeriodText: "/Mês",
      revenueLimit: "120 a 200 mil/mês",
      pdvCount: "PDVs Ilimitados",
    },
    {
      id: "vip-food",
      name: "Vip Food",
      price: "Consulte",
      periodText: "",
      annualPrice: "Consulte",
      isCustomPrice: true,
      revenueLimit: "Acima de 200 mil/mês",
      pdvCount: "PDVs Ilimitados",
      vipBonus: "Acompanhamento Exclusivo",
    },
  ],

  autocenter: [
    {
      id: "fit-autocenter",
      name: "Fit Auto-center",
      price: "R$ 199,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 2.388,00",
      annualPrice: "R$ 165,84",
      annualPeriodText: "/Mês",
      revenueLimit: "Até 30 mil/mês",
      pdvCount: "2 PDVs",
    },
    {
      id: "basic-autocenter",
      name: "Basic Auto-center",
      price: "R$ 399,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 4.788,00",
      annualPrice: "R$ 332,50",
      annualPeriodText: "/Mês",
      revenueLimit: "30 a 100 mil/mês",
      pdvCount: "4 PDVs",
      popular: true,
      popularBadge: "MAIS ESCOLHIDO",
    },
    {
      id: "full-autocenter",
      name: "Full Auto-center",
      price: "R$ 599,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 7.188,00",
      annualPrice: "R$ 499,17",
      annualPeriodText: "/Mês",
      revenueLimit: "100 a 200 mil/mês",
      pdvCount: "8 PDVs",
    },
    {
      id: "vip-autocenter",
      name: "Vip Auto-center",
      price: "R$ 799,00",
      periodText: "/mês",
      annualOriginalPrice: "R$ 9.588,00",
      annualPrice: "R$ 665,84",
      annualPeriodText: "/Mês",
      revenueLimit: "Acima de 200 mil/mês",
      pdvCount: "+8 PDVs (Ilimitados)",
      vipBonus: "Acompanhamento Exclusivo",
    },
  ],
};

const segmentFeaturesData: Record<SegmentType, SegmentFeatureModule[]> = {
  varejo: [
    {
      title: "Frente de Caixa (PDV) & Vendas Rápidas",
      subtitle: "Velocidade máxima no balcão de vendas",
      icon: Zap,
      items: [
        "Frente de caixa rápida com código de barras ou touch screen",
        "Modo offline: continua vendendo e emitindo mesmo sem internet",
        "Abertura, fechamento cego de caixa, sangrias e suprimentos",
        "Integração TEF e PIX dinâmico na tela do cliente",
        "Compatibilidade com balanças de checkout e impressoras térmicas",
        "Devolução, troca facilitada e consulta rápida de produtos",
      ],
    },
    {
      title: "Controle de Estoque & Grade",
      subtitle: "Gestão inteligente de compras e produtos",
      icon: Truck,
      items: [
        "Entrada automática de notas via importação de XML do fornecedor",
        "Controle completo de grade por tamanho, cor e variações",
        "Alertas inteligentes de reposição e estoque mínimo",
        "Curva ABC de produtos mais vendidos e margem de contribuição",
        "Etiquetas personalizadas de código de barras e gôndola",
        "Inventário rotativo rápido via leitor de código de barras",
      ],
    },
    {
      title: "Emissão Fiscal & SEFAZ",
      subtitle: "Conformidade fiscal 100% blindada e ilimitada",
      icon: Receipt,
      items: [
        "Emissão 100% ilimitada de NFC-e, NF-e, NFS-e e MDF-e",
        "Sem nenhuma cobrança extra ou taxa oculta por nota emitida",
        "Regras fiscais atualizadas com a SEFAZ de todo o Brasil",
        "Envio automático mensal dos arquivos XML para sua contabilidade",
        "Reimpressão e cancelamento de notas em conformidade legal",
        "Backup criptografado de todos os documentos fiscais em nuvem",
      ],
    },
    {
      title: "Financeiro, DRE & Gestão",
      subtitle: "Clareza total sobre o lucro real do seu negócio",
      icon: TrendingUp,
      items: [
        "Contas a pagar e receber com controle de prazos e juros",
        "Fluxo de caixa diário projetado e conciliação bancária",
        "DRE Gerencial em tempo real (Demonstração do Resultado)",
        "Cálculo automático de comissão de vendedores e metas",
        "Controle de múltiplos caixas e usuários com permissões restritas",
        "Suporte humanizado por WhatsApp em menos de 5 minutos",
      ],
    },
  ],

  food: [
    {
      title: "Atendimento de Salão & Comandas Mobile",
      subtitle: "Pedidos direto na mesa e zero perda de tempo",
      icon: Smartphone,
      items: [
        "Comanda eletrônica no celular ou tablet dos garçons",
        "Mapa de mesas visual com tempo de permanência e consumo",
        "Divisão de contas simplificada por pessoa ou por consumo",
        "Transferência e união de mesas em apenas um toque",
        "Lançamento de observações por prato (sem cebola, bem passado)",
        "Fechamento de conta veloz com PIX e cartão no salão",
      ],
    },
    {
      title: "Cozinha, Bar & Telas KDS",
      subtitle: "Sincronização imediata entre salão e produção",
      icon: Utensils,
      items: [
        "KDS (Kitchen Display System): tela de produção na cozinha",
        "Impressão automática setorizada por praça (cozinha, bar, forno)",
        "Controle de tempo de preparo por pedido e alertas de atraso",
        "Ficha técnica com baixa automática de ingredientes e insumos",
        "Avisos de 'pronto para entrega' para a equipe de salão",
        "Gestão de combos, adicionais e complementos personalizáveis",
      ],
    },
    {
      title: "Frente de Caixa, Balcão & Delivery",
      subtitle: "Vendas sem filas e entrega organizada",
      icon: Zap,
      items: [
        "PDVs e terminais de atendimento 100% ilimitados",
        "Modo de contingência offline: faturamento garantido sem internet",
        "Emissão de NFC-e ultrarrápida com cupom detalhado",
        "Módulo de delivery com controle de taxa de entrega e motoboys",
        "Histórico de pedidos do cliente pelo telefone ou WhatsApp",
        "Integração de pagamentos com TEF e PIX dinâmico",
      ],
    },
    {
      title: "Estoque, Compras & DRE de Alimentos",
      subtitle: "Rentabilidade monitorada prato por prato",
      icon: TrendingUp,
      items: [
        "Entrada automática de notas de compras via importação de XML",
        "Cálculo de CMV (Custo de Mercadoria Vendida) em tempo real",
        "Controle de perdas, desperdícios e quebras de insumos",
        "Contas a pagar e receber com controle de fluxo financeiro",
        "Relatórios de pratos mais lucrativos e horários de maior movimento",
        "Plantão de suporte nos horários de maior fluxo (noite e finais de semana)",
      ],
    },
  ],

  autocenter: [
    {
      title: "Ordens de Serviço (O.S.) & Oficina",
      subtitle: "Organização completa do fluxo mecânico",
      icon: Wrench,
      items: [
        "Ordens de Serviço com status visual (Orçamento, Em Andamento, Concluído)",
        "Checklist de entrada com fotos do veículo e marcação de avarias",
        "Histórico completo de revisões veiculares por placa e chassi",
        "Envio de orçamentos aprovados direto no WhatsApp do proprietário",
        "Autorização digital de serviços e assinatura do cliente",
        "Controle de garantia de peças aplicadas e serviços executados",
      ],
    },
    {
      title: "Cotação de Peças & Estoque Automotivo",
      subtitle: "Aplicação imediata e baixa automática",
      icon: Truck,
      items: [
        "Cotação rápida e inserção de peças diretamente na O.S.",
        "Baixa automática no estoque ao faturar a ordem de serviço",
        "Entrada automática de notas de autopeças via importação de XML",
        "Controle de estoque por código do fabricante e aplicação veicular",
        "Alerta de peças com estoque mínimo e compras pendentes",
        "Gestão de devoluções e trocas de componentes com fornecedores",
      ],
    },
    {
      title: "Comissões de Mecânicos & Produtividade",
      subtitle: "Reconhecimento técnico e métricas da oficina",
      icon: Layers,
      items: [
        "Cálculo automático de comissões por mecânico/técnico",
        "Separação clara entre valores de mão de obra e peças",
        "Tempo de execução por serviço e taxa de retorno de garantias",
        "Relatório de produtividade por box, elevador ou técnico",
        "Emissão combinada de NF-e (peças) e NFS-e (serviços)",
        "Controle de múltiplos caixas e usuários com permissões específicas",
      ],
    },
    {
      title: "Financeiro & Retaguarda da Oficina",
      subtitle: "Controle de lucratividade por tipo de serviço",
      icon: TrendingUp,
      items: [
        "Contas a pagar e receber com controle de prazos e crediário",
        "Emissão de boletos bancários, conciliação e PIX integrado",
        "DRE Gerencial automático com lucratividade real do auto-center",
        "Histórico financeiro por cliente corporativo (frotas e empresas)",
        "Backup automático diário em nuvem criptografada",
        "Suporte humanizado por WhatsApp com atendimento em menos de 5 min",
      ],
    },
  ],
};

function formatRevenue(limit: string): string {
  const trimmed = limit.trim();
  if (/^até/i.test(trimmed)) {
    return `Faturamento de ${trimmed.charAt(0).toLowerCase() + trimmed.slice(1)}`;
  }
  if (/^acima/i.test(trimmed)) {
    return `Faturamento ${trimmed.charAt(0).toLowerCase() + trimmed.slice(1)}`;
  }
  return `Faturamento de ${trimmed}`;
}

interface PromoPlanOffer {
  id: string;
  name: string;
  promoPrice: string;
  periodText: string;
  originalPrice: string;
  cutPriceText: string;
  discountBadge: string;
  tagline: string;
  popular?: boolean;
  isCustomPrice?: boolean;
}

interface SegmentPromoConfig {
  badgeLabel: string;
  heading: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  borderClass: string;
  borderHoverClass: string;
  badgeBorderClass: string;
  badgeBgClass: string;
  badgeTextClass: string;
  glowEffect: string;
  plans: PromoPlanOffer[];
}

const segmentPromos: Record<SegmentType, SegmentPromoConfig> = {
  varejo: {
    badgeLabel: "OFERTA DE LANÇAMENTO VAREJO • 3 PRIMEIROS MESES COM DESCONTO ESPECIAL",
    heading: "Economize até 65% nos seus 3 Primeiros Meses no Varejo",
    description:
      "Contrate qualquer plano Dominus Varejo hoje e desfrute de valores promocionais reduzidos no primeiro trimestre:",
    accentColor: "#3BBCEC",
    bgGradient: "from-[#3BBCEC]/10 via-[#3BBCEC]/5 to-transparent",
    borderClass: "border-[#3BBCEC]/30",
    borderHoverClass: "hover:border-[#3BBCEC]/60",
    badgeBorderClass: "border-[#3BBCEC]/40",
    badgeBgClass: "bg-[#3BBCEC]/15",
    badgeTextClass: "text-[#2390ba] dark:text-[#3BBCEC]",
    glowEffect: "rgba(59, 188, 236, 0.15)",
    plans: [
      {
        id: "promo-fit-varejo",
        name: "Plano Fit",
        promoPrice: "R$ 79,00",
        periodText: "/mês",
        originalPrice: "R$ 199",
        cutPriceText: "por R$ 79",
        discountBadge: "60% OFF",
        tagline: "Ideal para começar com tudo",
      },
      {
        id: "promo-basic-varejo",
        name: "Plano Basic",
        promoPrice: "R$ 99,00",
        periodText: "/mês",
        originalPrice: "R$ 399",
        cutPriceText: "por R$ 99",
        discountBadge: "75% OFF",
        tagline: "O preferido dos lojistas",
      },
      {
        id: "promo-full-varejo",
        name: "Plano Full",
        promoPrice: "R$ 129,00",
        periodText: "/mês",
        originalPrice: "R$ 599",
        cutPriceText: "por R$ 129",
        discountBadge: "78% OFF",
        tagline: "Expansão de caixas e estoque",
      },
      {
        id: "promo-vip-varejo",
        name: "Plano Vip",
        promoPrice: "R$ 269,00",
        periodText: "/mês*",
        originalPrice: "R$ 799",
        cutPriceText: "por R$ 269",
        discountBadge: "66% OFF",
        tagline: "Operação e PDVs ilimitados",
      },
    ],
  },
  food: {
    badgeLabel: "OFERTA DE LANÇAMENTO FOOD • 3 PRIMEIROS MESES COM DESCONTO ESPECIAL",
    heading: "Economize até 65% nos seus 3 Primeiros Meses no Food",
    description:
      "Contrate qualquer plano Dominus Food hoje e acelere sua operação gastronômica com desconto no primeiro trimestre:",
    accentColor: "#FC4242",
    bgGradient: "from-[#FC4242]/10 via-[#FC4242]/5 to-transparent",
    borderClass: "border-[#FC4242]/30",
    borderHoverClass: "hover:border-[#FC4242]/60",
    badgeBorderClass: "border-[#FC4242]/40",
    badgeBgClass: "bg-[#FC4242]/15",
    badgeTextClass: "text-[#FC4242] dark:text-[#FC4242]",
    glowEffect: "rgba(252, 66, 66, 0.15)",
    plans: [
      {
        id: "promo-fit-food",
        name: "Plano Fit",
        promoPrice: "R$ 79,00",
        periodText: "/mês",
        originalPrice: "R$ 199",
        cutPriceText: "por R$ 79",
        discountBadge: "60% OFF",
        tagline: "Comandas e balcão ágil",
      },
      {
        id: "promo-basic-food",
        name: "Plano Basic",
        promoPrice: "R$ 99,00",
        periodText: "/mês",
        originalPrice: "R$ 399",
        cutPriceText: "por R$ 99",
        discountBadge: "75% OFF",
        tagline: "Mais vendido da gastronomia",
      },
      {
        id: "promo-full-food",
        name: "Plano Full",
        promoPrice: "R$ 129,00",
        periodText: "/mês",
        originalPrice: "R$ 449",
        cutPriceText: "por R$ 129",
        discountBadge: "71% OFF",
        tagline: "Múltiplas praças e KDS",
      },
      {
        id: "promo-vip-food",
        name: "Plano Vip",
        promoPrice: "Condição VIP",
        periodText: "",
        originalPrice: "Personalizado",
        cutPriceText: "Condição Especial VIP",
        discountBadge: "",
        tagline: "Atendimento dedicado e alta demanda",
        isCustomPrice: true,
      },
    ],
  },
  autocenter: {
    badgeLabel: "OFERTA DE LANÇAMENTO AUTO-CENTER • 3 PRIMEIROS MESES COM DESCONTO ESPECIAL",
    heading: "Economize até 65% nos seus 3 Primeiros Meses no Auto-center",
    description:
      "Contrate qualquer plano Dominus Auto-center hoje e desfrute de valores promocionais reduzidos no primeiro trimestre:",
    accentColor: "#FCC42C",
    bgGradient: "from-[#FCC42C]/10 via-[#FCC42C]/5 to-transparent",
    borderClass: "border-[#FCC42C]/30",
    borderHoverClass: "hover:border-[#FCC42C]/60",
    badgeBorderClass: "border-[#FCC42C]/40",
    badgeBgClass: "bg-[#FCC42C]/15",
    badgeTextClass: "text-[#9e7605] dark:text-[#FCC42C]",
    glowEffect: "rgba(252, 196, 44, 0.15)",
    plans: [
      {
        id: "promo-fit-autocenter",
        name: "Plano Fit",
        promoPrice: "R$ 79,00",
        periodText: "/mês",
        originalPrice: "R$ 199",
        cutPriceText: "por R$ 79",
        discountBadge: "60% OFF",
        tagline: "Ordens de serviço essenciais",
      },
      {
        id: "promo-basic-autocenter",
        name: "Plano Basic",
        promoPrice: "R$ 99,00",
        periodText: "/mês",
        originalPrice: "R$ 399",
        cutPriceText: "por R$ 99",
        discountBadge: "75% OFF",
        tagline: "Ideal para oficinas e centros",
      },
      {
        id: "promo-full-autocenter",
        name: "Plano Full",
        promoPrice: "R$ 129,00",
        periodText: "/mês",
        originalPrice: "R$ 599",
        cutPriceText: "por R$ 129",
        discountBadge: "78% OFF",
        tagline: "Peças, serviços e múltiplos boxes",
      },
      {
        id: "promo-vip-autocenter",
        name: "Plano Vip",
        promoPrice: "R$ 269,00",
        periodText: "/mês*",
        originalPrice: "R$ 799",
        cutPriceText: "por R$ 269",
        discountBadge: "66% OFF",
        tagline: "Redes, frotas e suporte VIP",
      },
    ],
  },
};

function openFullFunnelPopup(formId: string) {
  const iframeId = `popup-${formId}`;

  // Garante que o script form_embed.js do Full Funnel está presente no DOM
  const scriptId = "full-funnel-form-embed-js";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://links.fullfunnel.app/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }

  const triggerOpen = () => {
    const overlay = document.getElementById(`${iframeId}-overlay`);
    const container = document.getElementById(`${iframeId}-div`);
    const header = document.getElementById(`${iframeId}-header`);
    const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;

    if (overlay) {
      overlay.style.display = "flex";
      overlay.style.zIndex = "99999";
      if (!overlay.dataset["hasBackdropClose"]) {
        overlay.dataset["hasBackdropClose"] = "true";
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            overlay.style.display = "none";
            if (container) container.style.display = "none";
          }
        });
      }
    }

    if (container) {
      container.style.display = "block";
    }

    if (header) {
      header.style.display = "flex";
    }

    if (iframe) {
      iframe.style.display = "block";
      iframe.style.opacity = "1";
      iframe.style.visibility = "visible";
      iframe.style.pointerEvents = "auto";
    }

    // Se o estado do GHL foi marcado como desativado ao fechar anteriormente, reativa
    if (typeof window !== "undefined" && (window as any).__GHL_EMBED_STATE__) {
      const ghl = (window as any).__GHL_EMBED_STATE__;
      if (ghl.deactivateIframe) {
        ghl.deactivateIframe[iframeId] = false;
      }
    }
  };

  triggerOpen();
  setTimeout(triggerOpen, 80);
  setTimeout(triggerOpen, 250);
  setTimeout(triggerOpen, 600);
}

function PlanCard({
  plan,
  meta,
  isAnnual,
  onSelect,
}: {
  plan: PlanItem;
  meta: SegmentMetaItem;
  isAnnual?: boolean;
  onSelect: (name: string) => void;
}) {
  const segmentKey = (meta.name.toLowerCase().includes("food")
    ? "food"
    : meta.name.toLowerCase().includes("auto")
      ? "autocenter"
      : "varejo") as SegmentType;

  const isVarejo = segmentKey === "varejo";
  const isFood = segmentKey === "food";
  const fullFunnelFormId = isVarejo
    ? "BL9CJSTJLMpcdWMeZC1t"
    : isFood
      ? "hZtTltmYEVplINDvwqsS"
      : null;

  const isDarkText = segmentKey === "autocenter";
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const handleContractClick = () => {
    if (fullFunnelFormId) {
      openFullFunnelPopup(fullFunnelFormId);
    } else {
      onSelect(plan.name);
    }
  };

  const handleScrollToFeatures = () => {
    const el = document.getElementById("recursos-planos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`relative rounded-[22px] sm:rounded-[28px] bg-white dark:bg-card border border-slate-200/90 dark:border-zinc-800 transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${meta.cardBorderHover} h-full group`}
    >
      {/* 1. Header do Card: Caixa Colorida + Faixa Anual (se aplicável) */}
      <div className="overflow-hidden rounded-[18px] sm:rounded-[22px] border border-black/[0.04] dark:border-white/[0.06] shadow-xs shrink-0">
        {/* Caixa colorida com ALTURA FIXA/IDÊNTICA para MENSAL e ANUAL */}
        <div
          className="h-[136px] sm:h-[144px] p-4 sm:p-5 flex flex-col justify-between transition-colors duration-300"
          style={{ backgroundColor: meta.color }}
        >
          {/* Nome do Plano */}
          <h3
            className={`font-display fluid-h3 font-black tracking-tight leading-tight ${isDarkText ? "text-zinc-950" : "text-white"
              }`}
          >
            {plan.name}
          </h3>

          {/* Preço com escala H2 e comparação no modo anual */}
          <div>
            {isAnnual && plan.annualOriginalPrice && !plan.isCustomPrice ? (
              <>
                <div
                  className={`flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold mb-0.5 leading-tight ${isDarkText ? "text-zinc-800" : "text-white/80"
                    }`}
                >
                  <span>De</span>
                  <span
                    className={`line-through font-semibold ${isDarkText
                        ? "decoration-zinc-700 text-zinc-700"
                        : "decoration-white/60 text-white/75"
                      }`}
                  >
                    {plan.annualOriginalPrice}
                  </span>
                  <span>por</span>
                </div>
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span
                    className={`font-display fluid-h2 font-black tracking-tight leading-none ${isDarkText ? "text-zinc-950" : "text-white"
                      }`}
                  >
                    {plan.annualPrice}
                  </span>
                  <span
                    className={`fluid-secondary font-bold ${isDarkText ? "text-zinc-800" : "text-white/90"
                      }`}
                  >
                    {plan.annualPeriodText || "/Mês"}
                  </span>
                </div>
              </>
            ) : !plan.isCustomPrice ? (
              <div className="flex items-baseline gap-1 flex-wrap">
                <span
                  className={`font-display fluid-h2 font-black tracking-tight leading-none ${isDarkText ? "text-zinc-950" : "text-white"
                    }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`fluid-secondary font-bold ${isDarkText ? "text-zinc-800" : "text-white/90"
                    }`}
                >
                  {plan.periodText}
                </span>
              </div>
            ) : (
              <div className="flex items-baseline gap-1 flex-wrap">
                <span
                  className={`font-display fluid-h2 font-black tracking-tight leading-none ${isDarkText ? "text-zinc-950" : "text-white"
                    }`}
                >
                  Consulte
                </span>
                {plan.periodText ? (
                  <span
                    className={`fluid-secondary font-bold ${isDarkText ? "text-zinc-800" : "text-white/90"
                      }`}
                  >
                    {plan.periodText}
                  </span>
                ) : null}
              </div>
            )}
          </div>
        </div>

        {/* Faixa Até 12X No cartão - SOMENTE NO ANUAL */}
        {isAnnual && !plan.isCustomPrice ? (
          <div className="bg-[#2f2f2f] text-white py-2 sm:py-2.5 px-3 text-center text-xs sm:text-[13px] font-bold tracking-wide">
            Até 12X No cartão
          </div>
        ) : null}
      </div>

      {/* 2. Corpo do Card (Botão + Lista de Características + Ver mais +) */}
      <div className="pt-3 sm:pt-4 pb-1 flex-1 flex flex-col justify-between">
        {/* Botão Contrate Agora */}
        <div>
          <button
            type="button"
            onClick={handleContractClick}
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            data-target={fullFunnelFormId ? `#popup-${fullFunnelFormId}` : undefined}
            data-form-id={fullFunnelFormId || undefined}
            data-layout-iframe-id={fullFunnelFormId ? `popup-${fullFunnelFormId}` : undefined}
            data-popup-trigger={fullFunnelFormId ? `popup-${fullFunnelFormId}` : undefined}
            style={{
              borderColor: meta.color,
              backgroundColor: isBtnHovered ? meta.color : "transparent",
              color: isBtnHovered
                ? isDarkText
                  ? "#09090b"
                  : "#ffffff"
                : meta.color,
            }}
            className="w-full h-11 sm:h-12 rounded-full border-2 font-bold fluid-btn tracking-wide transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98] flex items-center justify-center cursor-pointer"
          >
            <span>Contrate Agora</span>
          </button>
        </div>

        {/* Lista de Características */}
        <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-3.5 flex-1">
          {/* Item: Faturamento */}
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-zinc-600 dark:text-zinc-400" />
            <span className="fluid-caption font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
              {formatRevenue(plan.revenueLimit)}
            </span>
          </div>

          {/* Item: Terminais / PDVs */}
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-zinc-600 dark:text-zinc-400" />
            <span className="fluid-caption font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
              Terminais / PDVs: {plan.pdvCount.startsWith("PDVs ") ? plan.pdvCount.replace("PDVs ", "") : plan.pdvCount}
            </span>
          </div>

          {/* Item: Acompanhamento Exclusivo (apenas onde já existe) */}
          {plan.vipBonus ? (
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-zinc-600 dark:text-zinc-400" />
              <span className="fluid-caption font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                {plan.vipBonus}
              </span>
            </div>
          ) : null}
        </div>

        {/* Ver mais + link para a seção de recursos */}
        <div className="pt-4 sm:pt-5">
          <button
            type="button"
            onClick={handleScrollToFeatures}
            style={{ color: meta.color }}
            className="font-bold fluid-caption hover:underline cursor-pointer transition-opacity hover:opacity-80 text-left inline-flex items-center self-start"
          >
            ver mais +
          </button>
        </div>
      </div>
    </div>
  );
}

function PlanosPage() {
  const [selectedSegment, setSelectedSegment] = useState<SegmentType>("varejo");
  const [billingCycle, setBillingCycle] = useState<"mensal" | "anual">("mensal");
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>("");

  // Estado e ref do carrossel mobile
  const [activeMobileCardIndex, setActiveMobileCardIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const meta = segmentMeta[selectedSegment];
  const plans = plansData[selectedSegment];
  const featureModules = segmentFeaturesData[selectedSegment];

  function handleOpenPlanOffer(planName: string) {
    const cycleLabel = billingCycle === "anual" ? "Anual" : "Mensal";
    setSelectedPlanForModal(`${planName} (${meta.name} - ${cycleLabel})`);
    setSpecialistOpen(true);
  }

  // Monitorar scroll no carrossel mobile para atualizar indicadores de forma dinâmica
  const handleMobileScroll = useCallback(() => {
    if (!mobileCarouselRef.current) return;
    const { scrollLeft, clientWidth } = mobileCarouselRef.current;
    if (clientWidth === 0) return;
    const firstCard = mobileCarouselRef.current.children[0] as HTMLElement | undefined;
    const cardWidth = firstCard?.offsetWidth || clientWidth * 0.85;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveMobileCardIndex(Math.min(Math.max(newIndex, 0), plans.length - 1));
  }, [plans.length]);

  function scrollCarouselTo(index: number) {
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft - 16,
        behavior: "smooth",
      });
      setActiveMobileCardIndex(index);
    }
  }

  function scrollCarouselPrev() {
    const nextIndex = Math.max(0, activeMobileCardIndex - 1);
    scrollCarouselTo(nextIndex);
  }

  function scrollCarouselNext() {
    const nextIndex = Math.min(plans.length - 1, activeMobileCardIndex + 1);
    scrollCarouselTo(nextIndex);
  }

  // Resetar scroll do carrossel ao trocar de segmento
  useEffect(() => {
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setActiveMobileCardIndex(0);
    }
  }, [selectedSegment]);

  // Carrega o script form_embed.js oficial do Full Funnel para gerenciar os popups
  useEffect(() => {
    const scriptId = "full-funnel-form-embed-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://links.fullfunnel.app/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden w-full">
      <Header currentPath="/planos" />

      <main className="flex-1 w-full">
        {/* ========================================================================= */}
        {/* 1. NAVEGAÇÃO SUPERIOR DISCRETA (BREADCRUMB)                                */}
        {/* ========================================================================= */}
        <section className="w-full pt-6 sm:pt-8 pb-2 bg-background">
          <div className="fluid-container text-center">
            <nav className="flex justify-center items-center gap-2 fluid-caption text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Planos & Preços Dominus</span>
            </nav>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. BANNERS DE PROMOÇÃO DINÂMICOS POR SEGMENTO (OFERTAS ESPECIAIS)         */}
        {/* ========================================================================= */}
        <section className="w-full pt-2 pb-5 sm:pb-6 bg-background">
          <div className="fluid-container">
            {(["varejo", "food", "autocenter"] as const).map((segKey) => {
              const promo = segmentPromos[segKey];
              const isVisible = selectedSegment === segKey;

              return (
                <div
                  key={segKey}
                  id={`banner-promo-${segKey}`}
                  style={{ display: isVisible ? "block" : "none" }}
                  className={`relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] border ${promo.borderClass} bg-gradient-to-b ${promo.bgGradient} p-4 sm:p-6 md:p-8 lg:p-10 text-center shadow-[0_12px_40px_-15px_rgba(0,0,0,0.07)] transition-all duration-300 animate-in fade-in overflow-hidden max-w-[1240px] mx-auto`}
                >
                  {/* Firula visual de fundo: Glow suave */}
                  <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 sm:w-96 max-w-full h-36 sm:h-48 rounded-full blur-3xl pointer-events-none opacity-50 dark:opacity-30"
                    style={{ backgroundColor: promo.glowEffect }}
                    aria-hidden="true"
                  />

                  {/* Badge Chamativo Superior / Aviso Explicativo no Modo Anual */}
                  {billingCycle === "anual" ? (
                    <div className="relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 px-3.5 sm:px-4 py-1 sm:py-1.5 fluid-caption font-bold text-amber-900 dark:text-amber-200 mb-2.5 sm:mb-3.5 shadow-xs max-w-full flex-wrap justify-center animate-in fade-in">
                      <span className="tracking-wide text-center">
                        ⚡ CONDIÇÃO ESPECIAL VÁLIDA EXCLUSIVAMENTE PARA PLANOS MENSAIS
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full border ${promo.badgeBorderClass} ${promo.badgeBgClass} px-3 sm:px-4 py-1 sm:py-1.5 fluid-caption font-bold ${promo.badgeTextClass} mb-2.5 sm:mb-3.5 shadow-xs max-w-full flex-wrap justify-center`}
                    >
                      <Flame size={13} className="animate-pulse shrink-0 fill-current" />
                      <span className="tracking-wide text-center">{promo.badgeLabel}</span>
                    </div>
                  )}

                  {/* Título de Alto Impacto com Tipografia Fluida */}
                  <h2 className="relative font-display fluid-h2 font-black tracking-tight text-foreground max-w-3xl mx-auto leading-snug sm:leading-tight">
                    {promo.heading}
                  </h2>

                  {/* Subtítulo Fluido */}
                  <p className="relative mt-2 sm:mt-2.5 fluid-body text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium px-1 sm:px-2">
                    Condição especial válida exclusivamente para o plano mensal. No plano anual, aplicam-se os valores oficiais da tabela abaixo:
                  </p>

                  {/* Vitrine de Mini-Cards Flutuantes com Valores Responsivos */}
                  <div className="relative mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 text-left items-stretch">
                    {promo.plans.map((item) => (
                      <div
                        key={item.id}
                        className={`relative rounded-xl sm:rounded-2xl lg:rounded-[22px] bg-white dark:bg-zinc-900/95 p-3.5 sm:p-4.5 lg:p-5 flex flex-col justify-between border border-slate-200/90 dark:border-zinc-800 ${promo.borderHoverClass} transition-all duration-300 shadow-[0_10px_28px_-6px_rgba(0,0,0,0.06),0_4px_10px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_45px_-10px_rgba(0,0,0,0.13)] hover:-translate-y-1 sm:hover:-translate-y-1.5 group h-full`}
                      >
                        {/* Linha sutil de brilho superior no hover */}
                        <div
                          className="absolute top-0 inset-x-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${promo.accentColor}, transparent)`,
                          }}
                        />

                        {/* Topo do Mini-Card */}
                        <div>
                          {/* Linha Superior: Nome do Plano e Tag */}
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-display fluid-h4 font-black text-zinc-950 dark:text-zinc-50 tracking-tight leading-tight">
                              {item.name}
                            </h3>
                            {item.discountBadge && !item.name.toLowerCase().includes("vip") ? (
                              <span
                                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 fluid-caption font-black tracking-wider uppercase shrink-0"
                                style={{
                                  backgroundColor: `${promo.accentColor}18`,
                                  color: promo.accentColor,
                                }}
                              >
                                <Sparkles size={10} />
                                <span>{item.discountBadge}</span>
                              </span>
                            ) : null}
                          </div>
                          {/* Linha Inferior: Descrição Ocupando Toda a Largura */}
                          <div className="fluid-caption font-semibold text-[#454545] dark:text-zinc-400 block mt-1 sm:mt-1.5 w-full leading-normal">
                            {item.tagline}
                          </div>

                          {/* Elemento em Destaque: Valor Promocional */}
                          <div className="my-3 sm:my-3.5">
                            <span className="fluid-caption font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                              1º Trimestre (3 Meses)
                            </span>
                            <div className="flex items-baseline gap-1 flex-wrap">
                              {!item.isCustomPrice ? (
                                <>
                                  <span className="font-display metric-value font-black text-zinc-950 dark:text-white tracking-tight leading-none">
                                    {item.promoPrice}
                                  </span>
                                  {item.periodText ? (
                                    <span className="fluid-caption font-bold text-zinc-500 dark:text-zinc-400">
                                      {item.periodText}
                                    </span>
                                  ) : null}
                                </>
                              ) : (
                                <>
                                  <span className="font-display fluid-h3 font-black text-zinc-950 dark:text-white tracking-tight leading-none">
                                    {item.promoPrice}
                                  </span>
                                  {item.periodText ? (
                                    <span className="fluid-caption font-bold text-zinc-500 dark:text-zinc-400">
                                      {item.periodText}
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Rodapé: Valor Original Cortado (De / Por) */}
                        <div className="pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between gap-1 fluid-caption flex-wrap mt-2">
                          {!item.isCustomPrice ? (
                            <>
                              <div className="flex items-center gap-1.5 font-medium text-muted-foreground">
                                <span>De</span>
                                <span className="line-through decoration-zinc-400 dark:decoration-zinc-600 font-semibold text-zinc-500 dark:text-zinc-400">
                                  {item.originalPrice}
                                </span>
                                <span>por</span>
                              </div>
                              <span className="font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-md flex items-center gap-0.5">
                                {item.cutPriceText}
                              </span>
                            </>
                          ) : (
                            <span className="font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                              {item.cutPriceText}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Rodapé informativo sutil */}
                  <div className="mt-4 sm:mt-6 text-center">
                    <p className="fluid-caption text-muted-foreground px-2">
                      {billingCycle === "anual"
                        ? "* A promoção do 1º trimestre aplica-se exclusivamente ao ciclo mensal. Abaixo, na tabela principal, são apresentados os planos e valores anuais regulares."
                        : "* Condição especial válida nos 3 primeiros meses de assinatura. Após o período, vigora o valor integral de tabela."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SELETOR DE SEGMENTOS E CICLO (MENSAL/ANUAL) NA MESMA LINHA             */}
        {/* ========================================================================= */}
        <section className="w-full py-3 sm:py-4 bg-background">
          <div className="fluid-container">
            <div className="text-center mb-2.5 sm:mb-3">
              <span className="fluid-caption font-bold uppercase tracking-wider text-[#454545] dark:text-zinc-400">
                Alterne entre os segmentos para ver os planos oficiais:
              </span>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* [ Espaço Vazio ] na extrema esquerda para manter o centro perfeitamente balanceado no desktop */}
              <div className="hidden lg:block lg:flex-1" aria-hidden="true" />

              {/* [ Seletor de Segmentos (Meio) ] */}
              <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-surface-subtle border border-border shadow-inner max-w-full overflow-x-auto no-scrollbar shrink-0">
                {(["varejo", "food", "autocenter"] as const).map((segmentKey) => {
                  const item = segmentMeta[segmentKey];
                  const Icon = item.icon;
                  const isActive = selectedSegment === segmentKey;

                  return (
                    <button
                      key={segmentKey}
                      type="button"
                      onClick={() => setSelectedSegment(segmentKey)}
                      className={`flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-xl fluid-btn font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${isActive
                          ? `bg-background shadow-md border ${item.borderColor} text-foreground`
                          : "text-[#454545] dark:text-zinc-400 hover:text-foreground hover:bg-background/50 border border-transparent"
                        }`}
                      style={{
                        color: isActive ? item.color : undefined,
                      }}
                    >
                      <div
                        className={`size-6 sm:size-7 rounded-lg flex items-center justify-center transition-colors shrink-0 ${isActive ? item.bgAccent : "bg-muted text-[#454545] dark:text-zinc-400"
                          }`}
                      >
                        <Icon size={15} />
                      </div>
                      <div className="text-left">
                        <span className="block leading-none">{item.name}</span>
                        <span className="fluid-legal font-normal text-muted-foreground block mt-0.5">
                          {segmentKey === "varejo"
                            ? "Lojas & Comércio"
                            : segmentKey === "food"
                              ? "Restaurantes & Bares"
                              : "Oficinas & Peças"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* [ Seletor Mensal / Anual (Direita) ] */}
              <div className="lg:flex-1 lg:flex lg:justify-end shrink-0">
                <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-surface-subtle border border-border shadow-xs">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("mensal")}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full fluid-btn font-bold transition-all cursor-pointer ${billingCycle === "mensal"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-[#454545] dark:text-zinc-400 hover:text-foreground"
                      }`}
                  >
                    Plano Mensal
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("anual")}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full fluid-btn font-bold transition-all cursor-pointer ${billingCycle === "anual"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-[#454545] dark:text-zinc-400 hover:text-foreground"
                      }`}
                  >
                    Plano Anual
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TABELA / CARDS DE PLANOS OFICIAIS                                      */}
        {/* ========================================================================= */}
        <section className="w-full py-6 sm:py-8 lg:py-14 bg-surface-subtle/50">
          <div className="fluid-container">
            {/* VERSÃO DESKTOP: Grid 4 colunas estático */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-3.5 xl:gap-6 items-stretch">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  meta={meta}
                  isAnnual={billingCycle === "anual"}
                  onSelect={handleOpenPlanOffer}
                />
              ))}
            </div>

            {/* VERSÃO MOBILE E TABLET: Carrossel Horizontal Nativo com Swipe */}
            <div className="lg:hidden">
              <p className="text-center fluid-caption text-muted-foreground mb-3 flex items-center justify-center gap-1.5">
                <span>← Deslize para visualizar os planos →</span>
              </p>

              {/* Container de Scroll com Snap */}
              <div
                ref={mobileCarouselRef}
                onScroll={handleMobileScroll}
                className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 px-3 sm:px-4 no-scrollbar touch-pan-x"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="w-[84vw] sm:w-[65vw] md:w-[45vw] max-w-[320px] shrink-0 snap-center h-full flex flex-col"
                  >
                    <PlanCard
                      plan={plan}
                      meta={meta}
                      isAnnual={billingCycle === "anual"}
                      onSelect={handleOpenPlanOffer}
                    />
                  </div>
                ))}
              </div>

              {/* Controles de Navegação do Carrossel (Setas e Bolinhas) */}
              <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={scrollCarouselPrev}
                  disabled={activeMobileCardIndex === 0}
                  className="size-9 sm:size-10 rounded-full border-border cursor-pointer disabled:opacity-30 transition-all flex items-center justify-center"
                  aria-label="Plano anterior"
                >
                  <ChevronLeft size={16} />
                </Button>

                {/* Bolinhas Indicadoras de Paginação */}
                <div className="flex items-center gap-1.5 px-2">
                  {plans.map((plan, index) => {
                    const isActive = activeMobileCardIndex === index;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => scrollCarouselTo(index)}
                        className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${isActive
                            ? "w-6"
                            : "w-2 sm:w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                          }`}
                        style={{
                          backgroundColor: isActive ? meta.color : undefined,
                        }}
                        aria-label={`Ir para ${plan.name}`}
                      />
                    );
                  })}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={scrollCarouselNext}
                  disabled={activeMobileCardIndex === plans.length - 1}
                  className="size-9 sm:size-10 rounded-full border-border cursor-pointer disabled:opacity-30 transition-all flex items-center justify-center"
                  aria-label="Próximo plano"
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. RECURSOS ESPECÍFICOS POR SEGMENTO (GRID DETALHADO COM CHECKLISTS)       */}
        {/* ========================================================================= */}
        <section
          id="recursos-planos"
          className="w-full py-12 sm:py-16 lg:py-20 bg-background border-t border-border scroll-mt-24"
        >
          <div className="fluid-container">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 px-2">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 fluid-caption font-bold mb-3 sm:mb-4 shadow-sm"
                style={{
                  backgroundColor: `${meta.color}15`,
                  color: meta.color,
                }}
              >
                <ClipboardList size={14} />
                <span>Recursos Inclusos no Dominus {meta.name}</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                O que está disponível nos planos de {meta.name}
              </h2>
              <p className="mt-2.5 sm:mt-3 fluid-body text-muted-foreground leading-relaxed">
                Todos os módulos essenciais para transformar e organizar a rotina do seu negócio,
                100% liberados e sem taxas ocultas por cupom fiscal.
              </p>
            </div>

            {/* Grid dos Módulos Específicos do Segmento Selecionado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {featureModules.map((module) => {
                const Icon = module.icon;

                return (
                  <div
                    key={module.title}
                    className="rounded-2xl border border-border bg-surface-subtle/50 p-4.5 sm:p-6 lg:p-8 hover:bg-background hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-5 pb-3.5 sm:pb-4 border-b border-border/70">
                        <div
                          className="size-10 sm:size-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${meta.color}20`,
                            color: meta.color,
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-display fluid-h3 font-bold text-foreground">
                            {module.title}
                          </h3>
                          <p className="fluid-caption text-muted-foreground mt-0.5">{module.subtitle}</p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 sm:space-y-3 fluid-secondary text-foreground/90">
                        {module.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={16}
                              className="shrink-0 mt-0.5"
                              style={{ color: meta.color }}
                            />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/60 flex items-center justify-between fluid-caption text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium">
                        <ShieldCheck size={14} className="text-[#71BE44]" />
                        Liberado em todos os planos
                      </span>
                      <span className="font-bold" style={{ color: meta.color }}>
                        Dominus {meta.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 6. RODAPÉ INSTITUCIONAL OFICIAL DO WAYBIT-HOME-VISION */}
      <Footer onOpenSpecialist={() => setSpecialistOpen(true)} />

      {/* Modal Especialista Integrado */}
      <SpecialistDialog
        open={specialistOpen}
        onOpenChange={setSpecialistOpen}
        initialSegment={
          selectedSegment === "food"
            ? "Food (Restaurante/Delivery)"
            : selectedSegment === "autocenter"
              ? "Autocenter (Oficina/Automotivo)"
              : "Varejo (Loja/Comércio)"
        }
        initialPlan={selectedPlanForModal}
      />

      {/* IFRAMES FULL FUNNEL PARA POPUPS (VAREJO E FOOD) */}
      <iframe
        src="https://links.fullfunnel.app/widget/form/BL9CJSTJLMpcdWMeZC1t"
        style={{
          display: "none",
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "30px",
        }}
        id="popup-BL9CJSTJLMpcdWMeZC1t"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="alwaysShow"
        data-form-name="Form Planos Varejo - Novo Site Waybit"
        data-height="494"
        data-layout-iframe-id="popup-BL9CJSTJLMpcdWMeZC1t"
        data-form-id="BL9CJSTJLMpcdWMeZC1t"
        data-cookie-consent="true"
        title="Form Planos Varejo - Novo Site Waybit"
        data-modal-height="500"
      />

      <iframe
        src="https://links.fullfunnel.app/widget/form/hZtTltmYEVplINDvwqsS"
        style={{
          display: "none",
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "30px",
        }}
        id="popup-hZtTltmYEVplINDvwqsS"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="alwaysShow"
        data-form-name="Form Planos Food - Novo Site Waybit"
        data-height="558"
        data-layout-iframe-id="popup-hZtTltmYEVplINDvwqsS"
        data-form-id="hZtTltmYEVplINDvwqsS"
        data-cookie-consent="true"
        title="Form Planos Food - Novo Site Waybit"
        data-modal-height="500"
      />
    </div>
  );
}

export default PlanosPage;
