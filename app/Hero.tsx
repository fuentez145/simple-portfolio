import Image from "next/image";
import React from "react";

import { PTSans } from "@/components/fonts/google";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import HeroTitle from "@/components/HeroTitle";

const Hero = () => {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute flex mt-5 sm:mt-0 sm:items-center justify-center h-full  w-full px-10">
        <div className="flex flex-col flex-col-reverse sm:flex-row  justify-around  w-full items-center lg:max-w-6xl sm:gap-10">
          <div className="flex-1   md:space-y-7 ">
            <h1
              className={`text-sm md:text-1xl lg:text-3xl ${PTSans.className}`}
            >
              Hello, I am{" "}
            </h1>
            <h1
              className={`text-2xl md:text-3xl lg:text-6xl mb-3 md:mb-0 ${PTSans.className}`}
            >
              <HeroTitle />
            </h1>
            <h2
              className={`text-sm sm:text-md md:text-lg md:max-w-[87vh]   ${PTSans.className}`}
            >
            I am a Web developer with backend and frontend development knowledge, currently focusing on mastering React and NextJS. I am based in Cebu, Philippines. I am a self-taught developer with a bachelor's degree in information technology.
            </h2>
            <div className=" space-x-3 mt-2 flex justify-center sm:justify-start">
              <Button asChild variant="outline">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline">
                <Download strokeWidth={1} /> Download CV
              </Button>
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
            <Image
              src="/images/profile.jpg"
              priority
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
