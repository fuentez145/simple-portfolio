import Image from "next/image";

import { PTSans } from "@/components/fonts/google";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import HeroTitle from "@/components/HeroTitle";
import { FadeAnimation } from "@/components/animation/FadeAnimation";
import { ScaleAnimation } from "@/components/animation/ScaleAnimation";
import RevealAnimation from "@/components/animation/RevealAnimation";

const Hero = () => {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute flex  sm:items-center mt-8  sm:mt-0   justify-center  h-full   w-full px-10">
        <div className="flex flex-col flex-col-reverse sm:flex-row  justify-around  w-full items-center lg:max-w-6xl sm:gap-10">
          <div className="flex-1   md:space-y-7">
            <FadeAnimation animateFor="LeftRevealVariants"
            inView={true}
              className={`text-sm md:text-1xl lg:text-3xl mt-6 md:mt-0 ${PTSans.className}`}
            >
              Hello, I am{" "}
            </FadeAnimation>
   
            <h1
              className={`text-2xl md:text-3xl lg:text-6xl mb-3 md:mb-0 ${PTSans.className}`}
            >
              <HeroTitle />
            </h1>
            <RevealAnimation>
              {/* <div
                className={`text-sm sm:text-md md:text-lg md:max-w-[87vh]  py-2 ${PTSans.className}`}
              >
                I am a Web developer with backend and frontend development
                knowledge, currently focusing on mastering React and NextJS. I
                am based in Cebu, Philippines. I am a self-taught developer with
                a bachelor&apos;s degree in information technology.
              </div> */}

              <div
                className={`text-sm sm:text-md md:text-lg md:max-w-[87vh]  py-2 ${PTSans.className}`}
              >
                I am a Web developer with backend and frontend development
                knowledge, currently focusing on mastering React and NextJS. I
                am based in Cebu, Philippines. I am a self-taught developer and currently pursuing
                a bachelor&apos;s degree in information technology.
              </div>

            </RevealAnimation>
            <div className=" space-x-3 mt-2 flex justify-center sm:justify-start">
              <Button asChild variant="outline">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button  variant="outline">
                
                <Link href="/file/Resume%20-%20Fuentes%2C%20Gilbert.pdf" className="flex gap-1 items-center" target="_blank"><Download strokeWidth={1} /> Download CV</Link>
                
              </Button>
            </div>
          </div>
          <ScaleAnimation animateFor="DefaultVariants" inView inViewOnce={false} className="mb-8 sm:mb-0">
            <Image
              src="/images/profile1.jpg"
              priority
              alt="My Profile"
              width={300}
              height={200}
              className="rounded-full lg:w-full "
            />
          </ScaleAnimation>
        </div>
      </div>
    </div>
  );
};

export default Hero;
