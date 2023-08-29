import FooterMobile from "./mobile";
import FooterDesktop from "../header/Mobile/desktop";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col lg:hidden">
        <FooterMobile />
      </footer>
      <footer className="hidden lg:flex">
        <FooterDesktop />
      </footer>
    </>
  );
};

export default Footer;
