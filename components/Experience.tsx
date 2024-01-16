import { project } from "@/components/data/projects";
import Image from "next/image";
import RevealAnimation from "@/components/animation/RevealAnimation";
import { ScaleHover } from "@/components/animation/ScaleAnimation";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Experience = () => {
  const projects = project;

  return (
    <div id="project" className=" min-h-screen w-full ">
      <div className="w-full max-w-6xl  mx-auto ">
        <h1 className="text-4xl font-semibold text-center p-6">PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 gap-2 mt-2 auto-cols-min">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="space-x-1">
                  {project.framework.map((framework, index) => (
                    <Badge key={index} variant="secondary">{framework}</Badge>
                  ))}
                </div>

                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent >
                {/* <p>Card Content</p> */}

               <RevealAnimation>
                 <Image
                  priority
                  alt="this"
                  src={project.image}
                  className="object-cover  h-[200px] md:h-[400px]"
                  width={500}
                  height={400}
                />
               </RevealAnimation>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full  "
                  variant="outline"
                  disabled={project.link === "#"}
                >
                  <Link
                    target="_blank"
                    className="flex gap-1"
                    href={project.link}
                  >
                    View Project
                    <ExternalLink size={16} />{" "}
                  </Link>{" "}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
