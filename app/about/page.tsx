import { Separator } from "@/components/ui/separator";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

const page = () => {
  return (
    <div className="relative w-full sm:h-screen lg:max-w-7xl lg:px-10 lg:mx-auto sm:pt-20 md:pt-20 lg:pt-0">
      <div className="absolute  flex flex-col w-full lg:h-full  flex items-start justify-center space-y-9 p-2">
        <div className=" md:w-[90%] space-y-3">
          <h1 className="text-2xl lg:text-2xl px-2 font-medium">About Me</h1>
          <p className=" lg:text-lg  px-8 w-fit">
          Hello, I'm Houtaro, a dedicated Full Stack Developer driven by the passion for creating seamless digital experiences. I find joy in translating ideas into functional and user-friendly applications, blending creativity with new technolgies.
          </p>
        </div>

        <Separator />

        <div className=" w-full">
          <h1 className="text-2xl lg:text-2xl px-2 font-medium">
            Technologies
          </h1>
          <ul className="text-sm lg:text-lg px-8  flex flex-wrap  w-fit p-5 gap-14 justify-center md:justify-start">
            <li className="p-5 shadow " ><FaHtml5 size="50" /></li>
            <li className="p-5 shadow" ><IoLogoJavascript size="50"  /></li>
            <li className="p-5 shadow" ><IoLogoCss3 size="50"  /></li>
            <li className="p-5 shadow" ><SiPhp size="50"  /></li>
            <li className="p-5 shadow" ><RiReactjsFill size="50"  /></li>
            <li className="p-5 shadow" ><TbBrandNextjs size="50"  /></li>
            <li className="p-5 shadow" ><IoLogoNodejs size="50"  /></li>
            <li className="p-5 shadow" ><SiMysql size="50"  /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
