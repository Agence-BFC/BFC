const NavbarDesktop = () => {
  return (
    <header className="hidden lg:flex">
      <nav className="flex flex-row w-full items-center bg-green-500 text-white">
        <div>
          <img src="./images/logos/white-logo.svg" alt="LogoWhite" />
        </div>
        <div>
          <ul className="flex flex-row justify-ev list-none w-extra">
            <li>
              <a href="#">L'agence</a>
            </li>
            <li className="px-2">
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projets</a>
            </li>
            <li className="px-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-right pr-4">
          <button>Light/Dark</button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
