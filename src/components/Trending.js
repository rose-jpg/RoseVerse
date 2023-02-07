import React from "react"
import { trendingAuction } from "../data/data"
import BG2 from "../assets/BGG.png"

function Trending() {
  const backgroundImageStyle = {
    backgroundImage: `url("${BG2}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  }
  
  return (
    <div style={backgroundImageStyle} >
      <h1 className="text-[38px] font-outfit font-bold flex justify-center pt-20 text-white">TRENDING AUCTIONS</h1>
      <div className='relative flex justify-center items-center flex-wrap py-28'>
        {trendingAuction.map((item) => {
          return (
            <div className='relative w-[240px] h-[320px] bg-black rounded-[6px] text-white flex justify-center items-center mx-[10px] my-[30px] trans'>
              <span></span>
              <div className="relative z-10">
                <img 
                  className='w-[300px] h-[300px] object-contain mt-[-175px]'
                  src={item.img}
                  alt=''
                />
              </div>
            </div>
          )
        })}
        
      </div>
    
     
    </div>
  )
}

export default Trending
