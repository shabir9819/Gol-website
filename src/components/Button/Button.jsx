import React from 'react'

export default function Button({btn_name}) {
  return (
    <div>

            <button className='text-[#3282AD] px-[32px] py-[16px] border-2 border-[#3282AD] hover:bg-[#3282AD] hover:text-[white] hover:border-[white] duration-200 rounded-[5px] text-[16px] font-bold capitalize'>{btn_name}</button>
            </div>
  )
}
