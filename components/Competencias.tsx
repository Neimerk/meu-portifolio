'use client'

import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.1 }
const ease = [0.22, 1, 0.36, 1] as const

const areas = [
  {
    title: 'Engenharia de Software',
    color: '#818cf8',
    skills: [
      { name: 'Arquitetura de Software', level: 98 },
      { name: 'Design de Sistemas', level: 96 },
      { name: 'Microsserviços & APIs REST', level: 95 },
      { name: 'Engenharia de Requisitos', level: 94 },
      { name: 'DevOps & CI/CD', level: 88 },
    ]
  },
  {
    title: 'Inteligência Artificial & Prompt',
    color: '#34d399',
    skills: [
      { name: 'Engenharia de Prompt (Claude & OpenAI)', level: 97 },
      { name: 'Agentes de IA & LLM', level: 93 },
      { name: 'IA Generativa & Fine-tuning', level: 88 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Ciência de Dados', level: 90 },
    ]
  },
  {
    title: 'Desenvolvimento Full Stack',
    color: '#a78bfa',
    skills: [
      { name: 'React & Next.js', level: 97 },
      { name: 'Node.js & Express', level: 94 },
      { name: 'TypeScript', level: 93 },
      { name: 'PostgreSQL & Supabase', level: 95 },
      { name: 'TailwindCSS & UX/UI', level: 92 },
    ]
  },
  {
    title: 'Gestão & Liderança',
    color: '#f59e0b',
    skills: [
      { name: 'Product Owner & Roadmap', level: 96 },
      { name: 'Gestão de Equipes', level: 94 },
      { name: 'Scrum & PMBOK', level: 90 },
      { name: 'Visão Estratégica de Negócio', level: 95 },
      { name: 'Liderança Técnica (CTO)', level: 98 },
    ]
  },
]

const diferenciais = [
  '20+ Anos em TI', 'Engenharia de Prompt', 'Claude & OpenAI', 'Machine Learning',
  'Criação de Produtos Digitais', 'SaaS', 'Cloud Computing', 'Escalabilidade',
  'Segurança', 'DevOps', 'UX/UI', 'SEO Técnico', 'Microsserviços', 'APIs REST',
  'Ciência de Dados', 'Empreendedorismo', 'Gestão de Projetos', 'Liderança Técnica',
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
        <span style={{ fontSize: '0.8375rem', color: 'var(--text-2)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color, fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{ height: '4px', borderRadius: '2px', background: 'var(--bg-surface)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ height: '100%', borderRadius: '2px', background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function Competencias() {
  return (
    <section id="competencias" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }} style={{ marginBottom: '4rem' }}>
          <span className="tag">Competências Técnicas</span>
          <h2 style={{ marginTop: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1, maxWidth: '600px' }}>
            Domínio técnico em{' '}
            <span className="gradient-text">todas as camadas</span>{' '}
            da tecnologia.
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Da análise de requisitos ao deploy em produção — cobertura total do ciclo de vida dos sistemas.
          </p>
        </motion.div>

        {/* Skill grids */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="glow-card"
              style={{ padding: '2rem', borderRadius: '1.125rem', background: 'var(--bg-card)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: area.color, boxShadow: `0 0 8px ${area.color}` }} />
                <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-1)' }}>{area.title}</h3>
              </div>
              {area.skills.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={area.color} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tags cloud */}
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={vp}
          transition={{ duration: 0.6, ease }}
          style={{ padding: '2.5rem', borderRadius: '1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', textAlign: 'center' }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
            Domínios de Atuação
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center' }}>
            {diferenciais.map(d => (
              <span key={d} style={{
                padding: '0.4375rem 1rem', borderRadius: '9999px',
                fontSize: '0.8125rem', fontWeight: 500, color: 'var(--primary)',
                background: 'var(--primary-glow)', border: '1px solid var(--border-accent)',
              }}>
                {d}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
