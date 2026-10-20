import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Store, Utensils, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import promoAutocenterDesktop1 from "@/assets/prom_ct1.png";
import promoAutocenterDesktop2 from "@/assets/prom_ct3.png";
import promoAutocenterMobile1 from "@/assets/prom_ct2.png";
import promoAutocenterMobile2 from "@/assets/prom_ct4.png";
import promoFoodDesktop1 from "@/assets/prom_fd1.png";
import promoFoodDesktop2 from "@/assets/prom_fd3.png";
import promoFoodMobile1 from "@/assets/prom_fd2.png";
import promoFoodMobile2 from "@/assets/prom_fd4.png";
import promoVarejoDesktop1 from "@/assets/prom_vj1.png";
import promoVarejoDesktop2 from "@/assets/prom_vj3.png";
import promoVarejoMobile1 from "@/assets/prom_vj2.png";
import promoVarejoMobile2 from "@/assets/prom_vj4.png";

export const Route = createFileRoute("/planosv2")({
  head: () => ({
    meta: [
      { title: "Planos e Preços Dominus ERP | Waybit" },
      {
        name: "description",
        content: "Conheça os planos do Dominus para Varejo, Food e Auto-Center.",
      },
    ],
  }),
  component: PlanosV2Page,
});

type SegmentKey = "varejo" | "food" | "autocenter";
type BillingCycle = "mensal" | "anual";

interface Plan {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  annualOriginalPrice?: string;
  revenue: string;
  terminals: string;
}

interface Segment {
  label: string;
  color: string;
  icon: typeof Store;
  banners: {
    desktop: [string, string];
    mobile: [string, string];
  };
  bannerAlt: string;
  plans: Plan[];
  resources: string[];
}

const segments: Record<SegmentKey, Segment> = {
  varejo: {
    label: "VAREJO",
    color: "#3BBCEC",
    icon: Store,
    banners: {
      desktop: [promoVarejoDesktop1, promoVarejoDesktop2],
      mobile: [promoVarejoMobile1, promoVarejoMobile2],
    },
    bannerAlt: "Super Promoção para Sua Loja",
    plans: [
      {
        id: "fit-varejo",
        name: "FIT VAREJO",
        monthlyPrice: "199,00",
        annualPrice: "165,84",
        annualOriginalPrice: "2.388,00",
        revenue: "Faturamento até 30 mil por mês",
        terminals: "2 PDVs",
      },
      {
        id: "basic-varejo",
        name: "BASIC VAREJO",
        monthlyPrice: "399,00",
        annualPrice: "332,50",
        annualOriginalPrice: "4.788,00",
        revenue: "Faturamento de 30 a 100 mil por mês",
        terminals: "4 PDVs",
      },
      {
        id: "full-varejo",
        name: "FULL VAREJO",
        monthlyPrice: "599,00",
        annualPrice: "499,17",
        annualOriginalPrice: "7.188,00",
        revenue: "Faturamento de 100 a 200 mil por mês",
        terminals: "8 PDVs",
      },
      {
        id: "vip-varejo",
        name: "VIP VAREJO",
        monthlyPrice: "799,00",
        annualPrice: "665,84",
        annualOriginalPrice: "9.588,00",
        revenue: "Faturamento acima de 200 mil por mês",
        terminals: "+ de 8 PDVs",
      },
    ],
    resources: [
      "Gestão de Vendas Completo",
      "Gestão de Estoque Completo",
      "Relatório Completo",
      "Cadastro Completo",
      "Gestão Financeira Completa",
      "Usuários Ilimitados",
      "Multifilial",
      "2GB Armazenamento em Nuvem",
      "NFC-e Ilimitado",
      "NF-e Ilimitado",
      "PDC",
      "Orçamento (DAV)",
      "Crediários / Fiado Carteira",
      "Gestão de Contas a Pagar e Rceber",
      "Devolução de Produto",
      "Dashboard Online",
      "Integração com Plataformas de Pagamentos",
      "Integração com Toten de Preço",
      "Gestão de Boletos",
      "Conciliação Bancaria Via OFX",
      "Central de Tickets",
      "PDV Offline",
      "Envio Automáticos de Boletos",
      "Malote de Transferências de Valores",
      "Cobrança Recorrente",
      "Gestão de Inventários",
      "Chat e E-mail",
      "WhatsApp",
      "Telefone",
      "Treinamento Ao vivo",
      "Exclusivo para o Vip Varejo",
      "Acompanhamento Exclusivo",
    ],
  },
  food: {
    label: "FOOD",
    color: "#FC4242",
    icon: Utensils,
    banners: {
      desktop: [promoFoodDesktop1, promoFoodDesktop2],
      mobile: [promoFoodMobile1, promoFoodMobile2],
    },
    bannerAlt: "Super Promoção para Restaurantes",
    plans: [
      {
        id: "fit-food",
        name: "FIT FOOD",
        monthlyPrice: "199,00",
        annualPrice: "165,00",
        annualOriginalPrice: "3.388,00",
        revenue: "Faturamento até 60 mil por mês",
        terminals: "2 PDVs",
      },
      {
        id: "basic-food",
        name: "BASIC FOOD",
        monthlyPrice: "299,00",
        annualPrice: "249,00",
        annualOriginalPrice: "3.588,00",
        revenue: "Faturamento de 60 a 120 mil por mês",
        terminals: "PDVs Ilimitados",
      },
      {
        id: "full-food",
        name: "FULL FOOD",
        monthlyPrice: "449,00",
        annualPrice: "374,00",
        annualOriginalPrice: "5.388,00",
        revenue: "Faturamento de 120 a 200 mil por mês",
        terminals: "PDVs Ilimitados",
      },
      {
        id: "vip-food",
        name: "VIP FOOD",
        monthlyPrice: "Consulte",
        annualPrice: "Consulte",
        revenue: "Faturamento acima de 200 mil por mês",
        terminals: "PDVs Ilimitados",
      },
    ],
    resources: [
      "Gestão de Vendas Completo",
      "Gestão de Estoque Completo",
      "Relatório Completo",
      "Cadastro Completo",
      "Gestão Financeira Completa",
      "Usuários Ilimitados",
      "Multifilial",
      "2GB Armazenamento em Nuvem",
      "NFC-e Ilimitado",
      "NF-e Ilimitado",
      "PDC",
      "Orçamento (DAV)",
      "Crediários / Fiado Carteira",
      "Gestão de Contas a Pagar e Rceber",
      "Devolução de Produto",
      "Integração com IFOOD",
      "Integração com Toten de Preço",
      "Gestão de Promoção",
      "Ficha Técnica",
      "Central de Tickets",
      "PDV Offline",
      "Dashboard Online",
      "Envio Automáticos de Boletos",
      "KDS",
      "Auto Atendimento",
      "Gestão de Inventários",
      "Chat e E-mail",
      "WhatsApp",
      "Telefone",
      "Treinamento Ao vivo",
      "Exclusico para o Vip FOOD",
      "Acompanhamento Exclusivo",
    ],
  },
  autocenter: {
    label: "AUTO-CENTER",
    color: "#FCC42C",
    icon: Wrench,
    banners: {
      desktop: [promoAutocenterDesktop1, promoAutocenterDesktop2],
      mobile: [promoAutocenterMobile1, promoAutocenterMobile2],
    },
    bannerAlt: "Super Promoção para Auto-Center",
    plans: [
      {
        id: "fit-autocenter",
        name: "FIT AUTO-CENTER",
        monthlyPrice: "199,00",
        annualPrice: "165,84",
        annualOriginalPrice: "2.388,00",
        revenue: "Faturamento até 30 mil por mês",
        terminals: "2 PDVs",
      },
      {
        id: "basic-autocenter",
        name: "BASIC AUTO-CENTER",
        monthlyPrice: "399,00",
        annualPrice: "332,50",
        annualOriginalPrice: "4.788,00",
        revenue: "Faturamento de 30 a 100 mil por mês",
        terminals: "4 PDVs",
      },
      {
        id: "full-autocenter",
        name: "FULL AUTO-CENTER",
        monthlyPrice: "599,00",
        annualPrice: "499,17",
        annualOriginalPrice: "7.188,00",
        revenue: "Faturamento de 100 a 200 mil por mês",
        terminals: "8 PDVs",
      },
      {
        id: "vip-autocenter",
        name: "VIP AUTO-CENTER",
        monthlyPrice: "799,00",
        annualPrice: "665,84",
        annualOriginalPrice: "9.588,00",
        revenue: "Faturamento acima de 200 mil por mês",
        terminals: "+ de 8 PDVs",
      },
    ],
    resources: [
      "Ordens de Serviço com status visual",
      "Checklist de entrada com fotos do veículo",
      "Histórico de revisões por placa e chassi",
      "Envio de orçamentos pelo WhatsApp",
      "Autorização digital de serviços",
      "Controle de garantia de peças e serviços",
      "Cotação e inserção de peças na O.S.",
      "Baixa automática no estoque",
      "Entrada de notas via importação de XML",
      "Estoque por código do fabricante e aplicação",
      "Alertas de estoque mínimo e compras pendentes",
      "Gestão de devoluções e trocas",
      "Cálculo automático de comissões",
      "Separação de mão de obra e peças",
      "Tempo de execução e taxa de retorno",
      "Relatório de produtividade por técnico",
      "Emissão combinada de NF-e e NFS-e",
      "Múltiplos caixas e usuários com permissões",
      "Contas a pagar e receber",
      "Boletos bancários, conciliação e PIX",
      "DRE Gerencial automático",
      "Histórico financeiro por cliente",
      "Backup automático diário em nuvem",
      "Suporte humanizado por WhatsApp",
    ],
  },
};

const segmentOrder: SegmentKey[] = ["varejo", "food", "autocenter"];

function formatPrice(price: string) {
  if (price === "Consulte") return null;
  const [whole, cents = "00"] = price.split(",");
  return { whole, cents };
}

function PlanPrice({ price, originalPrice }: { price: string; originalPrice?: string }) {
  const amount = formatPrice(price);

  return (
    <div className="flex flex-col items-center gap-[clamp(1px,0.25vw,4px)]">
      <span
        aria-hidden={!originalPrice}
        className="min-h-[1em] text-[clamp(0.75rem,0.9vw,0.9375rem)] font-medium leading-tight text-white/90 line-through decoration-white/80"
        style={{
          fontSize: "clamp(calc(0.75rem + 2px), calc(0.9vw + 2px), calc(0.9375rem + 2px))",
          visibility: originalPrice ? "visible" : "hidden",
        }}
      >
        R$ {originalPrice}
      </span>
      {amount ? (
        <span className="flex items-baseline gap-[clamp(2px,0.35vw,6px)] whitespace-nowrap">
          <span className="text-[clamp(0.95rem,1.4vw,1.15rem)] font-semibold">R$</span>
          <span className="font-display text-[clamp(2.6rem,4.1vw,3.6rem)] font-bold leading-[0.9] tracking-tight">
            {amount.whole}
          </span>
          <span className="flex flex-col items-start self-center leading-none">
            <span className="text-[clamp(0.9rem,1.3vw,1.15rem)] font-bold">{amount.cents}</span>
            <span className="mt-[clamp(2px,0.2vw,4px)] text-[clamp(0.75rem,1vw,0.9rem)] font-medium">
              /Mês
            </span>
          </span>
        </span>
      ) : (
        <span className="font-display text-[clamp(2.25rem,3vw,3.25rem)] font-bold leading-none">
          Consulte
        </span>
      )}
    </div>
  );
}

function PlanCard({
  plan,
  color,
  billingCycle,
  onSelect,
}: {
  plan: Plan;
  color: string;
  billingCycle: BillingCycle;
  onSelect: (planName: string) => void;
}) {
  const price = billingCycle === "anual" ? plan.annualPrice : plan.monthlyPrice;
  const originalPrice = billingCycle === "anual" ? plan.annualOriginalPrice : undefined;

  return (
    <article className="flex h-full min-h-[clamp(390px,34vw,440px)] flex-col overflow-hidden rounded-tl-[36px] rounded-tr-[12px] rounded-br-[36px] rounded-bl-[12px] border border-[#D8D8D8] bg-white text-[#242424]">
      <div className={`plan-header ${billingCycle === "anual" ? "rounded-[10px] bg-[#2F2F2F]" : ""}`}>
        <div
          className="plan-header-main flex min-h-[clamp(148px,14vw,180px)] flex-col items-center justify-center gap-[clamp(8px,1.1vw,16px)] rounded-tl-[35px] rounded-tr-[11px] rounded-br-[36px] rounded-bl-none px-[clamp(10px,1.2vw,20px)] py-[clamp(12px,1.4vw,20px)] text-center text-white"
          style={{ backgroundColor: color }}
        >
          <h3 className="font-display text-[clamp(1.125rem,2.1vw,1.75rem)] font-bold uppercase leading-tight">
            {plan.name}
          </h3>
          <PlanPrice price={price} originalPrice={originalPrice} />
        </div>

        {billingCycle === "anual" && (
          <div className="plan-installments rounded-bl-[10px] rounded-br-[10px] bg-[#2F2F2F] px-3 py-[clamp(7px,0.7vw,10px)] text-center text-[clamp(0.75rem,0.95vw,0.9375rem)] font-bold tracking-wide text-white">
            Até 12X no cartão
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-[clamp(12px,1.5vw,24px)] pb-[clamp(16px,1.5vw,24px)] pt-[clamp(16px,1.5vw,24px)]">
        <button
          type="button"
          onClick={() => onSelect(plan.name)}
          className="mx-auto flex min-h-[clamp(42px,3.2vw,48px)] w-full max-w-[clamp(180px,90%,280px)] items-center justify-center rounded-[9px] border-2 px-[clamp(8px,1vw,16px)] text-center font-display text-[clamp(0.875rem,1vw,1rem)] font-bold transition-colors hover:bg-[var(--plan-accent)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={
            {
              borderColor: color,
              color,
              "--plan-accent": color,
            } as CSSProperties
          }
        >
          Contrate Agora
        </button>

        <div className="mt-[clamp(16px,1.5vw,22px)] flex flex-1 flex-col text-[clamp(0.875rem,1vw,1rem)] leading-snug">
          <p className="min-h-10 border-b border-[#D8D8D8] pb-2">{plan.revenue}</p>
          <p className="min-h-9 border-b border-[#D8D8D8] py-2">{plan.terminals}</p>
          <a
            href="#recursos-planos"
            className="mt-auto inline-flex min-h-10 items-end pt-2 text-[clamp(0.875rem,1vw,1rem)] font-medium hover:underline"
            style={{ color }}
          >
            Saiba Mais +
          </a>
        </div>
      </div>
    </article>
  );
}

function PlanosV2Page() {
  const [selectedSegment, setSelectedSegment] = useState<SegmentKey>("varejo");
  const [activeBanner, setActiveBanner] = useState(1);
  const [bannerTransitionEnabled, setBannerTransitionEnabled] = useState(true);
  const [isBannerHovered, setIsBannerHovered] = useState(false);
  const [isBannerInteractionPaused, setIsBannerInteractionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("mensal");
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeCard, setActiveCard] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const bannerPointerStartX = useRef<number | null>(null);
  const segment = segments[selectedSegment];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);
    return () => mediaQuery.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || isBannerHovered || isBannerInteractionPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveBanner((current) => (current === 0 ? 1 : Math.min(current + 1, 3)));
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [selectedSegment, reducedMotion, isBannerHovered, isBannerInteractionPaused]);

  useEffect(() => {
    if (!reducedMotion) return;

    setBannerTransitionEnabled(false);
    setActiveBanner(1);
  }, [reducedMotion]);

  useEffect(() => {
    if (bannerTransitionEnabled) return;

    const frameId = window.requestAnimationFrame(() => setBannerTransitionEnabled(true));
    return () => window.cancelAnimationFrame(frameId);
  }, [bannerTransitionEnabled]);

  const chooseSegment = (key: SegmentKey) => {
    setSelectedSegment(key);
    setIsBannerInteractionPaused(false);
    setBannerTransitionEnabled(false);
    setActiveBanner(1);
    setActiveCard(0);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  };

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !card) return;
    const scrollportLeft = carousel.getBoundingClientRect().left + carousel.clientLeft;
    const left =
      card.getBoundingClientRect().left -
      scrollportLeft +
      carousel.scrollLeft -
      (carousel.clientWidth - card.clientWidth) / 2;
    carousel.scrollTo({ left, behavior: "smooth" });
    setActiveCard(index);
  };

  const handleCardScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    if (carousel.scrollLeft <= 1) {
      setActiveCard(0);
      return;
    }
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
      setActiveCard(segment.plans.length - 1);
      return;
    }
    const scrollportLeft = carousel.getBoundingClientRect().left + carousel.clientLeft;
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach((card, index) => {
      const item = card as HTMLElement;
      const cardCenter =
        item.getBoundingClientRect().left -
        scrollportLeft +
        carousel.scrollLeft +
        item.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });
    setActiveCard(nearestIndex);
  };

  const openPlanContact = (planName: string) => {
    setSelectedPlan(
      `${planName} (${segment.label} - ${billingCycle === "anual" ? "Anual" : "Mensal"})`,
    );
    setSpecialistOpen(true);
  };

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <Header currentPath="/planosv2" />
      <main className="flex-1">
        <section className="w-full py-5 sm:py-7">
          <div className="fluid-container">
            <div className="overflow-hidden rounded-[20px]">
              <div
                className="relative touch-pan-y"
                onMouseEnter={() => setIsBannerHovered(true)}
                onMouseLeave={() => setIsBannerHovered(false)}
                onPointerDown={(event) => {
                  setIsBannerInteractionPaused(true);
                  bannerPointerStartX.current = event.clientX;
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerUp={(event) => {
                  const pointerStartX = bannerPointerStartX.current;
                  bannerPointerStartX.current = null;
                  if (pointerStartX === null) return;

                  const dragDistance = event.clientX - pointerStartX;
                  if (Math.abs(dragDistance) < 40) return;

                  setActiveBanner((current) => {
                    if (dragDistance < 0) return Math.min(current + 1, 3);
                    return Math.max(current - 1, 0);
                  });
                }}
                onPointerCancel={() => {
                  bannerPointerStartX.current = null;
                }}
              >
                <div
                  onTransitionEnd={(event) => {
                    if (
                      event.target !== event.currentTarget ||
                      event.propertyName !== "transform" ||
                      (activeBanner !== 0 && activeBanner !== 3)
                    ) {
                      return;
                    }

                    setBannerTransitionEnabled(false);
                    setActiveBanner(activeBanner === 3 ? 1 : 2);
                  }}
                  className={`grid w-full grid-flow-col auto-cols-[100%] gap-3 ${
                    bannerTransitionEnabled
                      ? "transition-transform duration-[2000ms] ease-in-out motion-reduce:transition-none"
                      : "transition-none"
                  }`}
                  style={{
                    transform: `translateX(calc(-${activeBanner * 100}% - ${activeBanner * 12}px))`,
                  }}
                >
                  {[1, 0, 1, 0].map((bannerIndex, index) => {
                    const desktopImage = segment.banners.desktop[bannerIndex];
                    const isActive = activeBanner === index;
                    const mobileImage = segment.banners.mobile[bannerIndex];

                    return (
                      <picture
                        key={`${selectedSegment}-${index}`}
                        aria-hidden={!isActive}
                        className="block w-full overflow-hidden rounded-[20px]"
                      >
                        <source media="(max-width: 539px)" srcSet={mobileImage} />
                        <source media="(min-width: 540px)" srcSet={desktopImage} />
                        <img
                          src={desktopImage}
                          alt={isActive ? segment.bannerAlt : ""}
                          className="block h-auto w-full rounded-[20px]"
                        />
                      </picture>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-5 sm:pb-7">
          <div className="fluid-container">
            <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 min-[960px]:flex-row">
              <div
                role="group"
                aria-label="Selecione um segmento"
                className="inline-flex w-full min-w-0 items-center rounded-xl border border-border bg-surface-subtle p-1 min-[960px]:w-auto"
              >
                {segmentOrder.map((key) => {
                  const option = segments[key];
                  const Icon = option.icon;
                  const active = selectedSegment === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => chooseSegment(key)}
                      className={`flex min-h-9 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg px-2 text-[clamp(0.65rem,1vw,0.875rem)] font-semibold transition-colors min-[540px]:gap-2 min-[540px]:px-3 min-[960px]:flex-none ${
                        active ? "" : "text-muted-foreground hover:text-foreground"
                      }`}
                      style={{
                        color: active ? "#FFFFFF" : undefined,
                        backgroundColor: active ? option.color : "transparent",
                      }}
                    >
                      <Icon aria-hidden="true" className="size-4 shrink-0 sm:size-[18px]" />
                      <span className="whitespace-nowrap">{option.label}</span>
                    </button>
                  );
                })}
              </div>

              <div
                role="group"
                aria-label="Selecione a periodicidade"
                className="inline-flex shrink-0 items-center rounded-xl border border-border bg-surface-subtle p-1"
              >
                {(["mensal", "anual"] as const).map((cycle) => {
                  const active = billingCycle === cycle;
                  return (
                    <button
                      key={cycle}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setBillingCycle(cycle)}
                      className={`min-h-9 rounded-lg px-4 text-sm font-semibold transition-colors sm:px-5 ${
                        active
                          ? "bg-foreground text-background shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cycle === "mensal" ? "Mensal" : "Anual"}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section aria-label={`Planos ${segment.label}`} className="w-full pb-10 sm:pb-14">
          <div className="fluid-container">
            <div
              ref={carouselRef}
              onScroll={handleCardScroll}
              className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto scroll-smooth px-1 pb-2 min-[1025px]:grid min-[1025px]:grid-cols-4 min-[1025px]:gap-[clamp(12px,1vw,24px)] min-[1025px]:overflow-visible min-[1025px]:px-0 min-[1025px]:pb-0"
              style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              {segment.plans.map((plan) => (
                <div
                  key={plan.id}
                  className="min-w-0 w-full shrink-0 snap-start min-[540px]:basis-[calc((100%_-_12px)/2)] min-[540px]:w-auto min-[769px]:basis-[calc((100%_-_24px)/3)] min-[1025px]:basis-auto min-[1025px]:w-auto min-[1025px]:shrink"
                >
                  <PlanCard
                    plan={plan}
                    color={segment.color}
                    billingCycle={billingCycle}
                    onSelect={openPlanContact}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 min-[1025px]:hidden">
              <button
                type="button"
                aria-label="Plano anterior"
                onClick={() => scrollToCard(Math.max(activeCard - 1, 0))}
                disabled={activeCard === 0}
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground disabled:opacity-30"
              >
                <ChevronLeft size={17} />
              </button>
              <div
                className="flex items-center gap-1.5"
                aria-label={`Plano ${activeCard + 1} de 4`}
              >
                {segment.plans.map((plan, index) => (
                  <button
                    key={plan.id}
                    type="button"
                    aria-label={`Ir para ${plan.name}`}
                    onClick={() => scrollToCard(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeCard === index ? "w-6" : "w-2 bg-muted-foreground/30"
                    }`}
                    style={activeCard === index ? { backgroundColor: segment.color } : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Próximo plano"
                onClick={() => scrollToCard(Math.min(activeCard + 1, segment.plans.length - 1))}
                disabled={activeCard === segment.plans.length - 1}
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground disabled:opacity-30"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section
          id="recursos-planos"
          className="w-full border-t border-border bg-surface-subtle/50 py-10 sm:py-14 lg:py-16"
        >
          <div className="fluid-container">
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold tracking-tight text-foreground">
                O que está disponível nos planos {segment.label}?
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 rounded-2xl border border-border bg-background p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4 lg:p-9">
              {segment.resources.map((resource) => (
                <div key={resource} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Check
                    aria-hidden="true"
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: segment.color }}
                  />
                  <span>{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenSpecialist={() => setSpecialistOpen(true)} />
      <SpecialistDialog
        open={specialistOpen}
        onOpenChange={setSpecialistOpen}
        initialSegment={
          selectedSegment === "autocenter"
            ? "Auto-center (Oficina/Centro Automotivo)"
            : selectedSegment === "food"
              ? "Food (Restaurante/Delivery)"
              : "Varejo (Loja/Comércio)"
        }
        initialPlan={selectedPlan}
      />
    </div>
  );
}
