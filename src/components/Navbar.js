import React from "react"
import { motion } from "framer-motion"
import { navVariants } from "../data/motion"
import search from "../assets/search.svg"
import menu from "../assets/menu.svg"

function Navbar() {
  return (
    <div className='px-6 sm:px-48'>
      <motion.div
        className='py-4 relative '
        variants={navVariants}
        initial='hidden'
        whileInView='show'
      >
        <div className='gradient-01 absolute w-[50%] inset-0' />
        <div className="flex justify-between">
          <img src={search} alt='' />
          <h2 className="uppercase text-[20px] font-medium">Metaverse</h2>
          <img src={menu} alt="" />
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
