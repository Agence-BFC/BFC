"use client";

const Serv = () => (
  <>
    <section className="grid grid-cols-2 py-5">
      <div>
        <img
          src="data:image/jpeg;base64,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"
          alt="" />
      </div>

{/* séparation de la colone */}

      <div>
        <p>Création de site</p>
      </div>
    </section>
  </>
);

export default Serv;
