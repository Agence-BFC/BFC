"use client";

import Introduction from "./sections/introduction";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <>
      <div>
        <h1 className="text-center py-12">CREATION DE SITE WEB</h1>
        <section>
          <div>
            <Carousel>
              <div>
                <h1>Crée une site web</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Delectus aliquid adipisci magnam ullam exercitationem
                  temporibus, blanditiis, iure ad eos vitae perspiciatis vero
                  labore rerum, voluptatibus ipsa recusandae architecto minus?
                  Cum?
                </p>
              </div>
              <div>
                <h1>une option a modifier</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ut rerum sint quidem placeat nostrum nemo, aliquid
                  nam eius fuga debitis veniam maxime voluptatibus iste deserunt
                  aperiam est recusandae dicta!
                </p>
              </div>
              <div>
                <h1>une option a modifier</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto incidunt dicta cumque culpa esse sapiente natus
                  eligendi rerum tempore modi cum est, repellat velit aut
                  repudiandae, odio adipisci libero maxime!
                </p>
                </div>
            </Carousel>
          </div>
        </section>
        <div className="flex flex-row justify-center">
          <button className="pb-8 bg bg-green-500">En savoir +</button>
        </div>
      </div>
      <br />
      <hr />

      <div>
        <h1 className="text-center py-12">DESIGN GRAPHIQUE</h1>
        <section>
          <div>
            <Carousel>
              <div>
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <h1>hrdges</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ut rerum sint quidem placeat nostrum nemo, aliquid
                  nam eius fuga debitis veniam maxime voluptatibus iste deserunt
                  aperiam est recusandae dicta!
                </p>
              </div>
              <div>
                <h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto incidunt dicta cumque culpa esse sapiente natus
                  eligendi rerum tempore modi cum est, repellat velit aut
                  repudiandae, odio adipisci libero maxime!
                </h3>
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </section>
        <div>
          <p className="flex flex-row justify-center px-8 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta
            quia sed id est praesentium ipsam voluptate totam atque? Nesciunt,
            beatae porro. Accusamus assumenda quisquam corporis dolor minus
            necessitatibus reiciendis. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
            <br />
            Sapiente debitis temporibus consequuntur minima sed alias culpa
            inventore saepe voluptas aspernatur laborum, rem quisquam ea,
            assumenda voluptate velit mollitia animi optio?
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <button className="pb-8 bg-green-500">En savoir +</button>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
};

export default Services;
