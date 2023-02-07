import React from 'react'
import { monthly, trendingAuction } from "../data/data"
function Monthly() {
  return (
    <div className=''>
        <h1 className="text-[38px] font-outfit font-bold flex justify-center pt-20 text-white">TRENDING AUCTIONS</h1>
        <div className='w-[100%] h-[100%] relative'>
        {monthly.map((item)=>{
          return(
            <div className=''>
              <img className={item.cName} src={item.img} alt="" />
            </div>
          )
        })}
  
        </div>
    
    </div>
  )
}

export default Monthly