const Formulaire = () => {
  return (
    <>
      <h1 className="flex flex-row justify-center py-3 text-2xl text-amber-900">
        Contactez-nous :
      </h1>
      <section className="flex flex-row justify-around border-4 border-green-500 py-3 mx-3  ">
        <div>
          <ul>
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
            <div className="flex flex-row w-50 justify-start pb-3">
              <button>
                <li className="flex flex-row w-50 items-center border-4 pb-10 rounded-lg  border-green-500 bg-yellow-500 px-20">
                  Ecrire
                </li>
              </button>
            </div>
            <li>
              <div className="flex flex-row justify-center ">
                <div className="flex justify-center border-2 rounded-lg border-green-500 px-8">
                  <button> Envoyer</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Formulaire;
