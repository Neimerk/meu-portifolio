import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Formacao from '@/components/Formacao'
import Competencias from '@/components/Competencias'
import Projetos from '@/components/Projetos'
import Tecnologias from '@/components/Tecnologias'
import Timeline from '@/components/Timeline'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Formacao />
        <Competencias />
        <Projetos />
        <Tecnologias />
        <Timeline />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
