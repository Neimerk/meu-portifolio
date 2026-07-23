'use client'

export default function PrintButton() {
  return (
    <div style={{
      position: 'fixed', top: '1.25rem', right: '1.25rem', zIndex: 99,
      display: 'flex', gap: '0.625rem'
    }}>
      <button
        onClick={() => window.print()}
        style={{
          padding: '0.625rem 1.375rem', borderRadius: '0.5rem',
          background: '#6366f1', color: 'white', border: 'none',
          fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(99,102,241,0.3)'
        }}
      >
        Exportar PDF
      </button>
      <a href="/" style={{
        padding: '0.625rem 1.25rem', borderRadius: '0.5rem',
        background: 'white', color: '#475569', border: '1px solid #e2e8f0',
        fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none',
        display: 'inline-flex', alignItems: 'center'
      }}>
        ← Voltar
      </a>
    </div>
  )
}
