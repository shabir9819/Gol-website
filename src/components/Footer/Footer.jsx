import React from "react";
import {
  facebook,
  footer__circle,
  footer__map,
  footer__phone,
  Footer__phone_img,
  Footer__radial_img,
  googlePlay__logo,
  logo_2,
} from "../../assets/images/images";
import { footer } from "../../constants/constants";

export default function Footer() {
  return (
    <>
      <footer className="h-[610px] w-full relative p-10 mt-[160px] md:mt-[341px] ">
        <div className=" absolute w-[90%] top-[-15%] md:top-[-20%] lg:top-[-25%] left-[5%] ">
          <div className="floating__footer  w-[100%] h-auto lg:h-[311px] bg-black   rounded-[10px] relative  flex flex-row ">
            <div className="floating__footer-leftSection px-8 py-4 lg:px-[65px] lg:py-[37px] ">
              <h2 className="text-[20p] md:text-[32px] lg:text-[42px] leading-[30px] lg:leading-[57px] font-bold text-[#FFFFFF] mb-[10px] md:mb-[27px]">
                Download Our App
              </h2>
              <p className="w-[70%] md:w-full text-[15px] md:text-[26px] lg:text-[32px] leading-[25px] lg:leading-[27px] text-[#FFFFFF] mb-[20px] md:mb-[69px]">
                The best travel in the world
              </p>
              <div className="googlePlay__button px-2 py-1 md:px-[15px] md:py-[10px] bg-[#1A6892] hover:bg-[#265269] w-[60%] md:w-[213px] flex flex-row items-center rounded-[4px] relative z-[5] cursor-pointer">
                <img
                  src={googlePlay__logo}
                  alt="google__play "
                  className=" mr-[5px] md:mr-[11px] w-[15px] h-[15px] md:w-[37px] md:h-[37px] object-contain"
                />
                <div >
                  <p className="text-[6px] md:text-[10px] leading-[11px] text-[#FFFFFF] uppercase">
                    GET IN ON
                  </p>
                  <p className="text-[10px] md:text-[16px] leading-[22px] tracking-[0.5px] text-[#FFFFFF] font-bold capitalize">
                    google play
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="floating__footer-middlesection translate-y-[29px] translate-x-[-120px] relative w-[50%]  h-full">
            <img
              src={footer__circle}
              alt="footer__circle"
              className="absolute top-[-23px] left-[21px]"
            />
            <img
              src={footer__circle}
              alt="footer__circle"
              className="absolute top-[53px] left-[23px] w-[50%]"
            />
            <img
              src={footer__circle}
              alt="footer__circle"
              className="absolute top-[18px] left-[25px] w-[60%]"
            />
            <img
              src={footer__circle}
              alt="footer__circle"
              className="absolute top-[100px] left-[24px] w-[40%]"
            />
            <img
              src={footer__circle}
              alt="footer__circle"
              className="absolute top-[155px] left-[23px] w-[30%]"
            />
            <img
              src={footer__circle}
              alt="footer__circle"
              className="absolute top-[178px] left-[24px] w-[23%]"
            />
          </div> */}
            {/* <div className="floating__footer-rightSection translate-x-[-210px] translate-y-[30px] relative h-full">
            <div className="footer__circle w-[254px] h-[254px] rounded-full absolute"></div>
            <img src={footer__phone} alt="footer__phone" className="absolute w-[135px] h-[292px] left-0" />
          </div> */}

            <div className="absolute right-[30%] bottom-0">
              <img
                src={Footer__radial_img}
                alt="Footer__radial_img"
                className="w-[120px] md:w-[200px] lg:w-auto"
              />
            </div>
            <div className="absolute right-5 top-[-10%] md:top-[-20%]">
              <img
                src={Footer__phone_img}
                alt="Footer__radial_img"
                className="Footer__phone_img w-[120px] md:w-[200px]  lg:w-auto"
              />
            </div>
          </div>
        </div>

        <img
          src={footer__map}
          alt="footer__map"
          className="absolute top-0 left-0 w-full h-full z-[-5]"
        />
        <div className="footer__details w-full flex flex-col md:flex-row gap-3 pb-[49px] mb-[41px] border-b-2 border-b-[#FFFFFF] mt-[22%] md:mt-[15%] lg:mt-[10%] ">
          <div className="details__1 lg:flex-grow-[1.2]">
            <img
              src={logo_2}
              alt="logo"
              className="mb-[12px] md:mb-[19px] w-[50px] md:w-[104px] md:h-[52px] object-contain"
            />
            <p className="text-[12px] md:text-[18px] text-[#FFFFFF] leading-[30px] font-normal mb-[16px] md:mb-[81px] w-auto lg:w-[314px]">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.
            </p>
            <div className="social_media flex flex-row justify-center md:justify-start flex-wrap gap-2">
              {footer.social_links.map((link, index) => {
                return (
                  <img
                    src={link.img_src}
                    alt={link.id}
                    key={link.id}
                    className="w-[42px] h-[42px] object-contain mr-1 bg-white p-1 rounded-full "
                  />
                );
              })}
            </div>
          </div>

          {footer.section.map((section, index) => {
            return (
              <>
                <div className="flex-1 hidden md:inline" key={section.title}>
                  <h4 className="text-[12px] md:text-[18px] lg:text-[22px] leading-[30px] text-[#FFFFFF] font-medium mb-[27px] capitalize">
                    {section.title}
                  </h4>
                  <ul className="link__list">
                    {section.links.map((link, index) => {
                      return (
                        <li
                          className={`text-[20px] leading-[30px] text-[#FFFFFF] font-medium capitalize hover:underline cursor-pointer duration-150 ${
                            index < section.links.length ? "mb-[18px] " : "mb-0"
                          }`}
                          key={link.name}
                        >
                          {link.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}

          {/* mobile view */}

          <div  className=" md:hidden flex flex-row justify-center gap-4">
            {footer.section.map((section, index) => {
              return (
                <>
                  <div className="flex-1 " key={section.title}>
                    <h4 className="text-[16px] leading-[30px] text-[#FFFFFF] font-medium mb-[4px] capitalize">
                      {section.title}
                    </h4>
                    <ul className="link__list">
                      {section.links.map((link, index) => {
                        return (
                          <li
                            className={`text-[14px] leading-[30px] text-[#FFFFFF] font-medium capitalize ${
                              index < section.links.length
                                ? "mb-[2px]"
                                : "mb-0"
                            }`}
                            key={link.name}
                          >
                            {link.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="copywrite w-full text-center">
          <p className=" text-[16px] text-[#FFFFFF] leading-[19px]">
            Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
