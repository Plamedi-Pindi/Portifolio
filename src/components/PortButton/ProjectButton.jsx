// Hooks
import { useState } from "react";


function ProjectButton({title, onMouseDown, background, margin}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`text-xs ${background} ${margin} rounded-full p-1 pr-2 pl-2 font-medium ${
        isClicked && onMouseDown
      }`}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {title}
    </button>
  );
}

export default ProjectButton;
