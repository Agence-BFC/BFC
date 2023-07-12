"use client";

import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/layouts/footer";

const Carousell = () => {
  return (
    <>
      <div>
        <section>
          <Carousel>
            <div className="bg-[url('/images/background/immg2.jpg')] py-10 ">
              <div className="flex-start">
                <h6 className="pb-10 uppercase text-lg">Crée un site web</h6>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center a href">
                  En savoir +
                  <a href=""></a>
                </button>
              </div>
            </div>

            <div className="bg-[url('/images/background/photo.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Crée une site web</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>

            <div className="bg-[url('/images/background/photo.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Crée une site web</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>
          </Carousel>
        </section>
      </div>

      <div>
        <section className="py-5">
          <Carousel>
            <div className="bg-[url('/images/background/immg2.jpg')] py-15">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Crée une site web</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>

            <div className="bg-[url('/images/background/immg2.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Crée une site web</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>

            <div className="bg-[url('/images/background/immg2.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Crée une site web</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>
          </Carousel>
        </section>
      </div>

      <div>
        <section>
          <Carousel>
            <div className="bg-[url('/images/background/immg2.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Referencement seo </h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>

            <div className="bg-[url('/images/background/immg2.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Creation Logo</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>

            <div className="bg-[url('/images/background/immg2.jpg')] py-10">
              <div className="flex-start">
                <h1 className="pb-10 uppercase text-lg">Supports visuel</h1>
              </div>
              <p className="">
                *je suis un paragraphe représentant*
                <br />
                "crée un site web"
              </p>
              <div className="flex flex-row justify-center pt-10">
                <button className=" flex flex-row  border-4 border-green-500 bg justify-center">
                  En savoir +
                </button>
              </div>
            </div>
          </Carousel>
        </section>
      </div>
    </>
  );
};
<Footer />;

export default Carousell;
