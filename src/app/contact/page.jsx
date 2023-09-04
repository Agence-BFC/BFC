import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Intro from "@/app/contact/section/intro";

const SectionContact = () => {
  return (
    <>
      <div className="bg-green-200">
        <Header />
        <Intro />
        <Footer />
      </div>
    </>
  );
};
export default SectionContact;
