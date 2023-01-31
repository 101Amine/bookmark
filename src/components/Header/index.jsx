import React from 'react';
import bookmarkLogo from '../../assets/images/logo-bookmark.svg';
import Navbar from '../Navbar';

function Header() {
  return (
    <header className=" flex max-w-[64rem] mx-auto justify-between p-8 items-center">
      <a href="/#" className="">
        <img
          className="transition duration-300 ease-in-out"
          src={bookmarkLogo}
          alt="bookmark"
          width={130}
          height={30}
        />
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
