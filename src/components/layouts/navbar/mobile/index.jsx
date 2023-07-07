"use client";

import Image from "next/image";
import MenuNav from "./menuNav";
import { faMoon, faSun, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mode from "./darkmode";


const NavbarMobile = () => {
  return (
    <nav className="grid grid-cols-3 bg-green-500 fixed w-full lg:hidden">
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
      <div className="flex flex-row items-center justify-center">
        <button >
          <FontAwesomeIcon className="pr-2" icon={faSun} size="xl"/>
          <FontAwesomeIcon  icon={faToggleOff} size="xl" />
        </button>

      </div>
    </nav>
  );
};

export default NavbarMobile;
