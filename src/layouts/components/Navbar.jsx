// Hooks
import { useState } from "react";

// Logo
import Logo from "../../components/Logo/Logo";

// Components
import DownloadButton from "../../components/PortButton/DownloadButton";

// Icone
import { BsList } from "react-icons/bs";



function Navbar({ display, background, handleSoundClick }) {
  // Event handle to play a sound while a download button is clicked
  

  // Return
  return (
    <nav className={` ${background} ${display} md:h-14`}>
      <div className="container  h-12 md:h-full flex justify-between items-center  md:p-0 mx-auto">
        {/* Logo */}
        <Logo />

        {/* Nav list */}
        <ul className="md:flex md:items-center text-sm font-medium h-full  space-x-8 -ml-64 hidden md:block">
          <li className="">
            <a href="#" className="hover:border-b-2 duration-100 border-green-400 hover:text-green-500 ">Start</a>
          </li>
          <li className="">
            <a href="#" className="hover:border-b-2 duration-100 border-green-400 hover:text-green-500 ">About</a>
          </li>
          <li className="">
            <a href="#" className="hover:border-b-2 duration-100 border-green-400 hover:text-green-500 ">Skills</a>
          </li>
          <li className="">
            <a href="#" className="hover:border-b-2 duration-100 border-green-400 hover:text-green-500 ">Projects</a>
          </li>
          <li className="">
            <a href="#" className="hover:border-b-2 duration-100 border-green-400 hover:text-green-500 ">Media</a>
          </li>
        </ul>

        {/* Download CV call button */}
        <DownloadButton handleSoundClick={handleSoundClick} />

        {/* Mobile Menu List */}
        <BsList className="md:hidden text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
