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
      <nav className="flex flex-col items-center justify-center fixed z-10 top-0 bg-green-800 text-black  lg:text-4xl xl:w-full ">
        <div className="flex flex-col pl-2">
          <button>
            <img
              src="./images/logos/black-logo.svg"
              alt="LogoWhite"
              width={200}
              height={200}
            />
          </button>
        </div>
      
            <div className="flex flex-row w-screen justify-center ">
          <ul className="  flex flex-row ">
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover:  hover:transition hover:duration-500 ">
              <button>
                <a href="#"> Agence</a>
              </button>
            </li>
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover: hover:transition hover:duration-500 mx-20 ">
            <AnchorLink offset={() => 300} href="#services">
              <button >
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
          </ul>
            </div>
       
          <div className="flex flex-row w-full justify-center py-4 pr-2  ">
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
        
      </nav>
    </header>
  );
};

export default NavbarDesktop;
