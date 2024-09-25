

function Button({display, children, width, color, background, border, font, margin, hover, onclick}) {
  return (
    <button 
      className={`block text-sm  pt-1.5 pb-1.5 rounded-full ${hover} ${margin} ${font} ${border} ${display} ${width} ${color} ${background}`} 
      onClick={onclick}
    > {children} </button>
  )
}

export default Button