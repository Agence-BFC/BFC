import FooterMobile from "./mobile";
import Desktop from "./desktop";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col lg:hidden">
        <FooterMobile />
      </footer>
      <footer className="hidden lg:flex">
        <Desktop />
      </footer>
    </>
  );
};

export default Footer;
