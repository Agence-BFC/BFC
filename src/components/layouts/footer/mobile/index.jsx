import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

const FooterMobile = () => {
  return (
    <>
 
      <div className="flex flex-col bg-sky-500">
        <div className="flex flex-row justify-center">
          <Image
            src="/images/logos/logo-black.svg"
            width={150}
            height={150}
            alt=""
          />
        </div>
        <span className="text-center flex flex-col justify-center italic text-sm ">
          © Devnet - 2023
          <br />
          Agence de marketing digital
        </span>
        <div className="flex flex-row justify-center py-4">
          <div className="px-8">
            <FontAwesomeIcon
              size="xl"
              height={"auto"}
              icon={faSquareInstagram}
            />
          </div>
          <div className="px-8">
            <FontAwesomeIcon size="xl" height={"auto"} icon={faLinkedin} />
          </div>
          <div className="px-8">
            <FontAwesomeIcon size="xl" height={"auto"} icon={faSquareGithub} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
