import React, { useContext, useEffect } from "react";
import { logo, menu, close } from "../../assets/images/images";
import { navLinks } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import PageContext from "../../context/Page/PageContext";


export default function Navbar() {
  const [hamToggle, setHamToggle] = useState(false);
  const [scroll, setScroll] = useState({ preY: 0, show: true });
  const [dropDown, setDropDown] = useState(false);

  //Getting the packages context from PageState.jsx
  const pageContext = useContext(PageContext);
  const {pack,dispatchPack,} = pageContext;


  const scrollEvent = (e) => {
    const scrollData = e.currentTarget.scrollY;

    setScroll((preVal) => {
      return { ...preVal, preY: scrollData };
    });
    if (scroll.preY < scrollData) {
      setScroll((preVal) => {
        return { ...preVal, show: false };
      });
    } else {
      setScroll((preVal) => {
        return { ...preVal, show: true };
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  });

  return (
    <>
      <header
        className={`w-full bg-white py-5  px-1 md:px-10 ${
          scroll.preY < 40 ? "sticky" : "fixed"
        }  ${scroll.show ? "top-0" : "top-[-100%]"}  left-0 z-50 duration-[2s]`}
      >
        <nav className="wrapper__navbar w-full flex flex-row justify-between items-center  lg:justify-start">
          <NavLink to={"/"}>
            <div
              className="logo w-[99px] h-[56px] mr-2 lg:mr-[89px] "
              onClick={() => setHamToggle((preVal) => !preVal)}
            >
              <img src={logo} alt="logo" />
            </div>
          </NavLink>

          {/* Desktop nav-lists */}

          <ul className="navlinks flex-1 justify-start items-center hidden lg:flex flex-row text-center">
            {navLinks.map((link, index) => {
              return (
                <>
                  <NavLink to={link.link} key={link.id}>
                    {link.title === "packages" && (
                      <li
                        className={`link font-sans text-[16px] text-[#3A3A3A] capitalize font-normal leading-[22px] ${
                          index < navLinks.length ? "mr-6" : "mr-0"
                        }  hover:cursor-pointer relative`}
                      >
                        {link.title}{" "}
                        {link.title === "packages" && (
                          <>
                            <span className="w-full">
                              <i
                                className={`fa-solid fa-caret-${
                                  dropDown ? "up" : "down"
                                }`}
                              ></i>
                            </span>

                            <ul className="sublink hidden absolute flex-col w-full h-auto pb-3 rounded-md">
                              {link.title === "packages" &&
                                link.sublink.map((slink, index) => (
                                  <div className={`relative  flex  flex-col translate-y-[10px] pl-4 pr-3 z-50 mb-[3px] w-full ${(pack === slink.title) ? "text-[#3282AD]" : "text-black"}`} onClick={()=>{dispatchPack({type:slink.title , payload:slink.title}); setHamToggle((preVal) => !preVal)}}>
                                    <li>{slink.title}</li>
                                  </div>
                                ))}
                            </ul>
                          </>
                        )}
                      </li>
                    )}

                    {link.title !== "packages" && (
                      <li
                        className={`link font-sans text-[16px] text-[#3A3A3A] capitalize font-normal leading-[22px] ${
                          index < navLinks.length ? "mr-6" : "mr-0"
                        }  hover:cursor-pointer relative`}
                      >
                        {link.title}{" "}
                      </li>
                    )}
                  </NavLink>
                </>
              );
            })}
          </ul>

          <div className="login_signup  flex-row hidden lg:flex text-center">
            <span className=" w-[120px] px-8 py-4 text-[#056499CC] bg-white rounded-full  capitalize hover:bg-[#264252cc] hover:text-[white] hover:cursor-pointer mr-2">
              login
            </span>
            <span className=" w-[120px] px-8 py-4 bg-[#056499CC] text-white rounded-full capitalize hover:bg-[#264252cc] hover:cursor-pointer">
              sign up
            </span>
          </div>

          {/* Mobile nav-lists */}
          <div
            className="w-[35px] h-[35px] relative bg-[#e0f9fe] border-[1px] border-[grey] lg:hidden mr-2 p-2 rounded-md "
            onClick={() => setHamToggle((preVal) => !preVal)}
          >
            <img
              src={`${hamToggle ? close : menu}`}
              alt="menu__icon"
              className="w-full h-full object-contain mobile__hamburger-icon"
            />
          </div>
        </nav>
      </header>
      {hamToggle && (
        <ul
          className={`mobile_navlinks navlinks absolute z-40 bg-white w-full left-0 top-[5.9rem]  flex-1 justify-start items-start flex lg:hidden flex-col text-center px-2 `}
        >
          {navLinks.map((link, index) => {
            return (
              <NavLink to={link.link}>
                <li
                  className={`link font-sans text-[16px] text-[#3A3A3A] capitalize font-normal leading-[22px]
                  
                  ${
                     index < navLinks.length - 1 ? "mb-2" :  "mb-4"
                  }   hover:cursor-pointer relative`}
                  key={link.id}
                  onClick={() => setHamToggle(false)}
                >
                  {link.title}{" "}
                  {link.title === "packages" && (
                    <>
                      <span className="w-full">
                        <i
                          className={`fa-solid fa-caret-${
                            dropDown ? "up" : "down"
                          }`}
                        ></i>
                      </span>
                    </>
                  )}
                </li>
                {link.title === "packages" && (<ul className="sublink hidden flex-col w-full mb-2 text-left capitalize">
                  {link.title === "packages" &&
                    link.sublink.map((slink, index) => (
                      <div className={`sublin__wrapper relative flex flex-col translate-y-[10px]  z-50  ml-6 ${index < slink.length ? "mb-1" : "mb-2"} ${(pack === slink.title) ? "text-[#3282AD]" : "text-black"}`} onClick={()=>{dispatchPack({type:slink.title , payload:slink.title}); setHamToggle((preVal) => !preVal)}}>
                        <li>{slink.title}</li>
                      </div>
                    ))}
                </ul>)}
              </NavLink>
            );
          })}
          <div className="mobile__login_signup w-full h-auto relative flex-row justify-center">
            <div className=" px-5 py-3 text-[#056499CC] bg-white rounded-full capitalize hover:bg-[#264252cc]  hover:text-[white] hover:cursor-pointer my-2">
              login
            </div>
            <div className=" px-8 py-3 bg-[#056499CC] text-white rounded-full capitalize hover:bg-[#264252cc] hover:cursor-pointer my-2">
              sign up
            </div>
          </div>
        </ul>
      )}
    </>
  );
}
