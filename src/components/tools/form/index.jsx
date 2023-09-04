"use client";

const Form = () => {
  const SubmitForm = () => {
    alert("formulaire envoyé");
  };

  return (
    <form
      className=" mx-4 contain-blur py-4  mb-12 flex flex-col items-center text-black lg:grid grid-cols-2"
      action=""
      method="POST"
    >
      <div className=" flex flex-col items-center border-r ">
        <label htmlFor="" className="text-black pl-2 ">
          Prénom/Nom:
        </label>
        <input className="border border-black rounded-full w-3/5" type="text" />
        <label htmlFor=" " className="text-black pl-2 pt-4">
          E-mail*:
        </label>
        <input
          className="border border-black rounded-full w-3/5"
          type="Email "
          required
        />
        <label htmlFor="" className="text-black pl-2 pt-4">
          Téléphone:
        </label>
        <input className="border border-black rounded-full w-3/5" type="text" />
        <label htmlFor="" className="text-black pl-2 pt-4">
          Objet:
        </label>
        <input className="border border-black rounded-full w-3/5" type="text" />
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="" className="text-blackpl-2 pt-4">
          Message*:
        </label>
        <textarea
          className="border border-black rounded-lg w-3/5"
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>

        <div className="flex flex-row justify-center py-6">
          <button
            className="contain-blue  flex flex-row justify-center bg-green-800 my-3  rounded-full hover-bg-green-500 uppercase px-3 py-3 w-36 hover:text-white hover:transition hover:ease-in-out hover:duration-200  lg:text-lg lg:w-48 dark:hover:bg-amber-950"
            type="button"
            onClick={() => SubmitForm()}
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
