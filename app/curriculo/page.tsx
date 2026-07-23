import type { Metadata } from 'next'
import PrintButton from '@/components/PrintButton'

export const metadata: Metadata = {
  title: 'Currículo — Alberto Ramiro Neimerk',
  description: 'Currículo profissional de Alberto Ramiro Neimerk — Arquiteto de Software, CTO, Fundador da BrasUX. 20+ anos em TI.',
  robots: 'noindex',
}

export default function Curriculo() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 1.2cm 1.4cm; size: A4; }
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page-break { break-before: page; }
        }
        body { background: #f4f4f6; }
      `}</style>

      <PrintButton />

      {/* CV Sheet */}
      <div style={{
        maxWidth: '860px', margin: '2rem auto', padding: '0 1rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif',
      }}>
        <div style={{
          background: 'white', borderRadius: '12px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}>

          {/* ── HEADER ── */}
          <div style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)',
            padding: '2.5rem 3rem 2rem', color: 'white'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0 }}>
                  Alberto Ramiro Neimerk
                </h1>
                <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#a5b4fc', fontWeight: 500, letterSpacing: '0.02em' }}>
                  Arquiteto de Software · CTO · Fundador · Especialista em IA
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {['Engenharia de Software', 'Prompt Engineering', 'Claude & OpenAI', 'Full Stack', 'SaaS', 'Product Owner'].map(t => (
                    <span key={t} style={{
                      padding: '0.2rem 0.625rem', borderRadius: '9999px',
                      fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em',
                      background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Contact block */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8125rem', color: '#c7d2fe' }}>
                {[
                  { icon: '📱', text: '(48) 98447-0474', href: 'https://wa.me/5548984470474' },
                  { icon: '✉️', text: 'albertoneimerk@gmail.com', href: 'mailto:albertoneimerk@gmail.com' },
                  { icon: '🔗', text: 'linkedin.com/in/alberto-neimerk', href: 'https://www.linkedin.com/in/alberto-neimerk/' },
                  { icon: '📍', text: 'Santa Catarina, Brasil', href: undefined },
                ].map(c => (
                  <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem' }}>{c.icon}</span>
                    {c.href
                      ? <a href={c.href} style={{ color: '#c7d2fe', textDecoration: 'none' }}>{c.text}</a>
                      : <span>{c.text}</span>
                    }
                  </div>
                ))}

                {/* Portfolio link — destaque */}
                <a href="https://albertoneimerk.vercel.app" style={{
                  marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.4rem 0.875rem', borderRadius: '0.5rem',
                  background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                  color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem',
                  transition: 'all 0.2s'
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  albertoneimerk.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* ── BODY ── */}
          <div style={{ padding: '2rem 3rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 220px', gap: '2.5rem' }}>

            {/* ── LEFT COLUMN ── */}
            <div>

              {/* PERFIL */}
              <Section title="Perfil Profissional">
                <p style={bodyText}>
                  Profissional multidisciplinar com <strong>mais de 20 anos de experiência em Tecnologia da Informação</strong>,
                  atuando desde infraestrutura e redes até arquitetura de sistemas distribuídos, inteligência artificial e criação de startups.
                  Bacharel em Física, Pós-Graduado em Análise de Dados e cursando Engenharia de Software.
                </p>
                <p style={{ ...bodyText, marginTop: '0.625rem' }}>
                  Fundador da <strong>BrasUX</strong>, startup de tecnologia com mais de 15 plataformas digitais lançadas nas áreas de
                  Educação, Marketplace, Saúde, Direito e Comércio. <strong>Especialista em Engenharia de Prompt com Claude (Anthropic) e OpenAI GPT</strong> —
                  criação de agentes de IA, automações inteligentes e integração de LLMs em produtos em produção.
                </p>
              </Section>

              {/* EXPERIÊNCIA */}
              <Section title="Experiência Profissional">

                <ExpItem
                  company="BrasUX — Startup de Tecnologia"
                  role="Fundador, CTO & Arquiteto de Software"
                  period="2020 – atual"
                  url="brasux.com.br"
                  items={[
                    'Fundação e liderança técnica de startup de Engenharia de Software, IA e SaaS',
                    'Arquitetura, desenvolvimento e deploy de 15+ plataformas digitais proprietárias',
                    'Especialização em Engenharia de Prompt com Claude e OpenAI — agentes, RAG e automações',
                    'Definição de stack tecnológico, DevOps, infraestrutura cloud e roadmap de produto',
                    'Liderança de equipes de desenvolvimento, coordenação de entregas e controle de qualidade',
                  ]}
                />

                <ExpItem
                  company="NotaOn — Curso Preparatório ENEM"
                  role="Fundador, CTO & Product Owner"
                  period="2022 – atual"
                  url="cursonotaon.com.br"
                  items={[
                    'Plataforma SaaS EAD completa: videoaulas, banco de questões, simulados e gamificação',
                    'Módulo de suporte com IA via Claude Anthropic integrado à experiência do aluno',
                    'Arquitetura: React + Vite + Supabase + PostgreSQL + Node.js',
                  ]}
                />

                <ExpItem
                  company="SimulENEM · SimulENECCEJA · SimulaMedi · SimulaOAB"
                  role="Fundador, CTO & Engenheiro Full Stack"
                  period="2022 – atual"
                  url="simulenem.com"
                  items={[
                    'Ecossistema de plataformas de simulados para ENEM, ENCCEJA, Medicina e OAB',
                    'Banco de questões, gabarito automático, ranking e análise de desempenho por competência',
                    'Rádio SimulENEM: plataforma de áudio educacional estilo Spotify (radio.simulenem.com)',
                  ]}
                />

                <ExpItem
                  company="ComprAÍ — Ecossistema de Marketplace"
                  role="Fundador, CTO & Arquiteto da Solução"
                  period="2021 – atual"
                  url="comprai.store"
                  items={[
                    'Ecossistema com 3 plataformas integradas: Shopping (consumidores), Loja (lojistas) e Entrega (entregadores)',
                    'Rastreamento em tempo real, checkout multi-pagamento e painel gerencial completo',
                  ]}
                />

                <ExpItem
                  company="BrasUX Caixa · BrasUX Image API"
                  role="Fundador & Arquiteto de Software"
                  period="2022 – atual"
                  url="caixa.brasux.com.br"
                  items={[
                    'PDV offline-first com NF-e, controle de estoque e integração com e-commerce',
                    'API de processamento automatizado de imagens e SKUs para e-commerce (Node.js + Sharp + AWS S3)',
                  ]}
                />

                <ExpItem
                  company="Infraestrutura, Redes & Suporte TI"
                  role="Técnico de TI → Analista de Sistemas"
                  period="2004 – 2020"
                  items={[
                    'Trajetória de 16 anos cobrindo hardware, redes, servidores Linux, desenvolvimento web e ciência de dados',
                    'Evolução contínua até arquitetura de software e liderança técnica de produtos digitais',
                  ]}
                />
              </Section>

              {/* FORMAÇÃO */}
              <Section title="Formação Acadêmica">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {[
                    { degree: 'Pós-Graduação em Engenharia de Software', inst: 'Em andamento', year: '2024–', highlight: true },
                    { degree: 'Pós-Graduação em Análise de Dados', inst: 'Ciência de Dados & Business Intelligence', year: 'Concluído' },
                    { degree: 'Bacharelado em Física', inst: 'Ciências Exatas', year: 'Concluído' },
                  ].map(f => (
                    <div key={f.degree} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#1e293b' }}>{f.degree}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.125rem' }}>{f.inst}</div>
                      </div>
                      <span style={{
                        flexShrink: 0, padding: '0.15rem 0.625rem', borderRadius: '9999px',
                        fontSize: '0.7rem', fontWeight: 600,
                        background: f.highlight ? '#ede9fe' : '#f1f5f9',
                        color: f.highlight ? '#7c3aed' : '#64748b',
                        border: f.highlight ? '1px solid #ddd6fe' : '1px solid #e2e8f0',
                      }}>{f.year}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div>

              {/* COMPETÊNCIAS TÉCNICAS */}
              <SideSection title="Competências Técnicas">
                <SkillGroup label="Engenharia & Arquitetura" skills={['Arquitetura de Software', 'Microsserviços', 'APIs REST', 'Design de Sistemas', 'DevOps & CI/CD', 'Engenharia de Requisitos']} />
                <SkillGroup label="Inteligência Artificial" skills={['Prompt Engineering', 'Claude (Anthropic)', 'OpenAI GPT', 'Agentes de IA', 'LLM / RAG', 'IA Generativa', 'Machine Learning']} />
                <SkillGroup label="Frontend" skills={['React 19', 'Next.js 15', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion']} />
                <SkillGroup label="Backend" skills={['Node.js', 'Python', 'Express.js', 'Prisma ORM', 'C# / .NET']} />
                <SkillGroup label="Banco de Dados" skills={['PostgreSQL', 'Supabase', 'Redis', 'SQL Avançado']} />
                <SkillGroup label="Infraestrutura" skills={['Docker', 'Vercel', 'Railway', 'AWS S3/EC2', 'Linux']} />
              </SideSection>

              {/* GESTÃO & PRODUTO */}
              <SideSection title="Gestão & Liderança">
                <SkillGroup label="" skills={['Product Owner', 'Scrum & PMBOK', 'Roadmap de Produto', 'Liderança Técnica (CTO)', 'Gestão de Equipes', 'UX Research', 'SEO Técnico']} />
              </SideSection>

              {/* PLATAFORMAS */}
              <SideSection title="Plataformas Criadas">
                {[
                  { name: 'NotaOn', url: 'cursonotaon.com.br' },
                  { name: 'SimulENEM', url: 'simulenem.com' },
                  { name: 'Rádio SimulENEM', url: 'radio.simulenem.com' },
                  { name: 'SimulaMedi', url: 'simulamedi.com' },
                  { name: 'SimulENECCEJA', url: 'simulencceja.com' },
                  { name: 'SimulaOAB', url: 'simulaioab.com' },
                  { name: 'ComprAÍ Shopping', url: 'comprai.store' },
                  { name: 'Loja ComprAÍ', url: 'loja.comprai.store' },
                  { name: 'BrasUX Caixa', url: 'caixa.brasux.com.br' },
                  { name: 'BrasUX Image API', url: '' },
                  { name: 'Entrega ComprAÍ', url: '' },
                ].map(p => (
                  <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.3rem', borderBottom: '1px solid #f1f5f9', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.775rem', color: '#334155', fontWeight: 500 }}>{p.name}</span>
                    {p.url && <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{p.url}</span>}
                  </div>
                ))}
              </SideSection>

              {/* IDIOMAS */}
              <SideSection title="Idiomas">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {[{ lang: 'Português', level: 'Nativo' }, { lang: 'Inglês', level: 'Técnico avançado' }].map(l => (
                    <div key={l.lang} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: '#334155', fontWeight: 500 }}>{l.lang}</span>
                      <span style={{ color: '#64748b' }}>{l.level}</span>
                    </div>
                  ))}
                </div>
              </SideSection>

            </div>
          </div>

          {/* ── FOOTER ── */}
          <div style={{ background: '#f8faff', borderTop: '1px solid #e2e8f0', padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="https://albertoneimerk.vercel.app" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              fontSize: '0.8125rem', fontWeight: 600, color: '#6366f1', textDecoration: 'none'
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              albertoneimerk.vercel.app — Portfólio Completo
            </a>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              BrasUX · Santa Catarina, Brasil · {new Date().getFullYear()}
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

/* ── Helpers ── */

const bodyText: React.CSSProperties = {
  fontSize: '0.875rem', color: '#475569', lineHeight: 1.75, margin: 0,
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
        <h2 style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6366f1', margin: 0, whiteSpace: 'nowrap' }}>
          {title}
        </h2>
        <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
      </div>
      {children}
    </div>
  )
}

function SideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ fontSize: '0.6375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6366f1', marginBottom: '0.75rem', paddingBottom: '0.375rem', borderBottom: '1px solid #e2e8f0' }}>
        {title}
      </h3>
      {children}
    </div>
  )
}

function SkillGroup({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div style={{ marginBottom: '0.75rem' }}>
      {label && <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.375rem' }}>{label}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
        {skills.map(s => (
          <span key={s} style={{
            padding: '0.15rem 0.5rem', borderRadius: '0.3rem',
            fontSize: '0.7rem', fontWeight: 500, color: '#475569',
            background: '#f1f5f9', border: '1px solid #e2e8f0',
          }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

function ExpItem({ company, role, period, url, items }: {
  company: string; role: string; period: string; url?: string; items: string[]
}) {
  return (
    <div style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid #f1f5f9' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1e293b' }}>{company}</div>
          <div style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 600, marginTop: '0.1rem' }}>{role}</div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>{period}</div>
          {url && <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.125rem' }}>{url}</div>}
        </div>
      </div>
      <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {items.map(item => (
          <li key={item} style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.65 }}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
