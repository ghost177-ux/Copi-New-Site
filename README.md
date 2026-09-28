# Waybit Home Vision

Atue como Desenvolvedor Front-end Sênior e Especialista em Arquitetura de Layout SaaS. Sua missão é estruturar e desenvolver a nova página inicial (Home) completa da **Waybit**, focando rigorosamente na **estrutura técnica**, em uma experiência de usuário (UI/UX) moderna, responsividade fluida por porcentagem e na exibição autônoma dos segmentos do ecossistema **Dominus**, seguindo estritamente a identidade visual da marca.

### 1. Sistema de Containers Fluídos (Sem travamento em 1440px)
- Os containers principais de todas as seções devem usar largura total (`w-full`).
- O espaçamento lateral (padding) deve ser dinâmico e responsivo por breakpoints para garantir elegância em qualquer monitor:
  - **Desktops grandes (> 1770px):** Padding lateral de `10%` em ambos os lados.
  - **Desktops padrão (1439px a 1770px):** Padding lateral de `5%` em ambos os lados.
  - **Mobile e Tablets (<= 769px):** Padding lateral de `3%` em ambos os lados.

### 2. Estrutura Detalhada do Header
- **Barra Superior (Top Bar):** Faixa institucional fina no topo contendo à esquerda os dados de contato direto (telefone `(21) 97581-2676` e e-mail corporativo `comercial@waybit.com.br`) e à direita os links rápidos de suporte e atendimento (FAQ, Central de Ajuda e Suporte).
- **Barra de Navegação Principal (Navbar):**
  - **Logo:** Logotipo oficial da Waybit posicionado à esquerda (utilizar a imagem anexada logo.png).
  - **Menus Centrais:** "Sistema" (com suporte a menu interativo por clique — Mega Menu alinhado à esquerda, sem contadores, com itens no formato "Sistema para [Segmento]" distribuídos em colunas simétricas), "Integrações", "Seja um Parceiro", "Planos" e "Blog".
  - **Ação à Direita (CTA):** Botão verde estilizado de destaque com o texto "Falar com Especialista".

### 3. Estrutura da Seção Hero (Primeira Dobra)
- **Layout de Duas Colunas Fluidas:** Construído em uma única seção integrada para exibição imediata e limpa na mesma dobra.
- **Coluna Esquerda (Institucional e Busca):**
  - **Título Principal (H1):** "A rotina da sua empresa leve e com menos esforço" (com destaque tipográfico na cor corporativa).
  - **Subtítulo:** Descrição clara da proposta de valor do ERP ágil, completo e intuitivo.
  - **Campo de Busca:** Input interativo para o usuário pesquisar o seu ramo de atuação diretamente na Hero.
  - **Paginação:** Controles visuais limpos em pílulas e círculos.
- **Coluna Direita (Segmentos Autônomos e Sem Cartões):**
  - Exibição direta, limpa e lateralizada das frentes de atuação do ecossistema **Dominus** (Varejo, Auto-center e Food), estruturadas de forma autônoma sem o uso de caixas de cartões engessadas, permitindo transição e destaque imediato.

### 4. Identidade Visual e Paleta Cromática Aplicada
A aplicação de cores e diretrizes visuais deve respeitar estritamente os tokens e tons oficiais da marca:
- **Dominus Varejo:** `#3BBCEC` (`text-[#3BBCEC]` / `border-[#3BBCEC]`). Azul vibrante oficial para lojas, empórios e comércios. Hover: `#28abd9`.
- **Dominus Auto-center:** `#FCC42C` (`text-[#FCC42C]` / `border-[#FCC42C]`). Amarelo automotivo oficial para oficinas, mecânicas e centros automotivos. Hover: `#e5b024`.
- **Dominus Food:** `#FC4242` (`text-[#FC4242]` / `border-[#FC4242]`). Vermelho oficial de gastronomia para bares, restaurantes, cafeterias e delivery. Hover: `#e03535`.

### 5. Seções Subsequentes da Home (Diretrizes Gerais)
- **Seção de Recursos / Diferenciais:** Exibição clara dos pilares do ERP (vendas, estoque, fiscal e suporte).
- **Seção de Prova Social / Depoimentos:** Foco em credibilidade institucional.
- **Rodapé (Footer):** Com espaçamento interno inferior (*padding bottom* generoso) para garantir respiro, contendo links institucionais, avisos legal e canais de contato, sem cortes visuais.

Gere a aplicação completa da nova Home da Waybit aplicando com exatidão toda esta arquitetura conceitual, responsividade fluida e identidade visual.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9c074411-bbd1-4ec1-8927-10f9c585f8b6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
