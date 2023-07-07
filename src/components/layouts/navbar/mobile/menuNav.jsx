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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";
import { styles } from "./styles";

const MenuNav = () => {
  return (
    <Menu styles={styles}>
      <div className=" flex flex-row justify-center w-full ">
        <button>
          <Image
            src="/images/logos/black-logo.svg"
            width={150}
            height={100}
            alt="LogoWhite"
          />
        </button>
      </div>
      <ul className="text-2xl uppercase  text-amber-900 ">
        <li
          id="L'agence"
          className="menu-item px-2 list-disc"
          Link="/lagence"
        >
          L'Agence
        </li>
        <li
          id="Services"
          className="menu-item px-2 py-6 list-disc"
          Link="/services"
        >
          Services
        </li>
        <li id="Projets" className="menu-item px-2 list-disc" Link="/projets">
          Projets
        </li>
        <li
          id="Contact"
          className="menu-item px-2 py-6 list-disc"
          Link="/contact"
        >
          Contact
        </li>
        <li className="menu-item--small" href=""></li>
        <br />
        <div className="w-full flex flew-row -mx-6 pt-16">
          <li className="  px-3">
            <button>
              <FontAwesomeIcon
                width={20}
                height={"auto"}
                icon={faSquareFacebook}
              />
            </button>
          </li>
          <li className=" px-3">
            <button>
              <FontAwesomeIcon
                width={22}
                height={"20"}
                icon={faSquareInstagram}
              />
            </button>
          </li>
          <li className="  px-3">
            <button>
              <FontAwesomeIcon width={20} height={"auto"} icon={faLinkedin} />
            </button>
          </li>
          <li className="  px-3">
            <button>
              <FontAwesomeIcon
                width={20}
                height={"auto"}
                icon={faSquareGithub}
              />
            </button>
          </li>
          <li className=" px-3">
            <button>
              <FontAwesomeIcon width={22} height={"20"} icon={faEnvelope} />
            </button>
          </li>
        </div>
      </ul>
    </Menu>
  );
};

export default MenuNav;
