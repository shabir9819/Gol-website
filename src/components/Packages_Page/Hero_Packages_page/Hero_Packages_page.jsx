import React from "react";
import PreBlurLoader from "../../PreBlurLoader/PreBlurLoader";
import { boat__img, map1__page2 } from "../../../assets/images/images";

export default function Hero_Packages_page() {
  return (
    <>
      <section className="packagesPage__hero overflow-hidden h-[250px] md:h-[400px] lg:h-[688px] mb-6 md:mb-[88px]">
        <div className="w-full flex justify-center items-center relative">
          <div className=" floating__header w-full   absolute text-center flex justify-center items-center flex-col">
            <h1 className= "text-[28px] leading-[37px] md:text-[48px] text-[#3A3A3A] md:leading-[67px] font-bold mb-[96px]">
              Maldives
            </h1>
            <div className="w-[200px] h-[40px] md:w-[250px] md:h-[50px] lg:w-[428px] lg:h-[60px] bg-transparent  flex items-center relative z-[10]">
              <input
                type="text"
                className="w-[100%] h-[100%] pl-7 pr-16 bg-transparent text-[18px] text-[#3282AD] leading-[25px] border-none outline-none absolute"
                placeholder="Type a destination"
                required
                id="search"
              />
              <label htmlFor="search" className=" w-full h-full bg-transparent border-[1px] border-[#979C9E] outline-none px-[32px]  rounded-full"/>
              <span className="text-white absolute right-1 w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] bg-[#7A7A7A] rounded-full grid place-content-center">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          {/* <img
            src={map1__page2}
            alt="map1__page2"
            className=" w-[full] h-[100%] lg:w-[896px] lg:h-[445px]"
          /> */}
          <PreBlurLoader imgSrc={map1__page2} imgId={"map1__page2"} cssText={'w-[full] h-[100%] lg:w-[896px] lg:h-[445px]'} blurId={"L6PZfSi_.AyE_3t7t7R**0o#DgR4"} type={"image"}/>

          {/* <img
            src={boat__img}
            alt="boat__img"
            className="absolute w-[180px] md:w-[250px] lg:w-[444px] top-[0%] right-[-7%] md:top-[30%] md:right-[1%] lg:top-[13%] lg:right-[-1%] z-[5]"
          /> */}
          <PreBlurLoader imgSrc={boat__img} imgId={"boat__img"} cssText={'absolute w-[180px] md:w-[250px] lg:w-[444px] top-[0%] right-[-7%] md:top-[30%] md:right-[1%] lg:top-[13%] lg:right-[-1%] z-[5]'} blurId={"LNN^Ys-.%gWXtRWExtWA~pIVMxoI"} type={"image"}/>


          <div className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]  absolute right-[15%] bottom-[20%] flex justify-center items-center spiral_rotate">
            <span className="w-full absolute h-full bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full"></span>
            <span className="w-[80%] absolute h-[80%] bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full"></span>
            <span className="w-[60%] absolute h-[60%] bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full"></span>
            <span className="w-[40%] absolute h-[40%] bg-transparent border-dotted border-2 border-[#7d848b90] rounded-full"></span>
          </div>
        </div>
      </section>
    </>
  );
}
