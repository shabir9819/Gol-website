import React from "react";
import {
  certificate__dots,
  certificate__video,
} from "../../../assets/images/images";
import { certificate_videos } from "../../../constants/constants";

export default function Certificate() {
  return (
    <>
      <section className="w-full">
        <div className="text-center w-full px-6 md:px-40 mb-[64px] flex flex-col py-[51px] items-center justify-center rounded-[8px]">
          <h2 className="text-[32px] text-[#3A3A3A] font-bold text-center leading-[43px]  w-full mb-[16px]">
            Certificate
          </h2>
          <p className="text-[16px] text-[#5A5A5A] leading-[21px] w-[377px] px-3 md:px-0 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
            turpis sodales, facilisis massa at, rutrum eros.
          </p>
        </div>
        <div className="w-full px-2 py-[30px] lg:p-[72px] flex flex-1 flex-row flex-wrap justify-center items-center relative">
          {certificate_videos.map((certificate, index) => {
            return (
              <div className="relative lg:max-w-[550px] max-w-full max-h-[355px] mb-2  md:mb-[66px]  lg:mr-4 " key={certificate.id}>
                <img
                  src={certificate.video_src}
                  alt={certificate.id}
                  className="certificate_images  rounded-[8px] cards"
                />
                {(index === 0 || (index === certificate_videos.length-1)) &&<span>
                  <img
                    src={certificate__dots}
                    alt="certificate__dots"
                    className={`absolute z-[-5] ${
                      index === 0 ? "top-[-12%] left-[-12%]" : ""
                    } ${
                      index === certificate_videos.length-1
                        ? "bottom-[-12%] right-[-7%]"
                        : ""
                    }`}
                  />
                </span>}
              </div>
            );
          })}
         
        </div>
      </section>
    </>
  );
}
