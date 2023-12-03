'use client'
import { TypeAnimation } from "react-type-animation";

const HeroTitle = () => {
  return (
    <TypeAnimation sequence={[
        'Gilbert Fuentes',  2000,
        'A Web Developer', 2000,
        'A Full Stack Developer', 2000,

]}  speed={5} style={{  display: 'inline-block 	' }}
repeat={Infinity} />
  )
}

export default HeroTitle
