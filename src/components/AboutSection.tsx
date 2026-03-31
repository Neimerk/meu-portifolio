'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="grid md:grid-cols-12 gap-12 items-center py-12 border-b border-zinc-200 dark:border-zinc-800">
      
      {/* Coluna da Foto: Ocupa 5/12 colunas no desktop */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-5 relative group"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-900">
          <Image 
            src="/assets/alberto-neimerk.png" // CAMINHO DA SUA FOTO AQUI
            alt="Alberto Ramiro Neimerk em seu ambiente de desenvolvimento"
            width={800} // Valor base para proporção
            height={1000} // Valor base para proporção
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            priority // Carrega esta imagem com prioridade (importante para LCP)
          />
        </div>
      </motion.div>

      {/* Coluna do Texto: Ocupa 7/12 colunas no desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:col-span-7 space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
          Minha Jornada: <br />
          <span className="text-blue-600">Física, Código e Dados.</span>
        </h2>
        
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Com mais de duas décadas de experiência em TI, minha trajetória é marcada pela intersecção entre a **rigorosidade científica da Física** e a **agilidade do desenvolvimento de software moderno**.
        </p>
        
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          O ambiente na foto — cercado por código e fluxogramas — é onde transformo desafios complexos de negócio em arquiteturas escaláveis. Atuo ativamente como Dev Full Stack (**Next.js/TypeScript**) e utilizo **Python/R** para modelar e extrair valor de grandes volumes de dados, como no projeto **BrasUX-Data**.
        </p>

        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-semibold">
          Minha missão é entregar soluções onde cada linha de código é fundamentada em análise analítica e design pattern sólido.
        </p>

        <a href="#projects" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition">
          Ver Projetos em Next.js e IA
        </a>
      </motion.div>
    </section>
  );
}