'use client'

const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Trajetória', href: '#timeline' },
  { label: 'Contato', href: '#contato' },
]

const expertise = [
  'Engenharia de Software', 'Arquitetura de Sistemas', 'Inteligência Artificial',
  'Engenharia de Prompt', 'Claude & OpenAI', 'Machine Learning', 'Full Stack Dev',
  'Product Owner', 'CTO', 'SaaS & Cloud', 'Ciência de Dados', 'DevOps',
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Main footer */}
        <div style={{ padding: '4rem 0 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #4f46e5, #818cf8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-1)', letterSpacing: '-0.02em' }}>
                  Alberto Ramiro Neimerk
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Software Architect & CTO
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-3)', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '340px', marginBottom: '1.5rem' }}>
              Mais de 20 anos transformando visões em tecnologia. Fundador da BrasUX.
              Arquiteto de Software, especialista em IA, Claude e OpenAI.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {expertise.slice(0, 6).map(e => (
                <span key={e} style={{
                  padding: '0.25rem 0.625rem', borderRadius: '9999px',
                  fontSize: '0.6875rem', fontWeight: 500, color: 'var(--text-3)',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                }}>{e}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              Navegação
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {nav.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: 'var(--text-3)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-1)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--primary)', marginBottom: '1.25rem' }}>
              Contato
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="https://wa.me/5548984470474" target="_blank" rel="noreferrer" style={{ color: 'var(--text-3)', fontSize: '0.875rem', textDecoration: 'none' }}>
                (48) 98447-0474
              </a>
              <a href="mailto:albertoneimerk@gmail.com" style={{ color: 'var(--text-3)', fontSize: '0.875rem', textDecoration: 'none' }}>
                albertoneimerk@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/alberto-neimerk/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-3)', fontSize: '0.875rem', textDecoration: 'none' }}>
                linkedin.com/in/alberto-neimerk
              </a>
              <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                <a href="https://brasux.com.br" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                  brasux.com.br →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: '1.5rem 0', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ color: 'var(--text-3)', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()} Alberto Ramiro Neimerk · BrasUX. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Engenheiro de Software', 'CTO', 'Fundador', 'Especialista em IA'].map(t => (
              <span key={t} style={{ color: 'var(--text-3)', fontSize: '0.75rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
