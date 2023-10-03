"use client";

import "./styles.css";
import Image from "next/image";

const Serv = () => (
  <>
    <section className="">
      <div className="flex flex-row mt-6 justify-center items-center mx-6 drop-shadow-xl lg:grid lg:grid-cols-3 lg:items-center">
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
        <button
          className="shadow-lg shadow-amber-800/80 border-2 rounded-full px-2 border-amber-800"
       
        >
          Design
        </button>
      </div>

      <div className=" my-6 card flex flex-col items-center rounded-md   bg-yellow-500 mx-8 md:mx-52    -z-10 pb-2   lg:px-10 lg:mx-16  lg:my-6  ">
        <h1 className="text-xl">Crétation de site</h1>
        <div className="w-full grid grid-cols-3 items-center text-center lg:grid lg:grid-cols-3 lg:items-center underline">
          <h1>poyo</h1>
          <h1>poyo</h1>
          <h1>poyo</h1>
        </div>
        <div className=" flex flex-col contain items-center justify-center px-8 m-4 lg:pb-1 lg:px-12  ">
          <Image
            src="/images/logos/logo-black.svg"
            width={100}
            height={100}
            alt="logoblack"
          ></Image>
          <div id="d1">
            <p id="p1" className="hide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              ipsa sit totam porro aliquid nesciunt reiciendis alias.
            </p>
          </div>
          <div id="d2">
            <p id="l1">test 2</p>
          </div>
          <div >
            <p >test 3</p>
          </div>

          <h2 className="underline mt-2">tarifs:</h2>
          <p className="mt-1">à partir de : 20 000€</p>
        </div>
        <div className="lg:flex lg:flex-row">
          <button
            className=" flex flex-row justify-center bg-green-800  p-2 rounded-full hover-bg-green-500 uppercase  hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
            type="button"
            value="En savoir +"
          >
            Consulter
          </button>
          <button
            className=" flex flex-row justify-center bg-green-800 p-2 mt-4 rounded-full hover-bg-green-500 uppercase  hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
            type="button"
            value="En savoir +"
          >
            Consulter
          </button>
        </div>
      </div>

      {/* séparation de la colone */}
    </section>
  </>
);

export default Serv;
