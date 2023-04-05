import React from "react";


export default function Testomonials_card({ id, img_src, name, desc, star }) {
  return (
    <>
      <div className="test_card w-full lg:w-[393px] h-auto lg:h-[524px] bg-[#FFFFFF] rounded-[15px] m-[24px] flex flex-col items-center p-[27px] cards">
        <img src={img_src} alt={id} className="testomonial__img w-[131px] h-[131px] mb-[17px]" />
        <p className="text-[22px] leading-[22px] text-[#222222] font-semibold tracking-[0.03em] mb-[8px] capitalize">
          {" "}
          {name}
        </p>
        <p className="text-[18px] leading-[20px] text-[#555555] font-semibold tracking-[0.03em] mb-[20px] lg:mb-[59px] capitalize">
          {" "}
          Toranto, Canada{" "}
        </p>
        <p className="text-[18px] text-[#5A5A5A] leading-[29px] font-normal text-center px-[50px] mb-[20px] md:mb-[30px]">
         {desc}
        </p>
        <div className="flex flex-row flex-wrap">
          <img src={star} alt="star" className="m-[4px]" />
          <img src={star} alt="star" className="m-[4px]" />
          <img src={star} alt="star" className="m-[4px]" />
          <img src={star} alt="star" className="m-[4px]" />
          <img src={star} alt="star" className="m-[4px]" />
        </div>
      </div>
    </>
  );
}
