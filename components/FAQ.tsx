'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Quais tecnologias a BrasUX utiliza no desenvolvimento?',
    a: 'Utilizamos um stack moderno e robusto: Python, Node.js, React, TypeScript, PostgreSQL, MongoDB, AWS, Docker e Kubernetes. Para IA e Machine Learning, trabalhamos com TensorFlow, PyTorch e as principais APIs de inteligência artificial do mercado.',
  },
  {
    q: 'Qual é o prazo médio para desenvolvimento de um sistema?',
    a: 'O prazo depende da complexidade do projeto. Sistemas simples levam de 4 a 8 semanas; plataformas mais robustas e arquiteturas complexas, de 3 a 6 meses. Após o diagnóstico inicial, apresentamos um cronograma detalhado e realista.',
  },
  {
    q: 'A BrasUX trabalha com empresas de qual porte?',
    a: 'Atendemos startups em fase inicial, PMEs em crescimento acelerado e grandes empresas que precisam modernizar sua infraestrutura tecnológica. Nosso método se adapta ao contexto e à maturidade digital de cada cliente.',
  },
  {
    q: 'Como funciona o processo de trabalho e comunicação?',
    a: 'Trabalhamos com metodologias ágeis adaptadas ao contexto de cada projeto. O processo inclui diagnóstico aprofundado, apresentação de arquitetura, sprints com entregas incrementais e reuniões regulares de acompanhamento transparente.',
  },
  {
    q: 'Vocês oferecem suporte após a entrega do projeto?',
    a: 'Sim. Disponibilizamos planos de suporte contínuo com monitoramento de performance, atualizações de segurança e evolução do produto. Acreditamos em parcerias de longo prazo, não apenas em projetos pontuais.',
  },
  {
    q: 'Como solicitar um orçamento para meu projeto?',
    a: 'Entre em contato pelo WhatsApp ou e-mail. Realizaremos uma reunião de diagnóstico sem compromisso para entender suas necessidades e, em seguida, apresentaremos uma proposta técnica e comercial personalizada.',
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-white/[0.06] ${isOpen ? '' : ''}`}>
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-medium leading-snug transition-colors duration-200 ${isOpen ? 'text-zinc-100' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
            isOpen
              ? 'border-brand-500/50 text-brand-400 rotate-45'
              : 'border-white/[0.12] text-zinc-600 group-hover:border-white/25'
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3 h-3">
            <path d="M7 1v12M1 7h12" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-zinc-500 text-sm leading-[1.9] pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-py bg-[#080808] border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-500 text-[0.68rem] font-semibold tracking-[0.24em] uppercase mb-4"
          >
            Perguntas Frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-zinc-50 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Tudo que você precisa saber.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto border-t border-white/[0.06]"
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
