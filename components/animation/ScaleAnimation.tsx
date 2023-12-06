'use client'
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
    className: string;
    animateFor: "DefaultVariants";
    inView? : boolean;
    inViewOnce? : boolean;
  };
  
  const ScaleMap = {
    DefaultVariants: {
      hidden: { opacity: 0, overflow: "hidden" , scale : 0.8 },
      visible: {
        scale : 1,
        opacity: 1,
        overflow: "visible",
        y: 0,
        transition: {
          duration: 0.6,
          type : "spring",
  
        },
      },
    },
 
  };

export const ScaleAnimation = ({ children, className, animateFor , inView=false , inViewOnce=true }: Props) => {

    return (
        <motion.div className={className}  variants={ScaleMap[animateFor]} initial="hidden"
        {...(!inView && { animate: "visible" })}
        {...(inView && { whileInView: "visible" })}
        viewport={inView && inViewOnce ? { once: true } : {once : false}}

        >
            {children}
        </motion.div>
    )

    
}

export const ScaleHover = ({ children } : {children : React.ReactNode}) => {
    return (
        <motion.div whileHover={{ scale: 0.95 }}   whileTap={{ scale: 1.0 }}>
            {children}
        </motion.div>
    )
}