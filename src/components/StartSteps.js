import React from 'react'

function StartSteps({number,title}) {
  return (
    <div className='flex flex-row items-center gap-3'>
      <div className='sm:h-[70px] sm:w-[70px] w-[50px] h-[50px]  bg-[#323f5b] sm::rounded-[24px] rounded-[14px] flex  justify-center items-center '>
      <p className='text-[20px] font-bold '>{number}</p>
      </div>
      <p className=' w-[270px] sm:text-[18px] text-[14px] '>{title}</p>
    </div>
  )
}

export default StartSteps