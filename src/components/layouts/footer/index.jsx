import FooterMobile from "./mobile/footerMobile";
import FooterDesktop from "./desktop/footerDesktop";

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
