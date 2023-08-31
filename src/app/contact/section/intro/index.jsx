"use client";
import DataContact from "@/app/contact/data/service.json";
import CardsServices from "@/components/tools/cards/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Animation from "../../animation";

const Intro = () => {
  return (
    <main>
      <section className="mt-28 mx-4 lg:ml-28 w-full h-full">
        <div className="">
          <div className=" p-4 lg:w-2/12  w-full h-full mt-40 mb-20 flex flex-col ">
            <h1 className=" font-bold uppercase text-2xl text-center">
              nous joindre
            </h1>
          </div>
          <div className="text-center">
            <h2 className="font-bold uppercase text-2xl mb-12">
              <Animation />
            </h2>
          </div>

          <div className="contain-blue">
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
          <div className="">
            <div className="text-center mt-10">
              <h1 className=" font-bold uppercase text-2xl">
                Nos horaires <br /> d'ouvertures
              </h1>
              <p className="mt-12 ">
                {" "}
                Du lundi au vendredi: <p className="font-bold">
                  8h30 - 18H30
                </p>{" "}
                <br />
                Les week-Ends et jours fériés:{" "}
                <p className="font-bold">Fermé</p>
              </p>
            </div>
            <div className="">
              <h3 className="font-bold uppercase text-2xl text-center mt-12">
                nos moyens de contact
              </h3>
            </div>

            <ul className="text-center items-center mb-10">
              <li>
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon width={30} height={"auto"} icon={faPhone} />
                </div>
                <br />
                <a href="tel:">
                  +33 (0)1.23.45.67.89 <div className="px-4"></div>{" "}
                </a>
              </li>
              <br />
              <br />
              <li>
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    width={30}
                    height={"auto"}
                    icon={faEnvelope}
                  />
                </div>
                <br />

                <a href="mailto:">Contact@devnet.com</a>
              </li>
              <br />
              <li className="">
                <div className="flex flex-row justify-center">
                  <FontAwesomeIcon
                    width={20}
                    height={"auto"}
                    icon={faLocationDot}
                  />
                </div>
                <br />
                30 Bd, du Chevalier Bayard
                <br />
                77100 Meaux
                <br />
              </li>
              <br />
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Intro;
