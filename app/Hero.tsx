import Image from "next/image";
import React from "react";

import { JosefinSans, PTSans } from "@/components/fonts/google";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute flex mt-5 sm:mt-0 sm:items-center justify-center h-full  w-full px-10">
        <div className="flex flex-col flex-col-reverse sm:flex-row  justify-around  w-full items-center lg:max-w-6xl sm:gap-10">
          <div className="flex-1   md:space-y-7">
            <h1 className={`text-xl md:text-1xl lg:text-3xl `}>Hello I am </h1>
            <h1 className="text-2xl md:text-3xl lg:text-6xl mb-3 md:mb-0">A Full Stack Developer</h1>
            <h2 className={`md:max-w-[87vh]   ${PTSans.className}`}>
            Passionate Full Stack Developer dedicated to creating exceptional web apps. Focused on seamless front-end experiences and robust back-end functionality. Bringing passion to every project, here and there.
            </h2>
            <div className=" space-x-3 mt-2">
                <Button asChild variant="outline" ><Link href="/contact">Contact Me</Link></Button>
                <Button variant="outline">Download CV</Button>
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
            <Image
              src="/images/profile.jpg"
              alt="My Profile"
              width={300}
              height={200}
              className="rounded-full lg:w-full "
            />
          </div>
        </div>
        
      </div>
       
    </div>
  );
};

export default Hero;
