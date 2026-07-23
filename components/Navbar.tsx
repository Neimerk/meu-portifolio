'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#formacao', label: 'Formação' },
  { href: '#competencias', label: 'Competências' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#timeline', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setDark(false)
      document.documentElement.classList.add('light')
    }
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(5,5,8,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 0 20px rgba(129,140,248,0.3)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Alberto Neimerk
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Software Architect & CTO
              </div>
            </div>
          </a>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.125rem' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                padding: '0.4rem 0.875rem', borderRadius: '0.5rem',
                fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-2)',
                textDecoration: 'none', transition: 'all 0.2s ease',
                letterSpacing: '-0.01em'
              }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.color = 'var(--text-1)'; el.style.background = 'var(--bg-card)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'var(--text-2)'; el.style.background = 'transparent' }}
              >{l.label}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={toggleTheme} title="Alternar tema" style={{
              width: '38px', height: '38px', borderRadius: '0.5rem',
              border: '1px solid var(--border)', background: 'transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-2)', transition: 'all 0.2s'
            }}>
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="#contato" className="hidden md:inline-flex btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>
              Contato
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden" style={{
              width: '38px', height: '38px', borderRadius: '0.5rem',
              border: '1px solid var(--border)', background: 'transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-1)'
            }}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div style={{ padding: '1rem 0 1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                padding: '0.875rem 1rem', borderRadius: '0.5rem', fontSize: '1rem',
                fontWeight: 500, color: 'var(--text-2)', textDecoration: 'none'
              }}>{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
