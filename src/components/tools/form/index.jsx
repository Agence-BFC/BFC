"use client";

const Form = () => {
  const SubmitForm = () => {
    alert("formulaire envoyé");
  };

  return (
    <form className="contain-green flex flex-col items-center lg:w-3/4 text-black" action="" method="POST">
      <div>
        <h1 className="py-4 uppercase font-bungeeRegular font-bold">Formulaire</h1>
      </div>
      <label htmlFor="" className="text-black dark:text-white pl-2 ">
        Prénom/Nom:
      </label>
      <input className="border border-black rounded-full w-3/5" type="text" />
      <label htmlFor=" " className="text-black dark:text-white pl-2 pt-4">
        E-mail*:
      </label>
      <input
        className="border border-black rounded-full w-3/5"
        type="Email "
        required
      />
      <label htmlFor="" className="text-black dark:text-white pl-2 pt-4">Téléphone:</label>
      <input className="border border-black rounded-full w-3/5" type="text" />
      <label htmlFor="" className="text-black dark:text-white pl-2 pt-4">Objet:</label>
      <input className="border border-black rounded-full w-3/5" type="text" />
      <label htmlFor="" className="text-black dark:text-white pl-2 pt-4">Message*:</label>
      <textarea
        className="border border-black rounded-lg w-3/5"
        name=""
        id=""
        cols="20"
        rows="10"
      ></textarea>

      <div className="flex flex-row justify-center py-6">
        <button
          className="contain-orange p"
          type="button"
          onClick={() => SubmitForm()}
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
