import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  Headphones,
  Mail,
  Menu,
  PackageCheck,
  Phone,
  Quote,
  ReceiptText,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import logoAsset from "@/assets/waybit-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waybit — Gestão leve para o seu negócio" },
      {
        name: "description",
        content:
          "ERP ágil, completo e intuitivo para varejo, auto-center e food. Simplifique vendas, estoque, fiscal e suporte com a Waybit.",
      },
      { property: "og:title", content: "Waybit — Gestão leve para o seu negócio" },
      {
        property: "og:description",
        content: "Tecnologia que simplifica a rotina da sua empresa, do atendimento à gestão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type SegmentId = "varejo" | "auto" | "food";

const segments = [
  {
    id: "varejo" as const,
    kicker: "Dominus Varejo",
    title: "Venda melhor.\nControle tudo.",
    description: "Para lojas, mercados, empórios e comércios que precisam ganhar agilidade sem perder o controle.",
    tags: ["Lojas", "Mercados", "Empórios"],
    icon: Store,
    tone: "varejo",
  },
  {
    id: "auto" as const,
    kicker: "Dominus Auto-center",
    title: "Serviço ágil.\nCliente de volta.",
    description: "Ordem de serviço, peças e relacionamento em uma operação feita para oficinas e centros automotivos.",
    tags: ["Oficinas", "Mecânicas", "Autopeças"],
    icon: Wrench,
    tone: "auto",
  },
  {
    id: "food" as const,
    kicker: "Dominus Food",
    title: "Pedidos fluidos.\nMesa cheia.",
    description: "Atendimento, produção e delivery conectados para restaurantes, bares, cafeterias e operações food.",
    tags: ["Restaurantes", "Bares", "Delivery"],
    icon: UtensilsCrossed,
    tone: "food",
  },
] as const;

const searchOptions = [
  { label: "Loja de roupas", segment: "varejo" as const },
  { label: "Mercado ou empório", segment: "varejo" as const },
  { label: "Oficina mecânica", segment: "auto" as const },
  { label: "Centro automotivo", segment: "auto" as const },
  { label: "Restaurante", segment: "food" as const },
  { label: "Bar ou cafeteria", segment: "food" as const },
];

const systemItems = [
  { title: "Sistema para Varejo", detail: "Lojas, mercados e empórios", icon: Store, segment: "varejo" as const },
  { title: "Sistema para Auto-center", detail: "Oficinas e centros automotivos", icon: Wrench, segment: "auto" as const },
  { title: "Sistema para Food", detail: "Bares, restaurantes e delivery", icon: UtensilsCrossed, segment: "food" as const },
];

const resources = [
  { number: "01", title: "Vendas", text: "Venda com velocidade no balcão, no salão ou no caixa, sem atritos.", icon: ShoppingBag },
  { number: "02", title: "Estoque", text: "Saiba o que entra, o que sai e o momento certo de repor cada item.", icon: PackageCheck },
  { number: "03", title: "Fiscal", text: "Emita documentos e acompanhe obrigações com processos mais simples.", icon: ReceiptText },
  { number: "04", title: "Suporte", text: "Conte com pessoas que entendem sua operação quando você precisar.", icon: Headphones },
];

function Index() {
  const [activeSegment, setActiveSegment] = useState<SegmentId>("varejo");
  const [systemOpen, setSystemOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const active = segments.find((segment) => segment.id === activeSegment) ?? segments[0];
  const matches = useMemo(
    () => searchOptions.filter((option) => option.label.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))),
    [query],
  );

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setSystemOpen(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  const chooseSegment = (segment: SegmentId) => {
    setActiveSegment(segment);
    setSystemOpen(false);
    setMobileOpen(false);
    document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="relative z-50 border-b border-border bg-background">
        <div className="fluid-gutter flex min-h-9 w-full items-center justify-between gap-4 bg-ink py-2 text-xs text-ink-foreground">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <a className="hidden items-center gap-2 transition-opacity hover:opacity-75 sm:flex" href="tel:+5521975812676">
              <Phone aria-hidden="true" className="size-3.5 shrink-0 text-brand-green" />
              (21) 97581-2676
            </a>
            <a className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-75" href="mailto:comercial@waybit.com.br">
              <Mail aria-hidden="true" className="size-3.5 shrink-0 text-brand-blue" />
              <span className="truncate">comercial@waybit.com.br</span>
            </a>
          </div>
          <nav aria-label="Atendimento" className="hidden items-center gap-5 md:flex">
            <a href="#faq" className="hover:text-brand-green">FAQ</a>
            <a href="#suporte" className="hover:text-brand-green">Central de Ajuda</a>
            <a href="#suporte" className="hover:text-brand-green">Suporte</a>
          </nav>
        </div>

        <div className="fluid-gutter grid h-[76px] w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex">
          <a href="#inicio" aria-label="Waybit — início" className="flex min-w-0 items-center">
            <img src={logoAsset.url} alt="Waybit Software" className="h-auto w-[148px] sm:w-[176px]" />
          </a>
          <nav aria-label="Navegação principal" className="mx-auto hidden items-center gap-7 lg:flex">
            <div ref={menuRef} className="relative">
              <Button variant="ghost" className="h-10 px-2 font-semibold" onClick={() => setSystemOpen((value) => !value)} aria-expanded={systemOpen}>
                Sistema <ChevronDown className={cn("transition-transform", systemOpen && "rotate-180")} />
              </Button>
              {systemOpen && (
                <div className="absolute left-0 top-[calc(100%+18px)] w-[720px] border border-border bg-background p-7 shadow-2xl">
                  <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                    <div><p className="text-xs font-bold uppercase text-muted-foreground">Ecossistema Dominus</p><p className="mt-1 font-semibold">Escolha a solução para sua operação</p></div>
                    <Sparkles className="size-5 text-brand-green" />
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-border">
                    {systemItems.map((item) => (
                      <button key={item.segment} type="button" onClick={() => chooseSegment(item.segment)} className="group px-5 py-3 text-left first:pl-0 last:pr-0">
                        <item.icon className={cn("mb-5 size-6 transition-transform group-hover:-translate-y-1", `text-${item.segment}`)} />
                        <span className="block text-sm font-bold">{item.title}</span>
                        <span className="mt-2 block text-xs leading-5 text-muted-foreground">{item.detail}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#integracoes" className="nav-link">Integrações</a>
            <a href="#parceiros" className="nav-link">Seja um Parceiro</a>
            <a href="#planos" className="nav-link">Planos</a>
            <a href="#blog" className="nav-link">Blog</a>
          </nav>
          <Button asChild className="ml-auto hidden h-11 bg-brand-green px-6 font-bold text-brand-green-foreground hover:bg-brand-green-hover lg:inline-flex">
            <a href="https://wa.me/5521975812676" target="_blank" rel="noreferrer">Falar com Especialista <ArrowRight /></a>
          </Button>
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileOpen && (
          <nav aria-label="Menu móvel" className="fluid-gutter absolute left-0 top-full w-full border-y border-border bg-background py-5 shadow-xl lg:hidden">
            <div className="grid gap-1">
              <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">Sistema</p>
              {systemItems.map((item) => (
                <button key={item.segment} type="button" onClick={() => chooseSegment(item.segment)} className="flex items-center gap-3 border-b border-border py-3 text-left font-semibold">
                  <item.icon className={cn("size-5", `text-${item.segment}`)} />{item.title}
                </button>
              ))}
              {["Integrações", "Seja um Parceiro", "Planos", "Blog"].map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMobileOpen(false)} className="border-b border-border py-3 font-semibold">{item}</a>)}
              <Button asChild className="mt-4 h-11 bg-brand-green font-bold text-brand-green-foreground hover:bg-brand-green-hover"><a href="https://wa.me/5521975812676">Falar com Especialista</a></Button>
            </div>
          </nav>
        )}
      </header>

      <section id="inicio" className="fluid-gutter relative w-full border-b border-border bg-surface-soft py-12 lg:min-h-[670px] lg:py-16">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-border lg:block" />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-[7%]">
          <div className="min-w-0 py-3 lg:pr-[3%]">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-green" />
              <p className="text-xs font-bold uppercase text-muted-foreground">Tecnologia que entende seu negócio</p>
            </div>
            <h1 className="max-w-[760px] text-[clamp(2.8rem,5.2vw,5.8rem)] font-extrabold leading-[0.96]">
              A rotina da sua empresa <span className="text-brand-blue">leve</span> e com <span className="text-brand-green">menos esforço.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Um ERP ágil, completo e intuitivo para conectar vendas, estoque, fiscal e gestão — sem complicar o que já funciona.
            </p>
            <div className="relative mt-9 max-w-xl">
              <label htmlFor="segment-search" className="mb-3 block text-sm font-bold">Qual é o seu ramo de atuação?</label>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] border border-input bg-background shadow-sm focus-within:border-foreground">
                <Search aria-hidden="true" className="ml-4 size-5 self-center text-muted-foreground" />
                <input id="segment-search" value={query} onChange={(event) => { setQuery(event.target.value); setSearchOpen(true); }} onFocus={() => setSearchOpen(true)} placeholder="Ex.: restaurante, oficina, loja..." className="col-start-1 col-end-3 row-start-1 h-14 min-w-0 bg-transparent pl-12 pr-14 text-sm outline-none placeholder:text-muted-foreground" />
                <Button size="icon" className="col-start-2 row-start-1 m-2 h-10 w-10 self-center bg-ink text-ink-foreground hover:bg-foreground" onClick={() => setSearchOpen((value) => !value)} aria-label="Buscar ramo"><ArrowRight /></Button>
              </div>
              {searchOpen && query && (
                <div className="absolute top-full z-20 mt-2 w-full border border-border bg-background p-2 shadow-xl">
                  {matches.length ? matches.map((option) => (
                    <button type="button" key={option.label} onClick={() => { setQuery(option.label); setActiveSegment(option.segment); setSearchOpen(false); }} className="flex w-full items-center justify-between px-3 py-3 text-left text-sm hover:bg-muted">
                      {option.label}<ChevronRight className={cn("size-4", `text-${option.segment}`)} />
                    </button>
                  )) : <p className="px-3 py-3 text-sm text-muted-foreground">Converse com um especialista para encontrar a melhor solução.</p>}
                </div>
              )}
            </div>
            <div className="mt-9 flex items-center gap-3" aria-label="Selecionar segmento">
              {segments.map((segment, index) => (
                <button key={segment.id} type="button" aria-label={`Exibir ${segment.kicker}`} onClick={() => setActiveSegment(segment.id)} className={cn("h-2.5 rounded-full transition-all", activeSegment === segment.id ? `w-12 bg-${segment.id}` : "w-2.5 bg-border hover:bg-muted-foreground")}><span className="sr-only">{index + 1}</span></button>
              ))}
              <span className="ml-2 text-xs font-semibold text-muted-foreground">0{segments.findIndex((segment) => segment.id === activeSegment) + 1} / 03</span>
            </div>
          </div>

          <div className="relative min-h-[480px] min-w-0 lg:min-h-[530px] lg:pl-[3%]" aria-live="polite">
            <div className={cn("segment-glow", `segment-glow-${active.tone}`)} />
            <div className="relative z-10 flex h-full flex-col justify-center">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div className="flex items-center gap-3"><active.icon className={cn("size-7", `text-${active.tone}`)} /><span className={cn("text-sm font-extrabold uppercase", `text-${active.tone}`)}>{active.kicker}</span></div>
                <span className="text-xs font-semibold text-muted-foreground">Solução especializada</span>
              </div>
              <div key={active.id} className="segment-enter py-12">
                <h2 className="whitespace-pre-line text-[clamp(2.5rem,4.6vw,5.3rem)] font-extrabold leading-[0.98]">{active.title}</h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{active.description}</p>
                <a href="#recursos" className={cn("mt-8 inline-flex items-center gap-3 border-b-2 pb-2 text-sm font-bold", `border-${active.tone}`, `text-${active.tone}`)}>Conheça a solução <ArrowRight className="size-4" /></a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5">
                {active.tags.map((tag) => <span key={tag} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Check className={cn("size-4", `text-${active.tone}`)} />{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="fluid-gutter w-full py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-[9%]">
          <div>
            <p className="eyebrow">Do essencial ao estratégico</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">Tudo conversa.<br />Você decide.</h2>
            <p className="mt-6 leading-7 text-muted-foreground">Uma gestão integrada para enxergar sua operação por inteiro e agir com confiança.</p>
          </div>
          <div className="grid border-t border-border sm:grid-cols-2">
            {resources.map((resource) => (
              <article key={resource.title} className="group border-b border-border py-8 sm:px-8 sm:odd:border-r sm:odd:pl-0">
                <div className="flex items-start justify-between"><span className="text-xs font-bold text-muted-foreground">{resource.number}</span><resource.icon className="size-6 text-brand-blue transition-transform group-hover:-translate-y-1" /></div>
                <h3 className="mt-10 text-2xl font-bold">{resource.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{resource.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="integracoes" className="fluid-gutter w-full bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-[10%]">
          <div>
            <p className="eyebrow text-brand-green">Uma plataforma. Sua rotina.</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">Menos operação.<br />Mais direção.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-ink-muted">Integrações, dados e atendimento reunidos para que cada decisão comece com uma visão clara do negócio.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {["Dados conectados", "Rotina simplificada", "Decisão segura"].map((item) => <span key={item} className="border border-ink-border px-4 py-2 text-xs font-semibold">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="fluid-gutter w-full py-24 sm:py-32">
        <div className="mb-14 grid items-end gap-6 md:grid-cols-2">
          <div><p className="eyebrow">Quem vive a operação, recomenda</p><h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">Parceria que aparece no dia a dia.</h2></div>
          <p className="max-w-xl leading-7 text-muted-foreground md:justify-self-end">Tecnologia só faz sentido quando aproxima, resolve e acompanha a evolução de cada empresa.</p>
        </div>
        <div className="grid border-y border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
          {[
            ["A equipe entende a urgência de quem está no balcão. O sistema acompanha nosso ritmo e o suporte realmente resolve.", "Cliente Waybit", "Comércio varejista"],
            ["Conseguimos organizar a operação e ter uma visão muito mais clara do que acontece em cada etapa do negócio.", "Cliente Dominus", "Centro automotivo"],
            ["A rotina ficou mais simples para o time e mais rápida para o cliente. Essa diferença aparece todos os dias.", "Cliente Dominus", "Alimentação"],
          ].map(([text, author, role]) => (
            <blockquote key={role} className="py-9 lg:px-9 lg:first:pl-0 lg:last:pr-0">
              <Quote className="size-7 text-brand-green" />
              <p className="mt-8 text-lg font-semibold leading-8">“{text}”</p>
              <footer className="mt-8 text-sm"><strong>{author}</strong><span className="mt-1 block text-muted-foreground">{role}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="planos" className="fluid-gutter w-full border-y border-border bg-surface-soft py-20 text-center sm:py-24">
        <BarChart3 className="mx-auto size-8 text-brand-blue" />
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">Pronto para deixar sua gestão mais leve?</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">Converse com quem entende a rotina do seu segmento e encontre o Dominus certo para sua empresa.</p>
        <Button asChild className="mt-9 h-12 bg-brand-green px-7 font-bold text-brand-green-foreground hover:bg-brand-green-hover"><a href="https://wa.me/5521975812676" target="_blank" rel="noreferrer">Falar com Especialista <ArrowRight /></a></Button>
      </section>

      <footer id="suporte" className="fluid-gutter w-full bg-ink pb-20 pt-16 text-ink-foreground sm:pb-28">
        <div className="grid gap-12 border-b border-ink-border pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div><img src={logoAsset.url} alt="Waybit Software" className="w-[170px] brightness-125" /><p className="mt-6 max-w-sm text-sm leading-6 text-ink-muted">Tecnologia simples, próxima e feita para acompanhar o crescimento do seu negócio.</p></div>
          <div><p className="text-xs font-bold uppercase text-ink-muted">Waybit</p><div className="mt-5 grid gap-3 text-sm"><a id="parceiros" href="mailto:comercial@waybit.com.br">Seja um Parceiro</a><a href="#planos">Planos</a><a id="blog" href="#inicio">Blog</a><a id="faq" href="#inicio">FAQ</a></div></div>
          <div><p className="text-xs font-bold uppercase text-ink-muted">Fale com a gente</p><div className="mt-5 grid gap-3 text-sm"><a href="tel:+5521975812676">(21) 97581-2676</a><a href="mailto:comercial@waybit.com.br">comercial@waybit.com.br</a></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Waybit Software. Todos os direitos reservados.</p><div className="flex gap-5"><a href="#inicio">Privacidade</a><a href="#inicio">Termos de uso</a></div></div>
      </footer>
    </main>
  );
}
