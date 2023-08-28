"use client";

import Image from "next/image";
import MenuNav from "./menuNav";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import DarkMode from "@/components/tools/darkMode";
import { useState } from "react";

const NavbarMobile = () => {
  const [showToggle, setShowToggle] = useState(false);
  return (
  <header>
    <nav className="grid grid-cols-3 bg-teal-500 fixed w-full z-10 top-0 ">
      <div >
        <MenuNav />
      </div>
      <div>
        <button>
          <div>
          <a href={"http://localhost:3000"}>
        <Image
          src="/images/logos/black-logo.svg"
          width={100}
          height={50}
          alt="LogoWhite"
          />
          </a>
          </div>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
      <button
            type="button"
            onClick={() => {
              DarkMode();
              setShowToggle(!showToggle);
            }}
          >
            {showToggle === false ? (
              <LiaToggleOffSolid size={35} className="text-white" />
            ) : (
              <LiaToggleOnSolid size={35} className="text-white" />
            )}
          </button>
      </div>
    </nav>
    </header>
  );
};

export default NavbarMobile;
