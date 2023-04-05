import React from "react";
import { map2 } from "../../../assets/images/images";
import { card2 } from "../../../constants/constants";
import Card2 from "../../Card/Card2";

export default function Places() {
  return (
    <section className="w-full px-2 md:px-10 relative mb-[40px] md:mb-[50px] lg:mb-[98px]">
      <div className="text-center w-full px-1 md:px-4 lg:px-40 mb-[64px]">
        <h2 className="text-[32px] text-[#3A3A3A] font-bold leading-[43px]  w-full mb-[16px]">
          Island Stays
        </h2>
        <p className="text-[16px] text-[#5A5A5A] leading-[21px] w-full  mb-[64px]">
          One can choose from a variety of beautiful coral islands which offers
          different staying experiences from thatched huts to luxurious modern
          properties. Every island offers a wider range of water sports and
          beach activities for you to enjoy.
        </p>
      </div>
      <div className="places__card flex flex-col md:flex-row flex-wrap justify-center items-center relative">
        {card2.map((card, index) => {
          return <Card2 {...card} />;
        })}
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start h-auto md:h-[261px] bg-[#42A7C3] rounded-[15px] p-3 md:p-[32px] relative overflow-hidden">
        <div className="w-full lg:w-[513px] mb-2 md:mb-0">
          <h4 className="w-full text-center md:text-left md:w-[451px] text-[15px] md:text-[32px] leading-[20px] md:leading-[50px] font-bold text-[#FFFFFF] tracking-wider mb-1 md:mb-[32px]">
            Let’s Ready to Explore The World With Us.
          </h4>
          <p className="text-[12px] text-center md:text-left md:text-[16px] text-[#FFFFFF] leading-[28px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque efficitur ac quam in congue.
          </p>
        </div>
        <div className="map_img2 absolute md:relative w-full h-full md:w-[453px] md:h-[189px]">
          <img src={map2} alt="map2" />
        </div>
        <div className="relative md:absolute right-0 md:right-[32px]">
          <button className=" px-[26px] py-[10px] md:px-[36px] md:py-[16px] bg-[#FFFFFF] hover:text-[#3282AD] text-black text-[20px] font-semibold leading-[18px] rounded-[8px] align-middle capitalize">contact us</button>
        </div>
      </div>
    </section>
  );
}
