'use client'
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Briefcase } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Send } from 'lucide-react';
import { usePathname } from "next/navigation";
import clsx from "clsx";



const CurrentPathnameStyle = (selectedpath : string ) => {
  const pathname = usePathname();
  const CurrentDIRClass = clsx( {
    'bg-accent text-accent-foreground' : pathname === selectedpath ,
  })

  return CurrentDIRClass;

}

const NavBar = () => {
 

  return (
    <div className="sm:static  w-full  px-20 ">
      <ul className="sm:absolute sm:top-0 sm:right-0  z-20 justify-around flex  md:pr-2  w-full lg:pr-[30vh] lg:justify-end lg:max-w-7xl items-center gap-5  py-4 lg:px-4 ">
        <li>
          <Link
            className={`${buttonVariants({ variant: "outline" })} border-none ${CurrentPathnameStyle("/")}`}
            href="/"
          >
            <span className="hidden sm:block">Home</span>
            <span className="block sm:hidden">
              <Home />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`${buttonVariants({ variant: "outline" })} border-none ${CurrentPathnameStyle("/about")}`}
            href="/about"
          >
            <span className="hidden sm:block">About Me</span>
            <span className="block sm:hidden">
              <UserRound />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`${buttonVariants({ variant: "outline" })} border-none ${CurrentPathnameStyle("/project")}`}
            href="/project"
          >
            <span className="hidden sm:block">Projects</span>
            <span className="block sm:hidden">
              <Briefcase />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`${buttonVariants({ variant: "outline" })} border-none ${CurrentPathnameStyle("/contact")}`}
            href="/contact"
          >
            <span className="hidden sm:block">Contact</span>
            <span className="block sm:hidden">
              <Send  />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
