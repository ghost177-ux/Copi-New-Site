import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Store, Utensils, Wrench } from "lucide-react";
import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import promoAutocenterImg from "@/assets/Autocenters.png";
import promoFoodImg from "@/assets/food copy.png";
import promoVarejoImg from "@/assets/varejo copy.png";

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
  revenue: string;
  terminals: string;
}

interface Segment {
  label: string;
  color: string;
  icon: typeof Store;
  banner: string;
  bannerAlt: string;
  plans: Plan[];
  resources: string[];
}

const segments: Record<SegmentKey, Segment> = {
  varejo: {
    label: "VAREJO",
    color: "#3BBCEC",
    icon: Store,
    banner: promoVarejoImg,
    bannerAlt: "Super Promoção para Sua Loja",
    plans: [
      {
        id: "fit-varejo",
        name: "FIT VAREJO",
        monthlyPrice: "199,00",
        annualPrice: "165,84",
        revenue: "Faturamento até 30 mil por mês",
        terminals: "2 PDVs",
      },
      {
        id: "basic-varejo",
        name: "BASIC VAREJO",
        monthlyPrice: "399,00",
        annualPrice: "332,50",
        revenue: "Faturamento de 30 a 100 mil por mês",
        terminals: "4 PDVs",
      },
      {
        id: "full-varejo",
        name: "FULL VAREJO",
        monthlyPrice: "599,00",
        annualPrice: "499,17",
        revenue: "Faturamento de 100 a 200 mil por mês",
        terminals: "8 PDVs",
      },
      {
        id: "vip-varejo",
        name: "VIP VAREJO",
        monthlyPrice: "799,00",
        annualPrice: "665,84",
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
    banner: promoFoodImg,
    bannerAlt: "Super Promoção para Restaurantes",
    plans: [
      {
        id: "fit-food",
        name: "FIT FOOD",
        monthlyPrice: "199,00",
        annualPrice: "165,00",
        revenue: "Faturamento até 60 mil por mês",
        terminals: "2 PDVs",
      },
      {
        id: "basic-food",
        name: "BASIC FOOD",
        monthlyPrice: "299,00",
        annualPrice: "249,00",
        revenue: "Faturamento de 60 a 120 mil por mês",
        terminals: "PDVs Ilimitados",
      },
      {
        id: "full-food",
        name: "FULL FOOD",
        monthlyPrice: "449,00",
        annualPrice: "374,00",
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
    banner: promoAutocenterImg,
    bannerAlt: "Super Promoção para Auto-Center",
    plans: [
      {
        id: "fit-autocenter",
        name: "FIT AUTO-CENTER",
        monthlyPrice: "199,00",
        annualPrice: "165,84",
        revenue: "Faturamento até 30 mil por mês",
        terminals: "2 PDVs",
      },
      {
        id: "basic-autocenter",
        name: "BASIC AUTO-CENTER",
        monthlyPrice: "399,00",
        annualPrice: "332,50",
        revenue: "Faturamento de 30 a 100 mil por mês",
        terminals: "4 PDVs",
      },
      {
        id: "full-autocenter",
        name: "FULL AUTO-CENTER",
        monthlyPrice: "599,00",
        annualPrice: "499,17",
        revenue: "Faturamento de 100 a 200 mil por mês",
        terminals: "8 PDVs",
      },
      {
        id: "vip-autocenter",
        name: "VIP AUTO-CENTER",
        monthlyPrice: "799,00",
        annualPrice: "665,84",
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

function PlanPrice({ price }: { price: string }) {
  const amount = formatPrice(price);
  if (!amount) {
    return (
      <span className="font-display text-[clamp(2rem,3.2vw,3rem)] font-bold leading-none">
        Consulte
      </span>
    );
  }

  return (
    <span className="flex items-baseline gap-1 whitespace-nowrap">
      <span className="text-[clamp(0.95rem,1.4vw,1.15rem)] font-semibold">R$</span>
      <span className="font-display text-[clamp(2.6rem,4.1vw,3.6rem)] font-bold leading-[0.9] tracking-tight">
        {amount.whole}
      </span>
      <span className="flex flex-col items-start self-center leading-none">
        <span className="text-[clamp(0.9rem,1.3vw,1.15rem)] font-bold">{amount.cents}</span>
        <span className="mt-1 text-[clamp(0.75rem,1vw,0.9rem)] font-medium">/Mês</span>
      </span>
    </span>
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

  return (
    <article className="flex h-full min-h-[390px] flex-col overflow-hidden rounded-tl-[36px] rounded-tr-[12px] rounded-br-[36px] rounded-bl-[12px] border border-[#D8D8D8] bg-white text-[#242424]">
      <div
        className="flex min-h-[150px] flex-col items-center justify-center gap-5 rounded-tl-[35px] rounded-tr-[11px] rounded-br-[36px] rounded-bl-none px-3 py-5 text-center text-white sm:min-h-[155px]"
        style={{ backgroundColor: color }}
      >
        <h3 className="font-display text-[clamp(1.125rem,2.1vw,1.75rem)] font-bold uppercase leading-tight">
          {plan.name}
        </h3>
        <PlanPrice price={price} />
      </div>

      {billingCycle === "anual" && (
        <p className="bg-[#2F2F2F] px-3 py-2 text-center text-xs font-bold tracking-wide text-white sm:text-sm">
          Até 12X no cartão
        </p>
      )}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-7 sm:pb-6">
        <button
          type="button"
          onClick={() => onSelect(plan.name)}
          className="mx-auto flex min-h-12 w-full max-w-[250px] items-center justify-center rounded-[9px] border-2 px-3 text-center font-display text-base font-bold transition-colors hover:bg-[var(--plan-accent)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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

        <div className="mt-5 space-y-3 text-[clamp(0.875rem,1.15vw,1rem)] leading-snug">
          <p className="min-h-10 border-b border-[#D8D8D8] pb-2">{plan.revenue}</p>
          <p className="border-b border-[#D8D8D8] pb-2">{plan.terminals}</p>
          <a
            href="#recursos-planos"
            className="inline-flex min-h-10 items-center pt-2 text-sm font-medium hover:underline"
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
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("mensal");
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeCard, setActiveCard] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const segment = segments[selectedSegment];
  const chooseSegment = (key: SegmentKey) => {
    setSelectedSegment(key);
    setActiveCard(0);
    carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !card) return;
    const left = card.offsetLeft - carousel.offsetLeft;
    carousel.scrollTo({ left, behavior: "smooth" });
    setActiveCard(index);
  };

  const handleCardScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach((card, index) => {
      const item = card as HTMLElement;
      const cardCenter = item.offsetLeft + item.offsetWidth / 2;
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
              <img src={segment.banner} alt={segment.bannerAlt} className="block h-auto w-full" />
            </div>
          </div>
        </section>

        <section className="w-full pb-5 sm:pb-7">
          <div className="fluid-container">
            <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 min-[960px]:flex-row">
              <div
                role="group"
                aria-label="Selecione um segmento"
                className="grid w-full grid-cols-3 items-center gap-2 min-[960px]:w-auto"
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
                      className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-[clamp(0.65rem,1vw,0.875rem)] font-bold transition-colors min-[540px]:gap-2 min-[540px]:px-3 sm:min-h-12"
                      style={{
                        borderColor: option.color,
                        color: active ? "#FFFFFF" : option.color,
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
              className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto scroll-smooth px-1 pb-2 md:auto-rows-fr md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4 xl:gap-3"
              style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              {segment.plans.map((plan) => (
                <div
                  key={plan.id}
                  className="w-[min(84vw,320px)] shrink-0 snap-center md:w-auto md:shrink"
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

            <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
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
