// Hooks
import { useState } from "react";

// Assets
import react from "../../assets/svg/react-2.svg";
import redux from "../../assets/svg/redux.svg";
import tailwindcss from "../../assets/svg/tailwindcss.svg";

// Component
import ProjectButton from "../PortButton/ProjectButton";


function ProjectCard({ img, title, margin }) {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div
      className={`flex justify-between w-72 h-48 bg-neutral-300 border-b-4 ${
        isMouseOver ? "border-orange-300" : "border-green-400"
      }  overflow-hidden relative ${margin}`}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <img
        src={img}
        className={`${isMouseOver && "scale-110"} duration-500`}
      />

      <div
        className={`w-full h-full  absolute flex justify-center items-center ${
          !isMouseOver && "bg-black/60"
        }`}
      >
        {isMouseOver ? (
          <div className="bg-orange-300/50 absolute bottom-0 flex items-center justify-end h-8 w-full z-20 duration-500 p-1 ">
            <ProjectButton title="Detalhes" onMouseDown={`bg-orange-400`} background={`bg-orange-300`} />
            <ProjectButton title="Visualizar" onMouseDown={`bg-green-600`} background={`bg-green-400`} margin={`ml-3`}></ProjectButton>
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