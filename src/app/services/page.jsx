"use client";

import Introduction from "./sections/introduction";

const Services = () => {
  return (
    <>
      <div>
        <h1 className="text-center py-12">CREATION DE SITE WEB</h1>
        <div className="flex flex-row justify-between px-4">
          <h4>Crée un site web</h4>
          <h4>Refonte</h4>
          <h4>Crée un site web</h4>
        </div>
        <div>
          <p className="flex flex-row justify-center px-8 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta
            quia sed id est praesentium ipsam voluptate totam atque? Nesciunt,
            beatae porro. Accusamus assumenda quisquam corporis dolor minus
            necessitatibus reiciendis. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
            <br />
            Sapiente debitis temporibus consequuntur minima sed alias culpa
            inventore saepe voluptas aspernatur laborum, rem quisquam ea,
            assumenda voluptate velit mollitia animi optio?
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <button className="pb-8 bg bg-green-500">
            En savoir +
          </button>
        </div>
      </div>
      <br />
      <hr />

      <div>
        <h1 className="text-center py-12">DESIGN GRAPHIQUE</h1>
        <div className="flex flex-col items-center px-4">
          <h4>Chartre graphique</h4>
          <h4>Création logo</h4>
          <h4>Supports visuel</h4>
        </div>
        <div>
          <p className="flex flex-row justify-center px-8 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta
            quia sed id est praesentium ipsam voluptate totam atque? Nesciunt,
            beatae porro. Accusamus assumenda quisquam corporis dolor minus
            necessitatibus reiciendis. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
            <br />
            Sapiente debitis temporibus consequuntur minima sed alias culpa
            inventore saepe voluptas aspernatur laborum, rem quisquam ea,
            assumenda voluptate velit mollitia animi optio?
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <button className="pb-8 bg-green-500">
            En savoir +
          </button>
        </div>
      </div>
      <br />
      <hr />
      
    </>
  );
};

export default Services;
