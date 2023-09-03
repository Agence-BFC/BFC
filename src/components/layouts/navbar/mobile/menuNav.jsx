"use client";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { BsFacebook,BsInstagram, BsLinkedin, BsGithub, } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { styles } from "./styles";

const MenuNav = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const HideMenu = () => {
    setHideMenu(!hideMenu);
  };

  return (
    <Menu styles={styles} isOpen={hideMenu === true ? false : null}>
      <div className=" flex flex-row justify-center w-full py-16 dark:hidden  ">
        <button>
          <Image
            src="/images/logos/black-logo.svg"
            width={150}
            height={100}
            alt="Blacklogo"
            Link="/mobile/index.jsx"
          />
        </button>
      </div>
      <div className=" flex-row justify-center w-full py-16 hidden dark:flex">
        <button>
          <Image
            src="/images/logos/white-logo.svg"
            width={150}
            height={100}
            alt="WhiteLogo"
            Link="/mobile/index.jsx"
          />
        </button>
      </div>

      <ul className="text-2xl uppercase  text-amber-900  md:text-2xl  ">
        <li
          id="L'agence"
          className="menu-item px-2 "
          Link="/section/introduction.jsx"
        >
          L'Agence
        </li>
        <li
          id="Services"
          className="menu-item px-2 py-6 md:py-8"
          Link="/section/services.jsx"
        >
          Services
        </li>
        <li id="Projets" className="menu-item px-2" Link="/projets">
          Projets
        </li>
        <li
          id="Contact"
          className="menu-item px-2 py-6 md:py-8 "
          Link="/section/formulaire.jsx"
        >
          Contact
        </li>
        <li className="menu-item--small" href=""></li>
        <br />
        <div className>
          <div className=" flex px-2  pt-4 md:text-2xl md:pt-0">
    
            <li >
              <button >
                <BsFacebook width={20} height={20} id="facebook"/>
            
              </button>
            </li>
            <li className=" px-5 md:px-10">
              <button >
              <BsInstagram width={20} height={20} id="instagram"/>
              </button>
            </li>
            <li >
              <button>
              <BsLinkedin width={20} height={20} id="instagram"/>
              </button>
            </li>
            <li className=" px-5 md:px-10">
              <button>
              <BsGithub width={20} height={20} id="instagram"/>
              </button>
            </li>
            <li>
              <button>
              <BsMailbox2 width={20} height={20} id="instagram"/>
              </button>
            </li>
          </div>
        </div>
      </ul>
    </Menu>
  );
};

export default MenuNav;
