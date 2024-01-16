import Hero from '@/app/Hero'
import { Separator } from '@/components/ui/separator'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Experience from '@/components/Experience'


export default function Home() {


  return (
    <main>
     <Hero />
     <Separator /> 
     <About  />
     <Separator />
     {/* <Project /> */}
     <Experience />
      <Separator />
      <Contact />
    </main>
  )
}
