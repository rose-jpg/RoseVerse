import React from "react"

function NewFeature({ imgUrl, title, subtitle }) {
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-6 '>
        <div className='sm:h-[70px] sm:w-[70px] w-[50px] h-[50px]  bg-[#323f5b] sm::rounded-[24px] rounded-[14px] flex justify-center items-center  '>
          <img className=' object-contain' src={imgUrl} />
        </div>
        <div className="flex flex-col ">
          <h1>{title}</h1>
          <p className='w-[300px] sm:text-[18px] text-[12px] text-[#B0B0B0]'>{subtitle}</p>
        </div>
      </div>
    </div> 
  )
}

export default NewFeature
