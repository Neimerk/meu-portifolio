'use client'

import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Descoberta', desc: 'Análise aprofundada do negócio, contexto técnico, gargalos existentes e definição precisa de objetivos mensuráveis.' },
  { n: '02', title: 'Planejamento', desc: 'Roadmap estratégico, priorização de entregas, estimativas realistas e alinhamento completo com as expectativas do cliente.' },
  { n: '03', title: 'Arquitetura', desc: 'Planejamento da solução com foco em escalabilidade, segurança, performance e manutenibilidade a longo prazo.' },
  { n: '04', title: 'Desenvolvimento', desc: 'Execução técnica rigorosa com as melhores práticas de engenharia, revisão de código e entregas incrementais validadas.' },
  { n: '05', title: 'Implantação', desc: 'Deploy estruturado com testes automatizados, monitoramento de performance, auditoria de segurança e garantia de qualidade.' },
  { n: '06', title: 'Evolução', desc: 'Suporte contínuo, monitoramento em produção, iterações de melhoria e roadmap de crescimento tecnológico sustentável.' },
]

export default function Process() {
  return (
    <section id="processo" className="section-py bg-[#080808] border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-500 text-[0.68rem] font-semibold tracking-[0.24em] uppercase mb-4"
          >
            O Método BrasUX
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-zinc-50 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Uma abordagem única.<br />
            <em className="italic text-brand-400">Resultados excepcionais.</em>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex gap-8 relative"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[1.15rem] top-10 bottom-0 w-px bg-gradient-to-b from-brand-500/20 to-transparent" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 relative">
                <div className="w-9 h-9 rounded-full border border-white/[0.08] group-hover:border-brand-500/40 bg-[#0a0a0a] flex items-center justify-center transition-all duration-300">
                  <span className="font-display text-xs font-normal text-brand-500/60 group-hover:text-brand-400 transition-colors">
                    {step.n}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pb-10 flex-1">
                <h3 className="font-display text-xl font-normal text-zinc-200 group-hover:text-zinc-50 transition-colors mb-2 tracking-[-0.01em] leading-snug mt-1">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-[1.85]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
