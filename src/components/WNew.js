import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from "../data/motion"
import whatsnew from "../assets/whats-new.png"
import { TitleText, TypingText } from "./CustomText"
import { newFeatures, startingFeatures } from "../data/data"
import NewFeature from "./NewFeature "

function WNew() {
  return (
<div className='px-6 sm:px-48'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex sm:flex-row flex-col sm:mt-48 mt-10'
      >
      

        <motion.div
          className='flex  flex-col  flex-1 '
          variants={fadeIn("left", "tween", 0.2, 1)}
        >
          <TypingText title="| What's New?" />

          <TitleText
            title={
              <>
               What's New about <br className='hidden sm:block' /> Metaversus?
              </>
            }
          />
          <div className=' gap-[20px] flex flex-col mt-[30px]'>
          {newFeatures.map((feature) => {
              return (
                <NewFeature key={feature.title} {...feature} />
              )
            })}
          </div>
        </motion.div>
        <motion.div variants={planetVariants("right")} className=' flex flex-1'>
          <img
            className='w-[90% h-[90%] object-contain'
            src={whatsnew}
            alt=''
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WNew