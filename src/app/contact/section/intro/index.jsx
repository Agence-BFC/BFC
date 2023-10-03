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
import Form from "@/components/tools/form";
import Image from "next/image";

const Intro = () => {
  return (
    <main className=" ">
      <div className="lg:mt-28 mt-22 mb-10">
        <div>
          <ProgressBar />
        </div>
        <div className="lg:flex-row lg:justify-center">
          <div className="hidden lg:text-center opacity-90 overflow-x-hidden overflow-y-hidden bg-[url('/images/fond.png')]  h-1/2 lg:h-screen w-screen bg-no-repeat bg-cover bg-left mb-12 lg:grid lg:grid-cols-2  flex-col items-center lg:4xl">
            <div className="hidden:lg ">
              <Animation />
            </div>
            <div className="pr-20 ">
              <h1 className=" font-bold uppercase text-4xl text-center shadow-lg shadow-yellow-500/50 ">
                Contacter-nous
              </h1>
            </div>
          </div>
          <div className="text-center lg:hidden">
            <h2 className="font-bold uppercase text-2xl mt-12 mb-12 ">
              <div className="opacity-90 overflow-x-hidden overflow-y-hidden bg-[url('/images/fond.png')]  h-1/2 lg:h-screen mx-4 bg-no-repeat bg-cover bg-left">
                <Animation />
              </div>
            </h2>
          </div>
          <div className="">
            <h1 className=" font-bold uppercase text-4xl text-center py-3 my-3 text-amber-900 md:my-4 md:mx-48 md:pt-4 lg:text-4xl lg:py-10 shadow-lg shadow-amber-800/80 lg:mx-96 rounded-full hover:bg-gradient-to-r ">
              Lancez-vous
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-2 mt-12">
            <div>
              <div
            data-aos="fade-right"
                className="contain-blur mx-4 border-b-4 "
              >
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
            </div>
            <div className="mt-12">

            <div data-aos="fade-left" className="contain-blur mx-4 ">
              <img className="" src="/images/free.jpg" alt="devis" />
            </div>
            </div>
          </div>
          <hr className="mx-4 mt-12 mb-12"/>
          <h1 className=" font-bold uppercase text-2xl  text-center py-3 my-3 text-amber-900  md:my-4 md:mx-48 md:pt-4 lg:text-4xl lg:py-10 shadow-lg shadow-amber-800/80  lg:mx-96 rounded-full hover:bg-gradient-to-r ">
              Nos horaires d&apos;ouvertures
            </h1>
          <div
            data-aos="flip-up"
            className="flex flex-col text-center mt-12 max-lg:flex w-full"
          >
           
            <p>
              {" "}
              <div className="">
                <FontAwesomeIcon size="2xl" height={"auto"} icon={faClock} />
              </div>{" "}
              <br />
              Du lundi au vendredi: <p className="font-bold">
                8h30 - 18H30
              </p>{" "}
              <br />
              Les week-Ends et jours fériés: <p className="font-bold">Fermé</p>
            </p>
          </div>
          <hr className="mx-4 mt-12 mb-12" />
          <h3 className="font-bold uppercase text-2xl text-center py-3 my-3 text-amber-900 md:my-4 md:mx-48 md:pt-4 lg:text-4xl lg:py-10 shadow-lg shadow-amber-800/80  lg:mx-96 rounded-full hover:bg-gradient-to-r  ">
            nos moyens de contact
          </h3>
          <div className=" mt-12 flex flex-col text-center items-center lg:grid lg:grid-cols-3">
            <div data-aos="zoom-in">
              <div className="py-12">
                <div className="">
                  <FontAwesomeIcon size="xl" height={"auto"} icon={faPhone} />
                </div>
                <p className="font-bold italic">Appeler-nous </p>
                <a href="tel:">
                  +33 (0)1.23.45.67.89 <div className="px-4"></div>{" "}
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" className="">
              <div>
                <FontAwesomeIcon size="xl" height={"auto"} icon={faEnvelope} />
              </div>
              <p className="font-bold italic">Ecriver-nous </p>
              <a href="mailto:">
                Contact@devnet.com <div className="px-4"></div>{" "}
              </a>
            </div>
            <div data-aos="zoom-in" className="py-12 pb-12">
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
          </div>

          <hr className="mx-4 mb-12" />
          <div className="p-4 ">
            <h2 className=" font-bold uppercase text-4xl text-center spy-3 my-3 text-amber-900  md:my-4 md:mx-48 md:pt-4 lg:text-4xl lg:py-10 shadow-lg shadow-amber-800/80 lg:mx-96 rounded-full hover:bg-gradient-to-r ">
              Formulaire
            </h2>
          </div>
          <div data-aos="flip-left">
            <Form/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Intro;
