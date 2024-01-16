import React from "react";
import COMPANY_LOGO from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="navContainer flex justify-center items-center p-5">
      <div className="logo w-[35%]">
        <img src={COMPANY_LOGO} alt="logo" className="w-1/3" />
      </div>

      <div className="menu w-[40%] self-end">
        <ul className="list-none flex w-[90%] justify-between text-lg">
          <li>
            <NavLink to={"#"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"#"}>FlashCard</NavLink>
          </li>

          <li>
            <NavLink to={"#"}>Contact</NavLink>
          </li>

          <li>
            <NavLink to={"#"}>Faq</NavLink>
          </li>

          <li>
            <button className="rounded-3xl bg-blue-600 text-white bg-gradient-to-b from-[#051b92] to-[#207cea] text-sm w-[90px] h-[40px] text-center">
              <NavLink to={"#"} className="text-center">
                Login
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
