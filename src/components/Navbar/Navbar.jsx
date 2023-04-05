import React from "react";
import { arrow_down, logo } from "../../assets/images/images";
import { navLinks } from "../../constants/constants";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="w-full  bg-white py-5 sticky top-0 left-0 z-50">
        <nav className="wrapper__navbar w-full flex flex-row ">
          <div className="logo w-[99px] h-[56px] mr-[89px]">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navlinks flex-1 justify-start items-center hidden lg:flex flex-row">
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
        </nav>
      </header>
    </>
  );
}
