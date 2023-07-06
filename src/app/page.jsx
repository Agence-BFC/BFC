import Navbar from "@/components/layouts/navbar";
import Home from "@/app/home";
import Services from "./home/section/services";
import Clients from "./home/section/clients";
import Carrousel from "./home/section/carrousel";
import Formulaire from "./home/section/formulaire";
import Footer from "@/components/layouts/footer";

export default function () {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Clients />
      <Carrousel />
      <Formulaire />
      <Footer />
    </>
  );
}
