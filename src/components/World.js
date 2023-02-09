import React from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "../data/motion"
import whatsnew from "../assets/whats-new.png"
import { TitleText, TypingText } from "./CustomText"
import map from "../assets/map.png"
import people01 from "../assets/people-01.png"
import people02 from "../assets/people-02.png"
import people03 from "../assets/people-03.png"
import upside from "../assets/upside.png"
import lab from "../assets/lab.png"

function World() {
  return (
    <div className='px-6 sm:px-48'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex  flex-col mt-48 '
      >
    
        <TitleText
          title={
            <h4 className='text-center'>
              Track friends around you and
              <br className='hidden sm:block' />
              invite them to play together in <br className='hidden sm:block' />
              the same world
            </h4>
          }
        />
        <motion.div
        variants={fadeIn('up','tween',0.3,1)}
        className='relative mt-20 w-[100%] h-[550px] flex'>
            <img src={map} className='absolute w-full h-full object-cover'  alt="" />
            <div className="absolute bottom-0 right-0 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                <img src={people01} className='w-full h-full' alt="" />

            </div>
            <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                <img src={people02} className='w-full h-full' alt="" />

            </div>
            <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                <img src={people03} className='w-full h-full' alt="" />

            </div>
            <div className="absolute top-[45%] left-[15%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
                <img src={upside} className='w-full h-full rounded-[24px]' alt="" />

            </div>
            <div className="absolute top-[15%] right-[15%] w-[200px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
                <img src={lab} className='w-full h-full rounded-[24px]' alt="" />

            </div>
         
        </motion.div>
      </motion.div>
    </div>
  )
}

export default World
