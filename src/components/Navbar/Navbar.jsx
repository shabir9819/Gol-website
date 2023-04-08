import React from "react";
import { arrow_down, logo, menu,close } from "../../assets/images/images";
import { navLinks } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [hamToggle, setHamToggle] = useState(false)
 
  return (
    <>
      <header className="w-full  bg-white py-5 sticky top-0 left-0 z-50">
        <nav className="wrapper__navbar w-full flex flex-row justify-between items-center  lg:justify-start">
          <NavLink to={"/"}>
          <div className="logo w-[99px] h-[56px] mr-2 lg:mr-[89px]">
            <img src={logo} alt="logo" />
          </div>
          </NavLink>

          {/* Desktop nav-lists */}

          <ul className="navlinks flex-1 justify-start items-center hidden lg:flex flex-row text-center">
            {navLinks.map((link, index) => {
              return (
                <NavLink to={link.link}>
                  <li
                    className={`link font-sans text-[16px] text-[#3A3A3A] capitalize font-normal leading-[22px] ${
                      index < navLinks.length ? "mr-6" : "mr-0"
                    }  hover:cursor-pointer relative`}
                    key={link.id}
                  >
                    {link.title}{" "}
                   
                    {link.title === "packages" && (
                      <span>
                        <i class="fa-solid fa-caret-down"></i>
                      </span>
                    )}
                  </li>
                </NavLink>
              );
            })}
          </ul>

          <div className="login_signup  flex-row hidden lg:flex">
            <span className=" px-5 py-3 text-[#056499CC] bg-white capitalize">
              login
            </span>
            <span className=" px-8 py-4 bg-[#056499CC] text-white rounded-full capitalize hover:bg-[#264252cc] hover:cursor-pointer">
              sign up
            </span>
          </div>

          {/* Mobile nav-lists */}
            <div className="w-[35px] h-[35px] relative bg-[#e0f9fe] border-[1px] border-[grey] lg:hidden mr-2 p-2 rounded-md " onClick={()=> setHamToggle ((preVal)=> !preVal)}>
              <img src={`${(hamToggle)? close: menu}`} alt="menu__icon"  className="w-full h-full object-contain mobile__hamburger-icon"/>
            </div>
        </nav>
      </header>
          {hamToggle && <ul className={`mobile_navlinks navlinks absolute z-40 bg-white w-full left-0 top-[5.9rem]  flex-1 justify-start items-start flex lg:hidden flex-col text-center px-2 `}>
            {navLinks.map((link, index) => {
              return (
                <NavLink to={link.link}>
                  <li
                    className={`link font-sans text-[16px] text-[#3A3A3A] capitalize font-normal leading-[22px] ${
                      index < navLinks.length-1 ? "mb-2" : "mb-4"
                    }  hover:cursor-pointer relative`}
                    key={link.id}
                    onClick={()=> setHamToggle(false)}
                  >
                    {link.title}{" "}
                   
                    {link.title === "packages" && (
                      <span>
                        <i class="fa-solid fa-caret-down"></i>
                      </span>
                    )}
                  </li>
                </NavLink>
              );
            })}
            <div className="mobile__login_signup w-full h-auto relative flex-row justify-center" >
            <div className=" px-5 py-3 text-[#056499CC] bg-white rounded-full capitalize hover:bg-[#264252cc]  hover:text-[white] hover:cursor-pointer my-2">
              login
            </div>
            <div className=" px-8 py-3 bg-[#056499CC] text-white rounded-full capitalize hover:bg-[#264252cc] hover:cursor-pointer my-2">
              sign up
            </div>
          </div>
          </ul>}
    </>
  );
}