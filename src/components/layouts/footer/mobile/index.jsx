import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

const FooterMobile = () => {
  return (
    <>
      <ul className="text-center items-center pt-8">
        <li className="">
          <div className="flex flex-row justify-center">
            <FontAwesomeIcon width={20} height={"auto"} icon={faLocationDot} />
          </div>
          <br />
          30 Bd, du Chevalier Bayard
          <br />
          77100 Meaux
          <br />
        </li>
        <br />
        <li>
          <div className="flex flex-row justify-center">
            <FontAwesomeIcon width={20} height={"auto"} icon={faEnvelope} />
          </div>
          <br />

          <a href="mailto:">Contact@devnet.com</a>
        </li>
        <br />
        <li>
          <div className="flex flex-row justify-center">
            <FontAwesomeIcon width={20} height={"auto"} icon={faPhone} />
          </div>
          <br />

          <a href="tel:">
            +33 (0)1.23.45.67.89 <div className="px-4"></div>{" "}
          </a>
        </li>
        <br />
      </ul>
      <hr />
      <div className="bg-black text-white flex flex-col justify-center italic text py-4">
        <span className="text-center">
          © Devnet - 2023
          <br />
          Agence de marketing digital
        </span>
      </div>

      <div className="bg-green-800 flex flex-col">
        <div className="flex flex-row justify-center">
          <Image
            src="/images/logos/logo-black.svg"
            width={125}
            height={125}
            alt=""
          />
        </div>
        <div className="flex flex-row justify-center py-4">
          <div className="px-8">
            <FontAwesomeIcon
              width={20}
              height={"auto"}
              icon={faFacebookSquare}
            />
          </div>
          <div className="px-8">
            <FontAwesomeIcon
              width={20}
              height={"auto"}
              icon={faSquareInstagram}
            />
          </div>
          <div className="px-8">
            <FontAwesomeIcon width={20} height={"auto"} icon={faLinkedin} />
          </div>
          <div className="px-8">
            <FontAwesomeIcon width={20} height={"auto"} icon={faSquareGithub} />
          </div>
        </div>
        <div className="py-6 text-xs flex flex-col items-center">
          <Link href="">Mentions légales</Link>
          <Link href="">Politique de confidentialité</Link>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
