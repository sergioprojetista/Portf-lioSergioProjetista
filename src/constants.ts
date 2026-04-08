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
// SUBSTITUIR: troque pelos depoimentos reais dos clientes.
// ──────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'SUBSTITUIR — Ex: "O dispositivo entregue reduziu nosso tempo de setup em mais de 80%. Resultado acima do esperado e dentro do prazo acordado."',
    name: 'SUBSTITUIR — Nome do Contato',
    role: 'SUBSTITUIR — Cargo (ex: Gerente de Manufatura)',
    company: 'Jacto Agrícola',
  },
  {
    quote: 'SUBSTITUIR — Ex: "Sergio entendeu o problema na primeira reunião e entregou uma solução que não precisamos alterar. Zero rejeição desde a implantação."',
    name: 'SUBSTITUIR — Nome do Contato',
    role: 'SUBSTITUIR — Cargo (ex: Engenheiro de Processos)',
    company: 'Jacto Agrícola',
  },
  {
    quote: 'SUBSTITUIR — Ex: "A qualidade técnica dos projetos e o suporte pós-entrega diferenciam o Sergio de qualquer outro fornecedor que já trabalhamos."',
    name: 'SUBSTITUIR — Nome do Contato',
    role: 'SUBSTITUIR — Cargo (ex: Diretor Industrial)',
    company: 'SUBSTITUIR — Empresa',
  },
];