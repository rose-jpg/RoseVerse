import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../data/motion"

export const TypingText = ({title}) => (
  <motion.p className="text-[20px]"
   variants={textContainer}
   initial='hidden'
   whileInView='show'
  >{Array.from(title).map((letter,index)=>(
    <motion.span
    variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0':letter}

    </motion.span>

  ))}</motion.p>
)

export const TitleText = ({title}) =>(
  <motion.h2 className=" text-[64px] font-bold mt-[8px] leading-[60px]"
  variants={textVariant2}>{title}</motion.h2>
)
