import React from "react"

function NewFeature({ imgUrl, title, subtitle }) {
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-6 '>
        <div className='h-[70px] w-[70px] bg-[#323f5b] rounded-[24px] flex justify-center items-center  '>
          <img className='object-contain' src={imgUrl} />
        </div>
        <div className="flex flex-col ">
          <h1>{title}</h1>
          <p className='w-[370px] text-[18px] text-[#B0B0B0]'>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default NewFeature
