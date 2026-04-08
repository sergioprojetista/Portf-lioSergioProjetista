/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Settings,
  ChevronDown,
  CheckCircle2,
  Clock,
  Cpu,
  Target,
  ArrowRight,
  MessageSquare,
  Box,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Quote,
  Mail,
} from 'lucide-react';
import { PROJECTS, TESTIMONIALS, ProjectCase } from './constants';
import { cn } from './lib/utils';

// ─────────────────────────────────────────────────────────────────────────────
// LOGO DA JACTO AGRÍCOLA
// Coloque o arquivo em: src/assets/jacto-logo.png
// Quando o arquivo estiver lá, descomente a linha abaixo e comente a de baixo:
import jactoLogo from './assets/jacto-logo.png';
import logoSergio from './assets/logo-sergio.png';
import logoS from './assets/favicon.png';
// const jactoLogo: string | undefined = undefined; // ← remova esta linha ao adicionar o import
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────
// CONFIGURAÇÕES — edite aqui sem mexer no resto
// ─────────────────────────────────────────────
const CONFIG = {
  // SUBSTITUIR: seu número com DDI+DDD, sem espaços ou traços
  whatsappNumber: '5518999999999',
  whatsappMessage: 'Olá Sergio, gostaria de solicitar um orçamento para um projeto.',
  // SUBSTITUIR: seu email profissional
  email: 'sergio@seudominio.com.br',
  // SUBSTITUIR: seus links sociais reais (ou deixe '' para sumir do footer)
  linkedin: 'https://linkedin.com/in/SEUPERFIL',
  instagram: 'https://instagram.com/SEUPERFIL',
  // SUBSTITUIR: quando tiver o PDF, coloque em public/portfolio-sergio.pdf e mude para true
  pdfDisponivel: false,
  pdfPath: '/portfolio-sergio.pdf',
};

const whatsappHref = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;




// ─────────────────────────────────────────────────────────
// CaseCard — layout fixo: imagem esquerda | todos os textos direita
// Sem carrossel, sem atos. Tudo visível de uma vez.
// ─────────────────────────────────────────────────────────
interface CaseCardProps {
  project: ProjectCase;
  index: number;
}

const CaseCard: React.FC<CaseCardProps> = ({ project, index }) => {
  return (
    <motion.div
      id={`case-${project.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="flex flex-col lg:flex-row bg-[#080808] border-b border-white/[0.05]"
    >
      {/* ── FOTO ── */}
      <div className="relative w-full lg:w-[40%] shrink-0 bg-[#050505] overflow-hidden"
           style={{ minHeight: 'clamp(260px, 35vw, 480px)' }}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-contain p-6 md:p-8 lg:p-10"
        />
        {/* gradiente direita */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#080808] hidden lg:block" />
        {/* número watermark */}
        <div className="absolute bottom-0 left-2 pointer-events-none select-none overflow-hidden leading-none">
          <span className="font-display font-black text-white/[0.04]"
            style={{ fontSize: 'clamp(80px, 14vw, 200px)', lineHeight: 0.85 }}>
            {project.id}
          </span>
        </div>
        {/* badge cliente */}
        <div className="absolute top-5 left-5">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-white/20">
            {project.client}
          </span>
        </div>
      </div>

      {/* ── TEXTOS ── */}
      <div className="flex-1 flex flex-col justify-center gap-7
                      px-8 py-14 md:px-12 lg:px-16 xl:px-20 bg-[#0a0a0a]">

        {/* Cabeçalho */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-[2px] bg-brand-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-brand-accent">
              Case {project.id}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white">
            {project.title}
          </h2>
          <p className="text-sm text-white/35 uppercase tracking-widest font-semibold">
            {project.client} · {project.segment}
          </p>
        </div>

        <div className="w-full h-[1px] bg-white/[0.06]" />

        {/* Desafio */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Target size={12} className="text-red-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-red-400">O Desafio</span>
          </div>
          <p className="text-lg sm:text-xl font-bold leading-snug text-white">
            {project.challenge}
          </p>
        </div>

        {/* Solução */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Settings size={12} className="text-blue-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-blue-400">A Solução</span>
          </div>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            {project.solution}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[...project.technicalSpecs.software, ...project.technicalSpecs.standards].map(item => (
              <span key={item}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-400/15 bg-blue-400/5 rounded-lg text-[8px] uppercase tracking-widest text-blue-400/70 font-bold">
                <ShieldCheck size={9} /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* Resultados */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-brand-accent" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-brand-accent">Resultados</span>
          </div>
          <div className="space-y-2">
            {project.results.map((result, i) => (
              <div key={i} className="flex items-start gap-4 p-3.5 border border-white/[0.05] rounded-xl bg-white/[0.02] hover:border-brand-accent/20 transition-colors duration-300">
                <span className="text-brand-accent font-mono font-black text-xl leading-none flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specs rápidas + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div className="flex gap-4">
            <div className="p-3 border border-white/[0.06] rounded-xl bg-white/[0.02] text-center min-w-[80px]">
              <p className="text-[8px] uppercase tracking-widest text-white/25 font-bold mb-1">Tolerância</p>
              <p className="text-xs font-bold text-white font-mono leading-tight">{project.technicalSpecs.tolerances}</p>
            </div>
            <div className="p-3 border border-white/[0.06] rounded-xl bg-white/[0.02] text-center min-w-[80px]">
              <p className="text-[8px] uppercase tracking-widest text-white/25 font-bold mb-1">Peças</p>
              <p className="text-lg font-bold text-white">{project.technicalSpecs.partCount}</p>
            </div>
            <div className="p-3 border border-white/[0.06] rounded-xl bg-white/[0.02] text-center min-w-[80px]">
              <p className="text-[8px] uppercase tracking-widest text-white/25 font-bold mb-1">Prazo</p>
              <p className="text-xs font-bold text-white leading-tight">{project.executionTime}</p>
            </div>
          </div>

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-6 py-3 bg-brand-accent text-black rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-brand-accent/10 whitespace-nowrap"
          >
            <MessageSquare size={12} /> Quero um projeto assim
          </motion.a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 border border-white/[0.07] rounded-full text-[8px] uppercase tracking-widest text-white/30 font-bold">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// App principal
// ─────────────────────────────────────────────
export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const heroScale   = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu ao clicar em um link
  const fecharMenu = () => setMenuAberto(false);

  // Trava o scroll quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuAberto]);

  return (
    <div className="relative industrial-grid">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" aria-label="Voltar ao topo" className="flex items-center gap-3">
            <img src={logoS} alt="Sergio Engenharia" className="h-10 w-auto object-contain" />
            <span className="font-display font-bold text-lg tracking-tighter hidden sm:block">
              SERGIO<span className="text-brand-accent">ENG</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">
            <motion.a whileHover={{ scale: 1.05, color: 'var(--color-brand-accent)' }} href="#cases"    className="transition-colors">Portfólio</motion.a>
            <motion.a whileHover={{ scale: 1.05, color: 'var(--color-brand-accent)' }} href="#sergio"   className="transition-colors">O Projetista</motion.a>
            <motion.a whileHover={{ scale: 1.05, color: 'var(--color-brand-accent)' }} href="#contact"  className="transition-colors">Contato</motion.a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-accent text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-accent/10 inline-block"
            >
              Solicitar Orçamento
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden p-2 text-white"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {[
              { href: '#cases',   label: 'Portfólio' },
              { href: '#sergio',  label: 'O Projetista' },
              { href: '#contact', label: 'Contato' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={fecharMenu}
                className="text-3xl font-bold font-display tracking-tighter text-white hover:text-brand-accent transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={fecharMenu}
              className="mt-4 bg-brand-accent text-black px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ── */}
      <motion.header
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 space-y-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            <ShieldCheck size={14} /> Engenharia Industrial de Alta Performance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter"
          >
            PROJETOS QUE <br />
            <span className="text-brand-accent">CONVERTEM EM ROI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-medium"
          >
            Especialista em dispositivos de usinagem e apoio ao desenvolvimento de peças para o setor agrícola e industrial.
            27 anos de experiência transformando desafios técnicos em eficiência produtiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#cases"
              whileHover={{ scale: 1.05, backgroundColor: 'var(--color-brand-accent)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-all"
            >
              Ver Cases de Sucesso <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="text-[10px] text-brand-muted uppercase tracking-widest font-bold">
              Role para explorar o portfólio
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-muted"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.header>

      {/* ── Stats / Números de impacto ── */}
      <section className="py-20 px-6 md:px-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '27+',  label: 'Anos de Experiência' },
            { value: '50+',  label: 'Dispositivos Entregues' },
            { value: '27',   label: 'Anos na Jacto Agrícola' },
            { value: '100%', label: 'Conformidade NR-12' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <p className="text-4xl md:text-5xl font-bold font-display text-brand-accent tracking-tighter">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Intro Storytelling ── */}
      <section className="py-32 px-6 md:px-20 bg-white text-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-none tracking-tighter">
              POR QUE O <br />
              <span className="text-brand-accent">DESIGN TÉCNICO</span> <br />
              É O SEU MAIOR ATIVO?
            </h2>
            <div className="w-20 h-2 bg-brand-accent"></div>
          </div>
          <div className="space-y-6 text-xl leading-relaxed font-medium text-gray-700">
            <p>
              No B2B industrial, a confiança não é construída com promessas, mas com <span className="text-black font-bold">evidências técnicas reais.</span>
            </p>
            <p>
              Cada dispositivo projetado é uma resposta direta a um gargalo produtivo.
              Não entregamos apenas projetos 3D; entregamos redução de setup,
              zero rejeição e retorno sobre investimento acelerado.
            </p>
            <p className="text-brand-accent font-bold">
              Explore abaixo os dispositivos desenvolvidos em 27 anos de atuação na Jacto Agrícola — cada projeto com desafio real, solução técnica precisa e impacto comprovado no ROI.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sobre o Sergio ── */}
      <section id="sergio" className="py-32 px-6 md:px-20 bg-[#0f0f0f] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group">
              {/*
               * SUBSTITUIR: troque o src pela foto real do Sergio.
               * Coloque a imagem em src/assets/sergio-foto.jpg e importe no topo:
               * import sergioFoto from './assets/sergio-foto.jpg';
               * Depois use src={sergioFoto} aqui.
               */}
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <p className="text-brand-muted text-sm uppercase tracking-widest text-center px-8">
                  [ SUBSTITUIR: foto do Sergio ]
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-accent font-mono text-sm uppercase tracking-widest mb-1">Especialista em Projetos</p>
                <h3 className="text-4xl font-bold font-display">SERGIO</h3>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent opacity-30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent opacity-30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
                RESUMO <br />
                <span className="text-brand-accent">PROFISSIONAL.</span>
              </h2>
              <p className="text-xl text-gray-300 font-medium leading-relaxed">
                Especialista em Projetos com <span className="text-brand-accent">27 anos de experiência</span> no setor industrial — sendo 15 anos dedicados ao desenvolvimento de dispositivos e otimização de processos de fabricação na Jacto Agrícola.
              </p>
            </div>

            <div className="space-y-6 text-brand-muted">
              <p>
                Expertise comprovada em redução de custos operacionais e ganhos de produtividade. Atuação por <span className="text-white font-bold">27 anos na Jacto Agrícola</span>, com foco em projetos de máquinas de alta complexidade e apoio direto à engenharia — sugerindo melhorias de usinabilidade, avaliando ferramentas especiais e garantindo que cada peça seja projetada para fixação eficiente desde o início.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center gap-1">
                  <span className="text-white font-bold text-2xl font-display tracking-tighter">27 ANOS</span>
                  <p className="text-[10px] uppercase tracking-widest">Experiência Industrial</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  {jactoLogo ? (
                    <img
                      src={jactoLogo}
                      alt="Jacto Agrícola"
                      className="h-20 w-full object-contain brightness-0 invert opacity-90"
                    />
                  ) : (
                    <span className="text-white font-bold text-2xl font-display tracking-tighter">JACTO AGRÍCOLA</span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <ShieldCheck className="text-brand-accent" size={24} />
              <p className="text-sm italic text-gray-400">
                Foco em usinabilidade, redução de setup e apoio ao desenvolvimento de peças usinadas.
              </p>
            </div>

            {/* LinkedIn do Sergio */}
            {CONFIG.linkedin && (
              <a
                href={CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[10px] uppercase tracking-widest font-bold text-white hover:border-brand-accent hover:text-brand-accent transition-all"
              >
                Ver perfil no LinkedIn <ArrowRight size={14} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Serviços / Expertise ── */}
      <section id="expertise" className="py-32 px-6 md:px-20 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                SERVIÇOS & <br />
                <span className="text-brand-accent">EXPERTISE.</span>
              </h2>
              <p className="text-brand-muted font-bold uppercase tracking-widest text-xs">Soluções estratégicas para ganho de eficiência</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Desenvolvimento de Dispositivos',
                desc: 'Projetos personalizados de dispositivos de usinagem, montagem, prensagem e estanqueidade, focados em precisão e durabilidade.',
                icon: <Settings size={32} />,
              },
              {
                title: 'Consultoria em Otimização',
                desc: 'Estudo detalhado de processos atuais para redução de custos e tempo de ciclo, utilizando técnicas avançadas de seleção e consolidação de ferramentas.',
                icon: <Zap size={32} />,
              },
              {
                title: 'Apoio ao Desenvolvimento de Peças',
                desc: 'Análise da peça ainda na fase de projeto para sugerir melhorias de usinabilidade: redução de áreas de corte, uso de alto-relevo, avaliação de ferramentas especiais e garantia de fixação adequada no dispositivo.',
                icon: <Cpu size={32} />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, borderColor: 'var(--color-brand-accent)', boxShadow: '0 10px 30px -15px rgba(251, 191, 36, 0.3)' }}
                className="bg-gray-50 p-10 rounded-3xl space-y-6 border border-gray-100 transition-all group cursor-default"
              >
                <div className="text-brand-accent group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Competências detalhadas */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                num: '01', title: 'Dispositivos Industriais',
                items: ['Usinagem de alta precisão', 'Montagem e prensagem', 'Sistemas de estanqueidade', 'Máquinas especiais'],
              },
              {
                num: '02', title: 'Otimização de Processos',
                items: ['Redução de Ciclo de Setup', 'Consolidação de Ferramental', 'Gestão de Ferramentas Especiais', 'Estudos de Produtividade'],
              },
              {
                num: '03', title: 'Apoio à Engenharia',
                items: ['Sugestões de usinabilidade na fase de projeto', 'Avaliação de ferramentas especiais', 'Análise de fixação antes da peça ser finalizada', 'Redução de área de corte e tempo de usinagem'],
              },
            ].map((col) => (
              <div key={col.num} className="space-y-6">
                <h4 className="text-brand-accent font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-accent rounded-full" /> {col.num}. {col.title}
                </h4>
                <ul className="space-y-3 text-sm font-medium text-gray-700">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-brand-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#0a0a0a] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Diferencial Estratégico</h4>
                <p className="text-brand-muted text-sm">Consolidação de processos (ex: de 4 para 2 ferramentas).</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white font-bold text-sm italic">
                * Especialista em todas as frentes de engenharia mecânica, <span className="text-brand-accent underline underline-offset-4 decoration-2">exceto processos de soldagem.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <div id="cases" className="bg-[#0a0a0a]">
        {/* Header da seção de cases */}
        <div className="py-28 md:py-36 px-6 md:px-20 border-b border-white/[0.04] text-center relative overflow-hidden">
          {/* Grade de fundo sutil */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent font-mono">
              <div className="w-8 h-[1px] bg-brand-accent" />
              Portfólio de Engenharia
              <div className="w-8 h-[1px] bg-brand-accent" />
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              CASES DE <span className="text-brand-accent">SUCESSO.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Cada case é um problema industrial real — com desafio técnico, solução de engenharia precisa e impacto direto no ROI do cliente.
            </p>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-accent font-display tracking-tighter">4</p>
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mt-1">Cases documentados</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-accent font-display tracking-tighter">27</p>
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mt-1">Anos de experiência</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-accent font-display tracking-tighter">100%</p>
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mt-1">Conformidade NR-12</p>
              </div>
            </div>
          </div>
        </div>
        {PROJECTS.map((project, index) => (
          <CaseCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* ── Depoimentos ── */}
      <section className="py-32 px-6 md:px-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
              O QUE DIZEM <br />
              <span className="text-brand-accent">OS CLIENTES.</span>
            </h2>
            <p className="text-brand-muted font-bold uppercase tracking-widest text-xs">
              Resultados comprovados por quem confia no trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 hover:border-brand-accent/30 transition-all"
              >
                <Quote className="text-brand-accent" size={32} />
                <p className="text-gray-300 leading-relaxed italic">"{t.quote}"</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-white">{t.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {jactoLogo && t.company === 'Jacto Agrícola' ? (
                      <img
                        src={jactoLogo}
                        alt="Jacto Agrícola"
                        className="h-6 object-contain brightness-0 invert opacity-50"
                      />
                    ) : (
                      <p className="text-[10px] uppercase tracking-widest text-brand-muted">{t.role} · {t.company}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processo / Caminho ── */}
      <section className="py-32 px-6 md:px-20 bg-white text-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                  O CAMINHO PARA A <br />
                  <span className="text-brand-secondary">EFICIÊNCIA REAL.</span>
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Um processo estruturado para garantir que cada centavo investido retorne em produtividade.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { step: '01', title: 'Diagnóstico Técnico',   desc: 'Análise profunda do seu gargalo produtivo e levantamento de requisitos técnicos.' },
                  { step: '02', title: 'Projeto 3D & Simulação', desc: 'Desenvolvimento em programas de precisão 3D com simulações de movimento e interferência.' },
                  { step: '03', title: 'Fabricação & Ajuste',   desc: 'Acompanhamento rigoroso da fabricação para garantir tolerâncias e precisão.' },
                  { step: '04', title: 'Entrega & Homologação', desc: 'Instalação e testes em campo para garantir que o ROI planejado seja atingido.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <span className="text-4xl font-bold font-display text-brand-accent/30 group-hover:text-brand-accent transition-colors duration-500">{item.step}</span>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] text-white p-12 rounded-[40px] relative z-10 space-y-8 shadow-2xl"
              >
                <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-1">
                  <img src={logoS} alt="S" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter">GARANTIA DE <br />PERFORMANCE.</h3>
                <p className="text-brand-muted leading-relaxed">
                  Não entregamos apenas um projeto, entregamos um compromisso com o seu resultado. Se o dispositivo não atingir a performance técnica acordada, trabalhamos até que a meta seja batida.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    'Projetos em conformidade NR-12',
                    'Suporte técnico especializado',
                    'Foco total em ROI Industrial',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center text-black">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contato ── */}
      <section id="contact" className="py-32 px-6 md:px-20 bg-brand-accent text-black text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            PRONTO PARA <br />
            INICIAR SEU <br />
            PROJETO?
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Transforme seus desafios técnicos em eficiência produtiva com soluções de engenharia de alta precisão.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-12 py-6 rounded-full font-bold uppercase text-sm tracking-widest transition-transform flex items-center gap-3"
            >
              <MessageSquare size={20} /> Falar no WhatsApp
            </motion.a>

            {CONFIG.pdfDisponivel ? (
              <motion.a
                href={CONFIG.pdfPath}
                download
                whileHover={{ scale: 1.05, backgroundColor: '#000000', color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-black text-black px-12 py-6 rounded-full font-bold uppercase text-sm tracking-widest transition-all"
              >
                Baixar Portfólio PDF
              </motion.a>
            ) : (
              <motion.a
                href={`mailto:${CONFIG.email}?subject=Solicita%C3%A7%C3%A3o%20de%20Or%C3%A7amento`}
                whileHover={{ scale: 1.05, backgroundColor: '#000000', color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-black text-black px-12 py-6 rounded-full font-bold uppercase text-sm tracking-widest transition-all flex items-center gap-3"
              >
                <Mail size={20} /> Enviar por Email
              </motion.a>
            )}
          </div>
          <div className="pt-12 border-t border-black/10 flex flex-wrap justify-center gap-12 opacity-60">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <ShieldCheck size={16} /> Projetos NR-12
            </div>
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <Settings size={16} /> Suporte Técnico
            </div>
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <Clock size={16} /> Entrega Ágil
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 md:px-20 bg-[#0a0a0a] border-t border-white/5 text-brand-muted text-[10px] uppercase tracking-[0.3em] font-bold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>© 2026 SERGIO — ENGENHARIA INDUSTRIAL DE PRECISÃO</div>

          <div className="flex gap-8">
            {CONFIG.linkedin && (
              <motion.a whileHover={{ scale: 1.1, color: 'white' }} href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors">
                LinkedIn
              </motion.a>
            )}
            {CONFIG.instagram && (
              <motion.a whileHover={{ scale: 1.1, color: 'white' }} href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors">
                Instagram
              </motion.a>
            )}
            {CONFIG.email && (
              <motion.a whileHover={{ scale: 1.1, color: 'white' }} href={`mailto:${CONFIG.email}`} className="transition-colors">
                {CONFIG.email}
              </motion.a>
            )}
          </div>

          <div>ENGENHARIA QUE IMPULSIONA RESULTADOS</div>
        </div>
      </footer>
    </div>
  );
}