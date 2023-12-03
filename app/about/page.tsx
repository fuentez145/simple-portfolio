import { Separator } from "@/components/ui/separator";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { PTSans } from "@/components/fonts/google";
import { SiLaravel } from "react-icons/si";

const page = () => {
  return (
    <div className="relative w-full sm:h-screen lg:max-w-7xl lg:px-10 lg:mx-auto sm:pt-20 md:pt-20 lg:pt-0">
      <div className="absolute  flex flex-col w-full lg:h-full  flex items-start justify-center space-y-9 p-2">
        <div className=" md:w-[90%] space-y-3">
          <h1 className="text-xl md:text-2xl lg:text-2xl px-2 font-small">About Me</h1>
          <div className="text-sm md:text-md lg:text-lg  px-8 w-fit space-y-1">
          <p className={PTSans.className} >
          I&apos;m <b className="">Gilbert Fuentes</b>, a 22-year-old juggling the college hustle while diving into the tech world. Spent some time messing around with Next.js, Laravel, and Other stuff - you know, the whole website-building thing.  I've got a soft spot for front-end and back-end tech too; it's like my digital playground. 
          </p>
          <p className={PTSans.className}  >Beyond that, I also draw sometimes, though I'll admit, my motivation can be a bit hit or miss. And yeah, gaming is my go-to for kicking back and unwinding. </p>
          </div>
         
        </div>

        <Separator />

        <div className=" w-full">
          <h1 className="text-xl md:text-2xl lg:text-2xl px-2 font-small">
            Technologies
          </h1>
          <ul className="text-sm lg:text-lg px-8  flex flex-wrap  w-fit p-5 gap-4 md:gap-14  justify-center md:justify-center">
            <li className="p-5 shadow " ><FaHtml5 size="50" /></li>
            <li className="p-5 shadow" ><IoLogoJavascript size="50"  /></li>
            <li className="p-5 shadow" ><IoLogoCss3 size="50"  /></li>
            <li className="p-5 shadow" ><SiPhp size="50"  /></li>
            <li className="p-5 shadow" ><RiReactjsFill size="50"  /></li>
            <li className="p-5 shadow" ><TbBrandNextjs size="50"  /></li>
            <li className="p-5 shadow" ><IoLogoNodejs size="50"  /></li>
            <li className="p-5 shadow" ><SiMysql size="50"  /></li>
            <li className="p-5 shadow" ><SiLaravel size="50"  /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
