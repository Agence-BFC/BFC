import Caroussel from "./section/carousel";
import Navbar from "@/components/layouts/header/desktop";
import NavbarMobile from "@/components/layouts/header/Mobile";
import Footer from "@/components/layouts/footer";
import Form from "@/components/tools/form";
import Intro from "@/app/contact/section/intro";

const SectionContact = () => {
  return (
    <>
      <div>
        <Navbar />
        <NavbarMobile />
        <Intro />
        <Caroussel />
        <Form />
        <Footer />
      </div>
    </>
  );
};
export default SectionContact;
