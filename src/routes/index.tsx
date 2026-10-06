import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  Users,
  Star,
  Headset,
  CheckCircle2,
  Quote,
  ShoppingBag,
  ShoppingCart,
  Store,
  Wrench,
  Car,
  Gauge,
  Utensils,
  Coffee,
  ChefHat,
  ShieldCheck,
  MessageSquare,
  Phone,
  Laptop,
  Receipt,
  Truck,
  BarChart3,
  Smartphone,
  Zap,
  Clock,
  Cake,
  Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import { BlogCarouselSection } from "@/components/BlogCarouselSection";
import { CicloOperacionalSideBySide } from "@/components/home/CicloOperacionalSideBySide";
import { DemonstracaoSection } from "@/components/home/DemonstracaoSection";

import foodImage from "@/assets/food.png";
import varejoImage from "@/assets/varejo.png";
import autocenterImage from "@/assets/autoc.png";
import varejoLogo from "@/assets/varejo-logo.png";
import foodLogo from "@/assets/food-logo.png";
import autocenterLogo from "@/assets/autocenter.png";
import xpertLogo from "@/assets/xpert.png";
import certbitLogo from "@/assets/certbit-logo.png";
import dominusIaLogo from "@/assets/Dominus IA.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waybit Software | Gestão leve para sua empresa" },
      { name: "description", content: "Soluções de gestão Waybit para Food, Varejo e Autocenter." },
      { property: "og:title", content: "Waybit Software | Gestão leve para sua empresa" },
      {
        property: "og:description",
        content: "Tecnologia para simplificar a rotina do seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const segments = [
  {
    id: "food",
    label: "FOOD",
    descriptor: "Restaurantes e delivery",
    image: foodImage,
    className: "scene-food",
    accentColor: "#EF4444",
  },
  {
    id: "varejo",
    label: "VAREJO",
    descriptor: "Lojas e comércio",
    image: varejoImage,
    className: "scene-varejo",
    accentColor: "#00ADEF",
  },
  {
    id: "autocenter",
    label: "AUTOCENTER",
    descriptor: "Oficinas e centros automotivos",
    image: autocenterImage,
    className: "scene-auto",
    accentColor: "#FFB800",
  },
] as const;

type SegmentId = (typeof segments)[number]["id"];

const segmentTheme: Record<
  SegmentId,
  {
    textClass: string;
    bgClass: string;
    buttonTextClass: string;
    color: string;
  }
> = {
  food: {
    textClass: "text-segment-food",
    bgClass: "bg-segment-food",
    buttonTextClass: "text-white",
    color: "var(--segment-food)",
  },
  varejo: {
    textClass: "text-segment-varejo",
    bgClass: "bg-segment-varejo",
    buttonTextClass: "text-white",
    color: "var(--segment-varejo)",
  },
  autocenter: {
    textClass: "text-segment-auto",
    bgClass: "bg-segment-auto",
    buttonTextClass: "text-zinc-950",
    color: "var(--segment-auto)",
  },
};

interface SegmentIconItem {
  icon: React.ElementType;
  className: string;
  motionClass: string;
}

const segmentContextualIcons: Record<
  SegmentId,
  [SegmentIconItem, SegmentIconItem, SegmentIconItem]
> = {
  varejo: [
    {
      icon: ShoppingBag,
      className: "top-[4%] -right-2 sm:-right-4",
      motionClass: "hero-ambient-float",
    },
    {
      icon: Store,
      className: "top-[36%] -left-2 sm:-left-4",
      motionClass: "",
    },
    {
      icon: ShoppingCart,
      className: "bottom-[16%] -right-1 sm:-right-3",
      motionClass: "hero-ambient-pulse",
    },
  ],
  food: [
    {
      icon: Utensils,
      className: "top-[4%] -right-2 sm:-right-4",
      motionClass: "hero-ambient-float",
    },
    {
      icon: Coffee,
      className: "top-[36%] -left-2 sm:-left-4",
      motionClass: "",
    },
    {
      icon: ChefHat,
      className: "bottom-[16%] -right-1 sm:-right-3",
      motionClass: "hero-ambient-pulse",
    },
  ],
  autocenter: [
    {
      icon: Wrench,
      className: "top-[4%] -right-2 sm:-right-4",
      motionClass: "hero-ambient-float",
    },
    {
      icon: Car,
      className: "top-[36%] -left-2 sm:-left-4",
      motionClass: "",
    },
    {
      icon: Gauge,
      className: "bottom-[16%] -right-1 sm:-right-3",
      motionClass: "hero-ambient-pulse",
    },
  ],
};

const AUTO_ROTATE_MS = 5500;

interface TestimonialCase {
  id: string;
  name: string;
  company: string;
  segment: string;
  segmentIcon: React.ElementType;
  segmentColor: string;
  segmentBg: string;
  borderColor: string;
  videoId: string;
  quote: string;
}

const testimonialCases: TestimonialCase[] = [
  {
    id: "rosana",
    name: "Rosana",
    company: "Grãos e Zero Açúcar",
    segment: "Varejo & Empório",
    segmentIcon: ShoppingBag,
    segmentColor: "text-[#00ADEF]",
    segmentBg: "bg-[#00ADEF]/10 border-[#00ADEF]/20",
    borderColor: "hover:border-[#00ADEF]/50",
    videoId: "ugzBfW_pkOo",
    quote:
      "A facilidade de adaptação da equipe foi surpreendente. Em menos de 2 dias o caixa já rodava com total segurança e o atendimento no balcão ficou infinitamente mais ágil.",
  },
  {
    id: "thiago",
    name: "Thiago",
    company: "Zum Zum Auto Center (12 anos cliente)",
    segment: "Auto-Center & Mecânica",
    segmentIcon: Wrench,
    segmentColor: "text-[#d99b00] dark:text-[#FCC42C]",
    segmentBg: "bg-[#FFB800]/15 border-[#FFB800]/25",
    borderColor: "hover:border-[#FCC42C]/50",
    videoId: "5tfA3619NXs",
    quote:
      "Reduzimos o tempo de montagem e cotação de orçamentos de dias para minutos. São 12 anos de parceria sólida e confiabilidade com a Waybit.",
  },
  {
    id: "felippe",
    name: "Felippe",
    company: "DaOrla Café",
    segment: "Food & Gastronomia",
    segmentIcon: Utensils,
    segmentColor: "text-[#EF4444]",
    segmentBg: "bg-[#EF4444]/10 border-[#EF4444]/20",
    borderColor: "hover:border-[#FC4242]/50",
    videoId: "ea7aOYtaCuA",
    quote:
      "A comanda eletrônica direto na mesa revolucionou nosso atendimento. E o grande diferencial: quando precisamos, o suporte humano atende de pronto, sem robô enrolando.",
  },
];

function Index() {
  const [query, setQuery] = useState("");
  const [activeSegment, setActiveSegment] = useState<SegmentId>("varejo");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const casesCarouselRef = useRef<HTMLDivElement>(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Refs de performance para Parallax e Tilt sem causar re-render no React
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef<number | null>(null);

  // Parallax suave e Tilt do card ativo via requestAnimationFrame e CSS Custom Properties
  useEffect(() => {
    const heroEl = heroRef.current;
    const sceneEl = sceneRef.current;
    if (!heroEl || !sceneEl) return;

    // Acessibilidade: respeitar preferência por redução de movimento
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let isRunning = false;

    const updateParallax = () => {
      // Lerp suave (fator 0.08) para amortecimento fluido e orgânico
      currentX.current += (targetX.current - currentX.current) * 0.08;
      currentY.current += (targetY.current - currentY.current) * 0.08;

      const diffX = Math.abs(targetX.current - currentX.current);
      const diffY = Math.abs(targetY.current - currentY.current);

      // Injeta variáveis CSS diretamente na ref da cena — ZERO re-renders React
      sceneEl.style.setProperty("--parallax-x", currentX.current.toFixed(4));
      sceneEl.style.setProperty("--parallax-y", currentY.current.toFixed(4));
      // Tilt sutil nos eixos X e Y limitado estritamente a ~1.8deg
      sceneEl.style.setProperty("--tilt-x", `${(currentY.current * -1.8).toFixed(3)}deg`);
      sceneEl.style.setProperty("--tilt-y", `${(currentX.current * 2.0).toFixed(3)}deg`);

      // Continua interpolando enquanto houver movimento pendente
      if (
        diffX > 0.0005 ||
        diffY > 0.0005 ||
        Math.abs(currentX.current) > 0.0005 ||
        Math.abs(currentY.current) > 0.0005
      ) {
        rafId.current = requestAnimationFrame(updateParallax);
      } else {
        isRunning = false;
        // Posição neutra perfeita ao retornar
        if (targetX.current === 0 && targetY.current === 0) {
          sceneEl.style.setProperty("--parallax-x", "0");
          sceneEl.style.setProperty("--parallax-y", "0");
          sceneEl.style.setProperty("--tilt-x", "0deg");
          sceneEl.style.setProperty("--tilt-y", "0deg");
        }
      }
    };

    const startRaf = () => {
      if (!isRunning) {
        isRunning = true;
        rafId.current = requestAnimationFrame(updateParallax);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Em touch, ignora mousemove para manter a rolagem e o swipe naturais
      if (e.pointerType === "touch") return;

      const rect = heroEl.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      // Normalizado de -1 a 1 em relação ao centro da Hero
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      targetX.current = Math.max(-1, Math.min(1, nx));
      targetY.current = Math.max(-1, Math.min(1, ny));
      startRaf();
    };

    const handlePointerLeave = () => {
      // Retorno suave e sem salto ao centro neutro (0,0)
      targetX.current = 0;
      targetY.current = 0;
      startRaf();
    };

    heroEl.addEventListener("pointermove", handlePointerMove);
    heroEl.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      heroEl.removeEventListener("pointermove", handlePointerMove);
      heroEl.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const handleCasesScroll = useCallback(() => {
    if (!casesCarouselRef.current) return;
    const { scrollLeft, clientWidth } = casesCarouselRef.current;
    if (clientWidth === 0) return;
    const cardWidth = 360;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveCaseIndex(Math.min(Math.max(newIndex, 0), testimonialCases.length - 1));
  }, []);

  const scrollCases = useCallback((direction: "prev" | "next") => {
    if (!casesCarouselRef.current) return;
    const targetIndex =
      direction === "prev"
        ? Math.max(activeCaseIndex - 1, 0)
        : Math.min(activeCaseIndex + 1, testimonialCases.length - 1);
    const card = casesCarouselRef.current.children[targetIndex] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveCaseIndex(targetIndex);
    }
  }, [activeCaseIndex]);

  const activeIndex = segments.findIndex((segment) => segment.id === activeSegment);

  const touchStartX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setActiveSegment((current) => {
      const currentIndex = segments.findIndex((segment) => segment.id === current);
      const nextIndex = (currentIndex + 1) % segments.length;
      const nextSegment = segments[nextIndex];
      return nextSegment ? nextSegment.id : segments[0].id;
    });
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveSegment((current) => {
      const currentIndex = segments.findIndex((segment) => segment.id === current);
      const prevIndex = (currentIndex - 1 + segments.length) % segments.length;
      const prevSegment = segments[prevIndex];
      return prevSegment ? prevSegment.id : segments[0].id;
    });
    setProgress(0);
  }, []);

  // Timer automático para rotacionar segmentos
  useEffect(() => {
    if (isPaused) return;

    const tickMs = 50;
    const stepPercent = (tickMs / AUTO_ROTATE_MS) * 100;

    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev + stepPercent >= 100) {
          goToNext();
          return 0;
        }
        return prev + stepPercent;
      });
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [isPaused, goToNext]);

  // Navegação por teclado
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (document.activeElement?.tagName === "INPUT") return;
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Gestos de toque (Swipe mobile)
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? null;
    if (touchEndX === null) return;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  }

  const match = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return null;

    if (
      normalized.includes("rest") ||
      normalized.includes("food") ||
      normalized.includes("delivery") ||
      normalized.includes("comida") ||
      normalized.includes("lanche") ||
      normalized.includes("padaria") ||
      normalized.includes("pizz") ||
      normalized.includes("bar")
    )
      return "food";

    if (
      normalized.includes("auto") ||
      normalized.includes("oficina") ||
      normalized.includes("mecân") ||
      normalized.includes("carro") ||
      normalized.includes("moto") ||
      normalized.includes("pneu") ||
      normalized.includes("peça")
    )
      return "autocenter";

    if (
      normalized.includes("loja") ||
      normalized.includes("varejo") ||
      normalized.includes("comércio") ||
      normalized.includes("comerc") ||
      normalized.includes("roupa") ||
      normalized.includes("mercado") ||
      normalized.includes("otica") ||
      normalized.includes("farm")
    )
      return "varejo";

    return null;
  }, [query]);

  useEffect(() => {
    if (match && match !== activeSegment) {
      setActiveSegment(match);
      setProgress(0);
    }
  }, [match, activeSegment]);

  // Controle de abertura e fechamento do modal fullFunnelModal
  useEffect(() => {
    const buttons = document.querySelectorAll(".abrirAgendarDemonstracao");
    const modal = document.getElementById("fullFunnelModal");
    const content = document.getElementById("fullFunnelContent");
    const closeBtn = document.querySelector("#fullFunnelContent .close-modal");

    const handleOpen = (e: Event) => {
      e.preventDefault();
      modal?.classList.add("show");

      const scriptId = "full-funnel-form-embed-js";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://links.fullfunnel.app/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (content && !content.contains(e.target as Node)) {
        modal?.classList.remove("show");
      }
    };

    const handleCloseClick = () => {
      modal?.classList.remove("show");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        modal?.classList.remove("show");
      }
    };

    buttons.forEach((btn) => btn.addEventListener("click", handleOpen));
    modal?.addEventListener("click", handleOutsideClick as EventListener);
    closeBtn?.addEventListener("click", handleCloseClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleOpen));
      modal?.removeEventListener("click", handleOutsideClick as EventListener);
      closeBtn?.removeEventListener("click", handleCloseClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function chooseSegment(id: SegmentId) {
    const segment = segments.find((item) => item.id === id);
    if (!segment) return;
    setActiveSegment(id);
    setProgress(0);
    setQuery(segment.label.charAt(0) + segment.label.slice(1).toLowerCase());
  }

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (match) {
      setActiveSegment(match);
      setProgress(0);
    }
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground flex flex-col justify-between selection:bg-primary/20">
      <Header currentPath="/" />

      <main className="flex-1 w-full">
        {/* ========================================================================= */}
        {/* SECTION: HERO                                                             */}
        {/* ========================================================================= */}
        <section id="hero" ref={heroRef} className="hero-shell relative overflow-hidden">
          {/* Ambient SaaS Glows */}
          <div
            className="pointer-events-none absolute -top-32 -left-20 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-20 transition-colors duration-700"
            style={{ backgroundColor: segmentTheme[activeSegment].color }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/4 -right-24 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-15 bg-[#00ADEF]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/2 right-[10%] -translate-y-1/2 -z-10 h-[420px] w-[420px] rounded-full blur-[110px] opacity-15 transition-colors duration-700 hidden lg:block"
            style={{ backgroundColor: segmentTheme[activeSegment].color }}
            aria-hidden="true"
          />

          <div className="w-full fluid-container grid items-center gap-8 sm:gap-10 py-8 sm:py-12 md:py-14 lg:min-h-[calc(100vh-125px)] lg:grid-cols-2 lg:gap-12">
            {/* COLUNA ESQUERDA: TEXTOS, BUSCA E CONTROLES */}
            <div className="relative z-20 w-full mx-auto lg:mx-0">
              <h1 className="font-display fluid-display font-extrabold leading-[1.14] sm:leading-[1.12] tracking-tight text-foreground w-full">
                A{" "}
                <span
                  className={`transition-colors duration-300 ${segmentTheme[activeSegment].textClass}`}
                  style={{ color: segmentTheme[activeSegment].color }}
                >
                  rotina
                </span>{" "}
                da sua empresa{" "}
                <span
                  className={`transition-colors duration-300 ${segmentTheme[activeSegment].textClass}`}
                  style={{ color: segmentTheme[activeSegment].color }}
                >
                  leve
                </span>{" "}
                e com menos{" "}
                <span
                  className={`transition-colors duration-300 ${segmentTheme[activeSegment].textClass}`}
                  style={{ color: segmentTheme[activeSegment].color }}
                >
                  esforço
                </span>
                .
              </h1>

              <p className="mt-3 sm:mt-4 fluid-subtitle text-muted-foreground font-normal leading-relaxed w-full">
                O ERP completo, ágil e intuitivo que descomplica seu controle de vendas, estoque e obrigações fiscais com suporte de verdade.
              </p>

              {/* FORMULÁRIO DE BUSCA OBRIGATÓRIO */}
              <form className="mt-6 sm:mt-8 w-full" onSubmit={submitSearch}>
                <label
                  htmlFor="segment-search"
                  className="mb-2.5 sm:mb-3 block font-display fluid-body font-semibold text-foreground tracking-tight"
                >
                  Qual seu ramo de atuação?
                </label>
                <div
                  className="search-shell transition-all duration-300 rounded-xl border-border/80 shadow-md shadow-black/[0.03] hover:border-border focus-within:shadow-lg w-full"
                  style={{ "--primary": segmentTheme[activeSegment].color } as React.CSSProperties}
                >
                  <Search className="shrink-0 text-muted-foreground" size={20} aria-hidden="true" />
                  <input
                    id="segment-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Busque seu segmento (ex: restaurante, loja, oficina)"
                    className="min-w-0 flex-1 bg-transparent font-body fluid-secondary text-foreground outline-none placeholder:text-muted-foreground truncate"
                    aria-describedby="segment-help"
                  />
                  <Button
                    type="submit"
                    className={`group size-10 sm:size-11 rounded-lg p-0 transition-all duration-200 shadow-cta hover:opacity-95 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shrink-0 ${segmentTheme[activeSegment].bgClass} ${segmentTheme[activeSegment].buttonTextClass}`}
                    style={{ backgroundColor: segmentTheme[activeSegment].color }}
                    aria-label="Buscar segmento"
                  >
                    <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
                </div>
                <p id="segment-help" className="sr-only">
                  Escolha Food, Varejo ou Autocenter.
                </p>
              </form>

              {/* CONTROLES DO CARROSSEL: PAGINAÇÃO EM PÍLULA/CÍRCULOS */}
              <div className="mt-6 sm:mt-8 md:mt-10 flex items-center">
                {/* Indicadores de Paginação: Pílula Ativa (Cápsula) + Círculos Cinzentos Inativos */}
                <div
                  className="flex items-center gap-2 p-1.5 rounded-full bg-slate-100/90 dark:bg-card/90 border border-border/80 backdrop-blur-sm shadow-xs"
                  role="tablist"
                  aria-label="Indicadores dos segmentos"
                >
                  {segments.map((seg, idx) => {
                    const isActive = activeSegment === seg.id;
                    return (
                      <button
                        key={seg.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => chooseSegment(seg.id)}
                        className={`transition-all duration-300 ease-out cursor-pointer flex items-center justify-center relative ${isActive
                          ? "h-3 w-8 sm:w-10 rounded-full shadow-sm"
                          : "size-2.5 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                          }`}
                        style={isActive ? { backgroundColor: segmentTheme[seg.id].color } : undefined}
                        title={`Ir para segmento 0${idx + 1} - ${seg.label}`}
                        aria-label={`Slide 0${idx + 1} ${seg.label}${isActive ? " (ativo)" : ""}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA: CENA ROTATIVA COM OS 3 SEGMENTOS EM CAMADAS */}
            <div
              ref={sceneRef}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none mx-auto py-2 sm:py-4 select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Microelementos geométricos discretos (sem confetes visuais) */}
              <div
                className="pointer-events-none absolute -top-1.5 left-3 hidden sm:flex items-center gap-1.5 opacity-30 select-none"
                aria-hidden="true"
              >
                <span className="size-1 rounded-full bg-foreground/50" />
                <span className="size-1 rounded-full bg-foreground/25" />
                <span className="size-1 rounded-full bg-foreground/10" />
              </div>

              <div
                className="pointer-events-none absolute bottom-7 -right-2 hidden lg:block opacity-35 select-none"
                aria-hidden="true"
              >
                <div
                  className="size-2 rounded-[1.5px] rotate-45 border transition-colors duration-500"
                  style={{ borderColor: segmentTheme[activeSegment].color }}
                />
              </div>

              <div
                className="pointer-events-none absolute top-14 -right-2 hidden lg:block opacity-25 select-none text-[11px] font-mono text-muted-foreground leading-none"
                aria-hidden="true"
              >
                +
              </div>

              {/* 3 Ícones contextuais do segmento ativo (sem textos, badges ou cápsulas) */}
              {segmentContextualIcons[activeSegment].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={`${activeSegment}-icon-${idx}`}
                    className={`scene-context-icon size-8 sm:size-9 hidden sm:flex ${item.className} ${item.motionClass}`}
                    aria-hidden="true"
                  >
                    <IconComp
                      size={16}
                      strokeWidth={1.8}
                      className="transition-colors duration-300"
                      style={{ color: segmentTheme[activeSegment].color }}
                    />
                  </div>
                );
              })}

              <div
                className={`scene scene-${activeSegment}-active`}
                aria-label="Slide rotativo dos segmentos atendidos pela Waybit"
                aria-live="polite"
              >
                <div className="scene-track" aria-hidden="true" />

                {segments.map((segment, index) => {
                  const diff = (index - activeIndex + segments.length) % segments.length;
                  const isCurrent = diff === 0;
                  const isNext = diff === 1;
                  const isPrev = diff === 2;

                  let roleClass = "scene-card-active";
                  if (isNext) roleClass = "scene-card-next";
                  if (isPrev) roleClass = "scene-card-prev";

                  return (
                    <button
                      key={segment.id}
                      type="button"
                      onClick={() => chooseSegment(segment.id)}
                      className={`scene-card ${segment.className} ${roleClass}`}
                      style={
                        {
                          "--card-color": segmentTheme[segment.id].color,
                          backgroundColor: segmentTheme[segment.id].color,
                        } as React.CSSProperties
                      }
                      aria-pressed={isCurrent}
                      aria-label={`Segmento ${segment.label}: ${segment.descriptor} (${isCurrent ? "em destaque" : "clique para girar para este segmento"
                        })`}
                    >
                      <img
                        src={segment.image}
                        alt={`Profissional representante do segmento ${segment.label}`}
                        width={389}
                        height={469}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />

                      {/* Badge nos cards de fundo (não exibido no card ativo para maior limpeza visual) */}
                      {!isCurrent && (
                        <span className="scene-peek-pill">
                          0{index + 1} {segment.label}
                        </span>
                      )}

                      {/* Informações editoriais do segmento */}
                      <span className="scene-label">
                        <span className="scene-count">
                          0{index + 1} • {isCurrent ? "Ativo" : "Alternar"}
                        </span>
                        <strong>{segment.label}</strong>
                        <small>{segment.descriptor}</small>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dica de interação sutil */}
              <p className="mt-3 sm:mt-4 text-center text-xs text-muted-foreground/75 hidden sm:block">
                Passe o mouse para pausar ou clique nos cards laterais para rotacionar
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 1. MÉTRICAS E VALIDAÇÃO SOCIAL INICIAL                           */}
        {/* ========================================================================= */}
        <section id="metricas" className="border-y border-border bg-surface-subtle/80 py-8 sm:py-10 lg:py-12 relative overflow-hidden w-full">
          <div className="fluid-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 sm:gap-6 lg:gap-8">
              {/* Card 1: Economia de tempo */}
              <div className="h-full flex flex-col items-center text-center justify-start p-4 sm:p-5 xl:p-7 rounded-2xl bg-white dark:bg-card border border-border/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#00ADEF]/10 text-[#00ADEF] flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Clock size={28} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" strokeWidth={2.2} />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start w-full">
                  <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center w-full">
                    <span className="metric-value font-display font-extrabold text-foreground tracking-tight leading-snug">
                      + De 30 % <br /> de economia
                    </span>
                  </div>
                  <span className="mt-1.5 sm:mt-2 fluid-caption text-muted-foreground font-medium w-full">
                    de tempo em nossos clientes.
                  </span>
                </div>
              </div>

              {/* Card 2: Clientes atendidos */}
              <div className="h-full flex flex-col items-center text-center justify-start p-4 sm:p-5 xl:p-7 rounded-2xl bg-white dark:bg-card border border-border/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#71BE44]/10 text-[#71BE44] flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Users size={28} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" strokeWidth={2.2} />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start w-full">
                  <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center w-full">
                    <span className="metric-value font-display font-extrabold text-foreground tracking-tight leading-snug">
                      + De 1.000 <br /> clientes
                    </span>
                  </div>
                  <span className="mt-1.5 sm:mt-2 fluid-caption text-muted-foreground font-medium w-full">
                    atendidos pelo Brasil.
                  </span>
                </div>
              </div>

              {/* Card 3: Nota de satisfação */}
              <div className="h-full flex flex-col items-center text-center justify-start p-4 sm:p-5 xl:p-7 rounded-2xl bg-white dark:bg-card border border-border/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#FFB800]/15 text-[#FFB800] flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Star size={28} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 fill-[#FFB800]" strokeWidth={2.2} />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start w-full">
                  <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center w-full">
                    <span className="metric-value font-display font-extrabold text-foreground tracking-tight leading-snug">
                      + De 9.6 / 10 <br /> em nota
                    </span>
                  </div>
                  <span className="mt-1.5 sm:mt-2 fluid-caption text-muted-foreground font-medium w-full">
                    de satisfação de clientes.
                  </span>
                </div>
              </div>

              {/* Card 4: Experiência no mercado */}
              <div className="h-full flex flex-col items-center text-center justify-start p-4 sm:p-5 xl:p-7 rounded-2xl bg-white dark:bg-card border border-border/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Cake size={28} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 text-[#EF4444]" strokeWidth={2.2} />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start w-full">
                  <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-center justify-center w-full">
                    <span className="metric-value font-display font-extrabold text-foreground tracking-tight leading-snug">
                      + De 15 anos de <br /> experiência
                    </span>
                  </div>
                  <span className="mt-1.5 sm:mt-2 fluid-caption text-muted-foreground font-medium w-full">
                    em sistema de gestão
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 2. A SOLUÇÃO COMPLETA: SISTEMA DOMINUS                           */}
        {/* ========================================================================= */}
        <section id="solucao-dominus" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-background w-full">
          <div className="fluid-container">
            <div className="w-full mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 sm:px-4 py-1.5 fluid-caption font-semibold text-primary mb-3 sm:mb-4">
                <Sparkles size={14} className="text-[#FFB800]" />
                <span>O Sistema de Gestão Definitivo</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground leading-[1.18]">
                Conheça o Sistema{" "}
                <span>
                  DOMINUS
                </span>
                : o cérebro operacional do seu negócio
              </h2>
              <p className="mt-3.5 sm:mt-5 fluid-body-lg text-muted-foreground leading-relaxed">
                Chega de perder tempo apagando incêndios com sistemas pesados ou planilhas que não
                fecham. O <strong>Dominus</strong> unifica vendas, estoque, compras e finanças em
                uma interface moderna, rápida e feita para quem não pode perder nem um minuto no
                balcão.
              </p>
            </div>

            {/* Comparativo de Valor: O Caos Tradicional vs Fluidez Dominus */}
            <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch w-full">
              {/* O Caos Tradicional */}
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.02] p-5 sm:p-7 lg:p-9 flex flex-col justify-between w-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fluid-caption font-semibold bg-rose-500/10 text-rose-600 mb-4 sm:mb-6">
                    <span className="size-2 rounded-full bg-rose-500" />
                    Como é a gestão sem o Dominus
                  </div>
                  <h3 className="font-display fluid-h3 font-bold text-foreground mb-3 sm:mb-4">
                    O ciclo do estresse e do retrabalho diário
                  </h3>
                  <ul className="space-y-3 sm:space-y-3.5 fluid-secondary text-muted-foreground">
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <span className="size-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✕
                      </span>
                      <span>
                        Filas no caixa por travamentos ou lentidão em momentos de alto movimento.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <span className="size-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✕
                      </span>
                      <span>
                        Estoque furado: você descobre que o produto acabou bem na hora que o cliente
                        quer comprar.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <span className="size-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✕
                      </span>
                      <span>
                        Insegurança fiscal e medo de multas do SEFAZ por emissão manual ou
                        desatualizada.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <span className="size-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✕
                      </span>
                      <span>
                        Falta de clareza se a empresa teve lucro real ou prejuízo no fim do mês.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-rose-500/15 fluid-caption text-rose-700/80 font-medium">
                  Resultado: noites mal dormidas, estresse com a equipe e perda de faturamento.
                </div>
              </div>

              {/* A Solução Dominus */}
              <div className="rounded-2xl border border-[#71BE44]/30 bg-gradient-to-br from-[#71BE44]/[0.06] via-transparent to-[#00ADEF]/[0.05] p-5 sm:p-7 lg:p-9 flex flex-col justify-between shadow-sm relative w-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fluid-caption font-semibold bg-[#71BE44]/15 text-[#62a83a] mb-4 sm:mb-6">
                    <span className="size-2 rounded-full bg-[#71BE44]" />
                    Com o Sistema Dominus da Waybit
                  </div>
                  <h3 className="font-display fluid-h3 font-bold text-foreground mb-3 sm:mb-4">
                    Controle total, processos leves e equipe produtiva
                  </h3>
                  <ul className="space-y-3 sm:space-y-3.5 fluid-secondary text-foreground/90">
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 size={18} className="text-[#71BE44] shrink-0 mt-0.5" />
                      <span>
                        <strong>Frente de Caixa (PDV) ultra-rápida:</strong> fecha vendas em
                        segundos e continua operando mesmo sem internet.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 size={18} className="text-[#71BE44] shrink-0 mt-0.5" />
                      <span>
                        <strong>Estoque sincronizado em tempo real:</strong> entrada de notas por
                        XML com 1 clique e ponto de reposição automático.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 size={18} className="text-[#71BE44] shrink-0 mt-0.5" />
                      <span>
                        <strong>100% em conformidade com o SEFAZ:</strong> emissão rápida de NFC-e,
                        NF-e, SAT e geração automática para seu contador.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 size={18} className="text-[#71BE44] shrink-0 mt-0.5" />
                      <span>
                        <strong>DRE e Fluxo de Caixa transparente:</strong> veja seu lucro líquido
                        diário no computador ou no celular.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#71BE44]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="fluid-caption font-semibold text-[#62a83a] text-center sm:text-left">
                    Mais de 2.500 empresários já deram esse salto.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 3. PROVA SOCIAL REAL: DEPOIMENTOS EM VÍDEO DOS 3 NICHOS          */}
        {/* ========================================================================= */}
        <section id="depoimentos" className="py-12 sm:py-16 lg:py-24 bg-surface-subtle border-t border-border relative overflow-hidden w-full">
          <div className="fluid-container">
            <div className="w-full mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 sm:px-4 py-1.5 fluid-caption font-semibold text-primary mb-3 sm:mb-4">
                <Quote size={13} className="text-primary" />
                <span>Histórias Reais de Sucesso</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground leading-[1.18]">
                Quem vive o comércio na prática confia na{" "}
                <span className="font-extrabold">
                  Waybit
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 fluid-body-lg text-muted-foreground leading-relaxed">
                Veja o que empresários dos ramos de <strong>Varejo</strong>,{" "}
                <strong>Auto-Center</strong> e <strong>Gastronomia</strong> relatam sobre a
                transformação na rotina das suas empresas com o Dominus.
              </p>
            </div>

            {/* Carrossel no Mobile/Tablet e Grid no Desktop */}
            <div className="relative mt-8 sm:mt-12 lg:mt-14 w-full">
              <div
                ref={casesCarouselRef}
                onScroll={handleCasesScroll}
                className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scroll-smooth pb-4 lg:pb-0 px-4 sm:px-6 lg:px-0 -mx-4 sm:-mx-6 lg:mx-0 no-scrollbar touch-pan-x items-stretch w-full"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {testimonialCases.map((item) => (
                  <div
                    key={item.id}
                    className={`w-[84vw] max-w-[360px] sm:w-[360px] md:w-[380px] lg:w-auto shrink-0 lg:shrink snap-center lg:snap-align-none rounded-2xl border border-border bg-card/95 backdrop-blur-sm p-4 sm:p-5 lg:p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.borderColor} group`}
                  >
                    <div>
                      {/* Vídeo Nativo Incorporado */}
                      <div className="relative w-full aspect-[9/13.5] rounded-xl overflow-hidden bg-black shadow-inner border border-zinc-800/80 mb-4 sm:mb-5">
                        <iframe
                          src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&playsinline=1`}
                          title={`Depoimento em vídeo de ${item.name} (${item.company})`}
                          className="w-full h-full border-0"
                          loading="lazy"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      {/* Tag de Segmento + Avaliação em Estrelas */}
                      <div className="flex items-center justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border ${item.segmentBg} ${item.segmentColor}`}
                        >
                          <item.segmentIcon size={13} />
                          {item.segment}
                        </span>
                        <div className="flex items-center text-[#FFB800]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill="#FFB800" stroke="#FFB800" className="sm:w-3.5 sm:h-3.5" />
                          ))}
                        </div>
                      </div>

                      {/* Texto do Depoimento */}
                      <blockquote className="fluid-body text-foreground/90 font-medium italic leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Autor */}
                    <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-border/80">
                      <h4 className="font-display fluid-h4 font-bold text-foreground">{item.name}</h4>
                      <p className="fluid-caption text-muted-foreground font-medium">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles no Mobile */}
              <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 lg:hidden">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => scrollCases("prev")}
                  disabled={activeCaseIndex === 0}
                  className="size-8.5 sm:size-9 rounded-full border-border cursor-pointer disabled:opacity-30 transition-all flex items-center justify-center"
                  aria-label="Ver case anterior"
                >
                  <ChevronLeft size={16} />
                </Button>

                <div className="flex items-center gap-1.5 px-2">
                  {testimonialCases.map((c, i) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        const card = casesCarouselRef.current?.children[i] as HTMLElement | undefined;
                        card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                        setActiveCaseIndex(i);
                      }}
                      className={`h-2 rounded-full transition-all cursor-pointer ${activeCaseIndex === i
                          ? "w-6 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      aria-label={`Ir para case ${i + 1}`}
                    />
                  ))}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => scrollCases("next")}
                  disabled={activeCaseIndex === testimonialCases.length - 1}
                  className="size-8.5 sm:size-9 rounded-full border-border cursor-pointer disabled:opacity-30 transition-all flex items-center justify-center"
                  aria-label="Ver próximo case"
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 4. DIFERENCIAL SUPORTE HUMANO                                    */}
        {/* ========================================================================= */}
        <section id="diferencial-suporte" className="py-12 sm:py-16 lg:py-24 bg-background border-t border-border relative overflow-hidden w-full">
          <div className="fluid-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
              <div className="lg:col-span-6 w-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 sm:px-4 py-1.5 fluid-caption font-semibold text-emerald-600 mb-3 sm:mb-4">
                  <ShieldCheck size={14} className="text-[#71BE44]" />
                  <span>Diferencial Exclusivo Waybit</span>
                </div>
                <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground leading-[1.18]">
                  Trocar de sistema dá medo?{" "}
                  <span className="block sm:inline text-foreground">
                    Com a{" "}
                    <span className="font-extrabold">
                      Waybit
                    </span>
                    , você{" "}
                    <span className="font-extrabold">
                      nunca fica na mão
                    </span>
                    .
                  </span>
                </h2>
                <p className="mt-4 sm:mt-6 fluid-body-lg text-muted-foreground leading-relaxed">
                  Sabemos que o maior pavor de quem gerencia um comércio é ver o sistema falhar no
                  sábado à noite ou na hora do rush e cair em um atendimento automatizado que não
                  resolve nada.
                </p>
                <p className="mt-2.5 sm:mt-3 fluid-body text-muted-foreground leading-relaxed">
                  Na Waybit, o suporte é <strong>humanizado de verdade</strong>: pessoas reais,
                  especialistas no seu ramo, prontas para atender via WhatsApp ou telefone em
                  minutos.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <Button
                    onClick={() => setSpecialistOpen(true)}
                    className="h-11 sm:h-12 px-6 sm:px-7 bg-[#71BE44] hover:bg-[#62a83a] text-white font-semibold cursor-pointer shadow-sm flex items-center justify-center gap-2 fluid-btn"
                  >
                    <MessageSquare size={17} />
                    Falar com um Consultor Agora
                  </Button>
                  <a href="tel:+5521975812676" className="flex">
                    <Button
                      variant="outline"
                      className="h-11 sm:h-12 px-5 sm:px-6 border-border hover:bg-muted font-semibold flex items-center justify-center gap-2 cursor-pointer w-full fluid-btn"
                    >
                      <Phone size={16} className="text-[#00ADEF]" />
                      (21) 97581-2676
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-border bg-surface-subtle w-full">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#71BE44]/15 text-[#71BE44] flex items-center justify-center mb-3 sm:mb-4">
                    <Headset size={20} />
                  </div>
                  <h3 className="font-display fluid-h4 font-bold text-foreground">100% Humano</h3>
                  <p className="mt-1.5 sm:mt-2 fluid-secondary text-muted-foreground leading-relaxed">
                    Sem filas de chatbots ou robôs engessados. Você conversa direto com um analista
                    técnico que resolve.
                  </p>
                </div>

                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-border bg-surface-subtle w-full">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#00ADEF]/15 text-[#00ADEF] flex items-center justify-center mb-3 sm:mb-4">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-display fluid-h4 font-bold text-foreground">
                    Agilidade Real
                  </h3>
                  <p className="mt-1.5 sm:mt-2 fluid-secondary text-muted-foreground leading-relaxed">
                    Tempo médio de resposta abaixo de 5 minutos no WhatsApp. Seu balcão não pode
                    esperar.
                  </p>
                </div>

                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-border bg-surface-subtle w-full">
                  <div className="size-9 sm:size-10 rounded-xl bg-[#FFB800]/15 text-[#FFB800] flex items-center justify-center mb-3 sm:mb-4">
                    <Zap size={20} />
                  </div>
                  <h3 className="font-display fluid-h4 font-bold text-foreground">
                    Plantão nos Picos
                  </h3>
                  <p className="mt-1.5 sm:mt-2 fluid-secondary text-muted-foreground leading-relaxed">
                    Acompanhamento prioritário nos horários de maior fluxo para clientes com alta
                    intensidade operacional.
                  </p>
                </div>

                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-border bg-surface-subtle w-full">
                  <div className="size-9 sm:size-10 rounded-xl bg-purple-500/15 text-purple-600 flex items-center justify-center mb-3 sm:mb-4">
                    <Layers size={20} />
                  </div>
                  <h3 className="font-display fluid-h4 font-bold text-foreground">
                    Migração Assistida
                  </h3>
                  <p className="mt-1.5 sm:mt-2 fluid-secondary text-muted-foreground leading-relaxed">
                    Trazemos o cadastro de produtos, clientes e fornecedores do seu sistema antigo
                    com total precisão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 5. SOLUÇÕES E SEGMENTOS WAYBIT                                   */}
        {/* ========================================================================= */}
        {/*
          RESPONSIVE EXCEPTION: #solucoes-segmentos
          - Exceção: Interpolação fluida contínua (80% -> 100%) no wrapper dos cards e
            grade com distribuição assimétrica 3+2 (>=960px) e 2+1(centralizado)+2 (540-959px).
          - Breakpoints utilizados:
            * >= 960px: grade 3 + 2, wrapper interpola de 80% (1439px) a 100% (960px). Acima de 1440px: 80% fixo.
            * 540px a 959px: grade 2 + 1 (centralizado) + 2, wrapper interpola de 80% (959px) a 100% (540px).
            * < 540px: 1 coluna, wrapper interpola de 80% (539px) a 100% (375px). < 375px: 100% fixo.
          - Comportamento Global Padrão: Elementos utilizam 100% da largura útil do fluid-container.
          - Justificativa: Ao reduzir colunas (de 3 para 2, ou de 2 para 1), os cards ganham grande espaço
            horizontal. O wrapper a ~80% no início de cada faixa evita cards desproporcionalmente largos,
            crescendo até 100% conforme a tela estreita.
          - Preservar: Centralização horizontal (margin-inline: auto), larguras proporcionais dos cards e
            Dominus Food centralizado na linha 2 com largura de exatamente 1 coluna.
        */}
        <section id="solucoes-segmentos" className="py-12 sm:py-16 lg:py-24 bg-surface-subtle border-t border-border relative overflow-hidden w-full">
          {/* Estilos locais para interpolação contínua do wrapper dos cards */}
          <style>{`
            #solucoes-segmentos .cards-fluid-wrapper {
              width: 100%;
              margin-inline: auto;
            }
            @media (min-width: 375px) and (max-width: 539.98px) {
              #solucoes-segmentos .cards-fluid-wrapper {
                /* Faixa 4 (375px a 539px): cresce de 80% em 539px até 100% em 375px */
                width: clamp(80%, calc(100% + 230.73px - 61.53vw), 100%);
              }
            }
            @media (min-width: 540px) and (max-width: 959.98px) {
              #solucoes-segmentos .cards-fluid-wrapper {
                /* Faixa 3 (540px a 959px): cresce de 80% em 959px até 100% em 540px */
                width: clamp(80%, calc(100% + 222.16px - 41.14vw), 100%);
              }
            }
            @media (min-width: 960px) and (max-width: 1439.98px) {
              #solucoes-segmentos .cards-fluid-wrapper {
                /* Faixa 2 (960px a 1439px): cresce de 80% em 1439px até 100% em 960px */
                width: clamp(80%, calc(100% + 518.4px - 54vw), 100%);
              }
            }
            @media (min-width: 1440px) {
              #solucoes-segmentos .cards-fluid-wrapper {
                /* Faixa 1 (>= 1440px): 80% fixo centralizado */
                width: 80%;
              }
            }
          `}</style>

          {/* Container Global 100% Fluido com Gutter Unificado (3% <540px, 5% 540-1439px, 10% >=1440px) */}
          <div className="fluid-container">
            <div className="w-full mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 sm:px-4 py-1.5 fluid-caption font-bold text-primary mb-3 sm:mb-4 shadow-2xs">
                <Sparkles size={13} className="text-primary" />
                <span>Ecossistema Waybit • Soluções Especializadas</span>
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground leading-[1.2]">
                Conheça um{" "}
                <span>
                  sistema de gestão empresarial completo
                </span>{" "}
                com o melhor suporte do mercado!
              </h2>
              <p className="mt-3 sm:mt-4 fluid-body-lg text-muted-foreground leading-relaxed w-full mx-auto">
                Clique na solução para seu segmento e conheça mais:
              </p>
            </div>

            {/* Wrapper dos cards com interpolação fluida contínua e centralização */}
            <div className="cards-fluid-wrapper mx-auto">
              {/* Grade Responsiva Adaptativa: 3 + 3 no desktop, 2 colunas no tablet, 1 coluna no mobile */}
              <div className="grid grid-cols-1 min-[540px]:grid-cols-2 min-[960px]:grid-cols-3 gap-4 sm:gap-6 items-stretch w-full">
                {waybitAllSolutions.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col h-full w-full"
                  >
                    <SolutionCard
                      item={item}
                      onOpenSpecialist={() => setSpecialistOpen(true)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 6. BANNER DE CONVERSÃO / DEMONSTRAÇÃO GRATUITA                   */}
        {/* ========================================================================= */}
        <DemonstracaoSection />

        {/* ========================================================================= */}
        {/* EXCEÇÃO CRÍTICA PROTEGIDA: #ciclo-operacional                             */}
        {/* Substitui a seção "Recursos Completos" da referência.                      */}
        {/* Preserva o diagrama Diag-ciclo.png, a órbita do foguete e os textos.     */}
        {/* Container adaptado ao sistema fluido 100%.                                */}
        {/* ========================================================================= */}
        <CicloOperacionalSideBySide />

        {/* ========================================================================= */}
        {/* SECTION: 7. AVALIAÇÕES VERIFICADAS NO GOOGLE (4.9 ESTRELAS)               */}
        {/* ========================================================================= */}
        <section id="avaliacoes-google" className="py-12 sm:py-16 lg:py-24 bg-background border-t border-border w-full">
          <div className="fluid-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 w-full">
              <div className="w-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3.5 sm:px-4 py-1.5 fluid-caption font-semibold text-amber-600 mb-2.5 sm:mb-3">
                  <Star size={13} fill="#FFB800" stroke="#FFB800" />
                  <span>Avaliações Verificadas</span>
                </div>
                <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                  Aprovado com 4.9 estrelas no Google
                </h2>
                <p className="mt-2 fluid-body-lg text-muted-foreground">
                  A opinião de gestores e proprietários que confiam na estabilidade da Waybit todos
                  os dias.
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-border bg-surface-subtle self-start md:self-auto shrink-0">
                <div className="text-xl sm:text-2xl font-black text-foreground font-display">4.9</div>
                <div>
                  <div className="flex items-center text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FFB800" stroke="#FFB800" className="sm:w-3.5 sm:h-3.5" />
                    ))}
                  </div>
                  <span className="fluid-caption text-muted-foreground font-medium">
                    Classificação no Google
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
              <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface-subtle flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center text-[#FFB800] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FFB800" stroke="#FFB800" />
                    ))}
                  </div>
                  <p className="fluid-body text-foreground/90 leading-relaxed italic">
                    &ldquo;Excelente software! Já passei por três sistemas conhecidos no mercado e
                    todos me deixaram na mão no suporte. Com a Waybit, qualquer dúvida é resolvida
                    em minutos pelo WhatsApp.&rdquo;
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/80">
                  <p className="fluid-h4 font-bold text-foreground">Marcos Vinícius</p>
                  <p className="fluid-caption text-muted-foreground">Supermercado Nova Estrela</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface-subtle flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center text-[#FFB800] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FFB800" stroke="#FFB800" />
                    ))}
                  </div>
                  <p className="fluid-body text-foreground/90 leading-relaxed italic">
                    &ldquo;O módulo de auto-center é completo demais. Emissão de O.S., checklist na
                    entrada do carro e comissões automáticas. Organizou a oficina de ponta a
                    ponta.&rdquo;
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/80">
                  <p className="fluid-h4 font-bold text-foreground">Carlos Eduardo</p>
                  <p className="fluid-caption text-muted-foreground">Centro Automotivo Precisão</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-border bg-surface-subtle flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center text-[#FFB800] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FFB800" stroke="#FFB800" />
                    ))}
                  </div>
                  <p className="fluid-body text-foreground/90 leading-relaxed italic">
                    &ldquo;A comanda eletrônica no celular dos garçons aumentou nosso faturamento
                    porque os pedidos chegam instantâneos na cozinha. O sistema não trava
                    nunca.&rdquo;
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/80">
                  <p className="fluid-h4 font-bold text-foreground">Patrícia Mendes</p>
                  <p className="fluid-caption text-muted-foreground">Bistrô & Restaurante Alecrim</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: 8. BLOG & CONTEÚDOS EDUCATIVOS (CARROSSEL)                       */}
        {/* ========================================================================= */}
        <BlogCarouselSection onOpenSpecialist={() => setSpecialistOpen(true)} />

        {/* ========================================================================= */}
        {/* RODAPÉ INSTITUCIONAL                                                      */}
        {/* ========================================================================= */}
        <Footer onOpenSpecialist={() => setSpecialistOpen(true)} />
      </main>

      <SpecialistDialog open={specialistOpen} onOpenChange={setSpecialistOpen} />

      {/* ========================================================================= */}
      {/* MODAL DE AGENDAMENTO / DEMONSTRAÇÃO (FULL FUNNEL)                         */}
      {/* ========================================================================= */}
      <div id="fullFunnelModal" role="dialog" aria-modal="true" aria-label="Agendar Demonstração">
        <div id="fullFunnelContent">
          <button type="button" className="close-modal" aria-label="Fechar modal">&times;</button>
          <iframe
            src="https://links.fullfunnel.app/widget/booking/LE6EdU7qlKZEKo7LPCT1"
            allow="payment"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="LE6EdU7qlKZEKo7LPCT1_1790270071234"
            title="Agendamento de Demonstração Waybit Dominus"
          />
        </div>
      </div>
    </div>
  );
}

// Interface e Dados do Portfólio de Soluções Waybit (Grade 3 + 2)
interface WaybitSolutionItem {
  id: string;
  title: string;
  description: string;
  color: string;
  logo: string;
  link: string;
  isExternal?: boolean;
}

const waybitTopSolutions: WaybitSolutionItem[] = [
  {
    id: "varejo",
    title: "Dominus Varejo",
    description: "Sistema de gestão para varejo",
    color: "#3BBCEC",
    logo: varejoLogo,
    link: "#solucoes-segmentos",
    isExternal: false,
  },
  {
    id: "autocenter",
    title: "Dominus Auto-center",
    description: "Sistema de gestão para mecânica",
    color: "#FCC42C",
    logo: autocenterLogo,
    link: "#solucoes-segmentos",
    isExternal: false,
  },
  {
    id: "food",
    title: "Dominus Food",
    description: "Sistema de gestão para Restaurante",
    color: "#FC4242",
    logo: foodLogo,
    link: "#solucoes-segmentos",
    isExternal: false,
  },
];

const waybitBottomSolutions: WaybitSolutionItem[] = [
  {
    id: "ia",
    title: "Dominus IA",
    description: "Inteligência artificial para gestão",
    color: "#5a9596",
    logo: dominusIaLogo,
    link: "#solucoes-segmentos",
    isExternal: false,
  },
  {
    id: "xpert",
    title: "Xpert",
    description: "Sistema de gestão para posto",
    color: "#454545",
    logo: xpertLogo,
    link: "https://www.xpert.com.br",
    isExternal: true,
  },
  {
    id: "certbit",
    title: "Certbit",
    description: "Adquira já o seu certificado digital",
    color: "#71BE44",
    logo: certbitLogo,
    link: "https://certbitcertificados.com.br",
    isExternal: true,
  },
];

const waybitAllSolutions: WaybitSolutionItem[] = [
  ...waybitTopSolutions,
  ...waybitBottomSolutions,
];

const segmentHoverTitleClass: Record<string, string> = {
  varejo: "group-hover:text-[#3BBCEC]",
  autocenter: "group-hover:text-[#FCC42C]",
  food: "group-hover:text-[#FC4242]",
  ia: "group-hover:text-[#5a9596]",
  xpert: "group-hover:text-[#454545] dark:group-hover:text-zinc-300",
  certbit: "group-hover:text-[#71BE44]",
};

function SolutionCard({
  item,
  onOpenSpecialist,
}: {
  item: WaybitSolutionItem;
  onOpenSpecialist?: () => void;
}) {
  const isExternal = item.isExternal;
  const hoverClass = segmentHoverTitleClass[item.id] || "group-hover:text-primary";

  const cardInner = (
    <div className="group relative w-full h-full min-h-[190px] sm:min-h-[200px] rounded-2xl bg-white dark:bg-card border border-slate-100 dark:border-border/60 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden isolate flex flex-col justify-between">
      {/* Halo de fundo radial suave na cor do segmento */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 size-32 sm:size-36 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
        style={{ backgroundColor: item.color }}
      />

      {/* ÁREA 1: IDENTIDADE ([ÍCONE/LOGO] à esquerda, NOME à direita) */}
      <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 w-full min-h-[52px] sm:min-h-[56px]">
        {/* Badge arredondado com logo oficial do segmento à esquerda */}
        <div
          className="size-12 sm:size-14 rounded-xl flex items-center justify-center p-2 sm:p-2.5 shrink-0 shadow-xs group-hover:scale-105 group-hover:shadow-md transition-all duration-300"
          style={{ backgroundColor: item.color }}
        >
          <img
            src={item.logo}
            alt={item.title}
            className="w-full h-full object-contain filter brightness-105"
            loading="lazy"
          />
        </div>

        {/* Nome da solução à direita */}
        <h3
          className={`font-display fluid-h3 font-bold text-slate-900 dark:text-white tracking-tight leading-snug transition-colors duration-200 ${hoverClass}`}
        >
          {item.title}
        </h3>
      </div>

      {/* ÁREA 2: DESCRIÇÃO (área dedicada com altura consistente) */}
      <div className="relative z-10 flex-1 flex items-center my-3 sm:my-3.5 min-h-[44px] sm:min-h-[48px]">
        <p className="fluid-secondary text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* ÁREA 3: CTA (Rodapé com CTA à esquerda e botão circular [→] à direita) */}
      <div className="relative z-10 mt-auto pt-3 sm:pt-3.5 flex items-center justify-between border-t border-slate-100 dark:border-border/40 w-full">
        <span
          className="fluid-caption font-semibold tracking-wide transition-colors duration-200"
          style={{ color: item.color }}
        >
          {isExternal
            ? item.id === "xpert"
              ? "Acessar xpert.com.br"
              : "Acessar certbit"
            : "Conhecer mais"}
        </span>
        <div
          className="size-7 sm:size-8 md:size-9 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:scale-105 shrink-0"
          style={{ backgroundColor: item.color }}
        >
          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </div>
      </div>

      {/* Linha de acento inferior */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
        style={{ backgroundColor: item.color }}
      />
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.title} - ${item.description}`}
        className="flex flex-col w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
      >
        {cardInner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpenSpecialist}
      aria-label={`${item.title} - ${item.description}`}
      className="flex flex-col w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl text-left bg-transparent border-0 p-0"
    >
      {cardInner}
    </button>
  );
}
