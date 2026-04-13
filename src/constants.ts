// ──────────────────────────────────────────────────────────────
// PROJECTS
// Imagens: coloque os arquivos em src/assets/ com os nomes abaixo.
// ──────────────────────────────────────────────────────────────

import bombaView1 from './assets/bomba_view1.png';
import eixoView1 from './assets/eixo_view1.png';
import suporteRoda from './assets/suporte_roda_maquina_agricola.png';
import suporteSuspensao from './assets/suporte_suspensao_maquina.png';

export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  segment: string;
  challenge: string;
  solution: string;
  technicalSpecs: {
    software: string[];
    tolerances: string;
    standards: string[];
    partCount: number;
  };
  results: string[];
  executionTime: string;
  tags: string[];
  imageUrl: string;
}

export const PROJECTS: ProjectCase[] = [
  {
    id: '01',
    title: 'Dispositivo de Usinagem — Corpo de Bomba Hidráulica',
    client: 'Jacto Agrícola',
    segment: 'Jacto Agrícola | Líder Nacional em Máquinas Agrícolas',
    challenge: 'Componente hidráulico com 6 faces de fixação distintas e geometria complexa. Sem gabarito dedicado, a linha registrava 8% de rejeição e setup elevado por operador.',
    solution: 'Dispositivo completo com estrutura em portal, fixações mecânicas simultâneas, posicionadores cônicos e placa-base modular. Projetado com programas de precisão 3D com simulação de interferência e folgas de usinagem. 42 componentes integrados, todos em conformidade NR-12.',
    technicalSpecs: {
      software: ['Projetado em Software 3D de Precisão'],
      tolerances: '± 0.01mm em eixos críticos',
      standards: ['ABNT', 'NR-12'],
      partCount: 42,
    },
    results: [
      'Redução significativa de setup',
      'Peça sendo usinada somente na fase 10 — fase 20 anterior eliminada',
      'ROI completo em 3 ciclos produtivos',
    ],
    executionTime: '3 semanas',
    tags: ['Usinagem CNC', 'Fixação Mecânica', 'Estrutura Portal', 'Hidráulico', 'NR-12'],
    imageUrl: bombaView1,
  },
  {
    id: '02',
    title: 'Fixture para Eixo de Suspensão — Máquina Agrícola',
    client: 'Jacto Agrícola',
    segment: 'Jacto Agrícola | Líder Nacional em Máquinas Agrícolas',
    challenge: 'Eixo de grande porte com furos e roscas em múltiplos planos. A geometria original dificultava a fixação — foi necessário apoiar a engenharia na revisão do projeto da peça antes de desenvolver o dispositivo.',
    solution: 'Após análise da usinabilidade da peça e sugestão de ajustes no projeto original, foi desenvolvido dispositivo com apoios V-blocks, prismáticos e clamps laterais — garantindo estabilidade e repetibilidade em operações multi-eixo.',
    technicalSpecs: {
      software: ['Projetado em Software 3D de Precisão'],
      tolerances: '± 0.02mm posicional',
      standards: ['DIN', 'ISO'],
      partCount: 28,
    },
    results: [
      'Aumento de produtividade horária',
      'Eliminação de erros de posicionamento manual',
      'Repetibilidade de posicionamento da peça',
    ],
    executionTime: '2.5 semanas de desenvolvimento',
    tags: ['Usinagem', 'V-Block', 'Eixo', 'Multi-plano', 'Suspensão'],
    imageUrl: eixoView1,
  },
  {
    id: '03',
    title: 'Suporte de Roda — Dispositivo de Usinagem',
    client: 'Jacto Agrícola',
    segment: 'Jacto Agrícola | Líder Nacional em Máquinas Agrícolas',
    challenge: 'Geometria complexa sem áreas de fixação adequadas no projeto original. Foi necessário intervir na fase de desenvolvimento da peça para garantir superfícies de apoio antes de projetar o dispositivo.',
    solution: 'Com sugestões de alto-relevo e ajuste de tolerâncias aplicadas na peça, foi possível projetar dispositivo com múltiplos clamps e estrutura em L de alta rigidez — eliminando vibração em corte pesado.',
    technicalSpecs: {
      software: ['Projetado em Software 3D de Precisão'],
      tolerances: 'Altíssima rigidez estrutural',
      standards: ['ISO 9001'],
      partCount: 35,
    },
    results: [
      'Redução drástica de vibração em corte pesado',
      'Melhoria no acabamento superficial (Ra 1.6)',
      'Repetibilidade de posicionamento da peça',
    ],
    executionTime: '3 semanas de projeto e validação',
    tags: ['Usinagem CNC', 'Multi-clamp', 'Estrutura L', 'Precisão'],
    imageUrl: suporteRoda,
  },
  {
    id: '04',
    title: 'Suporte de Suspensão — Máquina Pulverizadora',
    client: 'Jacto Agrícola',
    segment: 'Jacto Agrícola | Máquinas de Pulverização',
    challenge: 'Componente com múltiplos subconjuntos exigindo sistema de fixação modular e controle sensorial.',
    solution: 'Conjunto de dispositivos com colunas telescópicas, sensores de controle e sistema de fixação modular. Alta complexidade técnica.',
    technicalSpecs: {
      software: ['Projetado em Software 3D de Precisão'],
      tolerances: '± 0.05mm em montagem modular',
      standards: ['NR-12', 'CE'],
      partCount: 64,
    },
    results: [
      'Sistema modular adaptável a variações da peça devido ao seu processo de fabricação',
      'Monitoramento em tempo real de fixação',
      'Repetibilidade de posicionamento da peça',
    ],
    executionTime: '4 semanas (projeto complexo)',
    tags: ['Usinagem', 'Modular', 'Sensor', 'Telescópico', 'Pulverizador'],
    imageUrl: suporteSuspensao,
  },
];

// ──────────────────────────────────────────────────────────────
// TESTIMONIALS
// ──────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Estamos recebendo do Sr. Sergio já há vários anos um serviço de projetos mecânicos e assessoria técnica de excelente qualidade, com compromisso, profissionalismo e responsabilidade no prazo de entrega e atendimento pós-venda. Estamos muito contentes com o empenho e o serviço prestado em todos esses anos de parceria. Excelente como pessoa também — recomendamos seus serviços a todos que procuram um bom profissional do ramo.',
    name: 'Mathias & Viana Mecânica Ltda',
    role: 'Parceiro de Longa Data',
    company: 'Usifer Marília',
  },
  {
    quote: 'Um parceiro estratégico que alia experiência, confiabilidade e qualidade nas entregas de projetos de dispositivos de usinagem, contribuindo de forma consistente desde a fase de estudos até a execução final.',
    name: 'Equipe Técnica',
    role: 'Parceria Estratégica',
    company: 'Unipc Jacto — SJS Projetos',
  },
  {
    quote: 'Sérgio desenvolveu competências relevantes no desenvolvimento de dispositivos e na otimização de processos, desempenhando um papel essencial para o sucesso dessa parceria. Sua sólida experiência, adquirida ao longo de sua atuação na Jacto, foi fundamental para o sucesso dos nossos produtos.',
    name: 'Ferramentas Ubra Ltda.',
    role: 'Fornecedor de Soluções em Fixação',
    company: 'Urba Ltda',
  },
  {
    quote: 'Seu grande conhecimento técnico, aliado ao compromisso e dedicação aos prazos e requisitos, são fatores diferenciais de seu trabalho. Os estudos para orçamento e o acompanhamento pós-venda também são importantes serviços que o Sérgio nos presta. Recomendamos fortemente seu trabalho — é um excelente profissional e pessoa.',
    name: 'Equipe MCV',
    role: 'Parceiro em Projetos Mecânicos',
    company: 'MCV',
  },
];