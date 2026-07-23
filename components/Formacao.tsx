'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical } from 'lucide-react'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.15 }
const ease = [0.22, 1, 0.36, 1] as const

const formacao = [
  { icon: FlaskConical, degree: 'Bacharel em Física', inst: 'Ciências Exatas', status: 'Concluído', color: '#818cf8' },
  { icon: FlaskConical, degree: 'Pós-Graduação em Análise de Dados', inst: 'Ciência de Dados & BI', status: 'Concluído', color: '#f59e0b' },
  { icon: GraduationCap, degree: 'Engenharia de Software', inst: 'Pós-Graduação em curso', status: 'Em andamento', color: '#06b6d4' },
]

const complementar = [
  'Arquitetura de Microsserviços', 'Cloud Computing — AWS & Railway', 'Docker & DevOps',
  'Machine Learning & IA', 'Engenharia de Prompt — Claude & OpenAI', 'Segurança em Aplicações Web',
  'UX/UI Design', 'Gestão de Projetos — PMBOK & Scrum', 'Análise de Requisitos',
  'Bancos de Dados Relacionais & NoSQL', 'APIs REST & GraphQL', 'SEO Técnico Avançado',
]

export default function Formacao() {
  return (
    <section id="formacao" style={{ padding: '7rem 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="tag">Formação Acadêmica</span>
          <h2 style={{ marginTop: '1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1 }}>
            Base científica que sustenta{' '}
            <span className="gradient-text">a excelência técnica</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', maxWidth: '560px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Formação multidisciplinar em Ciências Exatas aliada à prática de mais de 20 anos em TI.
          </p>
        </motion.div>

        {/* Degree cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {formacao.map((f, i) => (
            <motion.div
              key={f.degree}
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className="glow-card"
              style={{ padding: '2rem 1.75rem', borderRadius: '1rem', background: 'var(--bg-card)', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${f.color}, transparent)`
              }} />
              <div style={{
                width: '44px', height: '44px', borderRadius: '0.75rem',
                background: `${f.color}18`, border: `1px solid ${f.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <f.icon size={20} color={f.color} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-1)', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                {f.degree}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-3)', marginBottom: '1rem' }}>{f.inst}</div>
              <span style={{
                display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '9999px',
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
                background: f.status === 'Concluído' ? 'rgba(52,211,153,0.1)' : 'rgba(245,158,11,0.1)',
                color: f.status === 'Concluído' ? '#34d399' : '#f59e0b',
                border: `1px solid ${f.status === 'Concluído' ? 'rgba(52,211,153,0.25)' : 'rgba(245,158,11,0.25)'}`,
              }}>
                {f.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Complementary training */}
        <motion.div
          variants={fade} initial="hidden" whileInView="show" viewport={vp}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          style={{ padding: '2.5rem', borderRadius: '1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-1)', marginBottom: '0.375rem' }}>
              Formação Complementar
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-2)' }}>
              Especializações técnicas e certificações ao longo de 20+ anos de carreira
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {complementar.map(c => (
              <span key={c} style={{
                padding: '0.4375rem 1rem', borderRadius: '9999px',
                fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-2)',
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
              }}>
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
