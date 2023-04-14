import React from 'react'
import { package_img1 } from '../../assets/images/images'

export default function Card2({id ,img_src, heading, para, review}) {
  return (
    <div className="card2 w-full h-[400px] md:h-[500px] lg:w-[394px] lg:h-[559px] relative rounded-[8px] overflow-hidden mr-0 lg:mr-[24px] mb-[69px] cards">
      
      <img
        src={img_src}
        alt= "img1"
        className="w-full h-[250px] md:h-[340px] lg:h-[410px] "
      />
      <div className="cardDetails lg:p-[16px]  ">
        <div className="w-full relative">
            <p className="absolute bottom-0 left-0 text-[16px] leading-[24px] font-bold"><span className="text-[#3282AD]"><i class="fa-solid fa-star"></i></span>  4.5 <span className=' font-light'>({review} Review)</span></p>
          <div className="flex flex-col w-[250px] md:w-[266px] mb-[12px] ">
            <h4 className="text-[20px] leading-[27px] font-semibold mb-[8px] inline-block capitalize">
              <span>
                <i className="fa-solid fa-location-dot w-[5pxpx] mr-1 "></i>
              </span>
             {heading}
            </h4>
            <p className="text-[14px] text-[#5A5A5A] leading-[19px] font-light ">
            {para}
            </p>
          </div>
          <div className="w-full flex justify-end">

          <button className="px-[16px] py-2 bg-[#3282AD] text-[14px] text-white leading-[17px] font-medium text-center align-middle rounded-[4px] capitalize">explore more</button>
          </div>
        </div>
      </div>
    </div>
  )
}
