'use client'

import { motion } from 'framer-motion'

type StatusType = 'Ativo' | 'Beta' | 'Em breve' | 'Roadmap'

const statusConfig: Record<StatusType, { color: string; bg: string }> = {
  Ativo: { color: 'text-brand-400', bg: 'bg-brand-500/10 border-brand-500/20' },
  Beta: { color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  'Em breve': { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  Roadmap: { color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
}

const products: { emoji: string; name: string; tagline: string; status: StatusType; tags: string[]; desc: string }[] = [
  {
    emoji: '🎓',
    name: 'SimulENEM',
    tagline: 'Simulados inteligentes para o ENEM',
    status: 'Ativo',
    tags: ['EdTech', 'IA', 'Mobile'],
    desc: 'Plataforma de simulados com correção automática, análise de desempenho por competência e recomendações personalizadas de estudo com IA.',
  },
  {
    emoji: '📚',
    name: 'Curso NotaOn',
    tagline: 'Plataforma de cursos preparatórios de alta performance',
    status: 'Ativo',
    tags: ['EAD', 'Videoaulas', 'React'],
    desc: 'Cursos preparatórios para o ENEM com videoaulas, materiais e acompanhamento de evolução em tempo real.',
  },
  {
    emoji: '🍺',
    name: 'Cerveja Barata',
    tagline: 'Marketplace-delivery sem taxa de uso do app',
    status: 'Ativo',
    tags: ['Marketplace', 'Delivery', 'Mobile'],
    desc: 'App de delivery completo: vendedores cadastram suas lojas, entregadores recebem os pedidos pelo app, e o comprador paga apenas pelo produto e pela entrega — sem taxas de uso da plataforma.',
  },
  {
    emoji: '🖼️',
    name: 'BrasUX Image API',
    tagline: 'API de geração e manipulação de imagens com IA',
    status: 'Ativo',
    tags: ['API', 'IA', 'Imagens'],
    desc: 'API robusta para geração, otimização e transformação de imagens com inteligência artificial, pronta para produção.',
  },
  {
    emoji: '📕',
    name: 'LivrEdu',
    tagline: 'Biblioteca digital de conhecimento educacional',
    status: 'Em breve',
    tags: ['Biblioteca', 'Conteúdo', 'API'],
    desc: 'Acervo digital completo com materiais educacionais organizados por área, nível e tema de aprendizado.',
  },
  {
    emoji: '⚡',
    name: 'BrasUX Catalog API',
    tagline: 'API de integração com o ecossistema BrasUX',
    status: 'Roadmap',
    tags: ['API', 'REST', 'GraphQL'],
    desc: 'Integre seus sistemas com os produtos BrasUX via API robusta, documentada e com suporte dedicado.',
  },
  {
    emoji: '🚀',
    name: 'Projetos Futuros',
    tagline: 'Inovações em desenvolvimento para novos mercados',
    status: 'Roadmap',
    tags: ['IA', 'SaaS', 'Inovação'],
    desc: 'Novas soluções sendo construídas para expandir o ecossistema e atender mercados emergentes com tecnologia de ponta.',
  },
]

function StatusBadge({ status }: { status: StatusType }) {
  const cfg = statusConfig[status]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border ${cfg.bg} ${cfg.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Ativo' ? 'bg-brand-400 animate-pulse-slow' : 'bg-current opacity-70'}`} />
      {status}
    </span>
  )
}

export default function Products() {
  return (
    <section id="produtos" className="section-py">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-500 text-[0.68rem] font-semibold tracking-[0.24em] uppercase mb-4"
          >
            Ecossistema de Produtos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-zinc-50 tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
          >
            Conheça o Ecossistema BrasUX
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed"
          >
            Produtos desenvolvidos para transformar educação, negócios e tecnologia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href="https://produtos.brasux.com.br"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-6 hover:border-brand-500/25 hover:bg-[#0d0d0d] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.05)] flex flex-col gap-4"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              <div className="flex items-start justify-between">
                <span className="text-3xl leading-none">{p.emoji}</span>
                <StatusBadge status={p.status} />
              </div>

              <div>
                <h3 className="font-sans font-semibold text-zinc-100 text-base mb-1 group-hover:text-white transition-colors">
                  {p.name}
                </h3>
                <p className="text-zinc-600 text-xs font-medium mb-3">{p.tagline}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.05]">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-medium tracking-wide text-zinc-600 border border-white/[0.06] rounded bg-white/[0.02]">
                    {tag}
                  </span>
                ))}
                <span className="ml-auto text-xs text-brand-500/60 group-hover:text-brand-400 transition-colors flex items-center gap-1">
                  Ver
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://produtos.brasux.com.br"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white text-[0.72rem] font-semibold tracking-widest uppercase rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(34,197,94,0.3)]"
          >
            Acessar Vitrine de Produtos
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
