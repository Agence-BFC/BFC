import dataProjets from "@/app/projets/data/service.json";
import CardsServices from "@/components/tools/cards/Services";
import DarkMode from "@/components/tools/darkMode";

const Intro = () => {
  return (
    <main>

    <div className="px-2 lg:ml-28 mt-20 dark:bg-black dark:text-white">
        <div className=" p-4 w-7/12 lg:w-2/12">
          <h2 className="font-bold uppercase ">nous joindre</h2>
        </div>
        <div className="p-4 mt-4 lg:w-3/4 lg:ml-4">
          <h2 className="font-bold uppercase pb-8">
            une question ? une idée ?
          </h2>
        </div>
        <div className="contain-blue">
          <div>
            {dataProjets.map((service) => {
              return (
                <div key={service.id}>
                  {" "}
                  <CardsServices
                    title={service.title}
                    date={service.date}
                    description={service.description}
                  />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Intro;
