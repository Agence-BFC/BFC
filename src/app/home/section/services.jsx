import "./styles.css";

const Services = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 text-amber-900 text-2xl lg:text-6xl">
        Services :
      </h1>
      <section className="lg:flex lg:flex-row  ">
          <div className="flex-auto justify-center  ">
            <div className=" card flex flex-col items-center rounded-md  border-green-500 bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2   lg:px-10 lg:mx-16  lg:my-6  ">
              <div className=" flex flex-col contain items-center justify-center px-6 m-4 lg: lg:px-12  ">
                <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl lg:px-14 lg:mx-20 lg:text-4xl lg:items-center ">
                  Création web
                </h2>
                <ul className="lg:text-4xl">
                  <li id="Lorem" className="pt-2" link href="/Lorem">
                    Lorem
                  </li>
                  <li id="Lorem" className=" pt-2" link href="Lorem">
                    Lorem
                  </li>
                  <li id="Lorem" className="pt-2 pb-2" Link href="/Lorem">
                    Lorem
                  </li>
                </ul>
                <button
                  className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                  type="button"
                  value="En savoir +"
                >
                  En savoir +
                </button>
              </div>
            </div>
          </div><div className="flex-auto justify-center  ">
            <div className=" card flex flex-col items-center rounded-md  border-green-500 bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2  lg:px-6 lg:mx-24  lg:my-6  ">
              <div className=" flex flex-col contain items-center justify-center px-6 m-4  lg:px-12 ">
                <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl lg:px-8 lg:mx-20 lg:text-4xl lg:items-center ">
                  Design graphisme
                </h2>
                <ul className="lg:text-4xl">
                  <li id="Lorem" className="pt-2" link href="/Lorem">
                    Lorem
                  </li>
                  <li id="Lorem" className=" pt-2" link href="Lorem">
                    Lorem
                  </li>
                  <li id="Lorem" className="pt-2 pb-2" Link href="/Lorem">
                    Lorem
                  </li>
                </ul>
                <button
                  className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                  type="button"
                  value="En savoir +"
                >
                  En savoir +
                </button>
              </div>
            </div>
          </div><div className="flex-auto justify-center  ">
            <div className=" card flex flex-col items-center rounded-md  border-green-500 bg-yellow-500 mx-8 md:mx-52   hover: m-5 -z-10 pb-2  lg:px-6 lg:mx-16  lg:my-6  ">
              <div className=" flex flex-col contain items-center justify-center px-6 m-4  lg:px-6 ">
                <h2 className="flex w-full justify-center pt-2  mx-5 text-amber-900 text-xl lg:px-10 lg:mx-20 lg:text-4xl lg:items-center ">
                  Maintenance site
                </h2>
                <ul className="lg:text-4xl">
                  <li id="Lorem" className="pt-2" link href="/Lorem">
                    Lorem
                  </li>
                  <li id="Lorem" className=" pt-2" link href="Lorem">
                    Lorem
                  </li>
                  <li id="Lorem" className="pt-2 pb-2" Link href="/Lorem">
                    Lorem
                  </li>
                </ul>
                <button
                  className=" flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 "
                  type="button"
                  value="En savoir +"
                >
                  En savoir +
                </button>
              </div>
            </div>
          </div>
          
      </section>
    </>
  );
};
export default Services;
