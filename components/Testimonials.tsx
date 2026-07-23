'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'A BrasUX transformou nossa operação digital. Em quatro meses, automatizamos processos que antes levavam semanas inteiras. O nível de comprometimento técnico é incomparável.',
    name: 'Carlos Eduardo',
    role: 'CEO',
    company: 'Fintech — Rio de Janeiro',
    initials: 'CE',
  },
  {
    quote: 'A arquitetura desenvolvida pela equipe nos permitiu escalar de 10 mil para 500 mil usuários sem instabilidade. Isso é engenharia de verdade.',
    name: 'Ana Paula',
    role: 'CTO',
    company: 'Startup de Logística — SP',
    initials: 'AP',
  },
  {
    quote: 'Trabalhar com a BrasUX parece ter uma equipe de Silicon Valley dentro da empresa. Entregam com padrão internacional, dentro do prazo e com atenção cirúrgica aos detalhes.',
    name: 'Roberto Mendes',
    role: 'Diretor de TI',
    company: 'Empresa Nacional — RJ',
    initials: 'RM',
  },
]

export default function Testimonials() {
  return (
    <section className="section-py bg-[#080808] border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-500 text-[0.68rem] font-semibold tracking-[0.24em] uppercase mb-4"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-zinc-50 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            O que nossos clientes dizem.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-7 flex flex-col gap-6 hover:border-brand-500/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 font-display text-6xl text-brand-500/10 leading-none select-none" aria-hidden="true">
                "
              </div>

              <blockquote className="relative">
                <p className="font-display text-base font-light italic text-zinc-300 leading-[1.8] pt-5">
                  {t.quote}
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-white/[0.06] mt-auto">
                <div className="w-9 h-9 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-400 text-[0.65rem] font-bold tracking-wide">{t.initials}</span>
                </div>
                <div>
                  <div className="text-zinc-200 text-sm font-semibold leading-tight">{t.name}</div>
                  <div className="text-zinc-600 text-xs mt-0.5">{t.role} · {t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
