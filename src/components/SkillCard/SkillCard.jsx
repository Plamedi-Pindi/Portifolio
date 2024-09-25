//Hooks
import { useState } from "react";

// Howler Adudio library
import {Howl} from "howler";


function SkillCard({ img, width, height, name, sound }) {
  const [isMouseOver, setMouseOver] = useState(false);  
  const [isMouseDown, setIsMouseDown] = useState(false);

  const animation = () => {
    const first =  "scale-105 rotate-90 -translate-y-4 ";
  }

  
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
      className={`relative bg-white p-4 w-32 h-32 drop-shadow flex ml-2 mr-2 mb-4 justify-center items-center rounded-lg ${isMouseDown ? "scale-75" : " "}  duration-500`}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onClick={handlePlayClick}
    >
      <img src={img} className={`${width} ${height} ${isMouseOver && animation } duration-500`} />

      <p className="absolute text-lg font-bold bottom-2 text-sm "> {name} </p>
    </div>
  );
}

export default SkillCard;
