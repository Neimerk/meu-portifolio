import AboutSection from '../components/AboutSection';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section>
        <h1 className="text-5xl font-extrabold mb-4 bg-linear-to-r from-black to-blue-700 bg-clip-text text-transparent">
          Alberto Ramiro Neimerk
        </h1>
        <p className="text-2xl text-zinc-700 dark:text-zinc-300 mb-6">
          Físico, Engenheiro de Software e Especialista em IA.
        </p>
        <p className="max-w-2xl text-2xl text-zinc-500">
          Transformando rigor matemático em código de alta performance. 
          Mais de 20 anos de experiência em TI (hardware e software); liderando projetos que unem 
          análise de dados (Python/R) e desenvolvimento Full Stack moderno.
        </p>
      </section>

      <AboutSection />

      {/* Grid de Projetos */}
      <section id="projects" className="py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-10">Projetos de Engenharia e Dados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}