//Hooks
import { useState } from "react";

// Howler Adudio library
import {Howl} from "howler";


function SkillCard({ img, width, height, name, sound }) {
//  const [isClicked, setIsClicked] = useState();
  //
  const handlePlayClick = () => {
    const ring = new Howl({
      src: [sound],
      html5: true,
    });
    
    ring.play();
  } 


  return (
    <div
      className={`relative bg-white p-4 w-32 h-32 drop-shadow select-none flex ml-2 mr-2 mb-4 justify-center items-center rounded-lg  duration-500 md:hover:scale-75 hover:scale-75 `}
      onClick={handlePlayClick}
      
    >
      <img src={img} className={`${width} ${height} md:hover:scale-105  md:hover:-translate-y-4  duration-500`} />

      <p className="absolute text-lg font-bold bottom-2 text-sm "> {name} </p>
    </div>
  );
}

export default SkillCard;
