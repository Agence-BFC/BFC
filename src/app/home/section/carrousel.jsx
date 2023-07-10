"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = () => {
  return (
    <>
      <div>
        <Carousel autoPlay   className="bg-yellow-500 m-8 opacity-80 ">
          <div>
            <img 
              src="images/logos/logotest.svg"
              alt="logoentreprise"
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
          <div>
            <img src="images/logos/logotest.svg" />
            <p className="legend">Entreprise E</p>
          </div>
          <div>
            <img src="images/logos/logotest.svg" />
            <p className="legend">Entreprise F</p>
          </div>
        </Carousel>
        <div className="flex flex-row  w-50 justify-center items-center ">
          <button className=" border-2 border-green-500 rounded-lg px-3">
            <p>Nos Tarifs</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
