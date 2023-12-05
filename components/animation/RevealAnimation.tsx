"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;

 
};

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },

  slidehidden: { opacity: 1, x: 0 },

  slidevisible: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },

  exit: { opacity: 0 },
};

const RevealAnimation = ({ children, className = "w-fit" }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const SlideControl = useAnimation();
  useEffect(() => {
    if (inView) {
      // console.log("in view");
      controls.start("visible");
      SlideControl.start("slidevisible");
    } 
  }, [inView]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      <motion.div
        variants={variants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>

      <motion.div
        variants={variants}
        initial="slidehidden"
        animate={SlideControl}
        style={{
        
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "hsl(var(--foreground))",
        }}
        className=""
      ></motion.div>
    </div>
  );
};

export default RevealAnimation;
