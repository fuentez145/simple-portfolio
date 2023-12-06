import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";
import { Briefcase } from "lucide-react";
import { UserRound } from "lucide-react";
import { Send } from "lucide-react";
import NavAnimation from "./animation/NavAnimation";

const MobileNavBar = () => {
  return (
    <div className="sm:hidden absolute top-0 right-0 mr-2">
        
      <div className="">
        <NavAnimation >

          <ul className=" backdrop-blur-sm mt-1 rounded-full space-y-3">
            <li>
              <Button
                size="lg"
                variant="outline"
                className="border-none bg-accent/60 "
                asChild
              >
                <Link   href="/#">
                  <Home size={35} />
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                size="lg"
                className="border-none bg-accent/60 "
                asChild
              >
                <Link href="/#about">
                  <UserRound size={35} />
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                size="lg"
                className="border-none  bg-accent/60 "
                asChild
              >
                <Link href="/#project">
                  <Briefcase size={35} />
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                size="lg"
                className="border-none bg-accent/60 "
                asChild
              >
                <Link href="/#contact">
                  <Send size={35} />
                </Link>
              </Button>
            </li>
          </ul>
        </NavAnimation >
      </div>
    </div>
  );
};

export default MobileNavBar;
