import"./styles.css"

const Services = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 text-amber-900 text-2xl lg:text-6xl">
        Services :
      </h1>
      <section className=" lg:grid lg:grid-cols-3 ">

          <div className="flex-auto justify-center  ">
            <div className=" card flex flex-col  items-center rounded-md  border-green-500 bg-yellow-500   hover:opacity-50 m-5 -z-10 pb-2 lg:m-0  ">
              <div className=" flex flex-col contain items-center justify-center px-4 my-5 ">
              <h2 className="flex w-full justify-center pt-2 px-4 text-amber-900 text-xl lg:text-4xl ">
                Création site web
              </h2>
              <ul className="lg:text-4xl">
                <li id="Lorem" className="pt-2" link href="/Lorem">
                  Lorem
                </li>
                <li id="Lorem" className=" pt-2" link href="Lorem">
                  Lorem
                </li>
                <li
                  id="Lorem"
                  className="pt-2 pb-2"
                  Link
                  href="/Lorem"
                >
                  Lorem
                </li>
              </ul>
              <button className=" flex flex-row justify-center bg-green-900 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 " type="button" value="En savoir +">
                En savoir +
              </button>
              </div>
            </div>
          </div>
        </section>
        <section className=" lg:grid lg:grid-cols-3 ">

<div className="flex-auto justify-center  ">
  <div className=" card flex flex-col  items-center rounded-md  border-green-500 bg-yellow-500   hover:opacity-50 m-5 -z-10 pb-2 lg:m-0  ">
    <div className=" flex flex-col contain items-center justify-center px-4 my-5 ">
    <h2 className="flex w-full justify-center pt-2 px-4 text-amber-900 text-xl lg:text-4xl ">
      Desing Graphique
    </h2>
    <ul className="lg:text-4xl">
      <li id="Lorem" className="pt-2" link href="/Lorem">
        Lorem
      </li>
      <li id="Lorem" className=" pt-2" link href="Lorem">
        Lorem
      </li>
      <li
        id="Lorem"
        className="pt-2 pb-2"
        Link
        href="/Lorem"
      >
        Lorem
      </li>
    </ul>
    <button className=" flex flex-row justify-center bg-green-900 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 " type="button" value="En savoir +">
      En savoir +
    </button>
    </div>
  </div>
</div>
</section>
<section className=" lg:grid lg:grid-cols-3 ">

<div className="flex-auto justify-center  ">
  <div className=" card flex flex-col  items-center rounded-md  border-green-500 bg-yellow-500   hover:opacity-50 m-5 -z-10 pb-2 lg:m-0  ">
    <div className=" flex flex-col contain items-center justify-center px-4 my-5 ">
    <h2 className="flex w-full justify-center pt-2 px-8  text-amber-900 text-xl lg:text-4xl ">
      Maintenance
    </h2>
    <ul className="lg:text-4xl">
      <li id="Lorem" className="pt-2" link href="/Lorem">
        Lorem
      </li>
      <li id="Lorem" className=" pt-2" link href="Lorem">
        Lorem
      </li>
      <li
        id="Lorem"
        className="pt-2 pb-2"
        Link
        href="/Lorem"
      >
        Lorem
      </li>
    </ul>
    <button className=" flex flex-row justify-center bg-green-900 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950 " type="button" value="En savoir +">
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
