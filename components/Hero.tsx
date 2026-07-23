'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const stats = [
  { value: '20+', label: 'Anos em TI' },
  { value: '15+', label: 'Plataformas criadas' },
  { value: '100%', label: 'Dedicação técnica' },
  { value: 'CTO', label: 'Liderança executiva' },
]

const roles = ['Arquiteto de Software', 'CTO & Fundador', 'Engenheiro Full Stack', 'Especialista em IA', 'Product Owner', 'Líder Técnico']

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (!roleRef.current) return
      roleRef.current.style.opacity = '0'
      roleRef.current.style.transform = 'translateY(8px)'
      setTimeout(() => {
        if (!roleRef.current) return
        i = (i + 1) % roles.length
        roleRef.current.textContent = roles[i]
        roleRef.current.style.opacity = '1'
        roleRef.current.style.transform = 'translateY(0)'
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '7rem', paddingBottom: '4rem' }}>
      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '900px', background: 'radial-gradient(ellipse, rgba(129,140,248,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>

          {/* Left column */}
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05, ease }}>
              <span className="tag">Portfolio Executivo 2025</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              style={{ marginTop: '1.75rem', fontSize: 'clamp(2.75rem, 5.5vw, 5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.04, color: 'var(--text-1)' }}
            >
              Alberto<br />
              <span style={{ color: 'var(--text-2)', fontWeight: 300 }}>Ramiro</span><br />
              <span className="gradient-text">Neimerk</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              <span
                ref={roleRef}
                style={{
                  fontSize: '1.0625rem', fontWeight: 500, color: 'var(--primary)',
                  transition: 'all 0.3s ease', display: 'inline-block'
                }}
              >
                {roles[0]}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              style={{ marginTop: '1.5rem', color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: '520px' }}
            >
              Mais de <strong style={{ color: 'var(--text-1)' }}>20 anos</strong> criando soluções tecnológicas de ponta.
              Fundador da BrasUX, idealizador de plataformas SaaS em Educação, Saúde,
              Marketplace e IA. Especialista em Engenharia de Prompt, Claude e OpenAI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href="#projetos" className="btn-primary">Ver Projetos</a>
              <a href="#contato" className="btn-ghost">Entre em Contato</a>
              <a href="/curriculo" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.75rem 1.375rem', borderRadius: '0.625rem',
                fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none',
                color: 'var(--primary)', border: '1px solid var(--border-accent)',
                background: 'var(--primary-glow)', transition: 'all 0.3s ease'
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                </svg>
                Currículo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.375rem' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — terminal card */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <div className="glow-card" style={{ borderRadius: '1.25rem', background: 'var(--bg-card)', overflow: 'hidden' }}>
              {/* Terminal header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                <span style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-3)', fontFamily: 'monospace' }}>
                  alberto@brasux — architect
                </span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.8125rem', lineHeight: 1.9 }}>
                {[
                  { prompt: '$', cmd: 'whoami', color: 'var(--primary)' },
                  { out: 'Alberto Ramiro Neimerk' },
                  { prompt: '$', cmd: 'cat skills.json | head', color: 'var(--primary)' },
                  { out: '{ "role": "CTO & Software Architect",' },
                  { out: '  "exp": "20+ years in IT",' },
                  { out: '  "ai": ["Claude", "OpenAI", "ML"],' },
                  { out: '  "prompt": "Expert Engineer",' },
                  { out: '  "stack": ["Next.js","Node","Supabase"]' },
                  { out: '  "platforms": 15 }' },
                  { prompt: '$', cmd: 'ls projects/', color: 'var(--primary)' },
                  { out: 'NotaOn/  SimulENEM/  BrasUX/  ComprAI/' },
                  { out: 'RadioSimulENEM/  SimulaMedi/  CervejaBarata/' },
                  { prompt: '$', cmd: '_', color: 'var(--accent)', blink: true },
                ].map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                    {line.prompt && (
                      <span style={{ color: 'var(--accent)', userSelect: 'none' }}>{line.prompt}</span>
                    )}
                    {line.cmd && (
                      <span style={{ color: line.color }}>{line.cmd}</span>
                    )}
                    {line.out && (
                      <span style={{ color: 'var(--text-2)', paddingLeft: line.prompt ? 0 : '1.25rem' }}>{line.out}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)' }}>
                {[
                  { k: 'Uptime', v: '99.9%' },
                  { k: 'Projetos', v: '15+' },
                  { k: 'Anos TI', v: '20+' },
                ].map(({ k, v }) => (
                  <div key={k} style={{ padding: '1rem 1.25rem', borderRight: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.02em' }}>{v}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.25rem' }}>{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
