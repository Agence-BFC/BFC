import Background from "@/components/tools/Background";
import Introduction from "@/app/home/section/introduction";
import Services from "./section/services";
import Clients from "./section/clients";
import Carrousel from "./section/carrousel";

import Footer from "@/components/layouts/footer";


const Home = () => {
  return (
    <main className="dark:bg-black dark:text-white dark:uppercase bg-white ">
      <Background>
      <Introduction />
      </Background>
      <Services />
      <Clients />
      <Carrousel />
    
      <Footer />
    </main>
  );
};

export default Home;
