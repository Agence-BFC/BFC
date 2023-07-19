const Formul = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 text-2xl text-amber-900 lg:text-6xl">
        Contactez-nous :
      </h1>
      <div className="border-4 border-green-500 mx-3 lg:text-4xl px-3">
        <div className="w-full flex flex-col justify-center lg:grid grid-cols-2 justify-items-center ">
          <div className="flex justify-center">
            <form className="mt-5">
              <div className="mb-4"></div>
              <div>
                <label htmlFor="" className="block">
                  Nom :
                </label>
              </div>
              <input
                type="text"
                className="border-green-400 bg-yellow-500 border-2 p-2 rounded-sm"
                placeholder="Ecrire"
              />
            </form>
          </div>
          <div className="flex justify-center">
            <form className="mt-5">
              <div className="mb-4"></div>
              <div>
                <label htmlFor="" className="block">
                  Prénom :
                </label>
              </div>
              <input
                type="text"
                className="border-green-400 bg-yellow-500 border-2 p-2 rounded-sm"
                placeholder="Ecrire"
              />
            </form>
          </div>
          <div className="flex justify-center">
            <form className="mt-5">
              <div className="mb-4"></div>
              <div>
                <label htmlFor="" className="block">
                  Société :
                </label>
              </div>
              <input
                type="text"
                className="border-green-400 bg-yellow-500 border-2 p-2 rounded-sm"
                placeholder="Ecrire"
              />
            </form>
          </div>
          <div className="flex justify-center">
            <form className="mt-5">
              <div className="mb-4"></div>
              <div>
                <label htmlFor="" className="block">
                  Téléphone :
                </label>
              </div>
              <input
                type="text"
                className="border-green-400 bg-yellow-500 border-2 p-2 rounded-sm"
                placeholder="Ecrire"
              />
            </form>
          </div>
          <div className="flex justify-center">
            <form className="mt-5">
              <div className="mb-4"></div>
              <div>
                <label htmlFor="" className="block">
                  Email :
                </label>
              </div>
              <input
                type="text"
                className="border-green-400 bg-yellow-500 border-2 p-2 rounded-sm"
                placeholder="Ecrire"
              />
            </form>
          </div>
          <div className="flex justify-center">
            <form className="mt-5">
              <div className="mb-4"></div>
              <div>
                <label htmlFor="" className="block">
                  Message :
                </label>
              </div>
              <input
                type="text"
                className="border-green-400 bg-yellow-500 border-2 p-6 rouded-sm lg:p-12"
                placeholder="Ecrire"
              />
            </form>
          </div>
        </div>
        <div className="py-2 flex flex-row justify-center lg:text-4xl">
          <button className=" border-green-400 border-2 rounded-lg px-3 justify-center lg:flex flex-row">
            Envoyer
          </button>
        </div>
      </div>
    </>
  );
};
export default Formul;
