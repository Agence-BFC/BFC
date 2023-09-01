"use client";

import Input from "@/components/tools/input";
import "./styles.css";
import { useState } from "react";
import TabButton from "./tabbutton";
import AboutTab from "./about";
import ContactTab from "./contacttab";
import MaitenanceTab from "./maitenance";

const Formul = () => {
  const [tab, setTab] = useState("about");

  return (
    <>
   
      <div className=" card flex flex-col items-center rounded-md   bg-yellow-500 mx-8 md:mx-16   hover: m-5 -z-10 pb-2   lg:px-10 lg:mx-96  lg:my-6 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
        <div className=" flex flex-col contain items-center justify-center px-8 m-4  lg:pb-1 lg:px-12 lg:my-10  ">
          <div className="flex flex-col items-center justify-center py-3 my-4 lg:flex lg:flex-row lg:text-xl ">
            <div className="border-2 rounded-full border-amber-800 px-2 hover:bg-green-800 hover:text-white">
            <TabButton
              isActive={tab === "about"}
              onClick={() => setTab("about")}
            >
              Création web
            </TabButton>
            </div>
            <div className=" my-3 px-8 lg:px-8 border-2 rounded-full border-amber-800 hover:bg-green-800 hover:text-white ">
              <TabButton
                isActive={tab === "contact"}
                onClick={() => setTab("contact")}
              >
                Design
              </TabButton>
            </div>
            <div className="border-2 rounded-full border-amber-800 px-3 hover:bg-green-800 hover:text-white">
            <TabButton
              isActive={tab === "maitenance"}
              onClick={() => setTab("maitenance")}
            >
              Maitenance
            </TabButton>
            </div>
          </div>
          {tab === "about" && <AboutTab />}
          {tab === "contact" && <ContactTab />}
          {tab === "maitenance" && <MaitenanceTab />}
        </div>
      </div>

      <h1 className="flex flex-row justify-center my-3 pt-2 text-2xl px-5 mx-10 text-amber-900 lg:text-6xl shadow-2xl shadow-amber-800  lg:mx-96 rounded-full ">
        Contactez-nous :
      </h1>
      <form className="card my-10  flex flex-col mx-5 px-4 md:mx-16 lg:my-16 lg:grid lg:grid-cols-2 lg:mx-96 lg:mb-20  hover:ease-in-out hover:duration-200 lg:hover:scale-105 blur-none  ">
        <div className="py-3 lg:my-60 lg:items-center lg:mx-20 lg:text-3xl">
          Vous voulez obtenir un devis pour un service?
          <br /> Ou tout simplement obtenir une information sur notre équipe?{" "}
          <br /> Vous pouvez nous envoyer un message à notre agence et nous vous
          répondrons dans les plus brefs délais. 😇
        </div>
        <div className="contain my-6 lg:py-6 ">
          <div className="flex flex-col items-center  ">
            <label htmlFor="">Votre nom</label>
            <Input type="text" className="w-3/4 dark:hover:bg-amber-950" />
          </div>
          <div className="flex flex-col items-center  lg:py-4 ">
            <label htmlFor="">Votre prénom</label>
            <Input type="text" className="w-3/4 dark:hover:bg-amber-950" />
          </div>
          <div className="flex flex-col items-center lg: ">
            <label htmlFor="">Votre téléphone</label>
            <Input type="text" className="w-3/4 dark:hover:bg-amber-950" />
          </div>
          <div className="flex flex-col items-center lg:py-4">
            <label htmlFor="">Votre adresse email</label>
            <Input type="text" className="w-3/4 dark:hover:bg-amber-950" />
          </div>
          <div className="mx-8 flex flex-col items-center lg:justify-center lg:col-span-2 lg:py-4">
            <label htmlFor="">Objet du message</label>
            <textarea
              name=""
              id=""
              // cols="50"
              // rows="10"
              className="h-40 lg:w-10/12 lg:h-72 rounded-lg bg-green-900 hover:bg-white text-black border border-amber-800 focus-visible:border-amber-800 focus:border-amber-800 hover:transition hover:ease-in-out hover:duration-200 dark:hover:bg-amber-950"
            ></textarea>
          </div>
          <div className="py-4 flex flex-row justify-center lg:text-4xl">
            <button
              className="flex flex-row justify-center bg-green-900 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36   lg:text-lg lg:w-48 dark:hover:bg-amber-950 hover:text-white hover:transition hover:ease-in-out hover:duration-200"
              type="button"
              value="En savoir +"
            >
              Envoyer
            </button>
          </div>
        </div>
     
      </form>
  
    </>
  );
};
export default Formul;
