"use client";

import { faMoon, faSun, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavbarDesktop = () => {
  return (
    <header className="hidden lg:flex xl:w-full">
      <nav className=" grid grid-cols-3   items-center  bg-green-500 text-black xl:w-full">
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
                <a href="/section/introduction.jsx">L'agence</a>
              </button>
            </li>
            <li className="px-20">
              <button>
                <a href="/section/services.jsx">Services</a>
              </button>
            </li>
            <li>
              <button>
                <a href="#">Projets</a>
              </button>
            </li>
            <li className="px-20">
              <button>
                <a href="/section/formul.jsx">Contact</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row w-full justify-end pr-14">
          <div className="flex flex-row  ">
            <button>
              <let button type="button" onClick={() => DarkMode()}>
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
