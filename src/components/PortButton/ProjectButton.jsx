// Hooks
import { useState } from "react";


function ProjectButton({title, onMouseDown, background, margin, hover, onClick}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`text-xs ${background} ${margin} ${hover} rounded p-1 pr-2 pl-2 font-medium  ${
        isClicked && onMouseDown
      }`}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ProjectButton;
