import React from "react"
import { staggerContainer, textVariant, fadeIn } from "../data/motion"
import { motion } from "framer-motion"
import { TypingText } from "./CustomText"
import down from "../assets/down.svg"

function About() {
  return (
    <div className='px-6 sm:px-48 mb-[100px]'>
      <motion.div className="flex flex-col justify-center items-center relative"
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='gradient-01 absolute w-[70%] inset-0' />
        <TypingText title='| About Metaversus' />
        <motion.p
          className='text-center'
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error
          ratione eum corrupti natus consectetur! Quas, id repellendus
          aspernatur quam ut tenetur tempora porro iure eligendi, deserunt
          molestias in officia? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officia error ratione eum corrupti natus
          consectetur! Quas, id repellendus aspernatur quam ut tenetur tempora
          porro iure eligendi, deserunt molestias in officia? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officia error ratione eum
          corrupti natus consectetur! Quas, id repellendus aspernatur quam ut
          tenetur tempora porro iure eligendi, deserunt molestias in officia?
        </motion.p>
        <motion.p className="text-[25px] mt-7" variants={fadeIn("up", "tween", 0.3, 1)}>
          <img src={down} alt="" />
        </motion.p>
      </motion.div>
    </div>
  )
}

export default About
