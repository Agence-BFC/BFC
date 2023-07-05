import { FontAwesomeIcon } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Navbar from "@/components/layouts/navbar";
import NavbarMobile from "@/components/layouts/navbarMobile";
import Home from "@/app/home";
import Footer from "@/components/layouts/footer";
import Services from "./home/section/services";
import Clients from "./home/section/clients";
import Carrousel from "./home/section/carrousel";
import Formulaire from "./home/section/formulaire";

export default function () {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Home />
      <Services/>
      <Clients/>
      <Carrousel/>
      <Formulaire/>
      <Footer />
    </>
  );
}
