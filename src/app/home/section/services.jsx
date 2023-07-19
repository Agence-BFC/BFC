const Services = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 text-amber-900 text-2xl lg:text-6xl">
        Services :
      </h1>
      <section className=" lg:grid grid-cols-3 ">
        <section>
          <div className="flex-auto justify-center w-50 ">
            <div className="flex flex-col  items-center border-4  rounded-md  border-green-500 bg-yellow-500 opacity-80 hover:opacity-50 m-5 -z-10 pb-2 ">
              <h2 className="flex w-full justify-center pt-2 px-4 text-amber-900 lg:text-4xl">
                Création site web
              </h2>
              <ul className="lg:text-4xl">
                <li id="Lorem" className="list-disc pt-2" link href="/Lorem">
                  Lorem
                </li>
                <li id="Lorem" className="list-disc pt-2" link href="Lorem">
                  Lorem
                </li>
                <li
                  id="Lorem"
                  className="list-disc pt-2 pb-2"
                  Link
                  href="/Lorem"
                >
                  Lorem
                </li>
              </ul>
              <button className=" flex flex-row justify-center border-2 rounded-md border-green-500 w-50 lg:text-4xl ">
                <p> En savoir +</p>
              </button>
            </div>
          </div>
        </section>
        <div className="flex-auto justify-center w-50 ">
          <div className="flex flex-col  items-center border-4  rounded-md  border-green-500 bg-yellow-500 opacity-80 hover:opacity-50 m-5 -z-10 pb-2 ">
            <h2 className="flex flex-row w-full justify-center pt-2 px-4 text-amber-900 lg:text-4xl">
              Desing graphique
            </h2>
            <ul className="lg:text-4xl">
              <li id="Lorem" className="list-disc pt-2" link href="/Lorem">
                Lorem
              </li>
              <li id="Lorem" className="list-disc pt-2" link href="Lorem">
                Lorem
              </li>
              <li id="Lorem" className="list-disc pt-2 pb-2" Link href="/Lorem">
                Lorem
              </li>
            </ul>
            <button className=" flex flex-row justify-center border-2 rounded-md border-green-500 w-50 lg:text-4xl ">
              <p> En savoir +</p>
            </button>
          </div>
        </div>

        <section>
          <div className="flex-auto justify-center w-50 ">
            <div className="flex flex-col  items-center border-4  rounded-md  border-green-500 bg-yellow-500 opacity-80 hover:opacity-50 m-5 -z-10 pb-2 ">
              <h2 className="flex w-full justify-center pt-2 px-2 text-amber-900 lg:text-4xl">
                Maintenance
              </h2>
              <ul className=" lg:text-4xl  ">
                <li id="Lorem" className="list-disc pt-2" link href="/Lorem">
                  Lorem
                </li>
                <li id="Lorem" className="list-disc pt-2" link href="Lorem">
                  Lorem
                </li>
                <li
                  id="Lorem"
                  className="list-disc pt-2 pb-2"
                  Link
                  href="/Lorem">
                  Lorem
                </li>
              </ul>
              <button className="flex flex-row justify-center border-2 rounded-md border-green-500 w-50 lg:text-4xl ">
                <p>En savoir +</p>
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Services;
