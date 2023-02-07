import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "../data/motion"
import one from "../assets/planet-08.png"
import two from "../assets/planet-08.png"
import three from "../assets/planet-08.png"
import { explore } from "../data/data"
function Explore() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % explore.length)
      console.log(index)
    }, 2000)
  }, [index])

  const mod = (n, m) => {
    let result = n % m
    return result >= 0 ? result : result + m
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className=''
    >
      <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className=' w-[100%] h-[525px] relative flex justify-center'>
        {explore.map((item, i) => {
          const indexLeft = mod(index - 1, explore.length)
          const indexRight = mod(index + 1, explore.length)
     
          let className = "card"
          if (i === index) {
            className = "card "
          } else if (i === indexRight) {
            className = "card card-right"
          } else if (i === indexLeft) {
            className = "card card-left"
          
          } else {
            className = "card "
          }
          return (
            <img className={className} key={item.id} src={item.imgUrl} alt='' />
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Explore
