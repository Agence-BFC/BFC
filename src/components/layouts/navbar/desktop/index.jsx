"use client";

import DarkMode from "../mobile/darkMode";
import React from "react";
import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

const NavbarDesktop = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <header className="hidden lg:flex xl:w-full ">
      <nav className="flex flex-col items-center justify-center w-screen fixed z-10 top-0 bg-green-800 text-black  lg:text-2xl xl:w-full ">
        <div className="flex flex-col pl-2">
          <button>
            <img
              src="./images/logos/black-logo.svg"
              alt="LogoWhite"
              width={150}
              height={150}
            />
          </button>
        </div>

        <div className="flex flex-row w-full justify-center ">
          <ul className="  flex flex-row ">
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover:  hover:transition hover:duration-500 ">
              <button>
                <a href="http://localhost:3000/"> Agence</a>
              </button>
            </li>
            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full hover: hover:transition hover:duration-500 mx-44 ">
              <AnchorLink offset={() => 300} href="#services">
                <Link href="/services">Services</Link>
              </AnchorLink>
            </li>

            <li className="p-3 hover:text-amber-800 hover:bg-white hover:rounded-full  hover: hover:transition hover:duration-500 ">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-row w-full justify-center py-4   ">
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
