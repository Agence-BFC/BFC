"use client";

import "./styles.css";
import Image from "next/image";
import { useState } from "react";

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
      <div className="flex flex-row pt-24 justify-center items-center mx-6  drop-shadow-xl lg:grid lg:grid-cols-3 lg:items-center">
        <button
          className=" shadow-lg shadow-amber-800/80 border-2 rounded-full px-2 border-amber-800"
          id="d1"
        >
          Création
        </button>
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

      <div className=" my-6 card flex flex-col items-center rounded-md  opacity-90 bg-[#EEC23980] pt-4 mx-8 md:mx-52    -z-10 pb-2   lg:px-10 lg:mx-16  lg:my-6  ">
        <h1 className="text-xl">CRÉATION WEB</h1>
        <div className="w-full grid grid-cols-3 items-center text-center pt-8 lg:grid lg:grid-cols-3 lg:items-center underline">
          <h1>RESPONSIVE</h1>
          <h1>CAHIER DES CHARGES</h1>
          <h1>RESPECT WWW</h1>
        </div>
        <div className=" flex flex-col contain bg-[#EEC23980] pt-1 items-center justify-center  px-8 m-4 lg:pb-1 lg:px-12  ">
          <Image
            src="/images/logos/logo-black.svg"
            width={150}
            height={150}
            alt="logoblack"
          ></Image>
          <div id="d1">
            <p id="p1" className="hide">
              Découvrez lart de la création web avec nous : Nous transformons
              vos idées en sites web exceptionnels. Notre expertise, votre
              vision. Ensemble, construisons une présence en ligne qui va
              au-delà de vos attentes pour concrétiser vos rêves digitaux.
            </p>
          </div>
          <div id="d2">
            <p id="l1">test 2</p>
          </div>
          <div>
            <p>test 3</p>
          </div>

          <h2 className="underline mt-2">tarifs:</h2>
          <p className="mt-1">à partir de : 20 000€</p>
        </div>
        <div className="lg:flex lg:flex-row">
          <a href="/contact">
            <button
              className=" flex flex-row justify-center bg-green-800 p-2 mt-4 rounded-full hover-bg-green-500 uppercase  hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
              type="button"
              value="En savoir +"
            >
              Devis
            </button>
          </a>
        </div>
      </div>

      {/* séparation de la colone */}
    </section>
  </>
);

export default Serv;
