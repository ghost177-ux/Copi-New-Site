import blogImg1 from "@/assets/principal - a importancia da.png";
import blogImg2 from "@/assets/principal - a nova era dos.png";
import blogImg3 from "@/assets/principal - a nova regra.png";
import blogImg4 from "@/assets/principal - alteração do decreto.jpg";
import blogImg5 from "@/assets/principal - 5 erros que.png";
import blogImg6 from "@/assets/principal - 5 integrações do dominus.jpg";

export interface BlogSection {
  subhead?: string;
  paragraphs?: string[];
  list?: string[];
  numberedList?: { number: number; title: string; description: string }[];
  highlight?: { title: string; text: string };
  callout?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryColor: {
    bg: string;
    text: string;
    border: string;
  };
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  imageAlt: string;
  summary: string;
  sections: BlogSection[];
  whatsappCta?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "a-importancia-da-alimentacao-inclusiva-em-restaurantes",
    title: "A importância da alimentação inclusiva em restaurantes",
    category: "Gastronomia / Food",
    categoryColor: {
      bg: "bg-red-500/10",
      text: "text-red-500",
      border: "border-red-500/20",
    },
    readTime: "4 min de leitura",
    date: "14 de Maio, 2024",
    author: "Equipe Waybit Food",
    authorRole: "Especialistas em Gestão Gastronômica",
    image: blogImg1,
    imageAlt: "A importância da alimentação inclusiva em restaurantes",
    summary:
      "A alimentação inclusiva é essencial para atender clientes com restrições alimentares, alergias e diferentes escolhas de vida, fidelizando novos públicos e elevando a experiência do seu restaurante.",
    sections: [
      {
        paragraphs: [
          "A alimentação inclusiva em restaurantes é um assunto cada vez mais relevante na sociedade atual, especialmente diante do aumento do número de pessoas que possuem alguma restrição alimentar. Os restaurantes têm um papel importante na promoção de uma alimentação saudável e inclusiva, oferecendo opções que atendam às necessidades e preferências de todos os clientes.",
          "O primeiro passo para garantir a inclusão alimentar em um restaurante é entender as necessidades e restrições dos clientes. Para isso, é importante oferecer um cardápio com informações claras e detalhadas sobre os ingredientes utilizados em cada prato, bem como as possíveis alergias ou intolerâncias que eles possam causar. Além disso, os funcionários devem estar treinados para responder a perguntas e fornecer informações adicionais sobre os pratos do cardápio.",
          "Um outro ponto importante é a diversidade do cardápio. É importante oferecer opções variadas que atendam a diferentes gostos e necessidades alimentares. Por exemplo, é importante oferecer opções veganas, vegetarianas, sem glúten, sem lactose, com baixo teor de gordura, entre outras opções. Com um cardápio variado, é possível garantir que todos os clientes sejam atendidos de maneira satisfatória.",
          "Além disso, é importante que o ambiente do restaurante seja inclusivo e acolhedor para todos. Um ambiente inclusivo significa que todos os clientes são bem-vindos e respeitados independentemente de suas necessidades ou preferências alimentares.",
        ],
      },
      {
        subhead: "O que é alimentação inclusiva?",
        paragraphs: [
          "A alimentação inclusiva é aquela que atende às necessidades de todas as pessoas, independentemente de suas restrições alimentares. Isso inclui pessoas com intolerância ou alergia a determinados alimentos, vegetarianos, veganos, pessoas com doenças crônicas, como diabetes, e outros casos especiais.",
        ],
      },
      {
        subhead: "Como promover a alimentação inclusiva em restaurantes?",
        list: [
          "Conhecer as restrições alimentares dos clientes e mapear o perfil do seu público frequente.",
          "Oferecer opções vegetarianas e veganas atrativas e bem elaboradas no cardápio.",
          "Indicar com clareza os ingredientes e alérgenos nos pratos e na comanda digital.",
          "Ter um cardápio variado que garanta alternativas sem glúten e sem lactose.",
          "Capacitar a equipe de salão e cozinha para lidar com diferentes necessidades e evitar contaminações cruzadas.",
        ],
      },
    ],
    whatsappCta:
      "Ainda tem dúvidas sobre como adaptar seu cardápio e usar a tecnologia a seu favor? Entre em contato com o nosso WhatsApp Waybit!",
  },
  {
    id: "blog-2",
    slug: "a-nova-era-dos-restaurantes-hibridos",
    title:
      "A nova era dos restaurantes híbridos: por que quem não se adaptar agora vai ficar para trás",
    category: "Gestão & Inovação",
    categoryColor: {
      bg: "bg-amber-500/10",
      text: "text-amber-500",
      border: "border-amber-500/20",
    },
    readTime: "6 min de leitura",
    date: "18 de Junho, 2024",
    author: "Equipe Waybit Inovação",
    authorRole: "Consultores de Negócios e Tecnologia",
    image: blogImg2,
    imageAlt: "A nova era dos restaurantes híbridos",
    summary:
      "O setor de alimentação passou por mudanças históricas. Descubra o modelo de restaurante híbrido que conecta salão, delivery, autoatendimento e pagamentos digitais em tempo real.",
    sections: [
      {
        paragraphs: [
          "O setor de alimentação nunca passou por tantas mudanças em tão tempo recorde. O que antes era simples — abrir as portas, atender bem e servir comida de qualidade — hoje exige uma operação muito mais moderna, ágil e multifuncional. E no centro dessa transformação está um modelo que vem dominando o mercado: O restaurante híbrido.",
        ],
      },
      {
        subhead: "O que é, afinal, um restaurante híbrido?",
        paragraphs: [
          "É todo restaurante que opera em múltiplos canais ao mesmo tempo, com processos integrados, garantindo que a experiência do cliente seja consistente em qualquer ponto de contato.",
          "Na prática, um negócio híbrido oferece atendimento ágil no salão, delivery próprio estruturado, integração com apps de terceiros (como iFood), retirada no balcão (take away), totens de autoatendimento, QR Code dinâmico na mesa e opções flexíveis de pagamentos digitais (como Pix e carteiras digitais).",
        ],
      },
      {
        subhead: "Por que quem não se tornar híbrido está ficando para trás?",
        numberedList: [
          {
            number: 1,
            title: "O consumidor exige velocidade e autonomia",
            description:
              "Soluções de autoatendimento aumentam o tíquete médio em até 20%, eliminam filas e reduzem drasticamente erros no registro de pedidos.",
          },
          {
            number: 2,
            title: "O delivery continua forte, mas com margem apertada",
            description:
              "Quem depende exclusivamente de marketplaces terceirizados vê suas margens corroídas por altas taxas. Um mix inteligente de canais equilibra os custos operacionais.",
          },
          {
            number: 3,
            title: "Custos operacionais subiram; eficiência virou obrigação",
            description:
              "Comandas em papel, retrabalho na cozinha e pedidos extraviados custam caro. O fluxo precisa ser 100% digital do garçom ao KDS da produção.",
          },
          {
            number: 4,
            title: "A concorrência se profissionalizou",
            description:
              "Os operadores mais competitivos utilizam dados analíticos para controlar custos de insumos, ficha técnica e reposição de estoque em tempo real.",
          },
        ],
      },
      {
        subhead: "Como o Dominus ajuda na transformação híbrida:",
        paragraphs: [
          "O Dominus centraliza salão, delivery, apps de entrega, self-ordering, controle de estoque, produção na cozinha e pagamentos em um único sistema, permitindo que você opere com a eficiência de grandes redes, mantendo o controle total da operação na ponta dos dedos.",
        ],
      },
    ],
    whatsappCta:
      "Quer transformar seu restaurante em uma operação híbrida e lucrativa? Fale agora mesmo com um especialista Dominus pelo WhatsApp!",
  },
  {
    id: "blog-3",
    slug: "guarda-de-xmls-das-notas-fiscais",
    title: "A Nova Regra de Guarda de XMLs das Notas Fiscais: O Que Você Precisa Saber",
    category: "Fiscal & Contábil",
    categoryColor: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-500",
      border: "border-emerald-500/20",
    },
    readTime: "5 min de leitura",
    date: "02 de Julho, 2024",
    author: "Setor Fiscal Waybit",
    authorRole: "Conformidade Tributária e SEFAZ",
    image: blogImg3,
    imageAlt: "A Nova Regra de Guarda de XMLs das Notas Fiscais",
    summary:
      "Nova diretriz da Confaz estabelece prazo obrigatório de 11 anos para retenção dos arquivos XML de NF-e e NFC-e. Saiba como manter sua empresa blindada contra autuações.",
    sections: [
      {
        paragraphs: [
          "Uma atualização importante que entrou em vigor diz respeito ao prazo de guarda dos XMLs das notas fiscais emitidas por empresas, afetando diretamente a NF-e (modelo 55) e a NFC-e (modelo 65) com base em diretrizes publicadas no site da Confaz.",
        ],
      },
      {
        subhead: "Novo Prazo de Guarda: 11 Anos",
        paragraphs: [
          "Agora, todos os formatos de notas fiscais eletrônicas devem ser mantidos pelos contribuintes por um prazo mínimo estendido de 11 anos. Esse período é exigido para assegurar plena conformidade contábil e documental em eventuais auditorias, cruzamentos da Receita e fiscalizações estaduais.",
        ],
        highlight: {
          title: "Atenção ao Formato Obrigatório:",
          text: "O que tem validade jurídica é o arquivo XML assinado digitalmente, e não a impressão em papel (DANFE). A falta do XML pode acarretar multas pesadas por documento fiscal extraviado.",
        },
      },
      {
        subhead: "Como Cumprir com a Obrigação com Segurança?",
        paragraphs: [
          "É fundamental armazenar os XMLs de forma automatizada e em nuvem segura, garantindo integridade e facilidade de busca ao longo de todo o prazo de 11 anos.",
          "A Waybit e o sistema Dominus oferecem soluções eficientes e integradas para garantir que sua empresa esteja em total conformidade fiscal, com armazenamento seguro, backup automático e exportação instantânea para sua contabilidade.",
        ],
      },
    ],
    whatsappCta:
      "Precisa de um sistema com emissão fiscal automatizada e armazenamento seguro de XMLs? Fale com nosso time de especialistas!",
  },
  {
    id: "blog-4",
    slug: "alteracoes-decreto-49086-nfc-e",
    title: "Alterações do Decreto Nº 49086: Impactos e Implicações na NFC-e",
    category: "Legislação & Normas",
    categoryColor: {
      bg: "bg-sky-500/10",
      text: "text-sky-500",
      border: "border-sky-500/20",
    },
    readTime: "5 min de leitura",
    date: "25 de Maio, 2024",
    author: "Setor Fiscal Waybit",
    authorRole: "Consultoria de Legislação Tributária",
    image: blogImg4,
    imageAlt: "Alterações do Decreto Nº 49086",
    summary:
      "No Rio de Janeiro, o Decreto nº 49.086 reduziu o teto de emissão de NFC-e sem identificação do consumidor de R$ 10.000 para R$ 2.000. Veja como evitar a Rejeição 751 no seu caixa.",
    sections: [
      {
        paragraphs: [
          "O recente decreto promulgado no estado do Rio de Janeiro (Decreto nº 49.086 de 09 de maio de 2024) trouxe uma alteração relevante no valor limite de emissão de NFC-e sem a identificação obrigatória do destinatário (CPF ou CNPJ).",
        ],
      },
      {
        subhead: "Novo Valor Limite: De R$ 10.000 para R$ 2.000",
        paragraphs: [
          "Anteriormente, o comércio varejista podia emitir notas fiscais ao consumidor sem identificação para compras de até R$ 10.000,00.",
          "Com o novo decreto, para todas as notas do modelo 65 (NFC-e) com valor igual ou superior a R$ 2.000,00, é mandatório informar os dados do destinatário (nome e CPF ou CNPJ).",
        ],
        highlight: {
          title: "Cuidado com a Rejeição 751:",
          text: "Tentativas de emitir notas a partir de R$ 2.000,00 sem os dados do cliente resultarão na 'Rejeição 751: Número/Série da NF-e informada não é válida para a UF' ou falha de autorização na SEFAZ, travando o fechamento do caixa.",
        },
      },
      {
        subhead: "Como o Dominus blinda o seu caixa:",
        paragraphs: [
          "Com o sistema Dominus, as regras fiscais do seu estado já são validadas automaticamente no momento da venda. Ao atingir o limite estipulado, o operador é alertado instantaneamente para coletar o CPF/CNPJ, garantindo emissão contínua sem filas nem transtornos com o fisco.",
        ],
      },
    ],
    whatsappCta:
      "Mantenha seu PDV 100% atualizado com as legislações do SEFAZ. Converse com a Waybit no WhatsApp!",
  },
  {
    id: "blog-5",
    slug: "5-erros-que-estao-fazendo-seu-delivery-vender-menos",
    title: "5 Erros que estão fazendo seu delivery vender menos",
    category: "Delivery & Gestão",
    categoryColor: {
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      border: "border-purple-500/20",
    },
    readTime: "5 min de leitura",
    date: "10 de Agosto, 2024",
    author: "Equipe Waybit Food",
    authorRole: "Consultoria Operacional de Delivery",
    image: blogImg5,
    imageAlt: "5 Erros que estão fazendo seu delivery vender menos",
    summary:
      "Vende bastante mas não vê o lucro no fim do mês? Conheça os 5 erros de precificação, controle de estoque e desorganização que drenam a rentabilidade do seu delivery.",
    sections: [
      {
        paragraphs: [
          "Muitos empreendedores vendem bem no delivery, mantêm o telefone tocando e a tela de pedidos cheia, mas o dinheiro simplesmente não sobra no fim do mês. Na maioria das vezes, o problema não é falta de clientes, e sim falhas estruturais de gestão e falta de integração tecnológica.",
        ],
      },
      {
        subhead: "Os 5 Principais Erros:",
        numberedList: [
          {
            number: 1,
            title: "Não calcular o custo real por pedido",
            description:
              "Ingredientes, embalagens personalizadas, taxas de marketplaces (como iFood) e custo por entrega precisam ser computados com exatidão na ficha técnica de cada item.",
          },
          {
            number: 2,
            title: "Falta de controle de estoque no delivery",
            description:
              "Itens esgotados que continuam disponíveis geram cancelamentos, reclamações, penalidades nos rankings dos apps e perda definitiva de clientes.",
          },
          {
            number: 3,
            title: "Desorganização no recebimento e preparo dos pedidos",
            description:
              "Comandas soltas no balcão e confusão na expedição aumentam o tempo de espera e provocam envio de itens trocados ou frios.",
          },
          {
            number: 4,
            title: "Não analisar relatórios de desempenho",
            description:
              "Gerenciar no escuro, sem saber quais pratos têm maior margem de lucro e quais horários têm maior demanda, impede tomadas de decisões acertadas.",
          },
          {
            number: 5,
            title: "Falta de integração com plataformas de delivery",
            description:
              "Digitar manualmente no PDV os pedidos que chegam pelo iFood causa lentidão, erros de digitação e sobrecarga desnecessária na equipe.",
          },
        ],
      },
      {
        subhead: "Centralize tudo com o Dominus:",
        paragraphs: [
          "Conecte seu delivery diretamente ao Dominus e gerencie pedidos, KDS de cozinha, impressão automática e controle de estoque em uma única tela, com integração nativa ao iFood e motoboys.",
        ],
      },
    ],
    whatsappCta:
      "Quer potencializar as vendas do seu delivery com processos organizados? Chame a Waybit no WhatsApp e agende uma demonstração!",
  },
  {
    id: "blog-6",
    slug: "5-integracoes-do-dominus-que-voce-precisa-conhecer",
    title: "5 INTEGRAÇÕES DO DOMINUS QUE VOCÊ PRECISA CONHECER!",
    category: "Tecnologia & Integrações",
    categoryColor: {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      border: "border-blue-500/20",
    },
    readTime: "6 min de leitura",
    date: "05 de Setembro, 2024",
    author: "Equipe de Produto Waybit",
    authorRole: "Integrações e Parcerias Tecnológicas",
    image: blogImg6,
    imageAlt: "5 INTEGRAÇÕES DO DOMINUS QUE VOCÊ PRECISA CONHECER",
    summary:
      "Descubra as integrações nativas do sistema Dominus com Pix Shipay, PicPay, TEF Linx, Boleto Asaas e iFood para transformar a velocidade do seu atendimento e caixa.",
    sections: [
      {
        paragraphs: [
          "O sistema Dominus foi projetado para ser o centro nervoso do seu comércio. Por isso, conta com parcerias e integrações estratégicas para facilitar a rotina da sua empresa, eliminar retrabalho manual e dar mais velocidade ao fechamento de vendas.",
        ],
      },
      {
        subhead: "As 5 Principais Integrações que Potencializam Seu Negócio:",
        numberedList: [
          {
            number: 1,
            title: "Pix Shipay",
            description:
              "Segurança máxima contra comprovantes falsos e golpes. O QR Code dinâmico do Pix é gerado na tela do PDV com valor exato e a confirmação de recebimento acontece em segundos sem depender de conferência manual.",
          },
          {
            number: 2,
            title: "PicPay",
            description:
              "Facilidade total para que seus clientes paguem utilizando saldo ou cashback diretamente pelo smartphone, com conciliação automática no seu fechamento de caixa diário.",
          },
          {
            number: 3,
            title: "TEF Linx",
            description:
              "Comunicação direta e criptografada entre o sistema Dominus e o PIN Pad nas maquininhas de cartão, eliminando erros de digitação de valores pelo operador e agilizando as filas.",
          },
          {
            number: 4,
            title: "Boleto Asaas",
            description:
              "Geração, emissão e gestão automatizada de boletos bancários com notificações de cobrança e baixa imediata de títulos pagos, simplificando o controle de crediário e vendas a prazo.",
          },
          {
            number: 5,
            title: "Delivery do iFood",
            description:
              "Integração completa para receber e despachar pedidos do iFood direto na tela de gestão do Dominus, integrando comandas à cozinha e abatendo ingredientes do estoque de forma instantânea.",
          },
        ],
      },
      {
        subhead: "Tudo conectado em uma única plataforma:",
        paragraphs: [
          "Com o Dominus, seu comércio tem o poder de grandes empresas com a simplicidade que sua equipe precisa para trabalhar com tranquilidade.",
        ],
      },
    ],
    whatsappCta:
      "Gostaria de ver essas integrações funcionando na prática no seu negócio? Fale agora com nossa equipe comercial!",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
