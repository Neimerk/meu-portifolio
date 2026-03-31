'use client'
import { motion } from 'framer-motion';
import { ExternalLink, Rocket, CheckCircle2 } from 'lucide-react';

// ... interface Project atualizada ...
interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  services?: string[]; // Campo opcional para os serviços da BrasUX
  isStartup?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-6 rounded-xl shadow-sm border ${
        project.isStartup 
        ? 'bg-linear-to-br from-white to-blue-50 dark:from-zinc-900 dark:to-blue-950/20 border-blue-200 dark:border-blue-800' 
        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        {project.isStartup && <Rocket className="text-blue-600" size={20} />}
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Lista de Serviços (Específico para a BrasUX) */}
      {project.services && (
        <div className="mb-6 grid grid-cols-1 gap-2">
          {project.services.map((service) => (
            <div key={service} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <CheckCircle2 size={12} className="text-blue-500" />
              {service}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] rounded uppercase tracking-wider font-bold">
            {t}
          </span>
        ))}
      </div>

      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
      >
        {project.isStartup ? 'Conhecer a Startup' : `Visitar ${project.title}`} 
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}