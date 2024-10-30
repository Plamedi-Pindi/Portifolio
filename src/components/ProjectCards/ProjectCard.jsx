// Hooks
import { useState } from "react";

// Assets
import react from "../../assets/svg/react-2.svg";
import redux from "../../assets/svg/redux.svg";
import tailwindcss from "../../assets/svg/tailwindcss.svg";

// Component
import ProjectButton from "../PortButton/ProjectButton";

// Main function
function   ProjectCard({ img, title, margin }) {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div
      className={`flex justify-between w-72 h-48 bg-neutral-300 border-b-4 rounded-lg ${
        isMouseOver ? "border-black" : "border-secundary"
      }  overflow-hidden relative ${margin}`}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <img
        src={img}
        className={`${isMouseOver && "scale-110"} duration-500 w-full`}
      />

      <div
        className={`w-full h-full  absolute flex justify-center items-center ${
          !isMouseOver && "bg-black/60"
        }`}
      >
        {isMouseOver ? (
          <div className="bg-white/50 backdrop-blur-md absolute bottom-0 flex items-center justify-end h-8 w-full z-20 duration-500 p-1 text-white  ">
            <ProjectButton title="Detalhes" onMouseDown={`bg-orange-600 `} background={`bg-black`}  hover={`hover:bg-orange-400 hover:text-black `}/>
            <ProjectButton title="Visualizar" onMouseDown={`bg-green-600`} background={`bg-green-300 font-bold text-black`} hover={`hover:bg-green-400`} margin={`ml-3`}></ProjectButton>
          </div>
        ) : (
          <>
            <img src={react} className="w-8 mr-2 ml-2 " />
            <img src={redux} className="w-8 mr-2 ml-2 " />
            <img src={tailwindcss} className="w-8 mr-2 ml-2 " />

            <p className="absolute text-white bottom-12 yeseva-one-regular text-sm">
              {title}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
