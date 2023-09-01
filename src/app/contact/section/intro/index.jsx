"use client";
import DataContact from "@/app/contact/data/service.json";
import CardsServices from "@/components/tools/cards/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Animation from "../../animation";
import React from "react";
import ProgressBar from "react-scroll-progress-bar";

const Intro = () => {
  return (
    <main className="lg:flex h-1/2 lg:w-full ">
      <div>
        <ProgressBar />
      </div>
      <div className="mt-16 ">
        <div className="opacity-90 overflow-x-hidden overflow-y-hidden bg-[url('/images/fond.png')]  h-1/2 lg:h-screen w-screen bg-no-repeat bg-cover bg-left">
          <div className="  p-4 lg:w-2/12  mt-40 mb-40 flex flex-col ">
            <h1 className=" font-bold uppercase text-2xl text-center">
              nous joindre
            </h1>
          </div>
        </div>
        <div className="text-center">
          <h2 className="font-bold uppercase text-2xl mt-12 mb-12 ">
            <div className="opacity-90 overflow-x-hidden overflow-y-hidden bg-[url('/images/fond.png')]  h-1/2 lg:h-screen mx-4 bg-no-repeat bg-cover bg-left ">
              <Animation />
            </div>
          </h2>
        </div>

        <div data-aos="zoom-in-down" className="contain-blur mx-4 border-b-4 ">
          <div>
            {DataContact.map((service) => {
              return (
                <div key={service.id}>
                  {" "}
                  <CardsServices description={service.description} />{" "}
                </div>
              );
            })}
          </div>
        </div>
        <hr className="mx-4 mt-12" />
        <div data-aos="zoom-in" className="flex flex-col text-center mt-12 max-lg:flex w-full">
          <h1 className=" font-bold uppercase text-2xl">
            Nos horaires d'ouvertures
          </h1>
          <p>
            {" "}
            <div className="">
              <FontAwesomeIcon size="2xl" height={"auto"} icon={faClock} />
            </div>{" "}
            <br />
            Du lundi au vendredi: <p className="font-bold">8h30 - 18H30</p>{" "}
            <br />
            Les week-Ends et jours fériés: <p className="font-bold">Fermé</p>
          </p>
        </div>
        <hr className="mx-4 mt-12" />
        <div
          data-aos="zoom-in"
          className=" mt-12 flex flex-col text-center items-center"
        >
          <h3 className="font-bold uppercase text-2xl text-center">
            nos moyens de contact
          </h3>
          <div>
            <div className="py-12">
              <div className="">
                <FontAwesomeIcon size="xl" height={"auto"} icon={faPhone} />
              </div>
              <p className="font-bold italic">Appeler-nous </p>
              <a href="tel:">
                +33 (0)1.23.45.67.89 <div className="px-4"></div>{" "}
              </a>
            </div>
            <div className="">
              <div>
                <FontAwesomeIcon size="xl" height={"auto"} icon={faEnvelope} />
              </div>
              <p className="font-bold italic">Ecriver-nous </p>
              <a href="mailto:">
                Contact@devnet.com <div className="px-4"></div>{" "}
              </a>
            </div>

            <div className="py-12 pb-12">
              <div>
                <FontAwesomeIcon
                  size="xl"
                  height={"auto"}
                  icon={faLocationDot}
                />
              </div>
              <p className="font-bold italic">Retrouver-nous </p>
              <a href="tel:">
                30 Bd, du Chevalier Bayard <br /> 77100 Meaux{" "}
                <div className="px-4"></div>{" "}
              </a>
            </div>
            <hr className="mx-4 mb-12" />
            <div>
              <h1 className="py-4 uppercase  font-bold text-2xl">Formulaire</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Intro;
