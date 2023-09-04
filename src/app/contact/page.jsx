import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/footer";
import Intro from "@/app/contact/section/intro";

const SectionContact = () => {
  return (
    <>
      <div className="bg-green-200">
        <Navbar />
        <Intro />
        <Footer />
      </div>
    </>
  );
};
export default SectionContact;
