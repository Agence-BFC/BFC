import Image from "next/image";
import "./styles.css";
import { BsKey,BsPaintBucket,BsPenFill } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 my-3 text-amber-900 text-2xl lg:text-6xl lg:py-10 shadow-2xl shadow-amber-800 mx-20 lg:mx-96 rounded-full">
        Services :
      </h1>
      <section className="lg:flex lg:flex-row  " id="services">
        <div className="flex-auto justify-center  ">
          <div className=" card flex flex-col items-center rounded-md   bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2   lg:px-10 lg:mx-16  lg:my-6 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
            <div className=" flex flex-col contain items-center justify-center px-8 m-4 lg:pb-1 lg:px-12  ">
              <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl  lg:px-14 lg:mx-20 lg:text-4xl lg:items-center ">
                Création web
              </h2>
              <ul className="lg:text-4xl lg:my-6">
                <li id="Lorem" className="" link href="/Lorem">
                   Responsive
                </li>
                <li id="Lorem" className=" py-2 " link href="Lorem">
                  Cahiers des charges
                </li>
                <li id="Lorem" className="" Link href="/Lorem">
                  Respect WWW
                </li>
              </ul>
              <div className="text-5xl lg:text-9xl py-2 lg:py-4">
                  <BsPenFill width={100} height={100} />
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
        <div className="flex-auto justify-center  ">
          <div className=" card flex flex-col items-center rounded-md  bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2  lg:px-6 lg:mx-24  lg:my-6  hover:ease-in-out hover:duration-200 lg:hover:scale-105">
            <div className=" flex flex-col contain items-center justify-center px-2 m-4  lg:px-12 ">
              <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl lg:px-8 lg:mx-20 lg:text-4xl lg:items-center ">
                Design graphisme
              </h2>
              <ul className="lg:text-4xl lg:my-6">
                <li id="Lorem" className="" link href="/Lorem">
                  Maquettage
                </li>
                <li id="Lorem" className="  py-2" link href="Lorem">
                  Figma
                </li>
                <li id="Lorem" className="" Link href="/Lorem">
                  Prototypage
                </li>
              </ul>
              <div>
              <div className="text-5xl lg:text-9xl py-1 lg:py-4">
                  <BsPaintBucket width={100} height={100} />
                </div>
             
              </div>
              <a href="/services">
                <button
                  className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out   lg:text-lg lg:w-48 dark:hover:bg-amber-950  hover:duration-200 lg:hover:scale-105 "
                  type="button"
                  value="En savoir +"
                >
                  En savoir +
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-auto justify-center  ">
          <div className=" card flex flex-col items-center rounded-md   bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2  lg:px-6 lg:mx-16  lg:my-6 hover:ease-in-out hover:duration-200 lg:hover:scale-105 ">
            <div className=" flex flex-col contain items-center justify-center px-2 m-4  lg:px-8 ">
              <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl lg:px-10 lg:mx-20 lg:text-4xl lg:items-center ">
                Maintenance site
              </h2>
              <ul className="lg:text-4xl lg:my-6">
                <li id="Lorem" className="" link href="/Lorem">
                  Débogage
                </li>
                <li id="Lorem" className="  py-2" link href="Lorem">
                  Analyse
                </li>
                <li id="Lorem" className="" Link href="/Lorem">
                  Sécurité
                </li>
              </ul>
              <div>
                <div className="text-5xl lg:text-9xl lg:py-4">
                  <BsKey width={120} height={120} />
                </div>
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
