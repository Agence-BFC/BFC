const Formulaire = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 text-2xl text-amber-900 lg:text-6xl">
        Contactez-nous :
      </h1>

      <section className="flex flex-row justify-around border-4 border-green-500 py-3 mx-3 lg:text-3xl">
        <div>
          <ul className="lg:grid grid-cols-2">
            <li>Nom et Prénom:</li>
            <div className="flex flex-row w-50 justify-start">
              <button>
                <li className="flex flex-row w-50 items-center border-4  rounded-lg  border-green-500 bg-yellow-500 px-20">
                  Ecrire
                </li>
              </button>
            </div>
            <li>Téléphone:</li>
            <div className="flex flex-row w-50 justify-start">
              <button>
                <li className="flex flex-row w-50 items-center border-4  rounded-lg  border-green-500 bg-yellow-500 px-20">
                  Ecrire
                </li>
              </button>
            </div>
            <li>Email:</li>
            <div className="flex flex-row w-50 justify-start">
              <button>
                <li className="flex flex-row w-50 items-center border-4  rounded-lg  border-green-500 bg-yellow-500 px-20">
                  Ecrire
                </li>
              </button>
            </div>
            <li>Société</li>
            <div className="flex flex-row w-50 justify-start">
              <button>
                <li className="flex flex-row w-50 items-center border-4  rounded-lg  border-green-500 bg-yellow-500 px-20">
                  Ecrire
                </li>
              </button>
            </div>
            <li>Message:</li>
            <div className="flex flex-row w-50 justify-start pb-3 ">
              <button>
                <li className="flex flex-row w-50 items-center border-4 pb-10 rounded-lg  border-green-500 bg-yellow-500 px-20">
                  Ecrire
                </li>
              </button>
            </div>
          </ul>
          <div className="flex flex-row justify-center ">
            <div className="flex justify-center border-2 rounded-lg border-green-500 px-8 ">
              <button> Envoyer</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formulaire;
