"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

import { AlignRight , X } from "lucide-react";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const variants = {
  hidden: {
    opacity: 1,
   y : "-150%",
  
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit : {
    opacity: 1,
    y : "-150%",
  
    transition: {
      duration: 0.5,
    },
  }
};

const NavAnimation = ({ children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const controlsNAV = useAnimation();

  useEffect(() => {
    if (isOpen) {
        controlsNAV.start("visible");
    } else {
        controlsNAV.start("exit");
    }
    

  }, [isOpen , controlsNAV]);

  return (
    <>
      <motion.button
      onClick={() => setIsOpen((prev) => !prev)}
        className={`${buttonVariants({ variant: "outline" , size : "lg" })} border-none mt-2 background-transparent `}
      >
       {isOpen ? (
          <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <X size={35} />
          </motion.div>
        ) : (
          <motion.div  key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AlignRight size={35} />
          </motion.div>
        )}

      </motion.button>

      <AnimatePresence>
     <div className="overflow-hidden">
     <motion.div variants={variants}  initial="hidden" animate={controlsNAV} className={`${className}`}>
        {children}
      </motion.div>
     </div>
      </AnimatePresence>
    </>
  );
};

export default NavAnimation;
