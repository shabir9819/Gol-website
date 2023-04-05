import React from "react";
import { card1, packages } from "../../../constants/constants";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import "./packages.css";

export default function Packages() {
  return (
    <>
      <section className="mt-[32px] md:mt-[152px] px-10 ">
        <form className="mt-[75px] form__section bg-[#FFFFFF] py-[16px] px-[24px] mb-[88px]">
          <h4 className="text-[20px] font-bold leading-[27px] text-[#112211] mb-[32px]">
            Where are you flying?
          </h4>
          <div className="container flex flex-col flex-1 md:flex-0 md:flex-row items-start md:items-start gap-[10px] justify-center">
          <div className="relative w-full md:w-[322px] h-[56px] mr-[24px]">
            <input className="packages__input absolute w-full h-full text-[16px] text-[#1C1B1F] leading-[20px] font-normal" type="text" name="from" id="from" required />
            
            <label className="absolute  text-[16px] text-[#112211] bg-[#FFFFFF] leading-[20px] font-normal top-[30%] left-[5%] capitalize " htmlFor="from">
              from - to
            </label>
          </div>
          <div className="relative w-full md:w-[140px]  h-[56px] mr-[24px]">
            <input className="packages__input absolute w-full h-full text-[16px] text-[#1C1B1F] leading-[20px] font-normal" type="text" name="trip" id="trip" required />
           
            <label className="absolute  text-[16px] text-[#112211] bg-[#FFFFFF] leading-[20px] font-normal top-[30%] left-[5%] capitalize" htmlFor="trip">
              trip
            </label>
          </div>
          <div className="relative w-full md:w-[322px] h-[56px] mr-[24px]">
            <input className="packages__input absolute w-full h-full text-[16px] text-[#1C1B1F] leading-[20px] font-normal" type="text" name="return" id="return" required />
           
            <label className="absolute  text-[16px] text-[#112211] bg-[#FFFFFF] leading-[20px] font-normal top-[30%] left-[5%] capitalize" htmlFor="return">
              depart-return
            </label>
          </div>
          <div className="relative w-full md:w-[322px] h-[56px]">
            <input className="packages__input absolute w-full h-full text-[16px] text-[#1C1B1F] leading-[20px] font-normal" type="text" name="passe_class" id="passe_class" required />

            <label className="absolute  text-[16px] text-[#112211] bg-[#FFFFFF] leading-[20px] font-normal top-[30%] left-[5%] capitalize" htmlFor="passe_class">
              passenger - class
            </label>
          </div>
          </div>
        </form>

        <div className="w-full">
            <h2 className="text-[32px] text-[#3A3A3A] font-bold leading-[43px] text-center w-full mb-[16px]">Best Packages For You</h2>
            <p className="text-[16px] text-[#5A5A5A] leading-[21px] w-full text-center mb-[64px]">This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>

            <div className="packages flex flex-col flex-1 flex-wrap md:flex-row mb-[88px]">
                {packages.map((pack, index)=>{
                    return <p className={`px-[80px] py-[24px] my-[10px] bg-[white] text-[#3282AD] hover:bg-[#3282AD] hover:text-[white] hover:border-[#7e8081] cursor-pointer  border-2 border-[#3A3A3A] duration-200 rounded-[5px] text-center font-bold capitalize flex-1  ${(index < packages.length) ? "mr-1" : "mr-0"}`} key={pack.id}> {pack.name}  </p>
                })}
            </div>
            <div className="flex flex-col md:flex-row flex-wrap gap-[26px] mb-[12px] md:mb-[32px] justify-center">

                {
                    card1.map((card, index)=>{
                        return  <Card {...card}/>
                    })
                }
                </div>

                <div className="card__dots flex flex-row gap-[24px] justify-center mb-[40px] md:mb-[80px]">
                {
                    card1.map((card, index)=>{
                        return  <div className={`w-[22px] h-[22px] md:w-[32px] md:h-[32px] rounded-full border-[1px] border-[#3282AD] ${(index=== 1) ? "bg-[#3282AD]" : "bg-white"}`}></div>
                    })
                }
                </div>


                {/* button */}
                <div className="w-full text-center mb-[40px] md:mb-[80px]">

                <Button btn_name= "explore more"/>
                </div>
           
        </div>
      </section>
    </>
  );
}
