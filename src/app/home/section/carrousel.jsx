"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = () => {
  return (
    <>
      <div className="lg:w-80">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={0}
          showIndicators={0}
          showStatus={0}
          arr
          interval={2000}
          className=" bg-yellow-500 m-8 opacity-80 lg:z-10"
        >
          <div>
            <img
              className="h-80 w-80"
              src="images/logos/logotest.svg"
              alt="logoentreprise"
              width={50}
              height={50}
            />
            <p className="legend">Entrepise A</p>
          </div>
          <div>
            <img src="images/logos/logotest.svg" />
            <p className="legend">Entreprise B</p>
          </div>
          <div>
            <img src="images/logos/logotest.svg" />
            <p className="legend">Entreprise C</p>
          </div>
          <div>
            <img src="images/logos/logotest.svg" />
            <p className="legend">Entreprise D</p>
          </div>
        </Carousel>
        <div className="flex flex-row  w-50 justify-center items-center lg:text-3xl">
          <button
            className=" flex flex-row justify-center bg-green-900 my-2  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-amber-950 lg:text-lg lg:w-48 "
            type="button"
            value="En savoir +"
          >
            Nos Tarifs
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
