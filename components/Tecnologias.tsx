'use client'

import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.1 }
const ease = [0.22, 1, 0.36, 1] as const

const stacks = [
  {
    category: 'Frontend',
    color: '#818cf8',
    items: [
      { name: 'React 19', level: 97 },
      { name: 'Next.js 15', level: 95 },
      { name: 'TypeScript', level: 93 },
      { name: 'TailwindCSS v4', level: 94 },
      { name: 'Vite', level: 92 },
      { name: 'Framer Motion', level: 88 },
    ]
  },
  {
    category: 'Backend & APIs',
    color: '#34d399',
    items: [
      { name: 'Node.js', level: 94 },
      { name: 'Python', level: 88 },
      { name: 'Express.js', level: 93 },
      { name: 'Prisma ORM', level: 90 },
      { name: 'C# / .NET', level: 80 },
      { name: 'REST APIs', level: 96 },
    ]
  },
  {
    category: 'Banco de Dados',
    color: '#a78bfa',
    items: [
      { name: 'PostgreSQL', level: 95 },
      { name: 'Supabase', level: 96 },
      { name: 'Redis', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQL Avançado', level: 94 },
    ]
  },
  {
    category: 'Infraestrutura',
    color: '#f59e0b',
    items: [
      { name: 'Docker', level: 88 },
      { name: 'Railway', level: 92 },
      { name: 'Vercel', level: 95 },
      { name: 'Linux / Ubuntu', level: 90 },
      { name: 'AWS S3 / EC2', level: 82 },
      { name: 'Nginx', level: 84 },
    ]
  },
  {
    category: 'Inteligência Artificial',
    color: '#06b6d4',
    items: [
      { name: 'Claude (Anthropic)', level: 97 },
      { name: 'OpenAI GPT API', level: 96 },
      { name: 'Engenharia de Prompt', level: 97 },
      { name: 'Agentes de IA', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'IA Generativa', level: 88 },
    ]
  },
  {
    category: 'Gestão & Produto',
    color: '#f97316',
    items: [
      { name: 'Product Management', level: 95 },
      { name: 'Scrum & Agile', level: 93 },
      { name: 'PMBOK', level: 88 },
      { name: 'UX Research & Design', level: 88 },
      { name: 'SEO Técnico', level: 90 },
      { name: 'Analytics & Métricas', level: 87 },
    ]
  },
]

const allTech = [
  { name: 'React', color: '#61DAFB' }, { name: 'Next.js', color: '#f1f5f9' },
  { name: 'TypeScript', color: '#3178c6' }, { name: 'Node.js', color: '#68A063' },
  { name: 'Python', color: '#3B82F6' }, { name: 'PostgreSQL', color: '#336791' },
  { name: 'Supabase', color: '#3ECF8E' }, { name: 'Claude AI', color: '#CC785C' },
  { name: 'OpenAI', color: '#74AA9C' }, { name: 'Docker', color: '#2496ED' },
  { name: 'Vercel', color: '#f1f5f9' }, { name: 'TailwindCSS', color: '#38BDF8' },
  { name: 'Prisma', color: '#5A67D8' }, { name: 'Vite', color: '#646CFF' },
  { name: 'Railway', color: '#9B59B6' }, { name: 'Framer Motion', color: '#FF4D6D' },
  { name: 'C#', color: '#9B4F96' },
]

export default function Tecnologias() {
  return (
    <section id="tecnologias" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }} style={{ marginBottom: '4rem' }}>
          <span className="tag">Stack Tecnológica</span>
          <h2 style={{ marginTop: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1 }}>
            Domínio completo da{' '}
            <span className="gradient-text">stack moderna</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', maxWidth: '560px', lineHeight: 1.7 }}>
            De LLMs e Engenharia de Prompt a infraestrutura cloud — cobertura total das tecnologias que definem o mercado.
          </p>
        </motion.div>

        {/* Stack cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {stacks.map((stack, si) => (
            <motion.div
              key={stack.category}
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.45, delay: si * 0.08, ease }}
              className="glow-card"
              style={{ padding: '1.75rem', borderRadius: '1.125rem', background: 'var(--bg-card)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: stack.color }} />
                <h3 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-1)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {stack.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {stack.items.map(item => (
                  <div key={item.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-2)', fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontSize: '0.75rem', color: stack.color, fontWeight: 700 }}>{item.level}%</span>
                    </div>
                    <div style={{ height: '3px', borderRadius: '2px', background: 'var(--bg-surface)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease, delay: 0.3 + si * 0.05 }}
                        style={{ height: '100%', borderRadius: '2px', background: `linear-gradient(90deg, ${stack.color}60, ${stack.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logos / tags visual */}
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={vp}
          transition={{ duration: 0.6, ease }}
          style={{ padding: '2.5rem', borderRadius: '1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Principais Tecnologias
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {allTech.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04, ease }}
                style={{
                  padding: '0.5rem 1.125rem', borderRadius: '9999px',
                  fontSize: '0.875rem', fontWeight: 600, color: t.color,
                  background: `${t.color}12`, border: `1px solid ${t.color}30`,
                  cursor: 'default'
                }}
              >
                {t.name}
              </motion.span>
            ))}
          </div>

          {/* IA highlight box */}
          <div style={{
            marginTop: '2rem', padding: '1.5rem', borderRadius: '0.875rem',
            background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(129,140,248,0.08))',
            border: '1px solid rgba(6,182,212,0.2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🤖</span>
              <strong style={{ color: 'var(--text-1)', fontSize: '0.9375rem' }}>Expert em Engenharia de Prompt & IA Aplicada</strong>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              Alberto possui expertise avançada em Engenharia de Prompt com <strong style={{ color: '#CC785C' }}>Claude (Anthropic)</strong> e{' '}
              <strong style={{ color: '#74AA9C' }}>OpenAI GPT</strong> — incluindo criação de agentes de IA, integração de LLMs em produtos,
              fine-tuning, RAG, cadeia de pensamento (Chain-of-Thought) e automações inteligentes para uso em produção.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
