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
            className="contain-blue p"
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
