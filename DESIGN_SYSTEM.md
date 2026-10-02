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

### 1. Tipografia Fluida Global (Regra Oficial H1/H2/H3 e Demais Textos)
Para manter o equilíbrio visual e a hierarquia entre títulos e corpo de texto em qualquer tela:
1. **Títulos Principais e Destaques (Display / H1 / H2 / H3 / H4 / Métricas):**
   - **Hero / Display (`.fluid-display`):** Base de **52px** (`3.25rem`).
   - **H1 (`.fluid-h1`):** Base de **41px** (`2.5625rem`).
   - **H2 (`.fluid-h2`):** Base de **33px** (`2.0625rem`).
   - **H3 (`.fluid-h3`):** Base de **19px** (`1.1875rem`).
   - **H4 (`.fluid-h4`):** Base de **15px** (`0.9375rem`).
   - **Métricas (`.metric-value`):** Base de **24px** (`1.5rem`).
   - A partir dessa base oficial de referência (em $1240\text{px}$), cada elemento cresce fluidamente até aproximadamente $+45\%$ em telas grandes ($\ge 1240\text{px}$ até $2560\text{px}$).
   - Em telas menores ($< 1240\text{px}$), reduz fluidamente respeitando um piso confortável de legibilidade.
2. **Demais Textos (Body, Body Large, Subtítulos, Secondary, Links, Navegação, Botões, Labels, Captions, Legal):**
   $$\text{BASE} = \text{TAMANHO ORIGINAL}$$
   - Mantêm o tamanho original como base de referência em $1240\text{px}$.
   - Crescem fluidamente até aproximadamente $+45\%$ em telas amplas ($\ge 1240\text{px}$ até $2560\text{px}$).
   - Reduzem fluidamente com piso de conforto em telas menores.
3. **Fluidez Contínua:** Todas as transições são contínuas via `clamp(min, calc(intercepto + vw), max)`, **sem degraus de font-size por breakpoints**.

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
1. **Títulos Principais (Display / H1 / H2 / H3):** Definidos por bases calibradas para proporcionalidade e conforto visual, com crescimento fluido de até aproximadamente $+45\%$ em telas grandes ($\ge 1240\text{px}$ até $2560\text{px}$).
2. **Demais Textos:** $\text{Base} = \text{Tamanho Original}$. Crescimento fluido de até aproximadamente $+45\%$ em telas grandes.
3. **Piso Confortável em Telas Menores ($< 1240\text{px}$):** Abaixo de 1240px, a fonte reduz gradualmente com um limite inferior que preserva legibilidade humana confortável até 375px e telas menores.
4. **Continuidade Matemática Perfeita:** Em 1240px, a transição entre as faixas possui $\Delta = 0\text{px}$, sem saltos visuais.

### Tabela de Tokens Tipográficos e Resoluções

| Tipo / Token | Base de Referência | 1240px | 1920px | 2560px | Teto (+45%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero / Display** (`.fluid-display`) | **`52px`** (`3.25rem`) | `52.0px` | `64.1px` | `75.4px` | `75.4px` (`4.71rem`) |
| **H1** (`.fluid-h1`) | **`41px`** (`2.5625rem`) | `41.0px` | `50.5px` | `59.5px` | `59.5px` (`3.72rem`) |
| **H2** (`.fluid-h2`) | **`33px`** (`2.0625rem`) | `33.0px` | `40.6px` | `47.9px` | `47.9px` (`2.99rem`) |
| **H3** (`.fluid-h3`) | **`19px`** (`1.1875rem`) | `19.0px` | `23.4px` | `27.6px` | `27.6px` (`1.72rem`) |
| **H4** (`.fluid-h4`) | **`15px`** (`0.9375rem`) | `15.0px` | `18.5px` | `21.8px` | `21.8px` (`1.36rem`) |
| **Métricas** (`.metric-value`) | **`24px`** (`1.5rem`) | `24.0px` | `29.6px` | `34.8px` | `34.8px` (`2.18rem`) |
| **Body Large / Subtitle** (`.fluid-body-lg`) | **`18px`** (`1.125rem`) | `18.0px` | `22.2px` | `26.1px` | `26.1px` (`1.63rem`) |
| **Body** (`.fluid-body`) | **`16px`** (`1.0rem`) | `16.0px` | `19.7px` | `23.2px` | `23.2px` (`1.45rem`) |
| **Secondary** (`.fluid-secondary`) | **`14px`** (`0.875rem`) | `14.0px` | `17.2px` | `20.3px` | `20.3px` (`1.27rem`) |
| **Navigation** (`.fluid-nav`) | **`14px`** (`0.875rem`) | `14.0px` | `17.2px` | `20.3px` | `20.3px` (`1.27rem`) |
| **Button** (`.fluid-btn`) | **`14px`** (`0.875rem`) | `14.0px` | `17.2px` | `20.3px` | `20.3px` (`1.27rem`) |
| **Caption** (`.fluid-caption`) | **`12px`** (`0.75rem`) | `12.0px` | `14.8px` | `17.4px` | `17.4px` (`1.09rem`) |
| **Legal** (`.fluid-legal`) | **`11px`** (`0.6875rem`)| `11.0px` | `13.6px` | `16.0px` | `16.0px` (`1.00rem`) |

### Fórmulas Matemáticas Clamp Utilizadas
As classes utilitárias utilizam pares de interpolação matemática com `@media (min-width: 1240px)` definidos centralmente em [`src/styles.css`](file:///c:/Users/FAB-RGoncalves/Projetos%20GitHub/waybit-home-vision/src/styles.css):
* `< 1240px`: $\text{clamp}(\text{Piso}, \text{calc}(\text{intercepto} + \text{slope}\times\text{vw}), \text{Base})$
* $\ge 1240px$: $\text{clamp}(\text{Base}, \text{calc}(\text{intercepto} + \text{slope}\times\text{vw}), \text{Base}\times 1.45)$

Exemplos de fórmulas finais aprovadas:
* **H1 (`.fluid-h1`):**
  * `< 1240px`: `clamp(1.5625rem, calc(1.1290rem + 1.8497vw), 2.5625rem)`
  * $\ge 1240px`: `clamp(2.5625rem, calc(1.4793rem + 1.3977vw), 3.7156rem)`
* **H2 (`.fluid-h2`):**
  * `< 1240px`: `clamp(1.3125rem, calc(0.9874rem + 1.3873vw), 2.0625rem)`
  * $\ge 1240px`: `clamp(2.0625rem, calc(1.1906rem + 1.1250vw), 2.9906rem)`
* **H3 (`.fluid-h3`):**
  * `< 1240px`: `clamp(0.875rem, calc(0.7395rem + 0.5780vw), 1.1875rem)`
  * $\ge 1240px`: `clamp(1.1875rem, calc(0.6855rem + 0.6477vw), 1.7219rem)`
* **H4 (`.fluid-h4`):**
  * `< 1240px`: `clamp(0.8125rem, calc(0.7583rem + 0.2312vw), 0.9375rem)`
  * $\ge 1240px`: `clamp(0.9375rem, calc(0.5412rem + 0.5114vw), 1.3594rem)`
* **Métricas (`.metric-value`):**
  * `< 1240px`: `clamp(1.125rem, calc(0.9624rem + 0.6936vw), 1.5rem)`
  * $\ge 1240px`: `clamp(1.5rem, calc(0.8659rem + 0.8182vw), 2.175rem)`

### Escala Tipográfica Própria do Footer Institucional
> [!IMPORTANT]
> **O FOOTER POSSUI ESCALA TIPOGRÁFICA PRÓPRIA E ISOLADA.**
> Alterações futuras nos níveis tipográficos globais (incluindo H1, H2, H3, H4 ou tokens gerais) **não devem** modificar ou sobrescrever a tipografia do Footer. O Footer permanece visualmente e estruturalmente independente.

O Footer utiliza uma escala tipográfica própria, calibrada especificamente para alta densidade informacional e elegância institucional:

| Token Footer | Base de Referência | 1240px | 1920px | 2560px | Teto (+45%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`.footer-title`** | **`14px`** (`0.875rem`) | `14.0px` | `17.2px` | `20.3px` | `20.3px` (`1.27rem`) |
| **`.footer-text-primary`** | **`14px`** (`0.875rem`) | `14.0px` | `17.2px` | `20.3px` | `20.3px` (`1.27rem`) |
| **`.footer-link`** | **`13px`** (`0.8125rem`) | `13.0px` | `16.0px` | `18.85px` | `18.85px` (`1.18rem`) |
| **`.footer-text-secondary`** | **`12px`** (`0.75rem`) | `12.0px` | `14.8px` | `17.4px` | `17.4px` (`1.09rem`) |
| **`.footer-legal`** | **`11px`** (`0.6875rem`)| `11.0px` | `13.6px` | `16.0px` | `16.0px` (`1.00rem`) |

Fórmulas Finais do Footer:
* **`.footer-title`:**
  * `< 1240px`: `clamp(0.8125rem, calc(0.7854rem + 0.1156vw), 0.875rem)`
  * $\ge 1240px`: `clamp(0.875rem, calc(0.5051rem + 0.4773vw), 1.2688rem)`
* **`.footer-text-primary`:**
  * `< 1240px`: `clamp(0.8125rem, calc(0.7854rem + 0.1156vw), 0.875rem)`
  * $\ge 1240px`: `clamp(0.875rem, calc(0.5051rem + 0.4773vw), 1.2688rem)`
* **`.footer-link`:**
  * `< 1240px`: `clamp(0.75rem, calc(0.7229rem + 0.1156vw), 0.8125rem)`
  * $\ge 1240px`: `clamp(0.8125rem, calc(0.4690rem + 0.4432vw), 1.1781rem)`
* **`.footer-text-secondary`:**
  * `< 1240px`: `clamp(0.6875rem, calc(0.6604rem + 0.1156vw), 0.75rem)`
  * $\ge 1240px`: `clamp(0.75rem, calc(0.4330rem + 0.4091vw), 1.0875rem)`
* **`.footer-legal`:**
  * `< 1240px`: `clamp(0.625rem, calc(0.5979rem + 0.1156vw), 0.6875rem)`
  * $\ge 1240px`: `clamp(0.6875rem, calc(0.3969rem + 0.375vw), 0.9969rem)`

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

## 11. Regra Global Obrigatória: Imagens e Ícones Responsivos (Dimensionamento Fluido por Porcentagem)

> [!IMPORTANT]
> **PADRÃO GLOBAL DO PROJETO:**
> "O dimensionamento visual principal de imagens e ícones deve utilizar preferencialmente porcentagens relativas ao container pai adequado, evitando dimensões rígidas em pixels quando o objetivo for controlar responsividade."

### 1. Princípios Fundamentais
* **Referência é o Container Pai:** O dimensionamento percentual deve obrigatoriamente responder ao seu **container pai direto** (e nunca simplesmente ao viewport em `vw` ou unidades globais desacopladas).
* **Eliminação de Escadas Rígidas em Pixels:** Evitar cadeias de `max-w-[580px] sm:max-w-[720px] md:max-w-[860px]` para governar o tamanho principal de imagens de destaque. A responsividade deve ser obtida com porcentagens fluidas aplicadas ao container/elemento (ex: `w-[90%] sm:w-[82%] md:w-[72%] lg:w-[60%]`).
* **Preservação Rígida de Aspect-Ratio:** Ao utilizar porcentagens, manter incondicionalmente a proporção original do ativo com `height: auto` (ou classes semânticas de `aspect-ratio`). Nenhuma imagem deve ser esticada, achatada ou deformada para preencher uma porcentagem.
* **Uso Adequado de Object-Fit:** Em áreas com altura delimitada ou composições de fundo (como faixas panorâmicas e cenários parallax), utilizar `object-fit: cover` (ou `object-contain`) associado ao `object-position` adequado para resguardar o enquadramento essencial da ilustração/foto.
* **Ausência de Overflow:** Elementos dimensionados por porcentagem não devem produzir overflow horizontal em nenhuma resolução (de 375px a 4K).

### 2. Aplicação Contextual por Tipo de Ativo
Cada elemento gráfico deve receber uma porcentagem correspondente ao seu papel na arquitetura da tela:
* **Imagem Principal / Banner / Produto:** Percentual da área visual ou container pai (ex: notebook com `w-[60%]` no desktop e percentual maior no mobile).
* **Ilustração / Diagrama:** Percentual da coluna ou wrapper onde está ancorada.
* **Logo de Marca:** Percentual do container reservado à marca no Header ou Footer.
* **Ícone em Destaque:** Percentual do wrapper próprio do ícone (ex: cápsula ou círculo delimitado).
* **Elemento Decorativo / Glow / Badge:** Percentual relativo ao container da composição em que orbita.

### 3. Exceções Técnicas & Cuidados Críticos
* **PROIBIDAS Regras Universais Cegas:** É terminantemente proibido criar regras globais em seletores de tag como:
  ```css
  img { width: 60%; }
  svg { width: 60%; }
  ```
  Isso causaria quebra em cascata em componentes já existentes. A porcentagem deve ser declarada individualmente através de utilitários Tailwind aplicados ao elemento ou seu wrapper no JSX.
* **Não Converter Detalhes Técnicos de SVG:** A regra governa o dimensionamento visual responsivo externo. NÃO converter para porcentagem:
  - `stroke-width` de ícones SVG;
  - Espessura de borda;
  - Coordenadas e viewboxes de paths internos;
  - Ícones inline em botões e badges (`14px` a `20px`) com alinhamento tipográfico direto, a menos que estejam inseridos em um wrapper responsivo dedicado.
* **Não Refatorar Componentes Validados Indiscriminadamente:** Componentes e seções previamente aprovados e testados (ex: diagramas específicos, badges, Footer) não devem sofrer conversões cegas retroativas sem uma solicitação ou necessidade comprovada. A regra passa a ser obrigatória para novos componentes e para os módulos em ciclo ativo de ajuste.

### 4. Padrão de Referência da Home: DemonstracaoSection (Notebook Fluido)
* **Objetivo:**
  - **Telas Grandes ($\ge 1440\text{px}$):** O notebook ocupa **30%** da largura do container pai (mantido em 1920px, 2560px e 4K) para garantir máxima respiração visual e equilíbrio com o cenário panorâmico do escritório.
  - **Abaixo de 1440px ($< 1440\text{px}$):** Começa em aproximadamente **50%** e cresce de maneira fluida e contínua conforme a tela diminui, atingindo **100%** nas telas pequenas / mobile.
* **Sem Saltos Bruscos:** Em vez de degraus rígidos por breakpoint (`50% → 70% → 85% → 100%`), utiliza interpolação contínua via Container Queries (`cqw`) e `clamp()`:
  ```css
  /* Container Pai */
  .demonstracao-notebook-container {
    container-type: inline-size;
  }

  /* Notebook Interativo */
  .demonstracao-notebook {
    width: clamp(50%, calc(383px + 23.4cqw), 100%);

    @media (min-width: 1440px) {
      width: 30%;
    }

    @container (min-width: 1440px) {
      width: 30%;
    }
  }
  ```
* **Comportamento por Resolução:**
  - `≥ 1440px`: Notebook estabilizado em **30%** da largura útil do container pai.
  - `1439px`: Notebook inicia em $\approx \mathbf{50\%}$.
  - `1439px → mobile`: Crescimento percentual fluido e progressivo (50% → 55% → 63% → 73% → 100%).
  - `≤ 500px`: Notebook ocupa **100%** da largura disponível do container pai (sem overflow horizontal).
* **Propriedades Preservadas:** `height: auto`, proporção nativa (~16:9), centralização horizontal, interações suaves de hover e modal de vídeo.

---

## 12. Ícones no Sistema
* **Biblioteca Padrão:** `lucide-react`
* **Dimensionamento:**
  - **Ícones em Wrappers:** Utilizar percentual do wrapper pai (ex: wrapper de `w-12 h-12` com ícone centralizado proporcional).
  - **Ícones Inline (Botões, Tags e Menus):** Escala controlada (ex: `14px` a `24px`) acompanhando o peso do texto, sempre com `shrink-0` e centralização flexbox.

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
* **O que foi preservado:** A ilustração [`public/Diag-ciclo.png`](file:///c:/Users/FAB-RGoncalves/Projetos%20GitHub/waybit-home-vision/public/Diag-ciclo.png), a órbita do foguete Lucide e a estrutura conceitual ("Seu negócio mais rápido. Seu dia mais produtivo.").
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
