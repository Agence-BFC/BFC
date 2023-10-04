"use client";

import "./styles.css";
import Image from "next/image";
import { useState } from "react";
var React = require("react");
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;
// const Sowtext=()=>{
//   const [poyoFields, setPoyoFields] = useState({
//     poyo1: false,
//     poyo2: false,
//     poyo3: false,
//   });
// };

const Serv = () => (
  <>
    <section className="bg-[#BBF7D0]">

      {/* 2EME VERSION QUI POURRAIS CORRESPONDRE AUX ATTENTES DU PROJET DE LA PAGE SERVICES  */}

      <div className="flex flex-row pt-24 justify-center items-center mx-6  drop-shadow-xl lg:grid lg:grid-cols-3 lg:items-center">
        <div>
          <a href="/contact">
            <button
              className=" shadow-lg shadow-amber-800/80 border-2 rounded-full px-2 border-amber-800"
              id="d1"
            >
              Création
            </button>
          </a>
        </div>

        <div className="px-6">
          <button
            className=" shadow-lg shadow-amber-800/80 border-2 rounded-full px-2 border-amber-800 "
            id="d2"
          >
            Maitenance
          </button>
        </div>
        <button className="shadow-lg shadow-amber-800/80 border-2 rounded-full px-2 border-amber-800">
          Design
        </button>
      </div>

      <div className=" my-6 card flex flex-col items-center rounded-md pt-4 opacity-90 bg-[#EEC23980] mx-8 md:mx-52    -z-10 pb-2   lg:px-10 lg:mx-16  lg:my-6  ">
        <h1 className="text-xl">Crétation de sites</h1>
        <div>
          <button className="text-xs flex justify-center pt-8 font-bold">
            CRÉATION DE SITES WEB
          </button>
        </div>
        <div className=" flex flex-col contain bg-[#EEC23980] pt-1 items-center justify-center  px-8 m-4 lg:pb-1 lg:px-12  ">
          <Image
            src="/images/logos/logo-black.svg"
            width={150}
            height={150}
            alt="logoblack"
          ></Image>
          <div id="d1">
            <p id="p1" className="hide text-xs">
              Découvrez l art de la création web avec nous : Nous transformons
              vos idées en sites web exceptionnels. Notre expertise, votre
              vision. Ensemble, construisons une présence en ligne qui va
              au-delà de vos attentes pour concrétiser vos rêves digitaux.
            </p>
          </div>
          <h2 className="underline mt-2">tarifs:</h2>
          <p className="mt-1 text-xs ">A partir de : 20 000€</p>
          <div className="lg:flex lg:flex-row">
            <a href="/contact">
              <button
                className=" flex flex-row justify-center my-2 underline lg:bg-green-800 lg:opacity-90 p-1  lg:rounded lg:placeholder:hover-bg-green-500 uppercase  hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                type="button"
                value="En savoir +"
              >
                <h2>Demander nous un devis</h2>
              </button>
            </a>
          </div>
        </div>

        {/* REFONTE  */}

        <div>
          <div>
            <button className="text-xs flex justify-center pt-8 font-bold ">
              REFONTE WEB
            </button>
          </div>
        </div>
        <div className=" flex flex-col contain bg-[#EEC23980] pt-1 items-center justify-center  px-8 m-4 lg:pb-1 lg:px-12  ">
          <Image
            src="/images/logos/logo-black.svg"
            width={150}
            height={150}
            alt="logoblack"
          ></Image>
          <div id="d1">
            <p id="p1" className="hide text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              autem quod, ipsa sequi illum dolores eligendi. Voluptas deserunt,
              a optio neque tempore porro perspiciatis, sapiente dolorem quasi
              recusandae ullam rem!
            </p>
          </div>
          <h2 className="underline mt-2">tarifs:</h2>
          <p className="mt-1 text-xs ">A partir de : 20 000€</p>
          <div className="lg:flex lg:flex-row">
            <a href="/contact">
              <button
                className=" flex flex-row justify-center my-2 underline lg:bg-green-800 lg:opacity-90 p-1  lg:rounded lg:placeholder:hover-bg-green-500 uppercase  hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                type="button"
                value="En savoir +"
              >
                <h2>Demander nous un devis</h2>
              </button>
            </a>
          </div>
        </div>

        {/* MAINTENANCE ET INTEGRATION */}

        <div>
          <div>
            <button className="text-xs flex justify-center pt-8 font-bold ">
              MAINTENANCE ET INTÉGRATION
            </button>
          </div>
        </div>
        <div className=" flex flex-col contain bg-[#EEC23980] pt-1 items-center justify-center  px-8 m-4 lg:pb-1 lg:px-12  ">
          <Image
            src="/images/logos/logo-black.svg"
            width={150}
            height={150}
            alt="logoblack"
          ></Image>
          <div id="d1">
            <p id="p1" className="hide text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              autem quod, ipsa sequi illum dolores eligendi. Voluptas deserunt,
              a optio neque tempore porro perspiciatis, sapiente dolorem quasi
              recusandae ullam rem!
            </p>
          </div>
          <h2 className="underline mt-2">tarifs:</h2>
          <p className="mt-1 text-xs ">A partir de : 20 000€</p>
        <div className="lg:flex lg:flex-row">
          <a href="/contact">
            <button
              className=" flex flex-row justify-center my-2 underline lg:bg-green-800 lg:opacity-90 p-1  lg:rounded lg:placeholder:hover-bg-green-500 uppercase  hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
              type="button"
              value="En savoir +"
            >
              <h2>Demander nous un devis </h2>
            </button>
          </a>
        </div>
        </div>
      </div>
    </section>
  </>
);

export default Serv;
