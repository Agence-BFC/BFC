import NavbarMobile from "./mobile";
import NavbarDesktop from "./desktop";

const Navbar = () => {
  return (
    <>
    <nav className="flex flex-row lg:hidden">
      <NavbarMobile />
      </nav>
      <nav className="hidden lg:flex">
      <NavbarDesktop />
      </nav>
    </>
  );
};

export default Navbar;
