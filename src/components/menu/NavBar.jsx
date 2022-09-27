import Logo from "../icons/Logo.jsx";
import IconHamburguer from "../icons/IconHamburguer.jsx";
import IconClose from "../icons/IconClose.jsx";
import NavLink from "./NavLink.jsx";
import { useState, useRef } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const refMenu = useRef(null);

  const closeMenuClass =
    "absolute top-0 py-10 px-5 lg:px-14 flex items-center lg:gap-12 w-full transition-all";

  const openMenuClass =
    "absolute top-0 py-10 px-5 lg:px-14 flex items-center justify-between lg:justify-start lg:gap-12 w-full lg:bg-transparent bg-white text-black transition-all";

  const handleClickMenu = () => {
    setMenu(!menu);
    refMenu.current.querySelector("#navLogo").classList.toggle("hidden");
    refMenu.current.querySelector("#navLinks").classList.toggle("hidden");
    refMenu.current.querySelector("#navLinks").classList.add("flex");
  };

  return (
    <nav ref={refMenu} className={menu ? openMenuClass : closeMenuClass}>
      <button className="lg:hidden" onClick={handleClickMenu}>
        {menu ? <IconClose /> : <IconHamburguer />}
      </button>

      <a href="#" className="mx-auto lg:m-0 lg:block" id="navLogo">
        <Logo />
      </a>
      <div
        className="hidden gap-10 lowercase lg:text-white font-semibold lg:flex"
        id="navLinks"
      >
        <NavLink title="Home"></NavLink>
        <NavLink title="Shop"></NavLink>
        <NavLink title="About"></NavLink>
        <NavLink title="Contact"></NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
