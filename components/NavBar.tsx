'use client'
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Briefcase } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Send } from 'lucide-react';
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import MobileNavBar from "./MobileNavBar";
import NavDeskAnimation from "./animation/NavDeskAnimation";



const CurrentPathnameStyle = (selectedpath : string ) => {
  const pathname = usePathname();
  return false;
  const CurrentDIRClass = clsx( {
    'bg-background' : pathname !== selectedpath,
    'bg-accent text-accent-foreground' : pathname === selectedpath ,
  })

  return CurrentDIRClass;

}

const NavBar = () => {
 

  return (
    <div className="sticky top-0  max-w-7xl mx-auto w-full z-50">
      <div className="flex justify-center  md:justify-end items-center p-2 ">
      <NavDeskAnimation>
      <ul className="hidden sm:inline-flex backdrop-blur-sm bg-accent/30  p-2 rounded-full">
        <li>
            <Button size="lg" variant="outline" className="border-none rounded-full" asChild>
          <Link href="/#">
          <span className="hidden sm:block">Home</span>
            <span className="block sm:hidden">
              <Home />
            </span>

          </Link>
          </Button>
  
        </li>
        <li>
            <Button variant="outline"  size="lg" className="border-none rounded-full" asChild>
          <Link href="/#about">
          <span className="hidden sm:block">About</span>
            <span className="block sm:hidden">
              <UserRound />
            </span>

          </Link>
          </Button>
  
        </li>
        <li>
            <Button variant="outline" size="lg"  className="border-none rounded-full" asChild>
          <Link href="/#project">
          <span className="hidden sm:block">Project</span>
            <span className="block sm:hidden">
             <Briefcase />
            </span>

          </Link>
          </Button>
  
        </li>
        <li>
            <Button variant="outline"  size="lg" className="border-none rounded-full" asChild>
          <Link href="/#contact">
          <span className="hidden sm:block">Contact</span>
            <span className="block sm:hidden">
              <Send />
            </span>

          </Link>
          </Button>
  
        </li>
        
      
        
      </ul>
      </NavDeskAnimation>

      <MobileNavBar />



      </div>
      
    </div>
  );
};

export default NavBar;
