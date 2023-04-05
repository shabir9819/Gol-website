import React from "react";
import { test_cards } from "../../../constants/constants";

import Testomonials_card from "../../Card/Testomonials_card";

export default function Testomonials() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="text-[32px] text-[#3A3A3A] font-bold leading-[43px] text-center w-full mb-[74px] flex justify-center ">

        <h1 className="w-[401px]" >What Our Clients Says About Us</h1>
      </div>

        <div className="flex flex-row  flex-wrap justify-center">

      {test_cards.map((person, index)=>{
          return <Testomonials_card key={person.id} {...person} test_cards= {test_cards} />
        })}
        </div>

        <div className="card__dots flex flex-row  gap-[24px] justify-center mb-[80px]">
                {
                    test_cards.map((card, index)=>{
                        return  <div className={`w-[32px] h-[32px] rounded-full border-[1px] border-[#3282AD] ${(index=== 1) ? "bg-[#3282AD]" : "bg-white"}`}></div>
                    })
                }
                </div>
      
      </section>
    </>
  );
}
