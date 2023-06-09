import React from 'react'
import "./hero.css"
import { compass, girl_img, map, plane, plane_route } from '../../../assets/images/images'
import Button from '../../Button/Button'
import PreBlurLoader from '../../PreBlurLoader/PreBlurLoader'


export default function Hero() {
  return (
    <>
     <section className='w-full flex flex-col md:flex-row justify-around items-center md:items-start md:justify-center overflow-hidden relative md:pl-10 h-auto lg:h-[848px]'>
        <div className='flex flex-col w-full items-center md:w-[468px] md:items-start lg:justify-center mt-[4%]'>
            <div className='compass__wrapper bg-[#D2F4FF]  w-[197px] h-[64px] pl-[37px] pr-[10px] flex flex-row justify-between items-center rounded-full mb-[40px]'>
                <p className='text-[26px] md:text-[36px] leading-[30px] md:leading-[50px] capitalize text-[#3A3A3A]'>visit</p>
                <span ><img src={compass} alt="compass" className='compass__img w-[48px] h-[48px]' /></span>
            </div>
            <div className='text-[34px] text-center md:text-start md:text-[44px] lg:text-[64px] font-bold leading-[50px] md:leading-[70px] lg:leading-[90px] capitalize mb-[40px]'>
            <h1 className='text-[#3A3A3A] '>The exotic <br /> <span className='text-[#3282AD]'>lakshwadweep</span> <br /> islands.</h1>

            </div>

            <Button btn_name = "Explore now"/>
        </div>
        <div  className='flex md:flex-1  '>
            <div className='relative md:absolute  right-0'  >

            {/* <img src={girl_img} alt="girl_img" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[421px] lg:h-[425px] object-contain rounded-[50%] overflow-hidden' /> */}
            <PreBlurLoader imgSrc={girl_img} imgId={"girl_img"} cssText={'w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[421px] lg:h-[425px] object-contain rounded-[50%] overflow-hidden'} blurId={"LRL|_ur=?aEO~VIn%h%2Ri%gNfn#"} type={"image"}/>

            <div className='map absolute lg:hidden top-[-10px] '  >
            <img src={map} alt="map" className='w-[full] h-[100%] scale-[1.4]' />

            </div>
            </div>
            <div className='map hidden md:flex md:absolute top-[-10px] '  >
            {/* <img src={map} alt="map" className='w-[full] h-[60%]' /> */}
            <PreBlurLoader imgSrc={map} imgId={"map"} cssText={'w-[full] h-[60%]'} blurId={"L6PZfSi_.AyE_3t7t7R**0o#DgR4"} type={"image"}/>

            </div>
            <div className='plane hidden md:visible md:absolute left-[34%] right[-6%] bottom-[-37%]'  >
            <img src={plane} alt="plane" className='w-[full] h-[60%]' />

            </div>
            
            
        </div>
       
     </section>

     
    </>
  )
}
