import DataContact from "@/app/contact/data/service.json";
import CardsServices from "@/components/tools/cards/Services";
const Intro = () => {
  return (
    <main>
      <section className="mt-28 mb-10 px-2 lg:ml-28">

    <div className=" ">

        <div className=" p-4 lg:w-2/12">
          <h2 className="font-bold uppercase text-2xl">nous joindre</h2>
        </div>
        <div className="p-4 mt-4 lg:w-3/4 lg:ml-4">
          <h2 className="font-bold uppercase pb-8">
            une question ? une idée ?
          </h2>
        </div>
        <div className="contain-blue">
          <div>
            {DataContact.map((service) => {
              return (
                <div key={service.id}>
                  {" "}
                  <CardsServices
                    title={service.title}
                    description={service.description}
                  />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
</section>
    </main>
  );
};
export default Intro;
