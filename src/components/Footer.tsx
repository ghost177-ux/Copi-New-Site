import { Facebook, Instagram, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import logoImg from "@/assets/logo.png";

interface FooterProps {
  onOpenSpecialist?: () => void;
}

export function Footer({ onOpenSpecialist }: FooterProps) {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer-institucional" className="border-t border-border bg-background pt-14 pb-8 w-full overflow-hidden">
      <div className="fluid-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-4">
          {/* Coluna 1: Logo / Sobre a Waybit */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor("hero");
              }}
              className="inline-block mb-4"
            >
              <img
                src={logoImg}
                alt="Waybit Software"
                className="h-12 w-auto object-contain"
                width={240}
                height={88}
              />
            </a>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Sistema de gestão descomplicada para Varejo, Food e Auto-Center com soluções modernas
              e suporte de verdade.
            </p>
            <p className="mt-3.5 text-sm font-semibold text-foreground/90">CNPJ: 11.661.244/0001-31</p>
            <div className="mt-2.5">
              <p className="text-sm font-semibold text-foreground">Sede Operacional:</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Rio de Janeiro / RJ — Brasil
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck size={16} className="text-[#71BE44]" />
              <span>Sistemas 100% atualizados com o SEFAZ Nacional</span>
            </div>
          </div>

          {/* Coluna 2: Contato Comercial */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="font-display text-base font-bold text-foreground mb-4 uppercase tracking-wider">
              Contato Comercial
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="tel:+5521975812676"
                className="text-base font-medium flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone size={14} className="text-[#00ADEF]" /> (21) 97581-2676
              </a>
              <a
                href="mailto:comercial@waybit.com.br"
                className="text-base font-medium flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MessageSquare size={14} className="text-[#71BE44]" /> comercial@waybit.com.br
              </a>
              <div className="pt-2">
                <p className="text-sm font-semibold text-foreground">Horário Comercial:</p>
                <p className="text-sm">Segunda a Sexta: 08h às 18h</p>
                <p className="text-sm">Plantão de Suporte nos Finais de Semana</p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="font-display text-base font-bold text-foreground mb-4 uppercase tracking-wider">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-[15px] text-muted-foreground">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("solucoes-segmentos")}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Sistema para Restaurante
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("solucoes-segmentos")}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Sistema para Cafeteria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("solucoes-segmentos")}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Sistema para Hamburgueria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("solucoes-segmentos")}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Sistema para Materiais de Construção
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("solucoes-segmentos")}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Sistema para Loja de Tintas
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Social */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="font-display text-base font-bold text-foreground mb-4 uppercase tracking-wider">
              Social
            </h4>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                className="social-link"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVISÓRIA COLORIDA HORIZONTAL DA IDENTIDADE WAYBIT (FULL WIDTH DE BORDA A BORDA) */}
      <div className="mt-10 mb-6 flex h-[3px] w-full" aria-hidden="true">
        <div className="h-full w-[18%] bg-[#00ADEF]" />
        <div className="h-full w-[32%] bg-[#FFB800]" />
        <div className="h-full w-[32%] bg-[#71BE44]" />
        <div className="h-full w-[18%] bg-[#707070]" />
      </div>

      {/* Linha Inferior com Copyright e Políticas */}
      <div className="fluid-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Waybit Software. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://waybit.com.br/politica-de-privacidade/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="https://waybit.com.br/termos-de-uso/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
