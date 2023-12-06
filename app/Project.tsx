import { project } from "@/components/data/projects";
import Image from "next/image";
import RevealAnimation from "@/components/animation/RevealAnimation";
import { ScaleHover } from "@/components/animation/ScaleAnimation";

const Project = () => {
  const projects = project;
  return (
    <div id="project" className=" w-full  h-fit min-h-screen md:mb-5">
      <div className=" flex mt-5 sm:mt-0 sm:items-center justify-center   w-full ">
        <div className="">
          <h1 className="text-center my-8  text-3xl font-semibold mb-5 mt-5">
            Projects
          </h1>
          <div className=" columns-1 md:columns-2 lg:columns-3 space-y-3 gap-8  px-2 pb-20 md:pb-8 lg:pb-2 mt-2 ">
            {projects.map((project, index) => (
              <RevealAnimation key={index} className="w-fit">
                <ScaleHover>
                  <div key={index} className="relative ">
                    <Image
                      alt={project?.title}
                      priority
                      key={index}
                      src={project?.image}
                      className="object-cover w-full  shadow h-auto rounded-xl  shadow cursor-pointer"
                      width={300}
                      height={40}
                    />
                    <p className="absolute bottom-0 left-0 p-2 text-accent-foreground  bg-gradient-to-r from-accent  w-full">
                      {project?.title}
                    </p>
                  </div>
                </ScaleHover>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
