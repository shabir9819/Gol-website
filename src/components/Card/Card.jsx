import React from "react";



export default function Card({heading, para, img_src, id}) {
  return (
    <div className="card1 w-full h-auto lg:w-[390px] md:h-[516px] relative rounded-[8px] overflow-hidden cards ">
      <p className="absolute text-[16px] text-[#3282AD] leading-[21px] font-bold bg-white rounded-full px-[12px] py-[5px] top-4 right-4">&#8377; 500</p>
      <img
        src={img_src}
        alt={id}
        className="w-full h-[150px] md:h-[352px] "
      />
      <div className="cardDetails p-[16px] ">
        <div className="w-full relative">
            <p className="absolute right-0 text-[16px] leading-[24px] font-bold"><span className="text-[#3282AD]"><i class="fa-solid fa-star"></i></span>  4.5</p>
          <div className="flex flex-col w-[266px] mb-[34px] ">
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
          <div className="w-full flex justify-center">

          <button className="px-[32px] py-1 bg-[#3282AD] text-[20px] text-white leading-[27px] font-semibold text-center align-middle rounded-[4px] capitalize">book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
