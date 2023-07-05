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
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

const FooterDesktop = () => {
  return (
    <>
      <footer className="w-full">
        <ul className=" bg-green-800 flex flex-row  justify-center pb-8 py-8 ">
          <li className="px-8 flex flex-row">
            <FontAwesomeIcon width={20} height={"auto"} icon={faLocationDot} />
            <a href="address:" className="px-6">
              {" "}
              30 bd du Chevalier Bayard
            </a>
          </li>

          <li className="px-8 flex flex-row ">
            <FontAwesomeIcon width={20} height={"auto"} icon={faAt} />
            <a href="mailto:" className="px-6">
              Contact@devnet.com
            </a>
          </li>
          <li className="px-8 flex flex-row">
            <FontAwesomeIcon width={20} height={"auto"} icon={faPhone} />
            <a href="tel:" className="px-6">
              +33 1 23 45 67 89
            </a>
          </li>
        </ul>

        <section className=" grid grid-cols-3">
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
                width={30}
                height={"auto"}
                icon={faFacebookSquare}
              />
            </div>
            <div className="px-8">
              <FontAwesomeIcon
                width={30}
                height={"auto"}
                icon={faSquareInstagram}
              />
            </div>
            <div className="px-8">
              <FontAwesomeIcon width={30} height={"auto"} icon={faLinkedin} />
            </div>
            <div className="px-8">
              <FontAwesomeIcon
                width={30}
                height={"auto"}
                icon={faSquareGithub}
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center text py-4">
            <span className="text-center">
              © Devnet - 2023
              <br />
              Agence de marketing digital
            </span>
          </div>
        </section>
        <div className="py-6 text-xs flex flex-col items-center bg-black text-white w-full">
          <Link href="">Mentions légales</Link>
          <Link href="">Politique de confidentialité</Link>
        </div>
      </footer>
    </>
  );
};

export default FooterDesktop;
