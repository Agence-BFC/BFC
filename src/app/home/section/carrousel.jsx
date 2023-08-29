"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = () => {
  return (
    <>
      <div className=" m-2 md:mx-30  lg:my-14 lg:mx-72 hover:transition hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
        <div className="contain rounded-lg  mx-6 md:mx-48 flex justify-center lg:mx-80">
          <div className="  m-6 bg-yellow-500 opacity-80 md:mx-6 lg:my-14 lg:h-1/2 lg:w-1/2 ">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={0}
              showIndicators={0}
              showStatus={0}
              arr
              interval={2000}
              className="opacity-90 justify-center lg:z-10"
            >
              <div>
                <img
                  src="images/logos/logotest.svg"
                  alt="logoentreprise"
                  className="lg:h-80 lg:w-80"
                  width={50}
                  height={50}
                />
                <p className="legend">Entrepise A</p>
              </div>
              <div>
                <img
                  src="images/logos/logotest.svg"
                  className="lg:h-80 lg:w-80"
                  width={50}
                  height={50}
                  alt="entreprise"
                />
                <p className="legend">Entreprise B</p>
              </div>
              <div>
                <img
                  src="images/logos/logotest.svg"
                  className="lg:h-80 lg:w-80"
                  width={50}
                  height={50}
                  alt="entreprise"
                />
                <p className="legend">Entreprise C</p>
              </div>
              <div>
                <img
                  src="images/logos/logotest.svg"
                  className="lg:h-80 lg:w-80"
                  width={50}
                  height={50}
                  alt="entreprise"
                />
                <p className="legend">Entreprise D</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-6 ">
        <button
          className="  items-center w-36  bg-green-900   rounded-full uppercase px-3 py-3  hover:text-white hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-amber-950 lg:text-lg lg:w-48 "
          type="button"
          value="En savoir +"
        >
          Contactez-nous
        </button>
      </div>
    </>
  );
};

export default Carrousel;
