import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
    className: string;
    animateFor: "DefaultVariants";
    inView? : boolean;
  };
  
  const ScaleMap = {
    DefaultVariants: {
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
 
  };

export const ScaleAnimation = ({ children, className, animateFor , inView=false }: Props) => {

    return (
        <motion.div className={className}  variants={ScaleMap[animateFor]} initial="hidden"
        {...(!inView && { animate: "visible" })}
        {...(inView && { whileInView: "visible" })}
  
        >
            {children}
        </motion.div>
    )

}