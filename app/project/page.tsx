import React from "react";
import { project } from "./projects";
import Image from "next/image";

const page = () => {
  const projects = project;
  return (
    <div className="max-h-screen  max-w-7xl w-full  h-screen   mx-auto  md:py-20 ">
      <div className="w-full">
        <h1 className="text-center text-3xl font-semibold mb-5 ">Projects</h1>
        <div className=" columns-1 md:columns-2 lg:columns-3 space-y-3 gap-8 px-2 pb-20 md:pb-8 lg:pb-2 mt-2 justify-center w-full ">
            {
              projects.map((project, index) => (
                <Image alt={project?.title} priority key={index} src={project?.image} className="object-cover w-auto h-auto rounded-xl shadow cursor-pointer" width={380} height={200} />
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default page;
