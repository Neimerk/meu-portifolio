'use client'

import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const vp = { once: true, amount: 0.15 }
const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { icon: '🏗️', label: '20+ Anos em TI', desc: 'De hardware e redes até IA, SaaS e arquitetura de sistemas distribuídos' },
  { icon: '🧠', label: 'Expert em IA & Prompt', desc: 'Engenharia de Prompt avançada com Claude (Anthropic) e OpenAI GPT — integração, agentes e fine-tuning' },
  { icon: '⚙️', label: 'Full-Cycle', desc: 'Concepção, arquitetura, desenvolvimento, testes, deploy e evolução contínua' },
  { icon: '👥', label: 'Liderança Técnica', desc: 'CTO, Product Owner e Diretor Técnico em todos os empreendimentos criados' },
  { icon: '🚀', label: 'Empreendedor Serial', desc: 'Fundador da BrasUX e de 15+ plataformas próprias em educação, saúde e marketplace' },
  { icon: '📐', label: 'Arquiteto de Software', desc: 'Responsável pela definição tecnológica, microsserviços, APIs REST e cloud computing' },
]

export default function About() {
  return (
    <section id="sobre" style={{ padding: '7rem 0', position: 'relative', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Left — text */}
          <div>
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.5, ease }}>
              <span className="tag">Sobre o Profissional</span>
            </motion.div>

            <motion.h2
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              style={{ marginTop: '1.5rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1 }}
            >
              Visão estratégica<br />
              <span className="gradient-text">e execução técnica</span><br />
              em cada projeto.
            </motion.h2>

            <motion.p
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              style={{ marginTop: '1.5rem', color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.8 }}
            >
              Alberto Ramiro Neimerk é um profissional multidisciplinar com formação sólida em Ciências Exatas
              — Bacharel em Física, Pós-Graduado em Análise de Dados e cursando Engenharia de Software.
            </motion.p>

            <motion.p
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.8 }}
            >
              Com mais de <strong style={{ color: 'var(--text-1)' }}>20 anos em TI</strong>, passou por todas as camadas da tecnologia:
              do hardware à infraestrutura de redes, do desenvolvimento full stack à <strong style={{ color: 'var(--text-1)' }}>Engenharia de Prompt
              avançada com Claude e OpenAI</strong>, criação de agentes de IA e arquitetura de sistemas escaláveis.
            </motion.p>

            <motion.p
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              style={{ marginTop: '1rem', color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.8 }}
            >
              Fundador da <strong style={{ color: 'var(--primary)' }}>BrasUX</strong>, startup de tecnologia, onde atua como CTO e Arquiteto de Software.
              Idealizador de mais de 15 plataformas digitais nas áreas de Educação, Saúde, Marketplace, Direito,
              Comércio e Inteligência Artificial.
            </motion.p>

            <motion.blockquote
              variants={fade} initial="hidden" whileInView="show" viewport={vp}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              style={{
                marginTop: '2rem', padding: '1.5rem 1.75rem',
                borderLeft: '3px solid var(--primary)', borderRadius: '0 0.75rem 0.75rem 0',
                background: 'var(--bg-card)',
              }}
            >
              <p style={{ color: 'var(--text-2)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.75 }}>
                "Não construo apenas sistemas — construo produtos que resolvem problemas reais,
                com visão técnica clara, arquitetura escalável e estratégia de crescimento orientada a dados."
              </p>
              <div style={{ marginTop: '0.875rem', fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 600 }}>
                — Alberto Ramiro Neimerk · CTO & Fundador, BrasUX
              </div>
            </motion.blockquote>
          </div>

          {/* Right — highlights grid */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  variants={fade} initial="hidden" whileInView="show" viewport={vp}
                  transition={{ duration: 0.45, delay: i * 0.08, ease }}
                  className="glow-card"
                  style={{ padding: '1.375rem 1.5rem', borderRadius: '0.875rem', background: 'var(--bg-card)', display: 'flex', gap: '1.125rem', alignItems: 'flex-start' }}
                >
                  <span style={{ fontSize: '1.375rem', lineHeight: 1, flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-1)', marginBottom: '0.3rem' }}>{h.label}</div>
                    <div style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
