import React from 'react'

function StartSteps({number,title}) {
  return (
    <div className='flex  items-center '>
      <div className='h-[70px] w-[70px] bg-[#323f5b] rounded-[24px] flex justify-center items-center '>
      <p className='text-[20px] font-bold '>{number}</p>
      </div>
      <p className='w-[370px] ml-[30px] sm:text-[18px] text-[14px] text-[#B0B0B0]'>{title}</p>
    </div>
  )
}

export default StartSteps