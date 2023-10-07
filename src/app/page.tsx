import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Portfolio from "@/components/Projects"
import Skills from "@/components/Skills"
import Services from "@/components/Skills"
import Intro from "@components/Intro"
export default function Home() {
  return (
    <div className="p-10">
    <Intro/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
  )
}
