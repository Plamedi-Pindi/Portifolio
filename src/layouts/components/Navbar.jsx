// Hooks
import { useState } from "react";

// Logo
import Logo from "../../components/Logo/Logo";

// Components
import DownloadButton from "../../components/PortButton/DownloadButton";

// Icone
import { BsList } from "react-icons/bs";

// Howler Audio library
import { Howl } from "howler";

// Assets - Audio
import clab from "../../assets/sound/clab/applause-crowd-242638.mp3";

function Navbar({ display, background }) {
  // Event handle to play a sound while a download button is clicked
  const handleSoundClick = () => {
    // Howler object
    const ring = new Howl({
      src: [clab],
      html5: true,
    });

    ring.play(); // Start play de sound
  };

  // Return
  return (
    <nav className={` ${background} ${display} md:h-14`}>
      <div className="container  h-12 md:h-full flex justify-between items-center  md:p-0 mx-auto">
        {/* Logo */}
        <Logo />

        {/* Nav list */}
        <ul className="md:flex imd:tems-center text-sm font-medium  space-x-8 -ml-64 hidden md:block">
          <li>
            <a href="#">Start</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Media</a>
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
