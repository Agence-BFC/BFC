"use client";

import Desktop from "./desktop";
import NavbarMobile from "./mobile";

const Header = () => {
  return (
    <>
    <div className="max-lg:hidden">
      <Desktop />
    </div>
    <div className="lg:hidden">
      <NavbarMobile/>
    </div>
    </>
  );
};
export default Header;
