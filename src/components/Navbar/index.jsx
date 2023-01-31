import React, { useState } from 'react';
import HamburgerMenu from './Hamburger';

function Navbar() {
  const [isMenuOpen, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(isMenuOpen);
    document.body.classList.toggle('lock-scroll');
  };
  return (
    <nav aria-label="Main">
      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        id="navbar-menu"
        className={`transition-visibility invisible absolute top-0 left-0 z-40 flex h-full w-full flex-col items-center justify-between bg-very-dark-blue/90 tracking-widest opacity-0 md:visible md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-start md:gap-[3rem] md:bg-transparent md:p-0 md:text-[0.8125rem] ${
          isMenuOpen ? '!visible px-8  pt-24 pb-8 opacity-100' : ''
        }`}>
        <li className="uppercase tracking-wider hover:text-soft-red">
          {' '}
          <a href="/#">features</a>
        </li>
        <li className="uppercase tracking-wider hover:text-soft-red">
          {' '}
          <a href="/#">pricing</a>
        </li>
        <li className="uppercase tracking-wider hover:text-soft-red">
          {' '}
          <a href="/#">contact</a>
        </li>

        <li className="block uppercase text-white bg-soft-red transition duration-300 border-soft-red md:rounded-md px-6 py-2 hover:text-soft-red hover:bg-white md:border-[0.188rem]">
          {' '}
          <a href="/#">login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
