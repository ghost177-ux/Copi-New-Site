import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
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
import logoImg from "@/assets/logo.png";
import { SpecialistDialog } from "@/components/SpecialistDialog";

interface HeaderProps {
  currentPath?: string;
}

interface SegmentMenuItem {
  name: string;
  icon: LucideIcon;
}

// 12 Segmentos de Alimentação (Food) - 2 colunas com 6 itens cada
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

// 17 Segmentos de Varejo em Geral (Colunas: 6 na primeira, 6 na segunda e 5 na terceira)
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

  // Tratamento suave para navegação in-page preservando destinos existentes na Home
  const handleNavClick = (e: React.MouseEvent, target: string, anchorId?: string) => {
    if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        e.preventDefault();
        setMenuOpen(false);
        setMegaMenuOpen(false);
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (target === "/planos") {
      const el =
        document.getElementById("solucoes-segmentos") ||
        document.getElementById("banner-demonstracao");
      if (el) {
        e.preventDefault();
        setMenuOpen(false);
        setMegaMenuOpen(false);
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (target === "/blog") {
      const el = document.getElementById("blog-conteudos");
      if (el) {
        e.preventDefault();
        setMenuOpen(false);
        setMegaMenuOpen(false);
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (target === "/suporte" || target === "/ajuda" || target === "/faq") {
      const el =
        document.getElementById("diferencial-suporte") ||
        document.getElementById("avaliacoes-google");
      if (el) {
        e.preventDefault();
        setMenuOpen(false);
        setMegaMenuOpen(false);
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <header className="relative z-50 border-b border-border bg-background">
      {/* BARRA SUPERIOR DE UTILIDADES */}
      <div className="bg-surface-subtle">
        <div className="mx-auto hidden max-w-[1440px] items-center justify-between px-6 py-2 lg:flex xl:px-12">
          {/* LADO ESQUERDO: CONTATO (TELEFONE E E-MAIL) */}
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
            <a
              href="/faq"
              onClick={(e) => handleNavClick(e, "/faq")}
              className={`utility-link font-medium ${
                currentPath === "/faq" ? "text-primary font-semibold" : ""
              }`}
            >
              FAQ
            </a>
            <a
              href="/ajuda"
              onClick={(e) => handleNavClick(e, "/ajuda")}
              className={`utility-link font-medium ${
                currentPath === "/ajuda" ? "text-primary font-semibold" : ""
              }`}
            >
              Central de Ajuda
            </a>
            <a
              href="/suporte"
              onClick={(e) => handleNavClick(e, "/suporte")}
              className={`utility-link font-medium ${
                currentPath === "/suporte" ? "text-primary font-semibold" : ""
              }`}
            >
              Suporte
            </a>
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

      {/* BARRA PRINCIPAL */}
      <div className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between lg:h-[88px] lg:px-6 xl:px-12 relative">
        <Link
          to="/"
          aria-label="Waybit — início"
          className="min-w-0 transition-opacity hover:opacity-90"
        >
          <img
            src={logoImg}
            alt="Waybit Software"
            className="h-11 w-auto sm:h-12 object-contain"
            width={250}
            height={100}
          />
        </Link>

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

          {/* DEMAIS ITENS DE NAVEGAÇÃO */}
          <button
            type="button"
            onClick={() => {
              setMegaMenuOpen(false);
              setSpecialistOpen(true);
            }}
            className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold text-foreground/80 hover:text-primary"
          >
            Integrações
            <ChevronDown size={15} />
          </button>

          <button
            type="button"
            onClick={() => {
              setMegaMenuOpen(false);
              setSpecialistOpen(true);
            }}
            className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0 fluid-nav font-semibold text-foreground/80 hover:text-primary"
          >
            Seja um Parceiro
          </button>

          <a
            href="/planos"
            onClick={(e) => handleNavClick(e, "/planos")}
            className={`nav-link fluid-nav font-semibold ${
              currentPath === "/planos"
                ? "text-primary font-bold"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            Planos
          </a>
          <a
            href="/blog"
            onClick={(e) => handleNavClick(e, "/blog", "blog-conteudos")}
            className={`nav-link fluid-nav ${
              currentPath === "/blog"
                ? "text-primary font-bold"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            Blog
          </a>
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
          style={{ marginTop: 0, top: "120px" }}
          role="dialog"
          aria-label="Menu de Soluções por Segmento"
        >
          {/* 1. SELETOR DE ABAS NO TOPO (ALINHADO À ESQUERDA) */}
          <div className="flex items-center justify-start pb-4 border-b border-slate-100 dark:border-border/60 shrink-0">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100/90 dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/60 shadow-2xs">
              <button
                type="button"
                onClick={() => setMegaMenuTab("food")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg fluid-caption font-bold transition-all duration-150 cursor-pointer ${
                  megaMenuTab === "food"
                    ? "bg-[#FC4242] text-white shadow-xs"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                aria-pressed={megaMenuTab === "food"}
              >
                <UtensilsCrossed size={14} />
                <span>Alimentação (Food)</span>
              </button>

              <button
                type="button"
                onClick={() => setMegaMenuTab("varejo")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg fluid-caption font-bold transition-all duration-150 cursor-pointer ${
                  megaMenuTab === "varejo"
                    ? "bg-[#3BBCEC] text-white shadow-xs"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                aria-pressed={megaMenuTab === "varejo"}
              >
                <ShoppingBag size={14} />
                <span>Varejo em Geral</span>
              </button>
            </div>
          </div>

          {/* 2. ÁREA DE CONTEÚDO (ESTRUTURA DE GRADE DE 3 COLUNAS FIXAS E PROPORCIONAIS ENTRE AS ABAS) */}
          <div className="py-4">
            <div
              key={megaMenuTab}
              className="w-full animate-in fade-in-50 duration-150"
            >
              {megaMenuTab === "food" ? (
                /* Food: 12 itens distribuídos em 2 colunas com 6 itens cada, mantendo rigorosamente a mesma largura e alinhamento do grid de 3 colunas */
                <div className="grid grid-cols-3 gap-x-4 xl:gap-x-5 w-full">
                  <div className="flex flex-col gap-y-1.5">
                    {foodSegments.slice(0, 6).map((item) => (
                      <a
                        key={item.name}
                        href="/planos"
                        onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                        className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl fluid-caption font-semibold text-slate-700 dark:text-zinc-200 hover:text-[#FC4242] hover:bg-rose-50/80 dark:hover:bg-rose-950/25 transition-all duration-150 hover:translate-x-1"
                      >
                        <div className="size-7 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:bg-[#FC4242]/15 group-hover:text-[#FC4242] flex items-center justify-center shrink-0 transition-colors">
                          <item.icon size={14} />
                        </div>
                        <span className="truncate">Sistema para {item.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-1.5">
                    {foodSegments.slice(6, 12).map((item) => (
                      <a
                        key={item.name}
                        href="/planos"
                        onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                        className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl fluid-caption font-semibold text-slate-700 dark:text-zinc-200 hover:text-[#FC4242] hover:bg-rose-50/80 dark:hover:bg-rose-950/25 transition-all duration-150 hover:translate-x-1"
                      >
                        <div className="size-7 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:bg-[#FC4242]/15 group-hover:text-[#FC4242] flex items-center justify-center shrink-0 transition-colors">
                          <item.icon size={14} />
                        </div>
                        <span className="truncate">Sistema para {item.name}</span>
                      </a>
                    ))}
                  </div>
                  {/* 3ª Coluna vazia para garantir correspondência idêntica de largura com a aba de Varejo */}
                  <div aria-hidden="true" />
                </div>
              ) : (
                /* Varejo: 17 itens em 3 colunas (6 na 1ª, 6 na 2ª e 5 na 3ª) */
                <div className="grid grid-cols-3 gap-x-4 xl:gap-x-5 w-full">
                  <div className="flex flex-col gap-y-1.5">
                    {retailSegments.slice(0, 6).map((item) => (
                      <a
                        key={item.name}
                        href="/planos"
                        onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                        className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl fluid-caption font-semibold text-slate-700 dark:text-zinc-200 hover:text-[#0092ca] dark:hover:text-[#3BBCEC] hover:bg-sky-50/80 dark:hover:bg-sky-950/25 transition-all duration-150 hover:translate-x-1"
                      >
                        <div className="size-7 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:bg-[#3BBCEC]/15 group-hover:text-[#0092ca] dark:group-hover:text-[#3BBCEC] flex items-center justify-center shrink-0 transition-colors">
                          <item.icon size={14} />
                        </div>
                        <span className="truncate">Sistema para {item.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-1.5">
                    {retailSegments.slice(6, 12).map((item) => (
                      <a
                        key={item.name}
                        href="/planos"
                        onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                        className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl fluid-caption font-semibold text-slate-700 dark:text-zinc-200 hover:text-[#0092ca] dark:hover:text-[#3BBCEC] hover:bg-sky-50/80 dark:hover:bg-sky-950/25 transition-all duration-150 hover:translate-x-1"
                      >
                        <div className="size-7 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:bg-[#3BBCEC]/15 group-hover:text-[#0092ca] dark:group-hover:text-[#3BBCEC] flex items-center justify-center shrink-0 transition-colors">
                          <item.icon size={14} />
                        </div>
                        <span className="truncate">Sistema para {item.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-1.5">
                    {retailSegments.slice(12, 17).map((item) => (
                      <a
                        key={item.name}
                        href="/planos"
                        onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                        className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl fluid-caption font-semibold text-slate-700 dark:text-zinc-200 hover:text-[#0092ca] dark:hover:text-[#3BBCEC] hover:bg-sky-50/80 dark:hover:bg-sky-950/25 transition-all duration-150 hover:translate-x-1"
                      >
                        <div className="size-7 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 group-hover:bg-[#3BBCEC]/15 group-hover:text-[#0092ca] dark:group-hover:text-[#3BBCEC] flex items-center justify-center shrink-0 transition-colors">
                          <item.icon size={14} />
                        </div>
                        <span className="truncate">Sistema para {item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. RODAPÉ DO MENU (RESPIRO INFERIOR CONFORTÁVEL E SEM CORTES) */}
          <div className="mt-2 pt-4 border-t border-slate-100 dark:border-border/60 flex items-center justify-between gap-3 fluid-caption text-muted-foreground shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#FCC42C] shrink-0" />
              <span>
                Não encontrou seu ramo específico?{" "}
                <strong className="text-foreground">O Dominus se adapta à sua operação.</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMegaMenuOpen(false);
                setSpecialistOpen(true);
              }}
              className="font-bold text-[#0092ca] hover:text-primary hover:underline cursor-pointer flex items-center gap-1.5 shrink-0 fluid-caption transition-colors"
            >
              Falar com um Consultor
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}

      {/* GAVETA DE MENU MÓVEL */}
      {menuOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5 shadow-menu lg:hidden max-h-[85vh] overflow-y-auto">
          <nav className="mx-auto grid max-w-[1440px] gap-1" aria-label="Menu móvel">
            {/* ITEM SISTEMA MOBILE COM ACCORDION */}
            <div className="border-b border-border/40 pb-2">
              <button
                type="button"
                onClick={() => setMobileSistemaOpen((prev) => !prev)}
                className="mobile-nav-link fluid-nav text-left bg-transparent border-none cursor-pointer w-full text-foreground/80 hover:text-primary flex items-center justify-between py-2"
              >
                <span className="font-semibold">Sistema por Segmento</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileSistemaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileSistemaOpen && (
                <div className="pt-2 pb-2 space-y-3">
                  {/* Seletor de Abas Mobile */}
                  <div className="flex items-center justify-center py-1">
                    <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200/80 dark:border-zinc-700/60 w-full max-w-xs">
                      <button
                        type="button"
                        onClick={() => setMegaMenuTab("food")}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg fluid-caption font-bold transition-all cursor-pointer ${
                          megaMenuTab === "food"
                            ? "bg-[#FC4242] text-white shadow-xs"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <UtensilsCrossed size={13} />
                        Food
                      </button>
                      <button
                        type="button"
                        onClick={() => setMegaMenuTab("varejo")}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg fluid-caption font-bold transition-all cursor-pointer ${
                          megaMenuTab === "varejo"
                            ? "bg-[#3BBCEC] text-white shadow-xs"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <ShoppingBag size={13} />
                        Varejo
                      </button>
                    </div>
                  </div>

                  {megaMenuTab === "food" ? (
                    <div className="animate-in fade-in-50 duration-200">
                      <div className="grid grid-cols-2 gap-1.5">
                        {foodSegments.map((item) => (
                          <a
                            key={item.name}
                            href="/planos"
                            onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                            className="flex items-center gap-2 py-1.5 px-2.5 fluid-caption text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <item.icon size={13} className="text-[#FC4242] shrink-0" />
                            <span className="truncate">Sistema para {item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in-50 duration-200">
                      <div className="grid grid-cols-2 gap-1.5">
                        {retailSegments.map((item) => (
                          <a
                            key={item.name}
                            href="/planos"
                            onClick={(e) => handleNavClick(e, "/planos", "solucoes-segmentos")}
                            className="flex items-center gap-2 py-1.5 px-2.5 fluid-caption text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <item.icon size={13} className="text-[#3BBCEC] shrink-0" />
                            <span className="truncate">Sistema para {item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* DEMAIS LINKS MOBILE */}
            {["Integrações", "Seja um Parceiro"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setSpecialistOpen(true);
                }}
                className="mobile-nav-link fluid-nav text-left bg-transparent border-none cursor-pointer w-full text-foreground/80 hover:text-primary"
              >
                {item}
              </button>
            ))}
            <a
              href="/planos"
              className={`mobile-nav-link fluid-nav font-semibold ${
                currentPath === "/planos" ? "text-primary font-bold" : ""
              }`}
              onClick={(e) => handleNavClick(e, "/planos")}
            >
              Planos
            </a>
            <a
              href="/blog"
              className={`mobile-nav-link fluid-nav ${
                currentPath === "/blog" ? "text-primary font-bold" : ""
              }`}
              onClick={(e) => handleNavClick(e, "/blog", "blog-conteudos")}
            >
              Blog
            </a>
            <a
              href="/faq"
              className={`mobile-nav-link fluid-nav ${
                currentPath === "/faq" ? "text-primary font-bold" : ""
              }`}
              onClick={(e) => handleNavClick(e, "/faq")}
            >
              FAQ
            </a>
            <a
              href="/ajuda"
              className={`mobile-nav-link fluid-nav ${
                currentPath === "/ajuda" ? "text-primary font-bold" : ""
              }`}
              onClick={(e) => handleNavClick(e, "/ajuda")}
            >
              Central de Ajuda
            </a>
            <a
              href="/suporte"
              className={`mobile-nav-link fluid-nav ${
                currentPath === "/suporte" ? "text-primary font-bold" : ""
              }`}
              onClick={(e) => handleNavClick(e, "/suporte")}
            >
              Suporte
            </a>

            <div className="mt-4 grid gap-2 border-t border-border pt-4 fluid-secondary text-muted-foreground">
              <a href="tel:+5521975812676" className="flex items-center gap-2">
                <Phone size={15} /> (21) 97581-2676
              </a>
              <a href="mailto:comercial@waybit.com.br" className="flex items-center gap-2">
                <Mail size={15} /> comercial@waybit.com.br
              </a>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                className="social-link"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>

            <Button
              onClick={() => {
                setMenuOpen(false);
                setSpecialistOpen(true);
              }}
              className="mt-4 h-12 w-full sm:hidden bg-[#71BE44] hover:bg-[#62a83a] text-white font-semibold cursor-pointer fluid-btn"
            >
              Falar com Especialista
            </Button>
          </nav>
        </div>
      ) : null}

      <SpecialistDialog open={specialistOpen} onOpenChange={setSpecialistOpen} />
    </header>
  );
}
