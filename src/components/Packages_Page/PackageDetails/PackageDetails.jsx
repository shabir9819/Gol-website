import React, {useState } from "react";
import {
  FAQ__search_icon,
  helpline__mail,
  helpline__phone,
  mail,
  package__details_place1,
  phone,
  user,
} from "../../../assets/images/images";
import {
  addtionalDetails_boxes,
  customer__inputSection,
  FAQ__list,
  itineraryDays_details,
} from "../../../constants/constants";
import FAQ_list_boxes from "./FAQ__list_boxes/FAQ__list_box";

export default function PackageDetails() {
  

  const [packageToggle, setPackageToggle] = useState("overview")


  // PACKAGE__DETAILS_LEFT_SECTION_COMPONENTS

  const Package__details_heading = () => (
    <>
      <ul className="package__details-heading flex flex-row flex-wrap w-full mb-[24px] rounded-[5px]">
        <li className={`flex-1 px-2 md:px-4 py-3 text-[12px] md:text-[16px] ${packageToggle === "overview" && "text-[#3A3A3A] font-bold"} leading-[22px] uppercase font-semibold relative  cursor-pointer text-center `} onClick={()=> setPackageToggle("overview")}>
          overview{" "}
          {packageToggle ==="overview" && <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#3282AD] rounded-[8px]" />}
        </li>
        <li className={`flex-1 px-2 md:px-4 py-3 text-[12px] md:text-[16px] ${packageToggle === "itinerary_details" && "text-[#3A3A3A] font-bold"} leading-[22px] uppercase font-semibold relative cursor-pointer text-center`} onClick={()=> setPackageToggle("itinerary_details")}>
          itinerary
          {packageToggle ==="itinerary_details" && <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#3282AD] rounded-[8px] " />}
        </li>

        <li className={`flex-1 px-2 md:px-4 py-3 text-[12px] md:text-[16px] ${packageToggle === "add_information" && "text-[#3A3A3A] font-bold"} leading-[22px] uppercase font-semibold relative cursor-pointer text-center`} onClick={()=> setPackageToggle("add_information")}>
          additional info
          {packageToggle ==="add_information" && <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#3282AD] rounded-[8px] " />}
        </li>
      </ul>
      
    </>
  );

  const Package__overview = () => (
    <>
    <div className="place__image mb-[32px]">
        <img src={package__details_place1} alt="package__details_place1" />
      </div>
      <div className="package_details-desc pb-10 mb-12 border-b-2 border-b-[#A2A8AB]">
        <h4 className="text-[24px] text-[#5A5A5A] leading-[33px] font-semibold mb-[24px]">
          Package Overview
        </h4>
        <p className="text-[16px] text-[#5A5A5A] leading-[24px] font-normal mb-8">
          Experience World-class Service at Kandima Maldives - Escape the
          ordinary Located on the largest island in Dhaalu Atoll, Kandima
          Maldives has the longest outdoor swimming pool in the Maldives, an
          abundance of water-sports, the largest beach club and tennis and
          basketball courts. It offers a marine biology centre, an art studio
          and cooking classes. Located at a 30-minute flight from Male’ and
          followed by a 20-minute boat ride to the island, the resort offers
          studios and villas with a private terrace and private pool. They offer
          endless tropical views. For fitness lovers, Kandima Maldives has a gym
          with personal trainers and provides classes like anti-gravity yoga,
          Zumba, aqua-bike classes and POUND® fitness lessons. Guests can hire
          bikes or electric scooters. Guests can choose among the 10 restaurants
          and bars the property offers. Sea Dragon serves authentic Chinese
          cuisine while Forbidden Bar plays live music in the night. Start the
          day at Aroma with fresh beverages and baked goods.
        </p>
        <p className="text-[16px] text-[#5A5A5A] leading-[24px] font-normal ">
          For total relaxation, choose from massages, facials and a range of
          Signature local treatments. The Kandima Kids Club is run by a
          multilingual team of certified child care-givers. We speak your
          language! Kandima Maldives - Escape the ordinary...
        </p>
      </div>
    </>
  );

  const Package__itenerary_details = () => (
    <>
      <div className="itinerary__details mb-[20px] md:mb-12 border-b-2 border-b-[#A2A8AB]">
        <h4 className="text-[24px] text-[#3A3A3A] leading-[33px] font-semibold capitalize">
          day wise itinerary
        </h4>

        {itineraryDays_details.map((itinerary, _) => {
          return (
            <div
              className="itinerary__days flex flex-col md:flex-row py-[16px] md:py-[46px]  justify-center"
              key={itinerary.day}
            >
              <div className="flex-1 md:flex-[0.5] pt-[10px]">
                <span className="px-[46px] py-[11px] text-[14px] md:text-[20px] text-[#FFFFFF] leading-[27px] font-semibold bg-[#3282AD] rounded-[5px] capitalize text-center align-middle">
                  {itinerary.day}
                </span>
              </div>
              <div className="days__details flex-1 p-[24px] pr-[34px]">
                <h5 className="text-[16px] text-[#5A5A5A] leading-[22px] uppercase font-semibold mb-[17px]">
                  {itinerary.activity}
                </h5>
                <p className="text-[16px] text-[#5A5A5A] leading-[22px] font-normal py-[17px] border-t-[1px] border-t-[#A2A8AB]">
                  {itinerary.descr}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  const Package__add_information = () => (
    <>
      <div className="add__information flex flex-col justify-start py-[48px]">
        <h4 className="text-[24px] text-[#3A3A3A] leading-[33px] font-semibold">
          Additional information
        </h4>

        {addtionalDetails_boxes.map((box, _) => {
          return (
            <div
              className="add__information-boxes ml-0 m-1 md:m-[32px] p-[32px] rounded-[5px]"
              key={box.title}
            >
              <h5 className="text-[16px] text-[#3A3A3A] leading-[22px] font-bold uppercase mb-[24px]">
                {box.title}
              </h5>
              <ul className="flex flex-col justify-start text-[16px] text-[#5A5A5A] leading-[22px] font-normal ml-[20px]">
                {box.details.map((boxDetail, _) => {
                  return (
                    <li className="mb-[16px] list-disc" key={boxDetail.id}>
                      {" "}
                      {boxDetail.desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );

  // PACKAGE__DETAILS_RIGHT_SECTION_COMPONENTS
  const Package__offer = () => (
    <>
      <div className="rightsection-offer w-full px-[32px] py-[15px] flex flex-row justify-center items-center mb-[26px]">
        <p className="text-[16px] text-black leading-[22px] font-semibold mr-[24px]">
          Starting from
        </p>
        <span className="text-[24px] text-[#3282AD] leading-[32px] font-bold">
          ₹50,999
        </span>
      </div>
    </>
  );
  const Package__customer_details = () => (
    <>
      <div className="rightsection__customerDetails ">
        <div className="topSection w-full bg-[#F6FDFF]">
          <div className="w-full md:w-[70%] text-center px-5 py-4">
            <h4 className="text-[16px] text-[#3A3A3A] leading-[22px] font-semibold">
              Want to Go For A Memorable Holiday?
            </h4>
            <p className="w-full text-[12px] text-[#3A3A3A] leading-[17px] font-light ">
              Provide Your Details to Know Best Holiday Deals
            </p>
          </div>
        </div>

        <div className="bottomSection px-[28px] py-[24px] mb-[48px]">
          {customer__inputSection.map((inputSection, _) => {
            return (
              <div
                className="w-full flex flex-col mb-[22px]"
                key={inputSection.id}
              >
                <label
                  className="text-[16px] text-[#3A3A3A] leading-[22px] capitalize font-normal mb-[16px] cursor-pointer"
                  htmlFor={inputSection.id}
                >
                  {inputSection.title}
                </label>
                <div className="inputSection w-full h-[42px]  relative flex items-center">
                  <input
                    type={inputSection.type}
                    name={inputSection.id}
                    id={inputSection.id}
                    className="absolute text-[16px] leading-[22px] pl-[40px] pr-1 w-full h-full bg-transparent border-none outline-none  "
                    placeholder={inputSection.placeholder}
                    required
                  />
                  <label
                    htmlFor={inputSection.id}
                    className="absolute w-full h-full border-[1px] border-[#A2A8AB] outline-none bg-[#FFFFFF] rounded-[5px] z-[-5] "
                  />
                  <span className="absolute left-0 p-2">
                    <img
                      src={inputSection.img_src}
                      alt={inputSection.img_src_id}
                      className="w-[15px] h-[15px] object-contain"
                    />
                  </span>
                </div>
              </div>
            );
          })}

          <div className="bottomSection__contactDetails relative">
            <div className="w-full relative mb-[16px]">
              <h4 className="text-[16px] text-[#3A3A3A] leading-[22px] font-normal">
                Contact Details
              </h4>
              <span className="w-[50%] md:w-[65%] h-[2px] absolute bottom-1/2 right-4 bg-[#A2A8AB] rounded-full"></span>
            </div>
            <div className="w-full flex flex-col mb-[22px]">
              <div className="inputSection w-full h-[42px]  relative flex items-center mb-[16px]">
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  className="absolute text-[16px] leading-[22px] pl-[40px] pr-1 w-full h-full bg-transparent border-none outline-none  "
                  placeholder="Your name"
                  required
                />
                <label
                  htmlFor="clientName"
                  className="absolute w-full h-full border-[1px] border-[#A2A8AB] outline-none bg-[#FFFFFF] rounded-[5px] z-[-5] "
                />
                <span className="absolute left-0 p-2">
                  <img
                    src={user}
                    alt="user"
                    className="w-[15px] h-[15px] object-contain"
                  />
                </span>
              </div>
              <div className="inputSection w-full h-[42px]  relative flex items-center mb-[16px]">
                <input
                  type="text"
                  name="clientEmail"
                  id="clientEmail"
                  className="absolute text-[16px] leading-[22px] pl-[40px] pr-1 w-full h-full bg-transparent border-none outline-none  "
                  placeholder="Your E-mail address"
                  required
                />
                <label
                  htmlFor="clientEmail"
                  className="absolute w-full h-full border-[1px] border-[#A2A8AB] outline-none bg-[#FFFFFF] rounded-[5px] z-[-5] "
                />
                <span className="absolute left-0 p-2">
                  <img
                    src={mail}
                    alt="mail"
                    className="w-[15px] h-[15px] object-contain"
                  />
                </span>
              </div>
              <div className="phoneSection w-full flex flex-row justify-between mb-[32px]">
                <div className="inputSection w-[20%] h-[42px]  relative flex items-center justify-center text-center mb-[16px]">
                  <input
                    type="text"
                    name="clientEmail"
                    id="clientEmail"
                    className="absolute text-[16px] leading-[22px]  pr-1 w-full h-full bg-transparent border-none outline-none text-center "
                    value="+91"
                    readOnly
                    required
                  />
                  <label
                    htmlFor="clientEmail"
                    className="absolute w-full h-full border-[1px] border-[#A2A8AB] outline-none bg-[#FFFFFF] rounded-[5px] z-[-5] "
                  />
                </div>
                <div className="inputSection w-[70%] h-[42px]  relative flex items-center mb-[16px]">
                  <input
                    type="telephone"
                    name="clientPhone"
                    id="clientPhone"
                    className="absolute text-[16px] leading-[22px] pl-[40px] pr-1 w-full h-full bg-transparent border-none outline-none  "
                    placeholder="Mobile no."
                    required
                  />
                  <label
                    htmlFor="clientPhone"
                    className="absolute w-full h-full border-[1px] border-[#A2A8AB] outline-none bg-[#FFFFFF] rounded-[5px] z-[-5] "
                  />
                  <span className="absolute left-0 p-2">
                    <img
                      src={phone}
                      alt="mail"
                      className="w-[15px] h-[15px] object-contain"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="btn w-full flex flex-col items-center mb-[32px]">
            <button className="text-[16px] text-[#3282AD] bg-white leading-[22px] font-semibold px-[99px] py-[10px] border-[1px] border-[#3282AD] w-full rounded-[5px] capitalize ">
              send query
            </button>
            <div className="flex flex-row items-center my-[32px] w-[90%]">
              <span className="bg-[#A2A8AB] h-[2px] w-[50%]"></span>
              <p className="px-[10px] text-[16px] text-[#A2A8AB] leading-[22px] font-semibold uppercase">
                or
              </p>
              <span className="bg-[#A2A8AB] h-[2px] w-[50%]"></span>
            </div>
            <button className="text-[16px] text-[white] bg-[#3282AD] leading-[22px] font-semibold px-[99px] py-[10px] border-[1px] border-[#3282AD] w-full rounded-[5px]  capitalize">
              book now
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const Package__helpline = () => (
    <>
      <div className="rightSection__helpline w-full text-center px-[76px] py-[24px] mb-[42px] flex- flex-col justify-center relative">
        <h4 className="text-[20px] text-[#3A3A3A] leading-[28px] font-semibold mb-[32px] relative">
          Need help?{" "}
          <span className=" absolute w-[15%] h-[3px] rounded-full bg-[#A2A8AB] bottom-[-35%] left-[42%]"></span>
        </h4>

        <div className="helpline__contact w-full mb-[32px] flex items-center ">
          <span className="mr-[24px]">
            <img src={helpline__phone} alt="helpline__phone" />
          </span>
          <p className="text-[16px] text-[#3A3A3A] leading-[22px] font-semibold">
            91-8474846846
          </p>
        </div>
        <div className="helpline__contact w-full mb-[32px] flex items-center ">
          <span className="mr-[24px]">
            <img src={helpline__mail} alt="helpline__mail" />
          </span>
          <p className="text-[16px] text-[#3A3A3A] leading-[22px] font-semibold">
            sara.cruz@example.com
          </p>
        </div>
      </div>
    </>
  );
  const Package__FAQ = () => (
    <>
      <div className="rightSection__FAQ_section w-full p-[16px] flex flex-col justify-center items-center">
        <h4 className="text-[20px] text-[#3A3A3A] leading-[24px] font-semibold uppercase mb-[28px]">
          FAQ
        </h4>
        <div className="FAQ__search w-[90%] md:w-[428px] h-[60px] bg-transparent  flex items-center relative">
          <input
            type="text"
            className="w-[100%] h-[100%] pl-7 pr-16 bg-transparent text-[18px] text-[#3282AD] leading-[25px] border-none outline-none absolute"
            placeholder="Search a question"
            required
            id="search"
          />
          <label
            htmlFor="search"
            className=" w-full h-full bg-[#F6FDFF] border-none outline-none px-[32px]  rounded-[4px]"
          />
          <span className="text-white absolute right-1 w-[24px] h-[24px]  grid place-content-center mr-[10px]">
            <img src={FAQ__search_icon} alt="FAQ__search_icon" />
          </span>
        </div>

        <div className="FAQ__searchList w-full">
          {FAQ__list.map((FAQ, _) => {
            return <FAQ_list_boxes key={FAQ.id} {...FAQ} />;
          })}
        </div>
      </div>
    </>
  );

  return (
    <>
      <section className="package__details w-full flex flex-col lg:flex-row px-4 md:px-10  ">
        <div className="leftsection flex-1 flex flex-col pr-2 md:pr-[135px]">
          <Package__details_heading />

         {packageToggle ==="overview" && <Package__overview />}

          {packageToggle !== "add_information"  && <Package__itenerary_details />}
          {packageToggle !== "itinerary_details"  &&  <Package__add_information />}
        </div>

        {/* rightSection */}

        <div className="rightsection flex-1 md:flex-[0.8] flex flex-col ">
          <Package__offer />
          <Package__customer_details />
          <Package__helpline />
          <Package__FAQ />
        </div>
      </section>
    </>
  );
}
