"use client";

import Image from "next/image";
import MenuNav from "./menuNav";
import { faMoon, faSun, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./darkMode";

const NavbarMobile = () => {
  return (
    <nav className="z-10 grid grid-cols-3 bg-green-500 fixed w-full lg:hidden ">
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
      <div className=" lg: flex flex-row items-center justify-center">
        <let button type="button" onClick={() => DarkMode()}>
          <FontAwesomeIcon className="pr-2" icon={faSun} size="xl" />
          <FontAwesomeIcon icon={faToggleOff} size="xl" />
        </let>
        
      </div>
    </nav>
  );
};

export default NavbarMobile;
