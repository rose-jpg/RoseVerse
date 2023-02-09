import { motion } from "framer-motion"
import React from "react"
import { staggerContainer, textVariant, slideIn } from "../data/motion"
import cover from "../assets/cover.png"
import stamp from "../assets/stamp.png"

function Hero() {
  return (
    <div className='px-6 sm:px-48'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
        <div className='flex flex-col z-10 '>
          <motion.h1
            className='sm:text-[100px] text-[45px] uppercase font-bold leading-[114px] flex justify-center items-center mb-3'
            variants={textVariant(1.1)}
          >
            Roseverse
          </motion.h1>
          <div className='flex z-10 justify-center sm:mt-0 mt-[-60px] sm:mb-0 mb-[-30px]'>
            <motion.h1
              className='sm:text-[100px] text-[50px] uppercase font-bold leading-[114px] z-10 flex justify-center items-center '
              variants={textVariant(1.2)}
            >
              Ma
            </motion.h1>
            <motion.div
              variants={textVariant(1.1)}
              className='sm:w-[202px] w-[450px] h-[50px] sm:h-[98px] sm:border-[18px] border-[12px] border-white rounded-r-[50px]  sm:mt-0 mt-7 sm:mx-2'
            ></motion.div>

            <motion.h1
              className='sm:text-[100px] text-[45px] uppercase font-bold leading-[114px] z-10 flex justify-center items-center'
              variants={textVariant(1.2)}
            >
              ness
            </motion.h1>
          </div>
          <motion.div
            className='relative'
            variants={slideIn("right", "tween", 0.2, 1)}
          >
            <div className=' absolute h-[300px] w-full hero-gradient rounded-tl-[140px] -z-[10] -top-[30px] ' />
            <img
              src={cover}
              className='relative h-[350px] w-full object-cover rounded-tl-[140px] '
              alt=''
            />
            <a href='#explore'>
              <div className='relative w-full flex justify-end -mt-[50px] pr-[40px]'>
                <img
                  className='w-[100px] h-[100px] object-contain'
                  src={stamp}
                  alt=''
                />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
