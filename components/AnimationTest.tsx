'use client'

import { animate  , motion, MotionValue } from "framer-motion"
import { scroll } from "framer-motion"
export const AnimateTest = ({children } : { children :  React.ReactNode}) => {
    const element = document.getElementById("about");
    if (element) {
        scroll(
            (progress) => console.log(progress),
            { source: element }  
        )
    }
    return (
        <motion.div>
            {children}
        </motion.div>
    )
}   