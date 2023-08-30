"use client";

import DarkMode from "../mobile/darkMode";
import React from "react";
import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarDesktop = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <header className="hidden lg:flex xl:w-full">
      <nav className=" grid grid-cols-3 items-center justify-center fixed z-10 top-0 bg-green-800 text-black lg:py-6 lg:text-4xl xl:w-full ">
        <div className="flex flex-row pl-2">
          <button>
            <img
              src="./images/logos/black-logo.svg"
              alt="LogoWhite"
              width={200}
              height={100}
            />
          </button>
        </div>
      
          <ul className="  grid grid-cols-4 w-full ">
            <div className="flex flex-row w-full justify-between ">
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover:  hover:transition hover:duration-500 ">
              <button>
                <a href="#"> Agence</a>
              </button>
            </li>
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover: hover:transition hover:duration-500 mx-20 ">
            <AnchorLink offset={() => 300} href="#services">
              <button>
                <a href="/section/services.jsx">Services</a>
              </button>
              </AnchorLink>
            </li>
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover: hover:transition hover:duration-500 ">
              <button>
                <a href="#">Projets</a>
              </button>
            </li>
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full  hover: hover:transition hover:duration-500 mx-20 ">
              <button>
                <a href="/section/contact.jsx">Contact</a>
              </button>
            </li>
            </div>
          </ul>
        <div className="flex flex-row w-full justify-end pr-14  ">
          <div className="flex flex-row pr-2 ">
          <button 
            type="button"
            onClick={() => {
              DarkMode();
              setShowButton(!showButton);
              
            }}
          >
            {showButton === false ? (
              <BsToggleOff size={60} />
            ) : (
              <BsToggleOn size={60} />
            )}
          </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
