# Design System & Arquitetura Visual — Waybit Home Vision

Este documento registra a arquitetura visual, tokens e convenções estruturais adotadas no projeto `waybit-home-vision` após a refatoração visual baseada no ecossistema Waybit.

---

## 1. Filosofia do Layout & Responsividade
O projeto adota uma arquitetura de layout **100% Fluida**.
* **Zero teto rígido:** Não existe limitador global de largura (como `max-width: 1440px` ou `max-w-7xl`) travando as seções principais.
* **Crescimento Proporcional:** As sections e os containers principais expandem continuamente em qualquer resolução (Full HD, 2K, 4K, Ultrawide).
* **Fidelidade e Legibilidade:** O design respira através de margens laterais responsivas dinâmicas (gutters) e limites específicos apenas para elementos internos (ilustrações, diagramas, colunas de leitura, cards e formulários).
* **Filosofia Global vs. Local:**
  * **Global:** Consistência, previsibilidade e ponto de partida inicial para novas páginas e seções.
  * **Local:** Adaptação às necessidades reais do conteúdo. Breakpoints representam espaço disponível, não dispositivos fixos. Se uma seção apresentar problemas de legibilidade, proporção, compressão ou quebras ruins, ela poderá receber uma adaptação responsiva própria, desde que justificada e documentada junto ao componente.

---

## REGRAS GLOBAIS OBRIGATÓRIAS PARA TODAS AS PÁGINAS

> [!IMPORTANT]
> Estas regras NÃO são exclusivas da Home atual. Elas constituem o **DESIGN SYSTEM GLOBAL DA WAYBIT** e são de observância **OBRIGATÓRIA** em:
> - Todas as páginas e rotas atuais do projeto;
> - Todas as futuras páginas, rotas e landing pages;
> - Novas sections e blocos estruturais;
> - Novos componentes e layouts.
>
> Antes de criar qualquer nova página ou componente, este documento é a fonte de verdade para esses padrões. O Footer do projeto é a referência oficial testada e aprovada para esta implementação.

### 1. Tipografia Fluida Global (Regra +2px / +45%)
Para qualquer nível tipográfico do projeto:
1. Identifica-se o tamanho de referência original;
2. Adiciona-se **+2px** ao tamanho original $\rightarrow$ esse valor passa a ser a **NOVA BASE** (referência em 1240px);
3. Em telas menores ($< 1240px$), a fonte decresce fluidamente com uma curva controlada e protegida por um piso de legibilidade confortável (em 375px);
4. Em telas maiores ($\ge 1240px$), a fonte expande continuamente com **amplitude de crescimento de aproximadamente 45%** até telas 4K/Ultrawide (2560px+);
5. A escala deve ser contínua via `clamp(min, calc(intercepto + vw), max)`, **sem saltos tipográficos por breakpoints** (`sm:text-*`, `md:text-*`, `lg:text-*` não devem ser usados para escalonar fontes).

### 2. Largura Estrutural Total (`w-full`)
Todo wrapper, coluna e bloco estrutural deve ocupar **100% da largura disponibilizada pelo elemento pai**:
$$\text{SECTION (w-full)} \rightarrow \text{MAIN CONTAINER (w-full)} \rightarrow \text{LAYOUT WRAPPER (w-full)} \rightarrow \text{GRID/FLEX (w-full)} \rightarrow \text{STRUCTURAL BLOCK (w-full)}$$
* Se uma `div` ou tag semântica representa um bloco estrutural de layout, o padrão obrigatório é `w-full`.
* `w-full` significa 100% da largura disponível concedida pelo pai (e não 100vw).

### 3. Política Rígida de Max-Width
* **Proibido:** É proibido utilizar `max-w-xs`, `max-w-sm`, `max-w-md`, `max-w-lg`, `max-w-xl`, `max-w-2xl`, etc. em wrappers ou blocos estruturais que poderiam e deveriam aproveitar toda a largura disponível de sua coluna ou grid.
* **Proibida a combinação contraditória:** `w-full` + `max-w-*` arbitrários em blocos que devam preencher o espaço pai.
* **Exceções Legítimas Permitidas:** `max-width` somente é permitido quando existir **justificativa real e documentada de design**:
  1. Comprimento de linha editorial de leitura de textos longos (ex: ~65-75 caracteres);
  2. Modais e popups flutuantes centralizados (ex: `DialogContent` com `max-w-lg`);
  3. Formulários centralizados isolados;
  4. Carrosséis com cards deslizantes móveis que exigem largura fixa de visualização peek (ex: `w-[84vw] max-w-[360px]`);
  5. Ilustrações e diagramas específicos de seções protegidas (ex: `#ciclo-operacional` com `max-w-[500px]`);
  6. Logos e assets de produtos com restrição de aspecto.

### 4. Containers Globais Sem Teto
* Sections: `width: 100%`
* Containers: `width: 100%` (`.fluid-container`)
* **Zero `max-width` global** (proibido `max-w-[1440px]`, `max-w-7xl` ou travas similares).
* Gutter lateral único e responsivo:
  * `< 540px` $\rightarrow$ `3%`
  * `540px` até `1439px` $\rightarrow$ `5%`
  * `\ge 1440px` $\rightarrow$ `10%`

---

## 2. Breakpoints Responsivos Globais
A escala do layout adota como referência responsiva oficial 5 faixas dimensionais:

| Faixa | Resolução | Descrição / Papel no Sistema | Gutter Lateral (`--page-gutter`) |
| :--- | :--- | :--- | :--- |
| **Compact** | `< 375px` | Telas compactas / dispositivos móveis menores | `3%` |
| **Base** | `375px` até `539px` | Mobile padrão / largura base de tela única | `3%` |
| **Medium** | `540px` até `959px` | Telas intermediárias / tablet | `5%` |
| **Large** | `960px` até `1439px` | Desktop padrão / notebook | `5%` |
| **Wide** | `>= 1440px` | Desktop amplo / monitores 2K, 4K e Ultrawide | `10%` |

### Pontos de Mudança Estrutural do Sistema
Os principais pontos de transição estrutural padrão são:
* **`540px`:** Transição entre composição em coluna única e composições multi-colunas. Mudança de gutter de `3%` para `5%`.
* **`960px`:** Transição entre composição intermediária e composição desktop ampla.
* **`1440px`:** Mudança de gutter lateral de `5%` para `10%`.
* *Nota:* `375px` é tratado principalmente como marco delimitador de telas ultra-compactas, e não como um breakpoint estrutural obrigatório para todos os componentes.

---

## 3. Container Global
* **Largura:** `width: 100%`
* **Largura Máxima Global:** **NENHUMA** (`max-width: none`)
* **Regra de Aplicação:** Toda section principal se expande em 100% da viewport. Seu container interno imediato recebe a classe `.fluid-container`, que gerencia o padding lateral responsivo de forma centralizada.
* **Limitações Internas Permitidas:** Elementos internos (como cards, parágrafos `max-w-2xl`, diagramas `max-w-[500px]` e formulários) podem possuir limites internos específicos para preservar ergonomia de leitura e proporção estética, sem travar o crescimento da página.

---

## 4. Gutter Horizontal Global
O padding lateral útil é governado por uma **única fonte de verdade**:

* **Arquivo de definição:** [`src/styles.css`](file:///c:/Users/FAB-RGoncalves/Projetos%20GitHub/waybit-home-vision/src/styles.css)
* **Variável CSS:** `--page-gutter`
* **Classe Utilitária Tailwind:** `.fluid-container` (e `.fluid-gutter`)

```css
:root {
  --page-gutter: 3%;
}

@media (min-width: 540px) {
  :root {
    --page-gutter: 5%;
  }
}

@media (min-width: 1440px) {
  :root {
    --page-gutter: 10%;
  }
}

@utility fluid-container {
  width: 100%;
  padding-inline: var(--page-gutter);
}
```

Exemplo prático de largura útil obtida:
* Em **375px**: gutter de 11.2px em cada lado → ~352.5px de área útil.
* Em **768px**: gutter de 38.4px em cada lado → ~691.2px de área útil.
* Em **1200px**: gutter de 60px em cada lado → ~1080px de área útil.
* Em **1920px**: gutter de 192px em cada lado → ~1536px de área útil.
* Em **2560px**: gutter de 256px em cada lado → ~2048px de área útil.
* Em **3840px (4K)**: gutter de 384px em cada lado → ~3072px de área útil.

---

## 5. Cores & Design Tokens

### Cores Principais e Semânticas (OKLCH & Hex)
* **Primary (Azul Waybit):** `oklch(0.72 0.153 224.4)` / `#00ADEF` / `#3BBCEC`
* **Secondary (Verde Sucesso/Ação):** `oklch(0.77 0.18 133.5)` / `#71BE44`
* **Accent (Amarelo Ouro):** `oklch(0.86 0.17 84.4)` / `#FFB800`
* **Background:** `oklch(1 0 0)` (Light) / `oklch(0.14 0.02 245)` (Dark)
* **Foreground:** `oklch(0.24 0.02 245)` (Light) / `oklch(0.98 0.003 247)` (Dark)
* **Surface Subtle:** `oklch(0.985 0.004 220)` (Light) / `oklch(0.16 0.015 245)` (Dark)
* **Border:** `oklch(0.91 0.008 230)` (Light) / `oklch(1 0 0 / 12%)` (Dark)
* **Muted / Muted Foreground:** `oklch(0.965 0.006 230)` / `oklch(0.52 0.018 245)`

### Cores dos Segmentos
* **Food (Gastronomia):** `oklch(0.674 0.216 26.4)` / `#EF4444` (`--color-segment-food`)
* **Varejo (Comércio Geral):** `oklch(0.72 0.153 224.4)` / `#00ADEF` (`--color-segment-varejo`)
* **Auto-Center (Oficinas):** `oklch(0.838 0.171 84.4)` / `#FFB800` (`--color-segment-auto`)
* **Green (Certbit/Ação):** `oklch(0.77 0.18 133.5)` / `#71BE44` (`--color-segment-green`)

### Gradiente Institucional Waybit
Utilizado em títulos em destaque, divisórias e badges:
`bg-gradient-to-r from-[#00ADEF] via-[#71BE44] to-[#FFB800]`

---

## 6. Tipografia Fluida Global (Sistema Oficial)
* **Títulos & Headings (Display):** `"Rubik", "Manrope", sans-serif` (`--font-display`)
  * Pesos: `700 (Bold)`, `800 (ExtraBold)`
  * Tracking: `-0.01em` até `-0.025em` (tight)
  * Line Height: `1.1` a `1.2`
* **Corpo de Texto & Controles (Body):** `"Poppins", "Manrope", sans-serif` (`--font-body` e `--font-sans`)
  * Pesos: `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`
  * Line Height: `1.5` a `1.65` (relaxed)

### Filosofia da Escala Tipográfica Fluida
1. **Regra de Base:** Tamanho existente real $\rightarrow$ soma-se $+2\text{px}$ $\rightarrow$ **Nova Base** (em 1240px).
2. **Crescimento em Telas Amplas:** A partir de 1240px, a fonte expande suavemente em $+45\%$ até 2560px.
3. **Piso Confortável em Telas Menores:** Abaixo de 1240px, a fonte reduz gradualmente com um limite inferior que preserva legibilidade humana confortável até 375px e telas menores.
4. **Continuidade Matemática Perfeita:** Em 1240px, a transição entre as faixas possui $\Delta = 0\text{px}$, sem solavancos visuais.

### Tabela de Tokens Tipográficos e Resoluções

| Token / Classe | Nível Semântico | Tamanho Original | Nova Base (+2px) | 375px (Mobile) | 1240px (Notebook) | 1920px (Full HD) | 2560px (2K/4K) | Teto (+45%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `.fluid-display` | Display / Hero H1 | `60px` (`3.75rem`) | **`62px`** (`3.875rem`) | `42.8px` (`2.67rem`) | `62.0px` (`3.875rem`) | `76.4px` (`4.77rem`) | `89.9px` (`5.62rem`) | `89.9px` |
| `.fluid-h1` | H1 de Página | `48px` (`3.0rem`) | **`50px`** (`3.125rem`) | `34.5px` (`2.16rem`) | `50.0px` (`3.125rem`) | `61.6px` (`3.85rem`) | `72.5px` (`4.53rem`) | `72.5px` |
| `.fluid-h2` | Títulos de Section | `40px` (`2.5rem`) | **`42px`** (`2.625rem`) | `30.4px` (`1.90rem`) | `42.0px` (`2.625rem`) | `51.8px` (`3.24rem`) | `60.9px` (`3.81rem`) | `60.9px` |
| `.fluid-h3` | Subtítulos / Cards | `24px` (`1.5rem`) | **`26px`** (`1.625rem`) | `21.2px` (`1.32rem`) | `26.0px` (`1.625rem`) | `32.0px` (`2.00rem`) | `37.7px` (`2.36rem`) | `37.7px` |
| `.fluid-h4` | Títulos menores / Autores | `18px` (`1.125rem`) | **`20px`** (`1.25rem`) | `17.1px` (`1.07rem`) | `20.0px` (`1.25rem`) | `24.6px` (`1.54rem`) | `29.0px` (`1.81rem`) | `29.0px` |
| `.fluid-body-lg` / `.fluid-subtitle` | Subtítulos & Lead | `18px` (`1.125rem`) | **`20px`** (`1.25rem`) | `17.1px` (`1.07rem`) | `20.0px` (`1.25rem`) | `24.6px` (`1.54rem`) | `29.0px` (`1.81rem`) | `29.0px` |
| `.fluid-body` | Parágrafos Principais | `16px` (`1.0rem`) | **`18px`** (`1.125rem`) | `15.8px` (`0.99rem`) | `18.0px` (`1.125rem`) | `22.2px` (`1.38rem`) | `26.1px` (`1.63rem`) | `26.1px` |
| `.fluid-secondary` | Textos Secundários | `14px` (`0.875rem`) | **`16px`** (`1.0rem`) | `14.2px` (`0.89rem`) | `16.0px` (`1.0rem`) | `19.7px` (`1.23rem`) | `23.2px` (`1.45rem`) | `23.2px` |
| `.fluid-nav` | Links de Navegação | `14px` (`0.875rem`) | **`16px`** (`1.0rem`) | `14.2px` (`0.89rem`) | `16.0px` (`1.0rem`) | `19.7px` (`1.23rem`) | `23.2px` (`1.45rem`) | `23.2px` |
| `.fluid-btn` | Botões & CTAs | `14px` (`0.875rem`) | **`16px`** (`1.0rem`) | `14.2px` (`0.89rem`) | `16.0px` (`1.0rem`) | `19.7px` (`1.23rem`) | `23.2px` (`1.45rem`) | `23.2px` |
| `.fluid-caption` | Badges, Pills, Labels | `12px` (`0.75rem`) | **`14px`** (`0.875rem`) | `12.5px` (`0.78rem`) | `14.0px` (`0.875rem`) | `17.3px` (`1.08rem`) | `20.3px` (`1.27rem`) | `20.3px` |
| `.fluid-legal` | Copyright e Legal | `11px` (`0.6875rem`)| **`13px`** (`0.8125rem`)| `11.5px` (`0.72rem`) | `13.0px` (`0.8125rem`)| `14.3px` (`0.89rem`) | `15.6px` (`0.975rem`)| `15.6px` |

### Fórmulas Matemáticas Clamp Utilizadas
As classes utilitárias utilizam pares de interpolação matemática com `@media (min-width: 1240px)` definidos centralmente em [`src/styles.css`](file:///c:/Users/FAB-RGoncalves/Projetos%20GitHub/waybit-home-vision/src/styles.css):
* `< 1240px`: $\text{clamp}(\text{Piso}, \text{calc}(\text{intercepto} + \text{slope}\times\text{vw}), \text{Base})$
* $\ge 1240px$: $\text{clamp}(\text{Base}, \text{calc}(\text{intercepto} + \text{slope}\times\text{vw}), \text{Base}\times 1.45)$

---

## 7. Escala Responsiva & Unidades Recomendadas
* `%`: para largura de containers fluidos (`w-full`, `fluid-container`), colunas de grid responsivo e preenchimento de imagens.
* `rem`: para tipografia, padding interno de cards, botões e controles acessíveis.
* `clamp()`: para títulos, banners e cards que necessitam crescer suavemente entre mobile e telas amplas sem romper limites estéticos.
* `aspect-ratio`: para cards de vídeos (`aspect-[9/13.5]`), banners (`aspect-video`) e ilustrações proporcionais (`aspect-square`).
* `min()` / `max()`: para contenção interna de ilustrações sem travar containers.

---

## 8. Espaçamentos
* **Entre Seções Principais:** `py-12 sm:py-16 lg:py-24`
* **Padding Interno de Cards:** `p-4 sm:p-5 lg:p-6` ou `p-6 sm:p-8 lg:p-10`
* **Gap entre Itens de Grid:** `gap-4 sm:gap-6 lg:gap-8`

---

## 9. Border Radius
* **Pílulas / Badges:** `rounded-full` (`9999px`)
* **Botões & Inputs:** `rounded-xl` (`0.75rem`)
* **Cards & Banners:** `rounded-2xl` (`1rem`) ou `rounded-3xl` (`1.5rem`)

---

## 10. Sombras
* **Sombra de Ação (CTA):** `--shadow-cta: 0 10px 26px color-mix(in oklab, var(--primary) 24%, transparent)`
* **Sombra de Menu / Card Elevado:** `--shadow-menu: 0 20px 35px color-mix(in oklab, var(--foreground) 10%, transparent)`
* **Hover de Cards:** `hover:shadow-xl hover:-translate-y-1` com transição suave de `300ms`.

---

## 11. Imagens Responsivas
* **Regra Fundamental:** Imagens ocupam `w-full h-auto` ou preenchem containers através de `object-cover` ou `object-contain`.
* **Zero distorção:** Preservação de `aspect-ratio` nativo.
* **Carregamento Otimizado:** Imagens críticas do Hero carregadas com `loading="eager"`, e imagens de seções inferiores (depoimentos, blog, logos) com `loading="lazy"`.

---

## 12. Ícones Responsivos
* **Biblioteca Padrão:** `lucide-react`
* **Dimensionamento:** Escala controlada de `14px` a `28px` com `shrink-0` e alinhamento centralizado com flexbox.

---

## 13. Convenção de IDs e Nomenclatura Semântica
Cada seção principal possui um ID HTML exclusivo e semântico:
* `<section id="hero">`: Hero com carrossel 3D e seletor interativo.
* `<section id="metricas">`: Painel de métricas e autoridade (clientes, satisfação, economia).
* `<section id="solucao-dominus">`: Apresentação comparativa Caos vs Solução Dominus.
* `<section id="depoimentos">`: Cases e depoimentos reais em vídeo.
* `<section id="diferencial-suporte">`: Diferenciais do suporte humanizado em até 5 min.
* `<section id="solucoes-segmentos">`: Ecossistema de produtos (Food, Varejo, Auto, Xpert, Certbit).
* `<section id="banner-demonstracao">`: Conversão para demonstração gratuita e WhatsApp.
* `<section id="ciclo-operacional">`: **Exceção protegida** com o diagrama operacional.
* `<section id="avaliacoes-google">`: Avaliações 4.9 estrelas verificadas no Google.
* `<section id="blog-conteudos">`: Carrossel de artigos e materiais educativos.
* `<footer id="footer-institucional">`: Rodapé institucional completo.

---

## 14. Exceção Protegida: `#ciclo-operacional`
* **Regra de Negócio:** A seção `#ciclo-operacional` existente no `waybit-home-vision` é uma área protegida.
* **O que foi preservado:** O título *"Tudo o que sua empresa precisa para operar sem atritos"*, a ilustração [`public/Diag-ciclo.png`](file:///c:/Users/FAB-RGoncalves/Projetos%20GitHub/waybit-home-vision/public/Diag-ciclo.png), a órbita do foguete Lucide e a estrutura conceitual.
* **O que foi adaptado:** O container externo, integrado ao sistema global `.fluid-container` (`3% / 5% / 10%`), permitindo expansão fluida em telas amplas mantendo o diagrama com limite visual próprio (`max-w-[500px]`) para não desproporcionar.

---

## 15. Exceção Validada: `#solucoes-segmentos` (Interpolação Fluida)
* **Regra de Negócio:** A seção `#solucoes-segmentos` possui comportamento responsivo específico validado e não deve ser substituída por regras genéricas.
* **Distribuição dos Cards:**
  * **`>= 960px`:** Grade `3 + 2` (Linha 1: Varejo, Auto-center, Food; Linha 2: Xpert e Certbit centralizados).
  * **`540px` até `959px`:** Grade `2 + 1 + 2` (Linha 1: Varejo \| Auto-center; Linha 2: Food centralizado com largura de 1 coluna; Linha 3: Xpert \| Certbit).
  * **`< 540px`:** 1 coluna (5 cards empilhados).
* **Wrapper com Interpolação Fluida Contínua (80% → 100%):**
  * Ao entrar em uma nova faixa de menos colunas, o wrapper dos cards inicia em ~`80%` da largura útil (evitando cards desnecessariamente largos).
  * Conforme a tela diminui dentro daquela faixa, o wrapper expande progressivamente até `100%`:
    * `>= 1440px`: `80%` fixo centralizado.
    * `1439px → 960px`: cresce fluidamente de `80%` até `100%`.
    * `959px → 540px`: cresce fluidamente de `80%` até `100%`.
    * `539px → 375px`: cresce fluidamente de `80%` até `100%`.
    * `< 375px`: `100%` fixo.
  * **Nota Crítica:** Essa interpolação pertence exclusivamente a esta seção e **não** é uma regra global.

---

## 16. Diretrizes para Exceções Responsivas Locais
1. **Regra de Prioridade:** Os breakpoints globais (`540px`, `960px`, `1440px`) devem ser sempre a primeira opção.
2. **Critério de Exceção:** Somente introduza um breakpoint ou layout local quando houver um problema visual ou de composição comprovado (legibilidade, proporção, compressão de conteúdo ou quebras ruins).
3. **Documentação Local Obrigatória:** Quando uma seção possuir comportamento diferente do padrão global, a justificativa deve ser documentada em comentário diretamente no código da seção contendo:
   * **Qual é a exceção:** Descrição da regra customizada.
   * **Breakpoint / Comportamento utilizado:** Valores e regras locais.
   * **Comportamento global padrão:** O que seria aplicado naturalmente.
   * **Justificativa:** O motivo específico pelo qual o comportamento global foi insuficiente.
   * **O que deve ser preservado:** Requisitos visuais e funcionais críticos.

---

## 17. Boas Práticas para Novas Seções
Ao criar novos blocos ou seções:
1. Sempre use a estrutura:
   ```tsx
   <section id="meu-bloco-semantico" className="w-full relative overflow-hidden py-12 sm:py-16 lg:py-24">
     <div className="fluid-container">
       {/* Conteúdo */}
     </div>
   </section>
   ```
2. **Nunca** introduza `max-w-[1440px]` ou `max-w-7xl` no wrapper principal.
3. Utilize os tokens de cores `--color-segment-*` e `--page-gutter`.
4. Garanta que botões e links mantenham compatibilidade com o fluxo in-page e modais existentes.
