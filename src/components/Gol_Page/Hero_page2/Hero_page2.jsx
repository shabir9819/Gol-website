import React from 'react'
import { map1__page2 } from '../../../assets/images/images'


export default function Hero_page2() {
  return (
    <>
    <section>
        <div className='w-full flex justify-center items-center overflow-hidden'>
        <img src={map1__page2} alt="map1__page2" className='w-[80%] h-[60%] lg:w-[896px] lg:h-[445px]' />

            <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]  absolute  flex justify-center items-center spiral_rotate' >
                <h1 className='text-[24px] md:text-[38px] lg:text-[48px] text-[#3A3A3A] leading-[30px] md:leading-[67px] font-bold capitalize text-center'> about us</h1>
                <span className='w-full absolute h-full bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full'></span>
                <span className='w-[80%] absolute h-[80%] bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full'></span>
                <span className='w-[60%] absolute h-[60%] bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full'></span>
                <span className='w-[40%] absolute h-[40%] bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full'></span>
            </div>
        </div>
    </section>
    </>
  )
}
