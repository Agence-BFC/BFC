import Introduction from "@/app/home/section/introduction";
import Services from "./section/services";
import Clients from "./section/clients";
import Carrousel from "./section/carrousel";
import Formul from "./section/formul";
import Footer from "@/components/layouts/footer";


const Home = () => {
  return (
    <main className="dark:bg-black dark:text-white dark:uppercase bg-white">
      <Introduction />
      <Services />
      <Clients />
      <Carrousel />
      <Formul/>
      <Footer />
    </main>
  );
};

export default Home;
