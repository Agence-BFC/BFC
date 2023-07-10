"use client";

import { faMoon, faSun, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarDesktop = () => {
  return (
    <header className="hidden lg:flex">
      <nav className=" grid grid-cols-3  items-center  bg-green-500 text-black">
        <div className="flex flex-row">
          <button>
            <img
              src="./images/logos/black-logo.svg"
              alt="LogoWhite"
              width={150}
              height={100}
            />
          </button>
        </div>
        <div className=" flex flew-row ">
          <ul className=" w-full flex flex-row justify-center list-none text-2xl">
            <li className="pl-16">
              <button>
                <a href="#">L'agence</a>
              </button>
            </li>
            <li className="px-20">
              <button>
                <a href="#">Services</a>
              </button>
            </li>
            <li>
              <button>
                <a href="#">Projets</a>
              </button>
            </li>
            <li className="px-20">
              <button>
                <a href="#">Contact</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row w-full justify-end  pr-4">
          <div className="flex flex-row  ">
            <button>
              <let button type="button" onClick={() =>DarkMode()}>
                <FontAwesomeIcon className="pr-2" icon={faSun} size="2xl" />
                <FontAwesomeIcon icon={faToggleOff} size="2xl" />
              </let>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
