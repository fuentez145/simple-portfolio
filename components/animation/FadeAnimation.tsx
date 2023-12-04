"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className: string;
  animateFor: "LeftVariants" | "LeftRevealVariants";
  inView? : boolean;
};

const RevealMap = {
  LeftVariants: {
    hidden: { opacity: 0, overflow: "hidden" , y : 50, },
    visible: {
      opacity: 1,
      overflow: "visible",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",

      },
    },
  },
  LeftRevealVariants : {
    hidden: {   opacity : 0 ,overflow: "hidden",  y : -20, },
    visible: {
        opacity : 1,
      overflow: "visible",

      y: 0,
      transition: {
     
        ease: "easeOut",}}
  },
};

export const FadeAnimation = ({ children, className, animateFor , inView=false }: Props) => {
  return (
    <motion.div
      className={className}
      initial="hidden"

      {...(!inView && { animate: "visible" })}
      {...(inView && { whileInView: "visible" })}

      variants={RevealMap[animateFor]}
    >
      {children}
    </motion.div>
  );
};
