'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.1 }
const ease = [0.22, 1, 0.36, 1] as const

type Project = {
  id: string
  name: string
  category: string
  tagline: string
  description: string
  problem: string
  role: string[]
  stack: string[]
  highlights: string[]
  color: string
  badge: string
  url?: string
}

const projects: Project[] = [
  {
    id: 'brasux',
    name: 'BrasUX',
    category: 'Startup de Tecnologia',
    tagline: 'Engenharia de Software, IA & Transformação Digital',
    description: 'BrasUX é uma startup de tecnologia fundada por Alberto Ramiro Neimerk, especializada em Engenharia de Software, Desenvolvimento Full Stack, Inteligência Artificial, Ciência de Dados, Arquitetura de Software, Consultoria em Tecnologia, APIs e SaaS.',
    problem: 'Empresas brasileiras precisavam de parceiros tecnológicos com capacidade técnica de nível internacional, combinando visão estratégica de negócio com execução de alto padrão.',
    role: ['Fundador & CEO', 'CTO & Arquiteto de Software', 'Product Owner', 'Diretor Técnico', 'Engenheiro de Software Sênior', 'Especialista em IA & Prompt Engineering'],
    stack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Docker', 'Railway', 'Vercel', 'Claude API', 'OpenAI API'],
    highlights: ['Criação de mais de 15 plataformas digitais proprietárias', 'Especialização em Engenharia de Prompt com Claude e OpenAI', 'Atendimento a clientes em educação, saúde, direito e comércio', 'Infraestrutura cloud com uptime 99.9%'],
    color: '#818cf8',
    badge: 'Empresa',
    url: 'https://brasux.com.br',
  },
  {
    id: 'notaon',
    name: 'NotaOn — Curso Preparatório',
    category: 'EdTech · Educação',
    tagline: 'Plataforma SaaS de preparação para ENEM e Vestibulares',
    description: 'Plataforma educacional completa para preparação ao ENEM e vestibulares. Oferece videoaulas, apostilas, banco de questões, simulados, suporte com IA, módulo de dúvidas e sistema de gamificação para engajamento dos alunos.',
    problem: 'Estudantes de baixa renda não tinham acesso a cursos preparatórios de qualidade. A plataforma democratiza o acesso com mensalidades acessíveis e conteúdo de alto nível.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto da Plataforma', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por UX/UI', 'Coordenador de Desenvolvimento'],
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS', 'Claude API'],
    highlights: ['Módulo de suporte com IA via Claude Anthropic', 'Sistema de simulados adaptativos', 'Gestão completa de conteúdo e alunos', 'Modelo de assinatura SaaS com múltiplos planos'],
    color: '#34d399',
    badge: 'EdTech',
    url: 'https://cursonotaon.com.br',
  },
  {
    id: 'simulenem',
    name: 'SimulENEM',
    category: 'EdTech · Simulados',
    tagline: 'Plataforma de simulados para o ENEM',
    description: 'Sistema completo de simulados online para o ENEM com banco de questões, gabarito automático, análise de desempenho por área de conhecimento, ranking nacional e relatórios detalhados de progresso.',
    problem: 'Alunos precisavam de simulados que espelhassem a experiência real do ENEM, com análise inteligente de desempenho e feedback personalizado.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por QA', 'Coordenador de Conteúdo'],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    highlights: ['Banco com milhares de questões comentadas', 'Análise de desempenho por competência', 'Ranking em tempo real', 'Integração com NotaOn'],
    color: '#a78bfa',
    badge: 'EdTech',
    url: 'https://simulenem.com',
  },
  {
    id: 'radio',
    name: 'Rádio SimulENEM',
    category: 'EdTech · Media',
    tagline: 'Plataforma educacional estilo Spotify para ENEM',
    description: 'Plataforma de áudio educacional no estilo Spotify, onde alunos ouvem conteúdo para o ENEM — aulas, resumos e dicas — enquanto realizam outras atividades. Inclui player contínuo, playlists por matéria, modo offline e gamificação.',
    problem: 'Estudantes com agenda intensa não conseguiam conciliar estudo e rotina. A solução traz o aprendizado para o cotidiano através do áudio.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por UX/UI'],
    stack: ['React 19', 'Vite', 'TailwindCSS 4', 'Zustand', 'Framer Motion', 'Supabase', 'Web Audio API'],
    highlights: ['Interface Spotify-like com player contínuo', 'Playlists temáticas por matéria do ENEM', 'Modo offline e download de episódios', 'Experiência imersiva com animações premium'],
    color: '#f59e0b',
    badge: 'Media',
    url: 'https://radio.simulenem.com',
  },
  {
    id: 'simulamedi',
    name: 'SimulaMedi',
    category: 'EdTech · Medicina',
    tagline: 'Preparatório para vestibulares de Medicina',
    description: 'Plataforma especializada em preparação para vestibulares de medicina com foco nas provas de maior dificuldade do Brasil. Simulados, questões comentadas, análise por área e acompanhamento personalizado.',
    problem: 'Os vestibulares de medicina exigem preparação altamente específica e os cursinhos tradicionais são inacessíveis financeiramente para a maioria dos candidatos.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto', 'Product Owner', 'Engenheiro Full Stack'],
    stack: ['React', 'Supabase', 'PostgreSQL', 'Node.js', 'TypeScript'],
    highlights: ['Foco exclusivo em vestibulares de medicina', 'Banco de questões das principais instituições', 'Análise preditiva de probabilidade de aprovação', 'Mentor virtual com IA'],
    color: '#06b6d4',
    badge: 'EdTech',
    url: 'https://simulamedi.com',
  },
  {
    id: 'simulencceja',
    name: 'SimulENECCEJA',
    category: 'EdTech · ENCCEJA',
    tagline: 'Preparatório completo para o ENCCEJA',
    description: 'Plataforma de preparação para o ENCCEJA (Exame Nacional para Certificação de Competências de Jovens e Adultos), voltada para quem deseja obter o certificado de conclusão do Ensino Fundamental ou Médio.',
    problem: 'Adultos que não concluíram o ensino básico precisavam de um preparatório acessível, flexível e adaptado à sua realidade de vida e rotina, sem as limitações dos cursinhos presenciais.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por UX/UI'],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    highlights: ['Conteúdo adaptado ao perfil EJA', 'Simulados fiéis ao modelo ENCCEJA', 'Aulas organizadas por nível de conhecimento', 'Plataforma mobile-first para estudo em qualquer lugar'],
    color: '#10b981',
    badge: 'EdTech',
    url: 'https://simulencceja.com',
  },
  {
    id: 'simulaoab',
    name: 'SimulaOAB',
    category: 'EdTech · Direito',
    tagline: 'Preparatório para o Exame da OAB',
    description: 'Plataforma especializada em preparação para o Exame da Ordem dos Advogados do Brasil (OAB). Simulados por fase, banco de peças práticas, análise de desempenho por área do direito e conteúdo atualizado com a jurisprudência vigente.',
    problem: 'O Exame da OAB tem índice de reprovação alto e os preparatórios disponíveis são caros e pouco personalizados. A plataforma oferece preparação de alta qualidade com custo acessível.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por QA'],
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    highlights: ['Simulados por 1ª e 2ª fase da OAB', 'Banco de peças práticas comentadas', 'Análise de desempenho por área do direito', 'Conteúdo atualizado com legislação e jurisprudência'],
    color: '#8b5cf6',
    badge: 'EdTech',
    url: 'https://simulaioab.com',
  },
  {
    id: 'comprai',
    name: 'ComprAÍ Shopping',
    category: 'Marketplace',
    tagline: 'Marketplace multi-lojista para consumidores',
    description: 'Plataforma de marketplace para consumidores finais com catálogo de múltiplos lojistas, busca avançada de produtos, sistema de avaliações, checkout integrado e rastreamento de pedidos em tempo real.',
    problem: 'Consumidores precisavam de uma plataforma de marketplace regional com foco em lojistas locais, facilitando o comércio de proximidade com experiência digital de alto nível.',
    role: ['Fundador & Idealizador', 'CTO & Arquiteto da Solução', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por UX/UI', 'Coordenador de DevOps'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Express', 'TypeScript', 'Tailwind'],
    highlights: ['Catálogo multi-lojista com busca avançada', 'Checkout otimizado com múltiplas formas de pagamento', 'Rastreamento de pedidos em tempo real', 'Sistema de avaliações e reputação de lojistas'],
    color: '#f97316',
    badge: 'Marketplace',
    url: 'https://comprai.store',
  },
  {
    id: 'comprai-loja',
    name: 'Loja ComprAÍ',
    category: 'Marketplace · Gestão',
    tagline: 'Painel completo de gestão para lojistas',
    description: 'Painel administrativo exclusivo para lojistas do ecossistema ComprAÍ. Gestão de produtos, estoque, pedidos, relatórios de vendas, promoções e comunicação direta com compradores — tudo numa interface única e intuitiva.',
    problem: 'Lojistas precisavam de uma ferramenta de gestão integrada ao marketplace, eliminando a complexidade de administrar vendas digitais sem conhecimento técnico.',
    role: ['Fundador & Idealizador', 'Arquiteto de Software', 'Product Owner', 'Engenheiro Full Stack', 'Responsável por UX/UI'],
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind'],
    highlights: ['Gestão de produtos e estoque em tempo real', 'Dashboard de vendas e relatórios gerenciais', 'Sistema de promoções e cupons', 'Integração direta com ComprAÍ Shopping e Entrega ComprAÍ'],
    color: '#fb923c',
    badge: 'Marketplace',
    url: 'https://loja.comprai.store',
  },
  {
    id: 'comprai-entregas',
    name: 'Entrega ComprAÍ',
    category: 'Marketplace · Logística',
    tagline: 'App de gestão de entregas para entregadores',
    description: 'Aplicativo mobile-first para entregadores do ecossistema ComprAÍ. Recebimento de pedidos em tempo real, roteirização inteligente, confirmação de entrega com foto, histórico de corridas e gestão de ganhos.',
    problem: 'Entregadores parceiros precisavam de um aplicativo profissional, simples e confiável para gerenciar suas entregas com eficiência e segurança.',
    role: ['Fundador & Idealizador', 'Arquiteto da Solução', 'Product Owner', 'Engenheiro Full Stack', 'Responsável pela Integração de Sistemas'],
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Geolocation API'],
    highlights: ['Recebimento e aceite de pedidos em tempo real', 'Roteirização e mapas integrados', 'Confirmação de entrega com registro fotográfico', 'Histórico de ganhos e desempenho'],
    color: '#ea580c',
    badge: 'Marketplace',
  },
  {
    id: 'brasux-caixa',
    name: 'BrasUX Caixa',
    category: 'Varejo · PDV',
    tagline: 'Sistema de Ponto de Venda moderno e integrado',
    description: 'Sistema de PDV (Ponto de Venda) completo para varejo físico e digital. Controle de estoque em tempo real, emissão de NF-e, relatórios gerenciais, gestão de clientes e integração com sistemas de pagamento.',
    problem: 'Pequenos e médios varejistas precisavam de um sistema de PDV moderno, acessível e integrado com o e-commerce, eliminando a necessidade de múltiplos sistemas desconectados.',
    role: ['Fundador & Idealizador', 'Arquiteto de Software', 'Engenheiro Full Stack', 'Responsável por QA e Homologação'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Electron', 'Prisma'],
    highlights: ['PDV offline-first com sincronização automática', 'Integração com e-commerce ComprAÍ', 'Emissão de NF-e e relatórios fiscais', 'Dashboard gerencial em tempo real'],
    color: '#7c3aed',
    badge: 'SaaS',
    url: 'https://caixa.brasux.com.br',
  },
  {
    id: 'imageapi',
    name: 'BrasUX Image API',
    category: 'API · E-commerce',
    tagline: 'API de gerenciamento de imagens e SKU para e-commerce',
    description: 'API robusta para gerenciamento automatizado de imagens de produtos e SKUs para e-commerce. Redimensionamento inteligente, otimização automática, geração de múltiplos formatos e integração com qualquer plataforma de loja virtual.',
    problem: 'E-commerces gastavam horas em processamento manual de imagens de produtos. A API automatiza todo o fluxo, reduzindo o tempo de publicação de produtos em 90%.',
    role: ['Fundador & Arquiteto da API', 'Engenheiro de Software', 'Responsável pela Definição Tecnológica', 'DevOps'],
    stack: ['Node.js', 'Express', 'Sharp', 'AWS S3', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: ['Processamento automático de imagens em lote', 'Geração de múltiplos formatos e resoluções', 'API RESTful com autenticação por chave', 'Integração com as principais plataformas de e-commerce'],
    color: '#ec4899',
    badge: 'API',
  },
]

const categories = ['Todos', 'EdTech', 'Marketplace', 'SaaS', 'API', 'Empresa', 'Media']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={fade} initial="hidden" whileInView="show" viewport={vp}
      transition={{ duration: 0.5, delay: index * 0.05, ease }}
      className="glow-card"
      style={{ borderRadius: '1.125rem', background: 'var(--bg-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, ${project.color}40)` }} />

      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{
                padding: '0.2rem 0.625rem', borderRadius: '9999px', fontSize: '0.6875rem',
                fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
                background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30`,
              }}>{project.badge}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{project.category}</span>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {project.name}
            </h3>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              title={`Acessar ${project.name}`}
              style={{
                flexShrink: 0, width: '34px', height: '34px', borderRadius: '0.5rem',
                border: '1px solid var(--border)', background: 'var(--bg-surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-3)', transition: 'all 0.2s', textDecoration: 'none',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = project.color; el.style.color = project.color; el.style.background = `${project.color}12` }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-3)'; el.style.background = 'var(--bg-surface)' }}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <p style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 500, marginBottom: '0.75rem' }}>
          {project.tagline}
        </p>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
          {project.description}
        </p>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
          {project.stack.slice(0, 5).map(s => (
            <span key={s} style={{
              padding: '0.2rem 0.575rem', borderRadius: '0.375rem',
              fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-3)',
              background: 'var(--bg-surface)', border: '1px solid var(--border)',
            }}>{s}</span>
          ))}
          {project.stack.length > 5 && (
            <span style={{ padding: '0.2rem 0.575rem', fontSize: '0.7rem', color: 'var(--text-3)' }}>
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        {/* Footer row: URL + expand */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '0.8rem', color: project.color, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'monospace' }}
            >
              {project.url.replace('https://', '')}
            </a>
          ) : (
            <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>Plataforma interna</span>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)',
              background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0,
            }}
          >
            {expanded ? 'Menos' : 'Detalhes'}
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: '0.5rem' }}>
                    Problema Resolvido
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{project.problem}</p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: '0.625rem' }}>
                    Participação de Alberto
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {project.role.map(r => (
                      <span key={r} style={{
                        padding: '0.25rem 0.625rem', borderRadius: '9999px',
                        fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-2)',
                        background: 'var(--primary-glow)', border: '1px solid var(--border-accent)',
                      }}>{r}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: '0.625rem' }}>
                    Destaques
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {project.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
                        <span style={{ color: project.color, flexShrink: 0 }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projetos() {
  const [filter, setFilter] = useState('Todos')
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.badge === filter || p.category.includes(filter))

  return (
    <section id="projetos" style={{ padding: '7rem 0', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }} style={{ marginBottom: '3rem' }}>
          <span className="tag">Portfólio de Projetos</span>
          <h2 style={{ marginTop: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1 }}>
            {projects.length}+ plataformas criadas,{' '}
            <span className="gradient-text">arquitetadas e lideradas</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Cada produto foi concebido, arquitetado, desenvolvido e lançado sob a liderança direta de Alberto — do zero ao ar.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: '0.4375rem 1rem', borderRadius: '9999px',
                fontSize: '0.8125rem', fontWeight: 500, cursor: 'pointer',
                border: '1px solid',
                transition: 'all 0.2s',
                borderColor: filter === c ? 'var(--primary)' : 'var(--border)',
                background: filter === c ? 'var(--primary-glow)' : 'transparent',
                color: filter === c ? 'var(--primary)' : 'var(--text-2)',
              }}
            >{c}</button>
          ))}
        </div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
