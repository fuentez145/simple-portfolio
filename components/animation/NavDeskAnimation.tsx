'use client'

import { motion } from "framer-motion"

const variants = {
    hidden : { opacity : 0 , y : "-100%"},
    visible : { opacity : 1 , 
        y : 0,
        transition : {
            duration : 0.25,
           delay : 0.25,
           type : "spring",
        }
    },
    exit : { opacity : 0}
}


const NavDeskAnimation = ({children} : {children : React.ReactNode}) => {
  return (
   <motion.div variants={variants} initial="hidden" animate="visible" >
        {children}
   </motion.div>
  )
}

export default NavDeskAnimation
