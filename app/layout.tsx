import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://albertoneimerk.com.br'),
  title: 'Alberto Ramiro Neimerk — Arquiteto de Software, CTO & Fundador',
  description:
    'Alberto Ramiro Neimerk — Mais de 20 anos em TI. Engenheiro de Software, Arquiteto de Sistemas, Cientista de Dados, Especialista em IA, Tech Lead, Product Owner e Fundador. Criador de plataformas SaaS em Educação, Saúde, Marketplace e IA.',
  keywords:
    'Alberto Ramiro Neimerk, Engenheiro de Software, Software Architect, CTO, Tech Lead, Product Owner, Founder, Data Scientist, IA, Machine Learning, Full Stack, React, Next.js, Node.js, PostgreSQL, BrasUX, SaaS, Educação Digital, Marketplace, Cloud, DevOps',
  authors: [{ name: 'Alberto Ramiro Neimerk' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    type: 'profile',
    url: 'https://albertoneimerk.com.br/',
    title: 'Alberto Ramiro Neimerk — Arquiteto de Software, CTO & Fundador',
    description:
      '20+ anos transformando visões em tecnologia. Arquiteto de software, líder técnico e empreendedor serial com domínio em IA, SaaS e plataformas educacionais.',
    siteName: 'Alberto Ramiro Neimerk',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alberto Ramiro Neimerk — Arquiteto de Software, CTO & Fundador',
    description: '20+ anos transformando visões em tecnologia.',
  },
  alternates: {
    canonical: 'https://albertoneimerk.com.br/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://albertoneimerk.com.br/#person',
      name: 'Alberto Ramiro Neimerk',
      jobTitle: 'Software Architect & CTO',
      description: 'Engenheiro de Software, Arquiteto de Sistemas, Cientista de Dados e Fundador com mais de 20 anos de experiência em TI.',
      url: 'https://albertoneimerk.com.br',
      knowsAbout: [
        'Engenharia de Software', 'Arquitetura de Software', 'Ciência de Dados',
        'Inteligência Artificial', 'Machine Learning', 'Full Stack Development',
        'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Cloud Computing', 'DevOps',
        'Product Management', 'UX Design', 'SaaS', 'Marketplace', 'Educação Digital'
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Bacharelado em Física' },
        { '@type': 'CollegeOrUniversity', name: 'Pós-Graduação em Análise de Dados' }
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'BrasUX',
        url: 'https://brasux.com.br'
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://albertoneimerk.com.br/#brasux',
      name: 'BrasUX',
      founder: { '@id': 'https://albertoneimerk.com.br/#person' },
      description: 'Startup de tecnologia especializada em Engenharia de Software, IA, SaaS e Transformação Digital.',
      foundingDate: '2020',
      url: 'https://brasux.com.br',
      areaServed: 'BR'
    }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  )
}

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var t = localStorage.getItem('theme');
              if (t === 'light') document.documentElement.classList.add('light');
            } catch(e) {}
          })();
        `
      }}
    />
  )
}
