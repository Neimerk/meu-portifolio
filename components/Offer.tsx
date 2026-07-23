'use client'

import { motion } from 'framer-motion'

const features = [
  'Design profissional',
  'Responsiva para celular',
  'WhatsApp integrado',
  'Alta performance',
  'SEO otimizado',
  'Entrega em 7 dias',
]

export default function Offer() {
  return (
    <section className="section-py">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0a0a0a] border border-white/[0.07] rounded-2xl overflow-hidden p-10 md:p-14"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <span className="inline-block text-brand-500 text-[0.68rem] font-semibold tracking-[0.24em] uppercase mb-5">
                Oferta Especial
              </span>
              <h2 className="font-display font-light text-zinc-50 tracking-[-0.02em] mb-4 leading-[1.05]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)' }}>
                Landing Page Profissional + WhatsApp
                <em className="italic text-brand-400"> por apenas R$ 499</em>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-7 max-w-xl">
                Páginas modernas, responsivas e preparadas para conversão — para negócios, profissionais e produtos.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 px-3 py-1.5 text-[0.7rem] font-medium text-zinc-500 border border-white/[0.06] rounded-full bg-white/[0.02]">
                    <span className="text-brand-400 text-xs">✓</span>
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://produtos.brasux.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-7 py-3.5 bg-brand-500 hover:bg-brand-400 text-white text-[0.72rem] font-semibold tracking-widest uppercase rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(34,197,94,0.3)]"
                >
                  Ver modelos
                </a>
                <a
                  href="https://wa.me/5521999638993"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-7 py-3.5 text-zinc-400 hover:text-zinc-200 text-[0.72rem] font-semibold tracking-widest uppercase border border-white/10 hover:border-white/25 rounded transition-all duration-300"
                >
                  Solicitar agora
                </a>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center text-center gap-1">
              <span className="font-display text-6xl font-light text-brand-400 leading-none">R$</span>
              <span className="font-display text-8xl font-light text-zinc-50 leading-none tracking-[-0.04em]">499</span>
              <span className="text-zinc-600 text-xs uppercase tracking-widest mt-2">Preço único</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
