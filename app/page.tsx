import Image from 'next/image'
import Hero from '@/app/Hero'
import { Separator } from '@/components/ui/separator'
import About from './About'
import Project from './Project'
import Contact from './Contact'

export default function Home() {
  return (
    <main>
     <Hero />
     <Separator />
    
     
     <About />
     <Separator />
     <Project />
      <Separator />
      <Contact />
    </main>
  )
}
