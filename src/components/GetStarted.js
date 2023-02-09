import { motion } from "framer-motion"
import React from "react"
import { staggerContainer, fadeIn, planetVariants } from "../data/motion"
import getStarted from "../assets/get-started.png"
import { TitleText, TypingText } from "./CustomText"
import { newFeatures, startingFeatures } from "../data/data"
import StartSteps from "./StartSteps"
function GetStarted() {
  return (
    <div className='px-6 sm:px-48'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex sm:flex-row flex-col-reverse sm:mt-48 mt-10'
      >
        <motion.div variants={planetVariants("left")} className=' flex flex-1'>
          <img
            className='w-[90% h-[90%] object-contain relative'
            src={getStarted}
            alt=''
          />
          <div className='gradient-01 absolute w-[20%] inset-0 z-[-10]' />
        </motion.div>

        <motion.div
          className='flex  flex-col flex-1  '
          variants={fadeIn("left", "tween", 0.2, 1)}
        >
          <TypingText title='| How Roseversus Works' />

          <TitleText
            title={
              <>
                Get Started with
                <br className='hidden sm:block' /> just a few clicks
              </>
            }
          />
          <div className=' sm:gap-[20px] gap-[10px] flex flex-col mt-[30px] text-[8px]'>
            {startingFeatures.map((feature, index) => {
              return (
                <StartSteps key={feature} number={index + 1} title={feature} />
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GetStarted
