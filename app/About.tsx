
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { PTSans } from "@/components/fonts/google";
import { SiLaravel } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import RevealAnimation from "@/components/animation/RevealAnimation";


const technologies = [
  {
    name: "HTML5",
    icon: <FaHtml5 size="50" />,
  },
  {
    name: "CSS3",
    icon: <IoLogoCss3 size="50" />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript size="50" />,
  },
  {
    name: "NodeJS",
    icon: <IoLogoNodejs size="50" />,
  },
  {
    name: "PHP",
    icon: <SiPhp size="50" />,
  },
  {
    name: "ReactJS",
    icon: <RiReactjsFill size="50" />,
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs size="50" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size="50" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel size="50" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size="50" />,
  },

]

const About = ( ) => {


  return (
    <div id="about" className=" w-full h-fit sm:h-fit lg:h-screen min-h-screen max-w-7xl mx-auto ">
      <div className=" flex mt-5 sm:mt-0 sm:items-center justify-center sm:h-full min-h-screen  w-full   p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-7">
        <div className="space-y-3">
        <h1 className="text-xl md:text-2xl lg:text-2xl px-2 font-small ">About Me</h1>
          <div className="text-sm md:text-md lg:text-lg  px-2 w-fit space-y-1">

          <RevealAnimation className="">
          <p className={PTSans.className} >
          I&apos;m <b className="">Gilbert Fuentes</b>, a 22-year-old juggling the college hustle while diving into the tech world. Spent some time messing around with Next.js, Laravel, and Other stuff - you know, the whole website-building thing.  I&apos;ve got a soft spot for front-end and back-end tech too; it&apos;s like my digital playground. 
          </p>      
          </RevealAnimation>
          <RevealAnimation className="">
          <p className={PTSans.className}  >Beyond that, I also draw sometimes, though I&apos;ll admit, my motivation can be a bit hit or miss. And yeah, gaming is my go-to for kicking back and unwinding. </p>
          </RevealAnimation>
          </div>
         
        </div>
        <div className="space-y-3">
          <h1 className="text-xl md:text-2xl lg:text-2xl px-2 font-small">
            Technologies
          </h1>
          <ul className="text-sm lg:text-lg  flex flex-wrap  w-fit  gap-4 md:gap-7  justify-center md:justify-center">
            {/* <RevealAnimation><li className="p-5 shadow " ><FaHtml5 size="50" /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><IoLogoJavascript size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><IoLogoCss3 size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><SiPhp size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><RiReactjsFill size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><TbBrandNextjs size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><IoLogoNodejs size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><SiMysql size="50"  /></li></RevealAnimation>
             <RevealAnimation><li className="p-5 shadow" ><SiLaravel size="50"  /></li></RevealAnimation> */}

              {
                technologies.map((item , index) => (
                
                  <RevealAnimation key={index}>
                    <li className="p-5 shadow" >{item.icon}</li>
                    </RevealAnimation>
               
                ))
              }

          </ul>
        </div>
        
        </div>

      </div>
    </div>
  )
}

export default About
