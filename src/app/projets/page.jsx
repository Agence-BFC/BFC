import Caroussel from "./section/carousel";
import Navbar from "@/components/layouts/navbar";
import NavbarMobile from "@/components/layouts/navbarMobile";
import Footer from "@/components/layouts/footer";
import Form from "@/components/tools/form";
import Intro from "@/app/projets/section/intro";

const SectionContact = () => {
  return (
    <>
      <div>
        <Navbar/>
        <NavbarMobile/>
        <Intro/>
        <Caroussel />
        <Form />
        <Footer />
      </div>
    </>
  );
};
export default SectionContact;
