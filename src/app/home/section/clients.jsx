const Clients = () => {
  return (
    <>
        <h1 className="flex flex-row justify-center py-2 text-2xl  text-amber-900">
          Clients :
        </h1>
      <section>
      <div>
        <h2 className="flex flex-row justify-center pb-2 ">Ils nous font confiance:</h2>
        <p className="text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          saepe nihil quis illum odio velit dolores odit et libero minus in.
        </p>
      </div>
      </section>
      <section>
        <div className=" flex justify-center w-50 pt-3">
            <div className="flex justify-center border-2 rounded-lg border-green-500 px-3">
            <button>
                Tarifs
            </button>
            </div>

        </div>
      </section>
    </>
  );
};
export default Clients;
