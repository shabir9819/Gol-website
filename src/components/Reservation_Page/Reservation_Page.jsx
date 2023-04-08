import React from "react";
import "./reservation__page.css";
import { reservation__hero } from "../../assets/images/images";
import Button from "../Button/Button";

export default function Reservation_Page() {
  return (
    <>
      <section id="reservation_page" className="w-full overflow-hidden ">
        <div className="reservation__image w-full h-[calc(100vh-80vh)] md:h-[calc(100vh-45vh)] relative">
          <img
            src={reservation__hero}
            alt="reservation__hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute w-full top-[50%] text-center">
            <h2 className="text-[34px] md:text-[44px] text-[white] leading-[62px] font-bold capitalize">
              Find Reservations
            </h2>
          </div>
        </div>
        <div className="booking__section flex flex-col justify-start w-full relative px-4 py-4 md:px-32 md:py-16">
          <div className="booking__inner_section w-full bg-[#fff6f0] p-4 rounded-sm ">
            <div className="relative w-full md:w-[40%]  h-[56px] mb-[24px]">
              <input
                className="reservation__input absolute w-full h-full text-[16px] text-[#1C1B1F] leading-[20px] font-normal"
                type="email"
                name="email"
                id="email"
                required
              />

              <label
                className="absolute  text-[16px] md:text-[20px]  text-[#112211] bg-[#FFFFFF] leading-[20px] font-normal top-[30%] left-[5%] capitalize"
                htmlFor="email"
              >
                email
              </label>
            </div>
            <div className="relative w-full md:w-[40%]  h-[56px] mb-[24px]">
              <input
                className="reservation__input absolute w-full h-full text-[16px] text-[#1C1B1F] leading-[20px] font-normal"
                type="number"
                name="booking_id"
                id="booking_id"
                required
              />

              <label
                className="absolute  text-[16px] md:text-[20px]  text-[#112211] bg-[#FFFFFF] leading-[20px] font-normal top-[30%] left-[5%] capitalize"
                htmlFor="booking_id"
              >
                booking ID
              </label>
            </div>
            <span className="w-full  mb-[40px] md:mb-[80px]">
              <Button btn_name="find" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
