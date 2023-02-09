import { motion } from "framer-motion"
import React from "react"
import { staggerContainer } from "../data/motion"

import { TitleText, TypingText } from "./CustomText"
import { insights} from "../data/data"
function Insight() {
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
            Insights about roseverse
          </h4>
        }
      />
      </motion.div>
      </div>

  )
}

export default Insight