const Services = () => {
  return (
    <>
      <h1 className="flex flex-row juistfy-center py-2 text-amber-900 text-2xl">
        Services :
      </h1>
      <section >
        <div className="flex justify-center w-50  ">
          <div className="flex flex-col  items-center border-4  rounded-md  border-green-500 bg-yellow-500 opacity-80  -z-10">
            <h2 className="flex w-full justify-center pt-2 px-4 text-amber-900">
              Création site web
            </h2>
            <ul>
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
          </div>
        </div>
        <button className="w-full flex flex-row justify-center">
          <p className="py-2">En savoir +</p>
        </button>
      </section>
      <div className="flex justify-center w-50 ">
        <div className="flex flex-col  items-center border-4  rounded-md  border-green-500 bg-yellow-500 opacity-80 hover:opacity-50 -z-10  ">
          <h2 className="flex w-full justify-center pt-2 px-4 text-amber-900">
            Desing graphique
          </h2>
          <ul>
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
        </div>
      </div>
      <button className="w-full flex flex-row justify-center ">
        <p className="py-2">En savoir +</p>
      </button>
      <section>
        <div className="flex justify-center w-50 ">
          <div className="flex flex-col  items-center border-4  rounded-md  border-green-500 bg-yellow-500 opacity-80 hover:opacity-50 -z-10 ">
            <h2 className="flex w-full justify-center pt-2 px-9 text-amber-900">
              Maintenance
            </h2>
            <ul>
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
          </div>
        </div>
        <button className="w-full flex flex-row justify-center ">
          <p className="py-2">En savoir +</p>
        </button>
      </section>
    </>
  );
};
export default Services;
