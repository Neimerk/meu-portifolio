'use client'

import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.1 }
const ease = [0.22, 1, 0.36, 1] as const

const milestones = [
  {
    period: '2004–2008',
    phase: 'Infraestrutura & Redes',
    color: '#94a3b8',
    description: 'Início da carreira em TI com manutenção de hardware, suporte técnico, montagem e configuração de redes, instalação de sistemas operacionais e infraestrutura de servidores.',
    tags: ['Hardware', 'Redes', 'Suporte TI', 'Servidores', 'Linux'],
  },
  {
    period: '2008–2013',
    phase: 'Desenvolvimento de Sistemas',
    color: '#818cf8',
    description: 'Transição para o desenvolvimento de software. Criação dos primeiros sistemas web, análise de requisitos, desenvolvimento de bancos de dados relacionais e programação orientada a objetos.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'POO'],
  },
  {
    period: '2013–2017',
    phase: 'Ciência de Dados & Análise',
    color: '#a78bfa',
    description: 'Especialização em análise de dados, estatística aplicada, business intelligence e visualização de dados. Implementação de dashboards e relatórios gerenciais para empresas.',
    tags: ['Python', 'SQL', 'BI', 'Estatística', 'Data Viz', 'Excel Avançado'],
  },
  {
    period: '2017–2020',
    phase: 'Arquitetura & Full Stack Moderno',
    color: '#34d399',
    description: 'Adoção das stacks modernas de desenvolvimento. React, Node.js, APIs REST, microsserviços, cloud computing e DevOps. Arquitetura de sistemas para escala.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs', 'Microsserviços'],
  },
  {
    period: '2020–2023',
    phase: 'Fundação da BrasUX & Criação de Produtos',
    color: '#f59e0b',
    description: 'Fundação da BrasUX e criação do ecossistema de produtos digitais próprios. Lançamento das plataformas de educação (NotaOn, SimulENEM), marketplace (ComprAÍ, Cerveja Barata) e APIs.',
    tags: ['BrasUX', 'Next.js', 'Supabase', 'SaaS', 'Startup', 'Empreendedorismo'],
  },
  {
    period: '2023–2024',
    phase: 'Inteligência Artificial & Prompt Engineering',
    color: '#06b6d4',
    description: 'Especialização em Inteligência Artificial aplicada a produtos. Integração de Claude (Anthropic) e OpenAI GPT em plataformas reais, Engenharia de Prompt avançada, agentes de IA e automações inteligentes.',
    tags: ['Claude AI', 'OpenAI', 'Prompt Engineering', 'Agentes IA', 'LLM', 'IA Generativa'],
  },
  {
    period: '2024–atual',
    phase: 'Expansão & Inovação Contínua',
    color: '#ec4899',
    description: 'Expansão do ecossistema BrasUX com novas plataformas (SimulaMedi, Rádio SimulENEM, SimulOAB), consolidação da expertise em IA e consultoria para clientes corporativos. Pós-Graduação em Engenharia de Software.',
    tags: ['SimulaMedi', 'Rádio SimulENEM', 'IA Generativa', 'Consultoria', 'Engenharia de Software'],
  },
]

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="tag">Trajetória Profissional</span>
          <h2 style={{ marginTop: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1 }}>
            20 anos de evolução{' '}
            <span className="gradient-text">contínua em TI</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', maxWidth: '560px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Do hardware à IA — uma trajetória completa que cobre todas as camadas da tecnologia moderna.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, transparent, var(--border-accent) 10%, var(--border-accent) 90%, transparent)',
          }} className="hidden md:block" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                variants={fade} initial="hidden" whileInView="show" viewport={vp}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: `${m.color}15`, border: `2px solid ${m.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 20px ${m.color}20`,
                  }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: m.color }} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem', borderRadius: '9999px',
                      fontSize: '0.75rem', fontWeight: 700, color: m.color,
                      background: `${m.color}15`, border: `1px solid ${m.color}30`,
                      fontFamily: 'monospace'
                    }}>{m.period}</span>
                    <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                      {m.phase}
                    </h3>
                  </div>

                  <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                    {m.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {m.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '0.25rem 0.625rem', borderRadius: '0.375rem',
                        fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-3)',
                        background: 'var(--bg-card)', border: '1px solid var(--border)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary banner */}
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={vp}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{
            marginTop: '5rem', padding: '2.5rem', borderRadius: '1.25rem',
            background: 'linear-gradient(135deg, rgba(129,140,248,0.06) 0%, rgba(52,211,153,0.06) 100%)',
            border: '1px solid var(--border-accent)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2rem', textAlign: 'center'
          }}
        >
          {[
            { v: '20+', l: 'Anos de experiência' },
            { v: '5', l: 'Áreas de atuação' },
            { v: '15+', l: 'Plataformas criadas' },
            { v: '100%', l: 'Do zero ao ar' },
            { v: '2024', l: 'Especialista em IA' },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.v}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.375rem' }}>
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
