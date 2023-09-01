"use client";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";
import { styles } from "./styles";

const MenuNav = () => {
  return (
    <Menu styles={styles}>
      <div className=" flex flex-row justify-center w-full">
        <button>
          <Image
            src="/images/logos/black-logo.svg"
            width={150}
            height={100}
            alt="LogoWhite"
          />
        </button>
      </div>
      <ul className="text-2xl uppercase  text-amber-900 list-disc ">
        <li className="shadow-lg ">
          <Link href="/" className="">
            <FontAwesomeIcon width={25} height={"20"} icon={faHouse} />
            Accueil
          </Link>
        </li>

        <li className="shadow-lg menu-item px-2 ">
          <Link href="/service" className="">
            <FontAwesomeIcon width={25} height={"20"} icon={faHouse} />
            service
          </Link>
        </li>
        <li />

        <li className="shadow-lg menu-item px-2 ">
          <Link href="/contact" className="">
            <FontAwesomeIcon width={25} height={"20"} icon={faHouse} />
            contact
          </Link>
        </li>

        <li />
        <div className="w-full flex flew-row  pt-20">
          <li className="px-3">
            <button>
              <FontAwesomeIcon width={20} height={"auto"} icon={faLinkedin} />
            </button>
          </li>
          <li className="px-3">
            <button>
              <FontAwesomeIcon
                width={20}
                height={"auto"}
                icon={faSquareGithub}
              />
            </button>
          </li>
          <li className="px-3">
            <button>
              <FontAwesomeIcon
                width={20}
                height={"auto"}
                icon={faSquareFacebook}
              />
            </button>
          </li>
          <li className="px-3">
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
