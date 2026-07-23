'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.15 }
const ease = [0.22, 1, 0.36, 1] as const

const contacts = [
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '(48) 98447-0474',
    href: 'https://wa.me/5548984470474',
    color: '#25d366',
    desc: 'Resposta rápida'
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'albertoneimerk@gmail.com',
    href: 'mailto:albertoneimerk@gmail.com',
    color: '#818cf8',
    desc: 'Resposta em 24h'
  },
  {
    icon: Mail,
    label: 'LinkedIn',
    value: '/in/alberto-neimerk',
    href: 'https://www.linkedin.com/in/alberto-neimerk/',
    color: '#0A66C2',
    desc: 'Conecte-se'
  },
]

export default function CTAFinal() {
  return (
    <section id="contato" style={{ padding: '7rem 0', background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '5rem', alignItems: 'center' }}>

          {/* Left — CTA text */}
          <div>
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }}>
              <span className="tag">Vamos Conversar</span>
            </motion.div>

            <motion.h2
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              style={{ marginTop: '1.5rem', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.08 }}
            >
              Pronto para o<br />
              <span className="gradient-text">próximo nível?</span>
            </motion.h2>

            <motion.p
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              style={{ marginTop: '1.5rem', color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: '480px' }}
            >
              Seja para desenvolvimento de uma nova plataforma, consultoria técnica, integração de IA,
              arquitetura de software ou liderança de projeto — estou disponível para conversar.
            </motion.p>

            <motion.div
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href="https://wa.me/5548984470474" target="_blank" rel="noreferrer" className="btn-primary">
                Iniciar Conversa
              </a>
              <a href="mailto:albertoneimerk@gmail.com" className="btn-ghost">
                Enviar E-mail
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
            >
              {[
                { v: '20+', l: 'Anos de experiência' },
                { v: '15+', l: 'Plataformas criadas' },
                { v: '24h', l: 'Resposta garantida' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>{s.v}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.25rem' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                variants={fade} initial="hidden" whileInView="show" viewport={vp}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1, ease }}
                className="glow-card"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  padding: '1.5rem', borderRadius: '1rem', background: 'var(--bg-card)',
                  textDecoration: 'none', transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '0.875rem', flexShrink: 0,
                  background: `${c.color}15`, border: `1px solid ${c.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <c.icon size={22} color={c.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-1)', marginBottom: '0.125rem' }}>
                    {c.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: c.color }}>{c.desc}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-3)', flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.45, delay: 0.5, ease }}
              style={{ padding: '1.5rem', borderRadius: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '0.9375rem' }}>Rio de Janeiro, Brasil</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-2)', marginTop: '0.125rem' }}>Atendimento nacional e internacional · Remote-first</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
