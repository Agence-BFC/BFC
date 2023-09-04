"use client";

import NavbarDesktop from "./desktop";
import NavbarMobile from "./mobile";

const Header = () => {
  return (
    <>
    <div className="hidden lg:flex">
      <NavbarDesktop />
    </div>
    <div className="lg:hidden">
      <NavbarMobile/>
    </div>
    </>
  );
};
export default Header;
