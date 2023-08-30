"use client";

import Image from "next/image";
import MenuNav from "./menuNav";
import DarkMode from "./darkMode";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";

const NavbarMobile = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <nav className="z-10 grid grid-cols-3 bg-green-800 fixed w-full lg:hidden ">
      <div>
        <MenuNav />
      </div>
      <div>
        <button>
          <Image
            src="/images/logos/black-logo.svg"
            width={100}
            height={50}
            alt="LogoWhite"
          />
        </button>
      </div>
      <div className="flex flex-row justify-center">
      <button className=""
            type="button"
            onClick={() => {
              DarkMode();
              setShowButton(!showButton);
              
            }}
          >
            {showButton === false ? (
              <BsToggleOff size={40} />
            ) : (
              <BsToggleOn size={40} />
            )}
          </button>
          </div>
    </nav>
  );
};

export default NavbarMobile;
