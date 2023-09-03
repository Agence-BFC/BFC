
import Link from "next/link";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { useState } from "react";
import DarkMode from "@/components/tools/darkMode";
import Image from "next/image";
const NavbarDesktop = () => {
  const [showToggle, setShowToggle] = useState(false);
  return (
    <header>
      <nav className="lg:grid grid-cols-4 py-5 bg-gradient-to-b from-teal-500 to-pink-400 dark:bg-gradient-to-b dark:from-black dark:to-white-500 text-white font-bungeeRegular">
        <div className="flex flex-row justify-center w-full py-2 ">
        <div>
        <a href={"http://localhost:3000"}>
          <Image src="/DevNet/public/images/logos/white-logo.svg" 
              width={50}
              height={50}
              alt="Logo"/>
              </a>
        </div>
        </div>
        <div className="col-span-2 flex flex-row justify-center py-2">
          <ul className="flex flex-row">
            <li className="px-4 border-r">
              <Link href="/" className="">
                Accueil
              </Link>
            </li>
            <li className="px-4 border-r">
              <Link href="/service" className="">
                Services
              </Link>
            </li>
            <li className="px-4 border-r">
              <Link href="/contact" className="pb-6">
                contact
              </Link>
            </li> 
          </ul>
        </div>
        <div className="flex flex-row justify-center items-center">
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

export default NavbarDesktop;
