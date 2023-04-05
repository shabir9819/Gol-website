import React from "react";
import { team1__reactangle } from "../../../assets/images/images";
import { teams, team__social_links } from "../../../constants/constants";

export default function Team_section() {
  return (
    <>
      <section className="w-full p-4 md:p-10 lg:mb-[88px] relative">
        <div className="text-center w-full px-2 md:px-40 mb-[64px] flex flex-col py-[20px] md:py-[51px] items-center bg-[#F6FDFF]  rounded-[8px]">
          <h2 className="text-[32px] text-[#3A3A3A] font-bold leading-[43px]  w-full mb-[16px]">
            Our team
          </h2>
          <p className="text-[16px] text-[#5A5A5A] leading-[21px] w-full md:w-[377px]  ">
            Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
            at nihil tantas platonem eos.
          </p>
        </div>

        <div className="teamDetails w-full flex flex-col lg:flex-row justify-center ">
            <div className="teamMem__img hidden lg:flex flex-[0.2] flex-row md:flex-col items-center justify-center mr-[41px] ">
                {teams.map((mem, index)=>{
                     return <img src={mem.img_src} alt={mem.id} key={mem.id} className="w-[64px] h-[64px] object-contain"/>   
                })}
            </div>

            {/* mobile view */}
            <div className="teamMem__img flex-1 w-full flex lg:hidden flex-row lg:flex-col items-center justify-center mb-[10px] ">
                {teams.map((mem, index)=>{
                     return <img src={mem.img_src} alt={mem.id} key={mem.id} className="w-[64px] h-[64px] object-contain"/>   
                })}
            </div>
            <div className="flex-1 w-full flex justify-center">
                <img src={team1__reactangle} alt="team1__rectangle" className=" max-w-full  lg:max-w-[598px] max-h-[420px] object-contain" />
            </div>
            <div className="team__memberDetail flex-1 px-[28px] flex flex-col justify-start items-start relative">
                <h4 className="w-full text-[24px] text-center md:text-left text-[#3282AD] leading-[76px] font-bold mb-[16px]">Sebastian Bennett</h4>
                <p className="w-full text-[16px] text-[#3A3A3A] leading-[24px] text-center md:text-left font-semibold capitalize mb-[16px]">Founder, Lead Photographer, CEO</p>
                <p className="text-[16px] text-[#3A3A3A] leading-[24px] font-normal capitalize mb-[15px]">Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera integre suavitate per an, alienum phaedrum te sea. Ex sea causae dolores, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire.</p>
            <div className="social_logo relative w-full lg:absolute flex flex-row justify-center items-center lg:justify-start bottom-0 left-7">
                {team__social_links.map((link)=>{
                  return <span><img src={link.img_src} alt={link.id} key={link.id} /></span>
                })}
            </div>
            </div>
        </div>
      </section>
    </>
  );
}
