import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Facebook,
  Headset,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
  UtensilsCrossed,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Wine,
  Coffee,
  Beer,
  Flame,
  Bike,
  Sandwich,
  Utensils,
  CookingPot,
  Pizza,
  Store,
  ChefHat,
  Soup,
  Apple,
  Footprints,
  Smartphone,
  Candy,
  Laptop,
  Shirt,
  Paintbrush,
  Layers,
  Hammer,
  Zap,
  ShoppingCart,
  Croissant,
  BookOpen,
  Fish,
  IceCream,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/waybit-logo.png.asset.json";
import { SpecialistDialog } from "@/components/SpecialistDialog";

interface HeaderProps {
  currentPath?: string;
}

interface SegmentMenuItem {
  name: string;
  icon: LucideIcon;
}

// 12 Segmentos de Alimentação (Food)
const foodSegments: SegmentMenuItem[] = [
  { name: "Boteco", icon: Wine },
  { name: "Cafeteria", icon: Coffee },
  { name: "Choperia", icon: Beer },
  { name: "Churrascaria", icon: Flame },
  { name: "Delivery", icon: Bike },
  { name: "Hamburgueria", icon: Sandwich },
  { name: "Lanchonete", icon: Utensils },
  { name: "Petiscaria", icon: CookingPot },
  { name: "Pizzaria", icon: Pizza },
  { name: "Quiosque", icon: Store },
  { name: "Restaurante", icon: ChefHat },
  { name: "Sushibar", icon: Soup },
];

// 17 Segmentos de Varejo em Geral
const retailSegments: SegmentMenuItem[] = [
  { name: "Bicicletaria", icon: Bike },
  { name: "Hortifruti", icon: Apple },
  { name: "Loja de Calçados", icon: Footprints },
  { name: "Loja de Celular", icon: Smartphone },
  { name: "Loja de Doces", icon: Candy },
  { name: "Loja de Informática", icon: Laptop },
  { name: "Loja de Roupas", icon: Shirt },
  { name: "Loja de Tintas", icon: Paintbrush },
  { name: "Loja de Variedades", icon: Layers },
  { name: "Material de Construção", icon: Hammer },
  { name: "Material Elétrico", icon: Zap },
  { name: "Minimercado", icon: ShoppingCart },
  { name: "Padaria", icon: Croissant },
  { name: "Papelaria", icon: BookOpen },
  { name: "Peixaria", icon: Fish },
  { name: "Perfumaria", icon: Sparkles },
  { name: "Sorveteria", icon: IceCream },
];

export function Header({ currentPath = "/" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [megaMenuTab, setMegaMenuTab] = useState<"food" | "varejo">("food");
  const [mobileSistemaOpen, setMobileSistemaOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const sistemaButtonRef = useRef<HTMLButtonElement>(null);

  // Fecha o Mega Menu ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target) &&
        sistemaButtonRef.current &&
        !sistemaButtonRef.current.contains(target)
      ) {
        setMegaMenuOpen(false);
      }
    }

    if (megaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaMenuOpen]);

  // Fecha o Mega Menu ao pressionar ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
      }
    }
    if (megaMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [megaMenuOpen]);

  const scrollToAnchor = (id: string) => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative z-50 w-full border-b border-border bg-background">
      {/* BARRA SUPERIOR DE UTILIDADES (100% FLUIDA) */}
      <div className="w-full bg-surface-subtle">
        <div className="fluid-container hidden items-center justify-between py-2 lg:flex">
          {/* LADO ESQUERDO: CONTATO */}
          <div className="flex items-center gap-6 fluid-caption text-muted-foreground">
            <a className="utility-link flex items-center gap-2" href="tel:+5521975812676">
              <Headset size={14} className="shrink-0" /> (21) 97581-2676
            </a>
            <a
              className="utility-link flex items-center gap-2"
              href="mailto:comercial@waybit.com.br"
            >
              <Mail size={14} className="shrink-0" /> comercial@waybit.com.br
            </a>
          </div>

          {/* LADO DIREITO: LINKS DE APOIO + REDES SOCIAIS */}
          <div className="flex items-center gap-5 fluid-caption text-muted-foreground">
            <button
              type="button"
              onClick={() => scrollToAnchor("avaliacoes-google")}
              className="utility-link font-medium cursor-pointer"
            >
              Avaliações
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor("diferencial-suporte")}
              className="utility-link font-medium cursor-pointer"
            >
              Suporte
            </button>
            <button
              type="button"
              onClick={() => setSpecialistOpen(true)}
              className="utility-link font-medium cursor-pointer"
            >
              Central de Ajuda
            </button>
            <div className="ml-1 flex items-center gap-2">
              <a
                className="social-link"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVISÓRIA COLORIDA HORIZONTAL DA IDENTIDADE WAYBIT */}
        <div className="flex h-[3px] w-full" aria-hidden="true">
          <div className="h-full w-[18%] bg-[#00ADEF]" />
          <div className="h-full w-[32%] bg-[#FFB800]" />
          <div className="h-full w-[32%] bg-[#71BE44]" />
          <div className="h-full w-[18%] bg-[#707070]" />
        </div>
      </div>

      {/* BARRA PRINCIPAL (100% FLUIDA) */}
      <div className="fluid-container flex h-[76px] items-center justify-between lg:h-[88px] relative">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToAnchor("hero");
          }}
          aria-label="Waybit — início"
          className="min-w-0 transition-opacity hover:opacity-90"
        >
          <img
            src={logoAsset.url}
            alt="Waybit Software"
            className="h-11 w-auto sm:h-12"
            width={250}
            height={100}
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex fluid-nav" aria-label="Menu principal">
          {/* BOTÃO SISTEMA COM MEGA MENU EXCLUSIVO POR CLIQUE */}
          <button
            ref={sistemaButtonRef}
            type="button"
            onClick={() => {
              setMegaMenuOpen((prev) => {
                if (!prev) setMegaMenuTab("food");
                return !prev;
              });
            }}
            className={`nav-link flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold transition-colors ${
              megaMenuOpen ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
            }`}
            aria-expanded={megaMenuOpen}
            aria-haspopup="true"
          >
            <span>Sistema</span>
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                megaMenuOpen ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>

          {/* DEMAIS ITENS DE NAVEGAÇÃO IN-PAGE */}
          <button
            type="button"
            onClick={() => scrollToAnchor("ciclo-operacional")}
            className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold text-foreground/80 hover:text-primary"
          >
            Ciclo Operacional
          </button>

          <button
            type="button"
            onClick={() => scrollToAnchor("solucoes-segmentos")}
            className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold text-foreground/80 hover:text-primary"
          >
            Soluções
          </button>

          <button
            type="button"
            onClick={() => scrollToAnchor("depoimentos")}
            className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold text-foreground/80 hover:text-primary"
          >
            Depoimentos
          </button>

          <button
            type="button"
            onClick={() => scrollToAnchor("blog-conteudos")}
            className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold text-foreground/80 hover:text-primary"
          >
            Blog
          </button>
        </nav>

        {/* BOTÃO CTA E MENU MOBILE */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            onClick={() => setSpecialistOpen(true)}
            className="hidden h-11 xl:h-12 px-6 xl:px-7 fluid-btn sm:inline-flex bg-[#71BE44] hover:bg-[#62a83a] text-white shadow-none font-semibold cursor-pointer rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Falar com Especialista
          </Button>
          <Button
            variant="ghost"
            className="size-11 p-0 lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* DROPDOWN / MEGA MENU FLUTUANTE DE SISTEMAS */}
      {megaMenuOpen && (
        <div
          ref={megaMenuRef}
          className="hidden lg:flex flex-col absolute left-1/2 -translate-x-1/2 top-[120px] mt-0 w-[880px] xl:w-[920px] max-w-[calc(100vw-2rem)] rounded-3xl bg-white dark:bg-card border border-slate-100 dark:border-border/80 shadow-2xl p-6 pb-7 sm:pb-8 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
          role="dialog"
          aria-label="Menu de Soluções por Segmento"
        >
          {/* SELETOR DE ABAS */}
          <div className="flex items-center justify-start pb-4 border-b border-slate-100 dark:border-border/60 shrink-0">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100/90 dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/60 shadow-2xs">
              <button
                type="button"
                onClick={() => setMegaMenuTab("food")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
                  megaMenuTab === "food"
                    ? "bg-[#FC4242] text-white shadow-xs"
                    : "text-slate-600 dark:text-zinc-300 hover:text-slate-900"
                }`}
              >
                <UtensilsCrossed size={14} />
                <span>Waybit Food</span>
              </button>

              <button
                type="button"
                onClick={() => setMegaMenuTab("varejo")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
                  megaMenuTab === "varejo"
                    ? "bg-[#3BBCEC] text-white shadow-xs"
                    : "text-slate-600 dark:text-zinc-300 hover:text-slate-900"
                }`}
              >
                <ShoppingBag size={14} />
                <span>Waybit Varejo</span>
              </button>
            </div>
          </div>

          {/* CONTEÚDO DA ABA SELECIONADA */}
          <div className="pt-5">
            {megaMenuTab === "food" ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#FC4242]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                      Soluções para Gastronomia & Food Service (12 nichos)
                    </h4>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-medium">
                    Atendimento de mesa, balcão e delivery
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {foodSegments.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        setMegaMenuOpen(false);
                        setSpecialistOpen(true);
                      }}
                      className="group flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-100 dark:border-border/60 bg-slate-50/50 dark:bg-zinc-800/30 hover:bg-[#FC4242]/10 hover:border-[#FC4242]/30 transition-all duration-150 text-left cursor-pointer"
                    >
                      <div className="size-8 rounded-lg bg-white dark:bg-card border border-slate-200/60 dark:border-border flex items-center justify-center text-[#FC4242] group-hover:bg-[#FC4242] group-hover:text-white transition-colors shrink-0 shadow-2xs">
                        <item.icon size={15} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-[#FC4242] transition-colors truncate">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#3BBCEC]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                      Soluções para Varejo em Geral (17 nichos)
                    </h4>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-medium">
                    Frente de caixa ágil, estoque e fiscal
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {retailSegments.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        setMegaMenuOpen(false);
                        setSpecialistOpen(true);
                      }}
                      className="group flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-100 dark:border-border/60 bg-slate-50/50 dark:bg-zinc-800/30 hover:bg-[#3BBCEC]/10 hover:border-[#3BBCEC]/30 transition-all duration-150 text-left cursor-pointer"
                    >
                      <div className="size-8 rounded-lg bg-white dark:bg-card border border-slate-200/60 dark:border-border flex items-center justify-center text-[#3BBCEC] group-hover:bg-[#3BBCEC] group-hover:text-white transition-colors shrink-0 shadow-2xs">
                        <item.icon size={15} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-[#3BBCEC] transition-colors truncate">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RODAPÉ DO MEGA MENU */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-border/60 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              Não encontrou seu nicho? Atendemos sob medida para sua operação.
            </span>
            <button
              type="button"
              onClick={() => {
                setMegaMenuOpen(false);
                setSpecialistOpen(true);
              }}
              className="font-bold text-[#71BE44] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Consultar Especialista <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}

      {/* MENU MOBILE EXPANSÍVEL */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <button
            type="button"
            onClick={() => setMobileSistemaOpen(!mobileSistemaOpen)}
            className="flex items-center justify-between w-full py-2.5 font-display text-base font-semibold text-foreground border-b border-border text-left"
          >
            <span>Segmentos Atendidos</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${mobileSistemaOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobileSistemaOpen && (
            <div className="pl-3 py-2 space-y-2 border-l-2 border-primary/40 bg-surface-subtle/50 rounded-r-xl p-3 text-sm">
              <p className="text-xs font-bold text-muted-foreground uppercase">Gastronomia (Food)</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-foreground/80">
                {foodSegments.slice(0, 6).map((item) => (
                  <span key={item.name} className="truncate">• {item.name}</span>
                ))}
              </div>
              <p className="text-xs font-bold text-muted-foreground uppercase pt-2">Varejo & Comércio</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-foreground/80">
                {retailSegments.slice(0, 6).map((item) => (
                  <span key={item.name} className="truncate">• {item.name}</span>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => scrollToAnchor("ciclo-operacional")}
            className="block w-full py-2.5 font-display text-base font-semibold text-foreground border-b border-border text-left"
          >
            Ciclo Operacional
          </button>

          <button
            type="button"
            onClick={() => scrollToAnchor("solucoes-segmentos")}
            className="block w-full py-2.5 font-display text-base font-semibold text-foreground border-b border-border text-left"
          >
            Soluções Especializadas
          </button>

          <button
            type="button"
            onClick={() => scrollToAnchor("depoimentos")}
            className="block w-full py-2.5 font-display text-base font-semibold text-foreground border-b border-border text-left"
          >
            Depoimentos & Cases
          </button>

          <button
            type="button"
            onClick={() => scrollToAnchor("blog-conteudos")}
            className="block w-full py-2.5 font-display text-base font-semibold text-foreground border-b border-border text-left"
          >
            Blog & Artigos
          </button>

          <div className="pt-2">
            <Button
              onClick={() => {
                setMenuOpen(false);
                setSpecialistOpen(true);
              }}
              className="w-full h-11 bg-[#71BE44] hover:bg-[#62a83a] text-white font-semibold rounded-xl fluid-btn"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      )}

      <SpecialistDialog open={specialistOpen} onOpenChange={setSpecialistOpen} />
    </header>
  );
}
