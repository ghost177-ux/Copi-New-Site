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
        {/* Bloco exclusivo para a Logo acima do grid */}
        <div className="mb-6 sm:mb-8 w-full">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToAnchor("hero");
            }}
            className="inline-block"
          >
            <img
              src={logoImg}
              alt="Waybit Software"
              className="h-12 w-auto object-contain"
              width={240}
              height={88}
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_3.2fr_2.8fr_1fr] gap-8 sm:gap-y-10 lg:gap-8 xl:gap-10 pb-4 items-start">
          {/* Coluna 1: Sobre a Waybit */}
          <div className="w-full">
            <p className="footer-text-primary text-muted-foreground leading-relaxed w-full">
              Sistema de gestão descomplicada para Varejo, Food e Auto-Center com soluções modernas
              e suporte de verdade.
            </p>
            <p className="mt-3.5 footer-text-secondary font-semibold text-foreground/90 w-full">CNPJ: 11.661.244/0001-31</p>
            <div className="mt-2.5 w-full">
              <p className="footer-text-secondary font-semibold text-foreground">Sede Operacional:</p>
              <p className="footer-text-secondary text-muted-foreground mt-0.5">
                Rio de Janeiro / RJ — Brasil
              </p>
            </div>
            <div className="mt-5 flex w-full items-center gap-3 footer-text-secondary text-muted-foreground">
              <ShieldCheck size={16} className="text-[#71BE44]" />
              <span>Sistemas 100% atualizados com o SEFAZ Nacional</span>
            </div>
          </div>

          {/* Coluna 2: Contato Comercial */}
          <div className="w-full">
            <h4 className="font-display footer-title font-bold text-foreground mb-4 uppercase tracking-wider w-full">
              Contato Comercial
            </h4>
            <div className="space-y-3 footer-text-secondary text-muted-foreground w-full">
              <a
                href="tel:+5521975812676"
                className="footer-text-primary font-medium flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone size={14} className="text-[#00ADEF]" /> (21) 97581-2676
              </a>
              <a
                href="mailto:comercial@waybit.com.br"
                className="footer-text-primary font-medium flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MessageSquare size={14} className="text-[#71BE44]" /> comercial@waybit.com.br
              </a>
              <div className="pt-2 footer-text-secondary w-full">
                <p className="font-semibold text-foreground">Horário Comercial:</p>
                <p>Segunda a Sexta: 08h às 18h</p>
                <p>Plantão de Suporte nos Finais de Semana</p>
              </div>
            </div>
          </div>

          {/* Coluna 3: Soluções */}
          <div className="w-full">
            <h4 className="font-display footer-title font-bold text-foreground mb-4 uppercase tracking-wider w-full">
              Soluções
            </h4>
            <ul className="space-y-2.5 footer-link text-muted-foreground w-full">
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
          <div className="w-full">
            <h4 className="font-display footer-title font-bold text-foreground mb-4 uppercase tracking-wider w-full">
              Social
            </h4>
            <div className="flex w-full items-center gap-3 text-muted-foreground">
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 footer-legal text-muted-foreground">
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
