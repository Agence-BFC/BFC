"use client";

import Navbar from "@/components/layouts/navbar";
// import Home from "./home";
// import Header from "@/components/layouts/header";
import Home from "@/app/home";
import Footer from "@/components/layouts/footer";
// import Services from "./home/section/services";
// import Clients from "./home/section/clients";
// import Carrousel from "./home/section/carrousel";
// import Formulaire from "./home/section/formulaire";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Services /> */}
      <Navbar />
      <Home />
      {/* <Clients />
      <Carrousel />
      <Formulaire /> */}
      <Footer />
    </>
  );
};

// export default function () {

//   // useEffect(() => {
//   //   window.localStorage.setItem("mode", "dark");
//   //   console.log(window.localStorage.getItem("mode"));
//   // }, []);
//   return (
//     <>
