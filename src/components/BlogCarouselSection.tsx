import { BookOpen, ChevronLeft, ChevronRight, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface BlogCarouselSectionProps {
  onOpenSpecialist?: () => void;
}

export function BlogCarouselSection({ onOpenSpecialist }: BlogCarouselSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="blog-conteudos" className="py-16 lg:py-24 bg-surface-subtle border-t border-border relative overflow-hidden w-full">
      <div className="fluid-container">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-3">
              <BookOpen size={13} className="text-primary" />
              <span>Blog & Conteúdos Estratégicos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Fique por dentro: dicas para acelerar seu comércio
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Artigos práticos de gestão, finanças e tecnologia para o seu dia a dia.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            {/* Controles de Navegação do Carrossel */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollPrev()}
                className="size-9 rounded-full border-border hover:border-primary/40 hover:bg-primary/5 text-foreground cursor-pointer"
                aria-label="Artigo anterior"
              >
                <ChevronLeft size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => api?.scrollNext()}
                className="size-9 rounded-full border-border hover:border-primary/40 hover:bg-primary/5 text-foreground cursor-pointer"
                aria-label="Próximo artigo"
              >
                <ChevronRight size={18} />
              </Button>
            </div>

            {onOpenSpecialist && (
              <button
                type="button"
                onClick={onOpenSpecialist}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline ml-2 cursor-pointer"
              >
                <span>Falar com especialista</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Carrossel de Artigos */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5 lg:-ml-6 py-2">
            {blogPosts.map((post) => (
              <CarouselItem
                key={post.id}
                className="pl-5 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="h-full rounded-2xl border border-border bg-card/95 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Imagem Principal */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span
                        className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${post.categoryColor.bg} ${post.categoryColor.text} ${post.categoryColor.border}`}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Rodapé do Card */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-border/80 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium truncate max-w-[180px]">
                      {post.author}
                    </span>
                    <button
                      type="button"
                      onClick={onOpenSpecialist}
                      className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      Ler mais <ChevronRight size={14} />
                    </button>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
