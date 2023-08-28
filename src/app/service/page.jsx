import Caroussel from "./section/carousel";
import Formulaire from "../home/section/formulaire";
import React from "react";

const SectionCaroussel = () => {
  return (
    <>
      <div>
        <Caroussel />
      </div>
      <div>
        <p>phrase d'accroche contact </p>
      </div>
      <div className="lg:mr-20 lg:flex lg:justify-center">
          <Form />
        </div>
      <div>
        <Formulaire />
      </div>
    </>
  );
};
export default SectionCaroussel;
