"use client";
import Header from "@/components/layouts/header";
import Home from "@/app/home";
import Footer from "@/components/layouts/footer";
import Services from "./home/section/services";
import Clients from "./home/section/clients";
import Carrousel from "./home/section/carrousel";
import Formulaire from "./home/section/formulaire";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"

export default function Page() {
  useEffect(() => {
    AOS.init({once:false}); 
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Services />
      <Clients />
      <Carrousel />
      <Formulaire />
      <Footer />
    </>
  );
}
