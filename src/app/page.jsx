"use client";
import Image from "next/image";
import Navbar from "@/components/layouts/desktop";
import NavbarMobile from "@/components/layouts/header/Mobile";
import Home from "@/app/home";
import Footer from "@/components/layouts/footer";
import Services from "./home/section/services";
import Clients from "./home/section/clients";
import Carrousel from "./home/section/carrousel";
import Formulaire from "./home/section/formulaire";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Home />
      <Services />
      <Clients />
      <Carrousel />
      <Formulaire />
      <Footer />
    </>
  );
}
