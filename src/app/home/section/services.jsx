
import "./styles.css";
import { BsKey, BsPaintBucket, BsPen } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 my-3 text-amber-900 text-2xl md:my-4 md:mx-48 md:pt-4 lg:text-4xl lg:py-10 shadow-lg shadow-amber-800/80 mx-20 lg:mx-96 rounded-full hover:bg-gradient-to-r  ">
        Services
      </h1>
      <section
        className="pt-4  lg:grid lg:grid-cols-3 lg:w-full lg:mx-10 lg:my-10 "
        id="services"
      >
        <div className="">
        <div className=" card flex flex-col  items-center rounded-md     bg-yellow-500 mx-14 md:mx-52   -z-10 pb-2 lg:mx-10    lg:my-4  hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
          <div className=" flex flex-col contain items-center justify-center m-4 px-6 lg:pb-1 dark:mx-1  ">
            <h2 className="flex w-full justify-center pt-2  mx-5  text-amber-900 text-xl  lg:px-14  lg:text-2xl lg:items-center ">
              Création web
            </h2>
            <ul className="list-disc my-6 px-2 lg:text-2xl lg:my-6 lg:pt-2">
              <li id="Lorem" className="" link href="Lorem">
                Responsive
              </li>
              <li id="Lorem" className=" py-2 " link href="Lorem">
                Cahiers des charges
              </li>
              <li id="Lorem" className="" Link href="Lorem">
                Respect WWW
              </li>
            </ul>
            <div className="text-5xl lg:text-9xl py-2 lg:py-4">
              <BsPen width={100} height={100} />
            </div>

            <a href="/services">
              <button
                className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                type="button"
                value="En savoir +"
              >
                En savoir +
              </button>
            </a>
          </div>
        </div>
        </div>
        <div className="">
        <div className="my-6 card flex flex-col items-center rounded-md     bg-yellow-500 mx-14 md:mx-52   -z-10 pb-2  lg:mx-10    lg:my-4 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
          <div className=" flex flex-col contain items-center justify-center m-4 px-6 lg:pb-1   ">
            <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl  lg:px-14  lg:text-2xl lg:items-center ">
              Design site
            </h2>
            <ul className="list-disc my-6 px-2 lg:text-2xl lg:my-6 lg:pt-2">
              <li id="Lorem" className="" link href="Lorem">
                Maquettage
              </li>
              <li id="Lorem" className=" py-2 " link href="Lorem">
                Protoytpage de site
              </li>
              <li id="Lorem" className="" Link href="Lorem">
                Logiciel Figma
              </li>
            </ul>
            <div className="text-5xl lg:text-9xl py-2 lg:py-4">
              <BsPaintBucket width={100} height={100} />
            </div>

            <a href="/services">
              <button
                className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                type="button"
                value="En savoir +"
              >
                En savoir +
              </button>
            </a>
          </div>
        </div>
        </div>
      <div className=""> 
        <div className=" card flex flex-col items-center rounded-md    bg-yellow-500 mx-14 md:mx-52   -z-10 pb-2   lg:mx-10  lg:my-6  lg:mr-20 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
          <div className=" flex flex-col contain items-center justify-center m-4  px-6  lg:pb-1 lg:px-0   ">
            <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl  lg:px-14  lg:text-2xl lg:items-center dark:mx-1  ">
              Maitenance
            </h2>
            <ul className="list-disc my-6  px-2 lg:text-2xl lg:mx-10 lg:my-6 lg:pt-2 lg:dark:mx-6">
              <li id="Lorem" className="" link href="Lorem">
                Débogage
              </li>
              <li id="Lorem" className=" py-2  " link href="Lorem">
                Vérification du site
              </li>
              <li id="Lorem" className="" Link href="Lorem">
                Sécurité
              </li>
            </ul>
            <div className="text-5xl lg:text-9xl py-2 lg:py-3">
              <BsKey width={100} height={100} />
            </div>

            <a href="/services">
              <button
                className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                type="button"
                value="En savoir +"
              >
                En savoir +
              </button>
            </a>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default Services;
